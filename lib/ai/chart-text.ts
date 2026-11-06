/**
 * 把客户端传来的 ZiweiChart 压成一段给模型看的纯文本。
 *
 * 命盘由浏览器里的引擎生成后整包 POST 过来，服务端无法信任它的结构，
 * 所以这里逐字段做类型检查，拿不到的字段直接跳过，而不是把整个对象 JSON 化塞给模型。
 */
import { BRANCHES, STEMS } from '@/lib/ziwei/constants';
import { getSiHuaByStem } from '@/lib/ziwei/sihua';

type Rec = Record<string, unknown>;

const isRec = (v: unknown): v is Rec => typeof v === 'object' && v !== null && !Array.isArray(v);
const str = (v: unknown, max = 40): string | undefined =>
  typeof v === 'string' && v.length > 0 ? v.slice(0, max) : undefined;
const int = (v: unknown, min: number, max: number): number | undefined =>
  typeof v === 'number' && Number.isInteger(v) && v >= min && v <= max ? v : undefined;

/** 命盘最基本的形状：12 宫齐全、出生信息存在。不满足就当作非法请求。 */
export function isChartLike(v: unknown): v is Rec {
  return isRec(v) && Array.isArray(v.palaces) && v.palaces.length === 12 && isRec(v.birthInfo);
}

function starText(s: unknown): string | undefined {
  if (!isRec(s)) return undefined;
  const name = str(s.name, 12);
  if (!name) return undefined;
  const bright = str(s.brightnessRaw, 2);
  const hua = str(s.siHua, 2);
  return `${name}${bright ? `(${bright})` : ''}${hua ? `化${hua}` : ''}`;
}

export function chartToText(chart: Rec, label = '命盘'): string {
  const lines: string[] = [`【${label}】`];
  const b = isRec(chart.birthInfo) ? chart.birthInfo : {};
  const gender = b.gender === 'male' ? '男' : b.gender === 'female' ? '女' : '未知';
  const y = int(b.year, 1, 9999), m = int(b.month, 1, 12), d = int(b.day, 1, 31);
  const h = int(b.hour, 0, 11);
  lines.push(
    `出生（排盘日，公历）：${y ?? '?'}-${m ?? '?'}-${d ?? '?'}，${h !== undefined ? BRANCHES[h] + '时' : '时辰未知'}，${gender}命`,
  );

  const l = isRec(chart.lunarInfo) ? chart.lunarInfo : undefined;
  if (l) {
    const ys = int(l.yearStem, 0, 9), yb = int(l.yearBranch, 0, 11);
    const lm = typeof l.lunarMonth === 'number' ? Math.abs(l.lunarMonth) : undefined;
    lines.push(
      `农历：${ys !== undefined && yb !== undefined ? STEMS[ys] + BRANCHES[yb] + '年' : ''}${l.isLeapMonth ? '闰' : ''}${lm ?? '?'}月${int(l.lunarDay, 1, 30) ?? '?'}日`,
    );
    if (Array.isArray(l.fourPillars)) {
      const p = l.fourPillars.map(x => str(x, 4)).filter(Boolean);
      if (p.length === 4) lines.push(`四柱：${p.join(' ')}`);
    }
  }

  const extra = [
    str(chart.wuxingJuName, 8) && `五行局：${str(chart.wuxingJuName, 8)}`,
    str(chart.mingZhu, 8) && `命主：${str(chart.mingZhu, 8)}`,
    str(chart.shenZhu, 8) && `身主：${str(chart.shenZhu, 8)}`,
    str(chart.yinYangGender, 4) && `阴阳：${str(chart.yinYangGender, 4)}`,
    int(chart.currentAge, 0, 200) !== undefined && `当前虚岁：${chart.currentAge}`,
  ].filter(Boolean);
  if (extra.length) lines.push(extra.join('；'));

  lines.push('', '十二宫（地支 宫干 宫名：星曜）：');
  for (const p of chart.palaces as unknown[]) {
    if (!isRec(p)) continue;
    const br = int(p.branch, 0, 11);
    const st = int(p.stem, 0, 9);
    const name = str(p.name, 8) ?? '?';
    const stars = Array.isArray(p.stars) ? p.stars.map(starText).filter(Boolean) : [];
    const tags = [
      p.isMingGong === true && '命宫',
      p.isShenGong === true && '身宫',
      p.isCurrentDaXian === true && '当前大限',
    ].filter(Boolean);
    const age = Array.isArray(p.daXianAge) && p.daXianAge.length === 2
      ? `大限${int(p.daXianAge[0], 0, 200) ?? '?'}-${int(p.daXianAge[1], 0, 200) ?? '?'}岁` : '';
    const self = Array.isArray(p.selfSihua)
      ? p.selfSihua.filter(isRec).map(x => `${str(x.starName, 12) ?? '?'}自化${str(x.siHua, 2) ?? '?'}`)
      : [];
    const borrowed = p.isEmpty === true && Array.isArray(p.borrowedStars)
      ? `空宫，借对宫：${p.borrowedStars.map(x => str(x, 12)).filter(Boolean).join('、')}` : '';
    lines.push(
      `- ${br !== undefined ? BRANCHES[br] : '?'} ${st !== undefined ? STEMS[st] : '?'} ${name}${tags.length ? `［${tags.join('、')}］` : ''}：` +
        `${stars.length ? stars.join('、') : '无星'}` +
        [age, self.join('、'), borrowed].filter(Boolean).map(x => `；${x}`).join(''),
    );
  }

  // 大限四化按大限宫的宫干起；宫干取自命盘本身，不信任客户端传来的四化结果。
  const idx = int(chart.currentDaXianIndex, 0, 11);
  const dx = Array.isArray(chart.daXians) && idx !== undefined ? chart.daXians[idx] : undefined;
  if (isRec(dx)) {
    const dxBranch = int(dx.palaceBranch, 0, 11);
    const dxPalace = (chart.palaces as unknown[]).find(p => isRec(p) && p.branch === dxBranch);
    const dxStem = isRec(dxPalace) ? int(dxPalace.stem, 0, 9) : undefined;
    const s = dxStem !== undefined ? getSiHuaByStem(dxStem) : undefined;
    lines.push(
      '',
      `当前大限：${str(dx.palaceName, 8) ?? '?'}（${int(dx.startAge, 0, 200) ?? '?'}-${int(dx.endAge, 0, 200) ?? '?'}岁）` +
        (s ? `，大限四化（${STEMS[dxStem!]}干）：${s['禄']}化禄、${s['权']}化权、${s['科']}化科、${s['忌']}化忌` : ''),
    );
  }
  return lines.join('\n');
}
