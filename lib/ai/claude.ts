/**
 * Claude 调用与 SSE 输出的公共部分，供 /api/interpret 与 /api/heming 共用。
 *
 * 前端（InsightPanel / ChatPanel / heming 页）按行读取 `data: {"delta":{"text":"..."}}`，
 * 以 `data: [DONE]` 结束，这里输出的就是这个格式。
 */
import Anthropic from '@anthropic-ai/sdk';

export const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'claude-opus-5-5';

type Effort = 'low' | 'medium' | 'high' | 'xhigh' | 'max';
const EFFORTS: readonly Effort[] = ['low', 'medium', 'high', 'xhigh', 'max'];
const envEffort = process.env.CLAUDE_EFFORT as Effort | undefined;
export const CLAUDE_EFFORT: Effort = envEffort && EFFORTS.includes(envEffort) ? envEffort : 'medium';

let client: Anthropic | null = null;
function getClient(): Anthropic {
  // 不传 apiKey：SDK 自己从 ANTHROPIC_API_KEY / ANTHROPIC_AUTH_TOKEN 等读取凭据。
  client ??= new Anthropic();
  return client;
}

export function jsonError(status: number, message: string): Response {
  return Response.json({ error: message }, { status });
}

/** 没配任何凭据时提前返回 503，前端会显示「解读失败，请检查API配置」。 */
export function missingCredentials(): Response | null {
  if (process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN) return null;
  return jsonError(503, 'ANTHROPIC_API_KEY is not configured');
}

const MAX_TURNS = 40;
const MAX_CHARS_PER_TURN = 8000;

/** 校验并清洗前端传来的对话历史：只保留 user/assistant 文本，首条必须是 user。 */
export function sanitizeMessages(v: unknown): Anthropic.Beta.BetaMessageParam[] | null {
  if (!Array.isArray(v) || v.length === 0) return null;
  const out: Anthropic.Beta.BetaMessageParam[] = [];
  for (const m of v.slice(-MAX_TURNS)) {
    if (typeof m !== 'object' || m === null) return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if ((role !== 'user' && role !== 'assistant') || typeof content !== 'string') return null;
    const text = content.trim();
    if (!text) continue; // 前端会先插一条空的 assistant 占位
    out.push({ role, content: text.slice(0, MAX_CHARS_PER_TURN) });
  }
  while (out.length && out[0].role !== 'user') out.shift();
  if (!out.length || out[out.length - 1].role !== 'user') return null;
  return out;
}

const encoder = new TextEncoder();
const sse = (text: string) => encoder.encode(`data: ${JSON.stringify({ delta: { text } })}\n\n`);

/**
 * 流式调用 Claude，转成前端认识的 SSE。
 * system 放命盘与方法论（同一张盘多轮对话不变），打上 cache_control 以复用缓存。
 */
export function streamClaude(params: {
  system: string;
  messages: Anthropic.Beta.BetaMessageParam[];
  signal?: AbortSignal;
}): Response {
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const stream = getClient().beta.messages.stream(
          {
            model: CLAUDE_MODEL,
            max_tokens: 64000,
            thinking: { type: 'adaptive' },
            output_config: { effort: CLAUDE_EFFORT },
            // 安全分类器拒答时，服务端按拒答类别自动换模型重跑。
            betas: ['server-side-fallback-2026-07-01'],
            fallbacks: 'default',
            system: [{ type: 'text', text: params.system, cache_control: { type: 'ephemeral' } }],
            messages: params.messages,
          },
          { signal: params.signal },
        );

        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(sse(event.delta.text));
          }
        }

        const final = await stream.finalMessage();
        if (final.stop_reason === 'refusal') {
          controller.enqueue(sse('\n\n（这个问题无法回答，请换个问法再试。）'));
        } else if (final.stop_reason === 'max_tokens') {
          controller.enqueue(sse('\n\n（回答过长被截断。）'));
        }
      } catch (err) {
        if (!params.signal?.aborted) {
          console.error('[claude] stream failed:', err);
          const msg =
            err instanceof Anthropic.AuthenticationError ? 'API Key 无效，请检查 ANTHROPIC_API_KEY。'
            : err instanceof Anthropic.RateLimitError ? '请求过于频繁，请稍后再试。'
            : err instanceof Anthropic.APIError ? `AI 服务出错（${err.status ?? '网络'}），请稍后再试。`
            : 'AI 服务出错，请稍后再试。';
          controller.enqueue(sse(`\n\n${msg}`));
        }
      } finally {
        try {
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch { /* 客户端已断开 */ }
      }
    },
  });

  return new Response(body, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
