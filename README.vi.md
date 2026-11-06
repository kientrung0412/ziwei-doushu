<div align="center">

# Tử Vi Đẩu Số · Bộ máy lập lá số mã nguồn mở

### Thuật toán là trí tuệ truyền thống được chia sẻ công khai, không nên bị khóa sau những bức tường

[![CI](https://github.com/Renhuai123/ziwei-doushu/actions/workflows/ci.yml/badge.svg)](https://github.com/Renhuai123/ziwei-doushu/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](./LICENSE)
[![Dataset: CC BY 4.0](https://img.shields.io/badge/dataset-CC%20BY%204.0-green.svg)](./DATASET-LICENSE)

[中文](./README.md) · [English](./README.en.md) · **Tiếng Việt**

</div>

> Bản tiếng Việt này được dịch từ [README tiếng Trung](./README.md). Nếu có chỗ khác nhau, bản tiếng Trung là chuẩn.

**1. Triết lý dự án**: Tử Vi Đẩu Số là viên ngọc quý của mệnh lý học truyền thống Trung Hoa; thầy Nghê Hải Hạ (倪海厦) trong bộ *Thiên Kỷ* (《天纪》) đã hệ thống lại toàn bộ Tử Vi Đẩu Số chính tông. Chúng tôi mong dùng công nghệ để nhiều người hơn được tiếp cận và học môn học này.

Chúng tôi công khai mã nguồn thuật toán lập lá số và kho tri thức vì tin rằng: **thuật toán là trí tuệ truyền thống được chia sẻ công khai, không nên bị khóa sau những bức tường**. Giá trị thật nằm ở chiều sâu của phần luận giải, ở trải nghiệm người dùng được mài giũa kỹ lưỡng, và ở những gì tích lũy được qua quá trình vận hành lâu dài.

**2. Thông tin dự án**: Hệ thống lập lá số Tử Vi Đẩu Số dựa trên hệ thống giảng dạy <strong>*Thiên Kỷ* của Nghê Hải Hạ</strong>, gồm thuật toán lập lá số đầy đủ, hệ thống Tứ Hóa, kho tri thức cách cục, nguyên văn cổ thư, cùng một bộ dữ liệu luận giải Tử Vi Đẩu Số mở hoàn toàn: **bộ dữ liệu luận giải v4.0 — 675 nghìn lá số × 13 phương diện = 8,77 triệu đoạn luận giải, phần chính văn khoảng 20,4 tỷ chữ Hán, 56,6 GB sau khi giải nén** (phát hành 2026-10-15).

| Bộ dữ liệu | Lá số | Số đoạn luận giải | Sau giải nén | Năm bao phủ | Số chữ luận giải mỗi lá số |
|---|---|---|---|---|---|
| **Bộ dữ liệu luận giải v4.0** (2026-10-15) | **674.976** | **8.774.688** | **56,6 GB** | **1950–2026** (chỉ ngày có thật) | **khoảng 30 nghìn chữ** |
| Bộ dữ liệu mẫu v3.0 | 518.400 | 6.739.200 | 33,1 GB | 1924–1983 | khoảng 21 nghìn chữ |
| Thay đổi | +30% | +30% | **+71%** | +17 năm | +44% |

<sub>Số chữ mỗi lá số của v3.0 được ước tính từ mẫu 2.160 lá số; các con số còn lại là thống kê toàn bộ. Cả hai phiên bản đều có 13 phương diện cho mỗi lá số.</sub>

Trải nghiệm trực tuyến: [ouranic.cn](https://ouranic.cn/?from=gh-readme-vi) — lập lá số, luận giải bằng AI, lịch sử lá số đều mở cho mọi người.

> **Lưu ý: về việc luận lục thân**
>
> Tử Vi Đẩu Số có những giới hạn nhất định khi luận lục thân (cha mẹ, anh chị em, con cái…). Thầy Nghê trong *Thiên Kỷ* đã nói: "Đẩu Số luận lục thân vốn dĩ đã kém hơn một chút." ([Bài 2 phần trên · 00:25:27](https://www.bilibili.com/video/BV1KJsLekEfA?p=3&t=1527)) Trong các thuật số truyền thống, Thiết Bản Thần Số có thế mạnh riêng trong việc đối chiếu lục thân ([Bài 2 phần trên · 00:03:15](https://www.bilibili.com/video/BV1KJsLekEfA?p=3&t=195)); thầy Nghê vẫn lấy Tử Vi Đẩu Số làm cốt lõi vì nó có thể kết hợp địa lý, môi trường và nhân sự để luận đoán tổng hợp, tạo thành một hệ thống hoàn chỉnh "trên biết thiên văn, dưới biết địa lý, giữa biết nhân sự" ([Bài 2 phần trên · 00:25:43](https://www.bilibili.com/video/BV1KJsLekEfA?p=3&t=1543)). Vì vậy, các phân tích liên quan đến lục thân chỉ mang tính tham khảo; ba phương diện Phụ mẫu, Huynh đệ, Tử nữ trên [ouranic.cn](https://ouranic.cn/?from=gh-readme-vi) cũng kèm lời lưu ý tương tự.

---

## Mục lục

| | Chương | Tóm tắt một câu |
|---|------|--------|
| I | [Cập nhật đợt này](#muc-1) | Lời đoán của 13 phương diện được hiệu đính từng câu theo nguyên văn của thầy Nghê và *Toàn Thư*; phát hành bộ dữ liệu luận giải v4.0 gồm 675 nghìn lá số × 13 phương diện |
| II·Mới | [Bộ dữ liệu luận giải 13 phương diện v4.0](#muc-2-moi) | Lời đoán phiên bản 2026-10-15, 675 nghìn lá số, tải theo từng năm |
| II | [Bộ dữ liệu mẫu 518 nghìn lá số](#muc-2) | Quy cách, tải về, mục đích sử dụng, giấy phép |
| III | [Bắt đầu nhanh](#muc-3) | Từ clone đến chạy được |
| IV | [Bộ máy lập lá số](#muc-4) | Làm được gì, các tệp chia thế nào, dữ liệu cổ thư |
| V | [Nguyên văn của thầy Nghê (*Thiên Kỷ · Tử Vi Đẩu Số*)](#muc-5) | 14 bài + 2 đoạn bổ sung, 1.848 câu, một hình xem toàn bộ, mỗi câu đều có thể phát lại |
| VI | [Giao diện chỉ là bản Demo](#muc-6) | Không phải bản đang chạy trực tuyến, có ghi rõ khác biệt |
| VII | [Ranh giới mã nguồn mở](#muc-7) | Cái gì mở, cái gì không |
| VIII | [Nhịp bảo trì và đóng góp](#muc-8) | Nhịp đồng bộ, cách xử lý issue / PR |
| IX | [Giấy phép](#muc-9) | Mã MIT / dữ liệu CC BY 4.0 / cổ thư thuộc phạm vi công cộng / nguyên văn thầy Nghê phi thương mại |
| X | [Giới thiệu và liên hệ](#muc-10) | Triết lý dự án, công nghệ, cách liên hệ |

---

<a id="muc-1"></a>

## I. Cập nhật đợt này (2026-10-15)

Đợt này đi theo bản phát hành của trang web ngày 2026-10-15 (phiên bản nội dung trang web `ca268829f7a9`):

![Tổng quan đợt cập nhật](./docs/update-20261015.png)

**1. Phát hành bộ dữ liệu luận giải 13 phương diện v4.0** — 674.976 lá số (mọi ngày dương lịch có thật từ 1950 đến 2026 × 12 canh giờ × nam/nữ) × 13 phương diện = **8.774.688 đoạn luận giải**, phần chính văn khoảng 20,4 tỷ chữ. Sau giải nén là 56,6 GB (v3.0 là 33,1 GB, tăng 71%), sau nén chỉ còn 161 MB, chia theo năm thành 77 tệp: có thể chỉ tải những năm cần, hoặc tải một lần gói tổng hợp mọi năm. Tải tại [Release v4.0-13d](https://github.com/Renhuai123/ziwei-doushu/releases/tag/v4.0-13d), quy cách và các trường xem [chương II·Mới](#muc-2-moi). Trước khi phát hành, cả 77 tệp đều đã được giải nén từng tệp và so khớp từng byte với dữ liệu gốc.

**2. Lời đoán của 13 phương diện được hiệu đính từng câu theo nguyên văn của thầy Nghê và nguyên văn *Toàn Thư*** (thư viện lời đoán vẫn không mở nguồn, kết quả hiệu đính thể hiện trong bộ dữ liệu v4.0):

- Các trích dẫn ghi là của thầy Nghê hoặc *Toàn Thư* nhưng không tra được xuất xứ đã bị xóa hoặc thay bằng nguyên văn có thể tra từng chữ; nguyên văn của thầy Nghê ghi rõ tập mấy, phút giây nào của *Thiên Kỷ*
- Các câu liên quan đến những Tứ Hóa không thể xảy ra (như Thất Sát hóa Quyền, Tử Vi hóa Kỵ) đã bị xóa; lời đoán chỉ đúng trong một điều kiện nhất định thì được bổ sung điều kiện
- Những câu nói cả hai đầu kiểu "khi lực mạnh thì… khi hãm địa thì…" được sửa để chỉ hiển thị trường hợp đúng với lá số
- Sức khỏe: tạng phủ nào cần lưu ý giờ theo cách nhìn của thầy Nghê — lấy cung có sát tinh tập trung nhiều nhất trên toàn lá số, theo địa chi của cung đó mà ứng với tạng phủ; không còn suy ra tạng phủ theo ngũ hành của sao
- "Trích dẫn cổ thư" trong kho tri thức của trang web tăng từ 244 lên 405 chỗ, mỗi chỗ đều tìm được từng chữ trong nguyên văn *Tử Vi Đẩu Số Toàn Thư*

**3. Đồng bộ bộ máy lập lá số** ([PR #39](https://github.com/Renhuai123/ziwei-doushu/pull/39)) — `dst-cn.ts` thêm `chinaDSTSpan(year)` để tra ngày bắt đầu và kết thúc giờ mùa hè của Trung Quốc trong một năm; `cities.ts` bổ sung kinh độ của các đơn vị cấp huyện trực thuộc tỉnh và các thành phố thuộc Binh đoàn Tân Cương (Thần Nông Giá, các thị/huyện của Hải Nam, A Lạp Nhĩ…), nên khi chọn nơi sinh là những nơi này, việc hiệu chỉnh giờ mặt trời thực đã dùng được.

**4. Giấy phép** — phạm vi áp dụng của [`DATASET-LICENSE`](./DATASET-LICENSE) được thêm v4.0; ghi rõ nguyên văn của thầy Nghê được trích trong phần luận giải không nằm trong phạm vi cấp phép dữ liệu, nhất quán với giấy phép CC BY-NC-SA 4.0 của nguyên văn thầy Nghê ở chương V. Bộ dữ liệu mẫu v3.0 và điều khoản của nó không đổi.

> **Bổ sung 2026-11-02**: việc đổi ngày ở giờ Tý muộn nay được xét theo **giờ mặt trời thực**, cùng chuẩn với địa chi của canh giờ (#63) — khi đã điền nơi sinh, 23:30 theo đồng hồ ở kinh độ 100° Đông (giờ mặt trời thực 22:10, giờ Hợi) được giữ ở ngày hiện tại, không còn bị lập thành "giờ Hợi của ngày hôm sau"; nếu không điền nơi sinh thì không hiệu chỉnh, kết quả không đổi, bản trực tuyến ouranic.cn cũng dùng chuẩn này. Khi tham số quy thuộc tháng nhuận bị viết sai, hệ thống báo lỗi ngay, không còn lặng lẽ lập lá số theo "quy về tháng hiện tại" (#71). Cảm ơn Bortlesboat, xunguangzlj-cloud đã gửi PR và Verchiel666 đã rà soát.

> **Bổ sung 2026-10-31**: nền tảng trực tuyến đổi tên thành **OURANIC**, địa chỉ chuyển từ metisziwei.com sang **[ouranic.cn](https://ouranic.cn/?from=gh-readme-vi)** (đơn vị vận hành: 北京王多鱼科技有限责任公司, số đăng ký ICP 京ICP备2026069066号-1); địa chỉ cũ sẽ tự động chuyển hướng, mã nguồn, bộ dữ liệu và giấy phép của kho này đều không đổi.

> **Bổ sung 2026-10-27**: đồng bộ bộ máy lập lá số — `true-solar-time.ts` hỗ trợ nơi sinh ở nước ngoài: truyền `utcOffsetMinutes` (độ lệch chuẩn cố định của múi giờ nơi sinh), hiệu chỉnh kinh độ theo kinh tuyến trung tâm của múi giờ địa phương; trong Trung Quốc không truyền thì kết quả không đổi từng chữ số; thêm `clock-adjust.ts`, dùng để **đổi số đọc trên đồng hồ sang giờ chuẩn** khi có giờ mùa hè hoặc khi múi giờ năm đó khác hiện nay (không đổi qua ngày, để người dùng tự quyết); khuyến nghị làm thành nút do người dùng tự bấm và có thể hoàn tác, đừng tự động sửa. Nhân tiện đính chính: với giờ mùa hè Trung Quốc, bộ máy **chỉ nhận diện, chưa bao giờ tự động trừ**; bảng "Năng lực của bộ máy" trước đây ghi là "tự động trừ" là sai.

> **Bổ sung 2026-10-24**: triết lý dự án được chuyển lên đầu trang — dưới tiêu đề là một câu căn giữa "Thuật toán là trí tuệ truyền thống được chia sẻ công khai, không nên bị khóa sau những bức tường", tiếp theo là hai đoạn nguyên văn về triết lý (đánh dấu "Triết lý dự án"), đoạn giới thiệu cũ được đánh dấu "Thông tin dự án"; mục "Triết lý dự án" ở chương X đổi thành trỏ về đầu trang.

> **Bổ sung 2026-10-20**: độ sáng của sao mặc định chuyển sang *Đẩu Số Toàn Thư*, nhất quán với mặc định của các phần mềm lập lá số phổ biến; mặc định trước đây "Hiệu chỉnh hiện đại v2" vẫn có thể chọn trong phần cài đặt trường phái; bổ sung độ sáng cho Thiên Diêu, Thiên Hình, Thiên Hỷ, Đại Hao, Giải Thần, Triệt Không, Phó Triệt, Tuần Không; Nguyệt Đức không còn ghi độ sáng. Đã đối chiếu từng cung với 5 lá số chuẩn vàng: vị trí cung của sao và độ sáng đều khớp hoàn toàn. Lưu ý: bộ dữ liệu v4.0 (ngày 10-15) được sinh theo mặc định cũ "Hiệu chỉnh hiện đại v2", nên chữ chỉ độ sáng và một số ít câu luận giải thay đổi theo độ sáng sẽ khác với mặc định mới.

> **Bổ sung 2026-10-06 ~ 10-07**: README thêm "Lưu ý: về việc luận lục thân" (nguyên văn thầy Nghê + liên kết xuất xứ, có cả bản tiếng Trung và tiếng Anh); liên kết đến trang web thêm mã kênh `?from=`; đồng bộ đính chính kho ngữ liệu nguyên văn thầy Nghê (quy thuộc Nam Đẩu, Bắc Đẩu của các chính tinh).

### Đợt cập nhật trước (2026-09-21)


> **Bổ sung 2026-10-03**: 1.848 câu nguyên văn của thầy Nghê trong *Thiên Kỷ · Tử Vi Đẩu Số* được tách thành một chương riêng (chương V); hợp nhất đóng góp bên ngoài #29 (kiểm tra số thứ tự canh giờ); bộ máy từ chối ngày dương lịch không tồn tại, bộ dữ liệu được bổ sung chuẩn của các trường và các vấn đề đã biết; commit package-lock.json; địa chỉ trang web có thể cấu hình; bản demo hợp bàn chuyển sang dùng bộ máy cục bộ để lập lá số, khi thiếu API AI thì thông báo rõ ràng; bổ sung hướng dẫn đóng góp, quy tắc ứng xử, mẫu issue và PR; thêm bản giới thiệu tiếng Anh [README.en.md](./README.en.md); bỏ hai gói công cụ triển khai không dùng tới (vercel CLI, @cloudflare/next-on-pages), số gói phụ thuộc giảm từ 483 xuống 185; sau đó nâng cấp lên Next.js 16 để vá lỗ hổng postcss, cảnh báo bảo mật của GitHub từ 51 về 0.

![Tổng quan đợt cập nhật](./docs/update-20260921.png)

Sau ba tháng, kho này đã có một đợt cập nhật hoàn chỉnh ([PR #28](https://github.com/Renhuai123/ziwei-doushu/pull/28), 26 tệp, +2736 / −108 dòng):

**1. Bộ máy lập lá số được đồng bộ theo chuẩn của bản trực tuyến** — `algorithm.ts` từ 181 dòng lên 641 dòng, đồng thời cập nhật sihua / types / constants / patterns / cities / famous; thêm 8 mô-đun mới (1.367 dòng):

| Mô-đun | Chức năng |
|------|------|
| `true-solar-time.ts` | Hiệu chỉnh giờ mặt trời thực (chênh lệch kinh độ + phương trình thời gian) |
| `dst-cn.ts` | Giờ mùa hè Trung Quốc 1986–1991 |
| `clock-adjust.ts` | Đổi số đọc trên đồng hồ sang giờ chuẩn (giờ mùa hè / múi giờ năm đó khác) |
| `lunar-solar.ts` | Chuyển đổi âm lịch / dương lịch và kẹp (clamp) biên tháng nhuận |
| `school-data.ts` / `school-tables.generated.ts` / `school-config.ts` | Dữ liệu và bảng đối chiếu độ sáng sao theo trường phái, cấu hình chuẩn tháng nhuận và giờ Tý muộn |
| `shier-shen.ts` | Thập nhị thần sát |
| `yunxian-context.ts` | Ngữ cảnh vận hạn (gồm Đồng hạn) |

**2. Bổ sung kiểm thử hồi quy và CI** — trước đây kho này không có bất kỳ kiểm thử nào. Nay có 5 kiểm thử hồi quy lập lá số, chạy hết bằng một lệnh `npm test`, và tự động chạy trên GitHub Actions ở mỗi lần push và PR.

**3. Sửa lỗi lệch chú thích canh giờ trong mẫu** ([#26](https://github.com/Renhuai123/ziwei-doushu/issues/26)) — trong `famous.ts`, 7 trên 11 mẫu lá số người nổi tiếng có chú thích canh giờ không khớp với chỉ số `hour` (`hour` luôn là **chỉ số địa chi canh giờ 0–11**, không phải số giờ 0–23). Đã sửa và thêm kiểm thử hồi quy để cố định.

**4. Issue tồn đọng giảm từ 18 xuống 4**, những cái còn lại đều đang được xử lý.

**5. Tài liệu và giấy phép** — thêm [`DATASET-LICENSE`](./DATASET-LICENSE); README bổ sung danh sách năng lực của bộ máy, nhịp bảo trì, ranh giới mã nguồn mở; sửa hai mô tả không đúng sự thật (bộ dữ liệu "hoàn toàn nhất quán với chuẩn trực tuyến", giao diện là "frontend Next.js 15 hoàn chỉnh").

---

<a id="muc-2-moi"></a>

## II·Mới. Bộ dữ liệu luận giải 13 phương diện v4.0 (2026-10-15)

> **Nơi tải: mục [Releases → v4.0-13d](https://github.com/Renhuai123/ziwei-doushu/releases/tag/v4.0-13d) ở bên phải kho này**

v4.0 được sinh lại bằng thư viện lời đoán của trang web phiên bản 2026-10-15: lời đoán của 13 phương diện phân tích đã được hiệu đính từng câu theo bản ghi nguyên văn *Thiên Kỷ* của Nghê Hải Hạ và nguyên văn *Tử Vi Đẩu Số Toàn Thư* — trích dẫn không tra được xuất xứ bị xóa hoặc thay bằng nguyên văn có thể tra từng chữ (nguyên văn thầy Nghê ghi rõ số tập và mốc thời gian của *Thiên Kỷ*), các câu liên quan đến Tứ Hóa không thể xảy ra bị xóa, lời đoán có điều kiện thì ghi rõ điều kiện.

### Quy cách

| Hạng mục | Mô tả |
|------|------|
| Số lá số | **674.976 lá** (dương lịch 1950–2026 × số ngày thực của mỗi tháng × 12 canh giờ × nam/nữ) |
| Số đoạn luận giải | **8.774.688 đoạn** (mỗi lá số 13 phương diện) |
| Phương diện | Tổng quan mệnh cách, Tính cách, Tình cảm, Sự nghiệp, Tài vận, Sức khỏe, Huynh đệ, Tử nữ, Thiên di, Giao hữu, Điền trạch, Phúc đức, Phụ mẫu |
| Kích thước | 56,6 GB sau giải nén; 161 MB sau nén (77 tệp theo năm, zstd; ngoài ra có một gói tổng hợp mọi năm `ziwei-interp-v4-all.tar`) |
| Chính văn | Khoảng 20,4 tỷ chữ, mỗi lá số khoảng 30 nghìn chữ |
| Cách sinh | Sinh tất định bằng bộ máy lập lá số + thư viện lời đoán, không qua AI, cùng đầu vào luôn cho cùng đầu ra |
| Phiên bản nội dung | `ca268829f7a9` (ANALYSIS_CONTENT_VERSION cùng thời điểm với trang web) |

**Mỗi dòng là một lá số** (JSON Lines), các trường:

| Trường | Ý nghĩa |
|------|------|
| `k` | Khóa: `YYYY-MM-DD-số thứ tự canh giờ-giới tính`, ví dụ `1990-01-01-0-male` |
| `y` / `m` / `d` | Ngày sinh **dương lịch**; chỉ gồm những ngày có thật (không còn ngày kiểu 30 tháng 2) |
| `h` | **Số thứ tự canh giờ 0–11** (Tý = 0 …… Hợi = 11), không phải giờ đồng hồ; bảng đối chiếu xem chương sau |
| `g` | `male` / `female` |
| `ms` | Chính tinh đầu tiên của cung Mệnh; khi cung Mệnh không có chính tinh thì là `null` |
| `t` | Số chữ của từng phương diện |
| `c` | Toàn văn luận giải 13 phương diện (Markdown), các khóa là `overview` / `personality` / `love` / `career` / `wealth` / `health` / `family` / `children` / `move` / `friends` / `home` / `spirit` / `parents` |

**Chuẩn dữ liệu**
- Đây là luận giải ở góc nhìn lá số bản mệnh; các câu được viết lại theo tuổi hiện tại của người đọc trên trang web, đoạn pháp tắc của thầy Nghê gắn ở cuối mỗi phương diện, và phần luận giải AI đều không có trong bộ dữ liệu.
- Lập lá số trực tiếp theo số thứ tự canh giờ, không hiệu chỉnh giờ mặt trời thực theo nơi sinh.

### Tải về và giải nén

```bash
# Tải toàn bộ một lần: gh release download v4.0-13d --repo Renhuai123/ziwei-doushu -p "ziwei-interp-v4-all.tar"
# Chỉ cần vài năm thì chỉ tải những năm đó, ví dụ năm 1990
zstd -d --long=27 year-1990.jsonl.zst          # được year-1990.jsonl
shasum -a 256 -c SHA256SUMS.txt --ignore-missing # kiểm tra
```

Bắt buộc phải có `--long=27` (khi nén đã dùng cửa sổ dài). Trên Windows có thể dùng zstd.exe trong [gói phát hành chính thức của zstd](https://github.com/facebook/zstd/releases), tham số giống hệt.

### Về trích dẫn

Nguyên văn *Thiên Kỷ* của Nghê Hải Hạ được trích trong phần luận giải **không thuộc phạm vi cấp phép của bộ dữ liệu này**: đó là những trích dẫn ngắn ghi rõ số tập và mốc thời gian để chỉ xuất xứ của lời đoán, bản quyền thuộc về chủ sở hữu quyền gốc; nếu muốn dùng riêng hàng loạt những nguyên văn này, hãy áp dụng [CC BY-NC-SA 4.0](./docs/tianji-ziwei/LICENSE.md) của nguyên văn thầy Nghê ở chương V. Nguyên văn *Tử Vi Đẩu Số Toàn Thư* thuộc phạm vi công cộng.

### Giấy phép

Giống v3.0: **CC BY 4.0, được tự do dùng cho mục đích thương mại, yêu cầu duy nhất là giữ ghi chú nguồn** (ngoại trừ nguyên văn thầy Nghê trong mục "Về trích dẫn" ở trên), điều khoản đầy đủ xem [DATASET-LICENSE](./DATASET-LICENSE). Khi trích dẫn xin ghi:

> Dự án này sử dụng **Bộ dữ liệu luận giải Tử Vi Đẩu Số mã nguồn mở v4.0** (674.976 lá số × 13 phương diện)
> Nguồn: https://github.com/Renhuai123/ziwei-doushu
> Tác giả: 王多鱼AI

---

<a id="muc-2"></a>

## II. Bộ dữ liệu mẫu 518 nghìn lá số

> **Nơi tải: trang [Releases](https://github.com/Renhuai123/ziwei-doushu/releases/tag/v3.0-samples) ở bên phải kho này**

Chúng tôi công khai một bộ dữ liệu mẫu lá số Tử Vi Đẩu Số hoàn chỉnh, bao phủ **518 nghìn tổ hợp lập lá số** (60 năm × 12 tháng × 30 ngày × 12 canh giờ × 2 giới tính); mỗi mẫu gồm cấu trúc lá số đầy đủ và văn bản luận giải theo hệ thống Nghê Hải Hạ.

### 2.1 Quy cách dữ liệu

| Hạng mục | Mô tả |
|------|------|
| Số mẫu | **518.400 mẫu** |
| Tổng dung lượng | 5,5 GB sau nén (chia 3 phần), 33,1 GB sau giải nén |
| Hệ thống | Chính thống *Thiên Kỷ* của Nghê Hải Hạ (phái phi tinh thuần túy đã ngừng) |
| Nội dung | JSON lá số + văn bản luận giải 13 chủ đề (tổng quan mệnh cách, tài vận, sự nghiệp, tình cảm, sức khỏe…) |
| Kiểm chứng | 100% có phân biệt mệnh nam/nữ, 100% phần sức khỏe có Tý Ngọ lưu chú, 100% mệnh nữ có phần chăm sóc phụ khoa |
| Chuẩn | Sinh bởi **bộ máy lập lá số bản v3 + thư viện lời đoán cùng kỳ**; bộ máy trực tuyến liên tục được cập nhật, đầu ra của bản mới có thể khác với bộ dữ liệu này |

**Chuẩn các trường** (mỗi mẫu được sinh từ `birthInfo`; trường hay bị hiểu nhầm là `hour`):

| Trường | Ý nghĩa |
|------|------|
| `birthInfo.year` / `month` / `day` | Ngày sinh **dương lịch**: 1924–1983 (một vòng lục thập hoa giáp trọn vẹn), mỗi tháng lấy ngày 1–30 |
| `birthInfo.hour` | **Số thứ tự canh giờ 0–11**, không phải 0–23 giờ: Tý = 0, Sửu = 1 …… Hợi = 11 |
| `birthInfo.gender` | `male` / `female` |
| `birthInfo.longitude` | Cố định 120 (120° kinh Đông, không hiệu chỉnh giờ mặt trời thực theo từng nơi) |
| Tên tệp `YYYY-MM-DD-hHH-giới tính.json` | Trong đó `hHH` cũng là số thứ tự canh giờ, ví dụ `h11` là giờ Hợi, không phải 11 giờ sáng |

Đối chiếu số thứ tự canh giờ và giờ đồng hồ:

| Số thứ tự | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Canh giờ | Tý | Sửu | Dần | Mão | Thìn | Tỵ | Ngọ | Mùi | Thân | Dậu | Tuất | Hợi |
| Giờ đồng hồ | 23–1 | 1–3 | 3–5 | 5–7 | 7–9 | 9–11 | 11–13 | 13–15 | 15–17 | 17–19 | 19–21 | 21–23 |

Sinh lúc 23:00–23:59 (giờ Tý muộn) thì lập lá số theo ngày hôm sau, canh giờ lấy 0; sinh lúc 00:00–00:59 (giờ Tý sớm) thì lập lá số theo ngày hiện tại, canh giờ cũng lấy 0.

**Vấn đề đã biết: khoảng 2.520 mẫu có ngày không tồn tại.** Khi sinh dữ liệu, tháng nào cũng lấy ngày 1–30, nên ngày 30 tháng 2 và ngày 29 tháng 2 của năm không nhuận cũng được sinh mẫu, tổng cộng 105 ngày × 12 canh giờ × 2 giới tính = 2.520 mẫu, chiếm 0,49%. Bộ máy v3 gặp những ngày này không báo lỗi mà lùi sang ngày 1–2 tháng 3 để lập lá số, nên nội dung của các mẫu này trùng với các mẫu ngày 1–2 tháng 3 tương ứng. Khi sử dụng xin lọc bỏ: `month = 2` và `day = 30`, hoặc `month = 2` và `day = 29` và năm đó không phải năm nhuận. Từ 2026-10-03 bộ máy sẽ từ chối trực tiếp các ngày không tồn tại, bộ dữ liệu phiên bản sau sẽ không còn loại mẫu này.

### 2.2 Cách tải về

Vào [Releases](https://github.com/Renhuai123/ziwei-doushu/releases/tag/v3.0-samples) để tải các tệp sau:

```
ziwei-samples-v3-part1.zip.001  (1.9 GB)
ziwei-samples-v3-part2.zip.002  (1.9 GB)
ziwei-samples-v3-part3.zip.003  (1.8 GB)
SHA256SUMS.txt                  (tệp kiểm tra)
```

Sau khi tải, ghép lại rồi giải nén:

```bash
# macOS / Linux
cat ziwei-samples-v3-part*.zip.* > combined.zip
unzip combined.zip

# Windows (PowerShell)
Get-Content ziwei-samples-v3-part*.zip.* -Encoding Byte -ReadCount 0 | Set-Content combined.zip -Encoding Byte
Expand-Archive combined.zip
```

### 2.3 Mục đích sử dụng

- Ngữ liệu huấn luyện để tinh chỉnh (fine-tune) mô hình nhỏ (518 nghìn cặp input-output)
- Nguồn truy xuất RAG cho hội thoại AI
- Làm đường cơ sở so sánh A/B sau khi sửa `patterns.ts`
- Nghiên cứu và phân tích dữ liệu Tử Vi Đẩu Số

### 2.4 Giấy phép dữ liệu và trích dẫn

📂 **Mở hoàn toàn · được tự do dùng thương mại** — bạn có thể dùng bộ dữ liệu này trong bất kỳ dự án nào, bao gồm nhưng không giới hạn:

- Sản phẩm thương mại / SaaS / ứng dụng trả phí
- Tinh chỉnh mô hình AI (mô hình mở hay đóng đều được)
- Phát triển lại, phân phối lại, bộ dữ liệu phái sinh
- Nghiên cứu học thuật, blog kỹ thuật, khóa học giảng dạy

Không cần trả phí, không cần xin phép, không cần thông báo trước.

**Yêu cầu duy nhất là giữ ghi chú nguồn dữ liệu (attribution)**:

> Dự án này sử dụng **Bộ dữ liệu mẫu Tử Vi Đẩu Số mã nguồn mở v3.0** (518.400 mẫu)
> Nguồn: https://github.com/Renhuai123/ziwei-doushu
> Tác giả: 王多鱼AI

Đặt ở đâu cũng được:

- **Trang web / sản phẩm**: trang About / Giới thiệu / Nguồn dữ liệu / chân trang, chỉ cần một dòng liên kết
- **Mô hình AI**: trường "Training Data" trong Model Card hoặc Dataset Card
- **Bài báo học thuật**: phần tài liệu tham khảo hoặc lời cảm ơn
- **Bộ dữ liệu phát hành lại**: ghi nguồn thượng nguồn trong README hoặc tệp metadata

Chỉ một điều đó, còn lại đều tự do. Điều khoản đầy đủ xem [DATASET-LICENSE](./DATASET-LICENSE). Mong bộ dữ liệu này giúp bạn làm ra thứ hay ho — làm xong nhớ ghé Xiaohongshu / Douyin / Xianyu **@王多鱼AI** chào một tiếng 👋

---

<a id="muc-3"></a>

## III. Bắt đầu nhanh

```bash
# Clone
git clone https://github.com/Renhuai123/ziwei-doushu.git
cd ziwei-doushu

# Cài đặt các gói phụ thuộc
npm install

# Cấu hình biến môi trường (chỉ xem lá số thì có thể bỏ qua; muốn dùng luận giải AI thì điền ANTHROPIC_API_KEY)
cp .env.example .env.local

# Khởi động máy chủ phát triển
npm run dev
```

Kiểm tra cục bộ:

```bash
npm run typecheck   # Kiểm tra kiểu TypeScript toàn bộ
npm test            # Kiểm thử hồi quy bộ máy lập lá số (768 lá số × quy luật Tử Vi, giờ mùa hè, biên Lập Xuân, Hồng Loan Thiên Hỷ, tính nhất quán canh giờ của mẫu, biên số thứ tự canh giờ, tính hợp lệ của ngày, Tứ Hóa kép đồng cung)
```

Mỗi lần push và PR đều chạy cùng bộ kiểm thử này trên GitHub Actions (xem [`.github/workflows/ci.yml`](./.github/workflows/ci.yml)).

> **Lưu ý: lập lá số không cần bất kỳ API Key nào.** Lập lá số, hiển thị lá số, lập lá số cho hợp bàn đều được thực hiện trong trình duyệt bằng bộ máy của kho này. Luận giải AI (`/api/interpret`) và phân tích AI hợp bàn (`/api/heming`) có kèm một **bản triển khai tham khảo** gọi Claude (`app/api/`, `lib/ai/`): điền `ANTHROPIC_API_KEY` vào `.env.local` là dùng được; nếu chưa điền, hai chỗ này sẽ báo cấu hình API có lỗi. Prompt của bản tham khảo là prompt chung, không phải thư viện lời đoán và prompt của bản trực tuyến.

---

<a id="muc-4"></a>

## IV. Bộ máy lập lá số

Toàn bộ lõi lập lá số nằm trong `lib/ziwei/`.

### 4.1 Làm được gì (khác biệt so với các thư viện lập lá số thông thường)

| Năng lực | Mô tả |
|------|------|
| **Hiệu chỉnh giờ mặt trời thực** | Tính chênh lệch thời gian theo kinh độ nơi sinh + phương trình thời gian, tránh lệch một canh giờ theo hướng đông–tây |
| **Giờ mùa hè Trung Quốc** | Tự động nhận diện các khoảng giờ mùa hè năm 1986–1991 (chỉ nhận diện, không tự động trừ; số đọc trên đồng hồ được đổi sang giờ chuẩn bằng `clock-adjust.ts` sau khi người dùng xác nhận) |
| **Bốn chuẩn tháng nhuận** | Tháng nhuận quy về tháng trước / quy về tháng sau / chia theo ngày / theo tháng hiện tại, có thể cấu hình, không cố định theo một phái |
| **Đổi ngày ở giờ Tý muộn** | 23:00–23:59 lập lá số theo ngày hôm sau, 00:00–00:59 theo ngày hiện tại; khi đã điền nơi sinh thì xét theo giờ mặt trời thực (cùng chuẩn với canh giờ); chiến lược đổi ngày có thể chuyển đổi |
| **Độ sáng sao 7 bậc** | Miếu / Vượng / Đắc / Lợi / Bình / Bất / Hãm, đồng thời giữ 3 bậc phân loại thô để hạ cấp khi hiển thị |
| **Chuyển đổi trường phái độ sáng** | Các trường phái khác nhau (kể cả các phiên bản khác nhau của phần mềm lập lá số phổ biến) đánh giá độ sáng phụ tinh không thống nhất, nên làm thành công tắc chứ không cố định |
| **Tứ Hóa và phi tinh** | Tứ Hóa năm sinh, Tứ Hóa Đại hạn / Lưu niên, phi tinh tự hóa |
| **Thập nhị thần sát** | Tầng bản mệnh khởi theo chi năm sinh, tầng lưu niên khởi theo chi của năm lưu niên |
| **Xét cách cục** | Thư viện quy tắc hơn 1.100 dòng (Tử Phủ đồng cung, Nhật Nguyệt tịnh minh, Thất Sát triều Đẩu…) |

### 4.2 Các tệp được chia thế nào

| Tệp | Mô tả |
|------|------|
| `algorithm.ts` | Quy trình lập lá số đầy đủ: an cung Mệnh, định Ngũ hành cục, an 14 chính tinh, an phụ tinh, xếp Đại hạn và Lưu niên |
| `constants.ts` | Hằng số Thiên can Địa chi, 14 chính tinh, phụ tinh |
| `sihua.ts` | Hệ thống Tứ Hóa phi tinh (Lộc Quyền Khoa Kỵ), gồm bảng đối chiếu Tứ Hóa của từng Thiên can |
| `patterns.ts` | **Kho tri thức cách cục hơn 1.100 dòng**: quy tắc xét các cách cục kinh điển như Tử Phủ đồng cung, Nhật Nguyệt tịnh minh, Thất Sát triều Đẩu |
| `heming-knowledge.ts` | Phương pháp luận hợp bàn: logic so sánh hai lá số theo hệ thống của thầy Nghê |
| `types.ts` | Định nghĩa kiểu TypeScript |
| `cities.ts` | Kinh vĩ độ các thành phố Trung Quốc, dùng để hiệu chỉnh giờ mặt trời thực |
| `famous.ts` | Dữ liệu mẫu lá số của các nhân vật lịch sử nổi tiếng |
| `school-data.ts` / `school-tables.generated.ts` / `school-config.ts` | Dữ liệu và bảng đối chiếu độ sáng sao theo trường phái, cấu hình chuẩn tháng nhuận và giờ Tý muộn |
| `shier-shen.ts` | Thập nhị thần sát (bản mệnh khởi theo chi năm sinh, tầng lưu niên khởi theo chi năm lưu niên) |
| `true-solar-time.ts` | Hiệu chỉnh giờ mặt trời thực (chênh lệch kinh độ + phương trình thời gian) |
| `dst-cn.ts` | Các năm và khoảng giờ mùa hè Trung Quốc 1986–1991 |
| `clock-adjust.ts` | Dịch số đọc trên đồng hồ theo phút sang giờ chuẩn (không đổi qua ngày) |
| `yunxian-context.ts` | Ngữ cảnh vận hạn (gồm xử lý Đồng hạn) |
| `lunar-solar.ts` | Chuyển đổi âm lịch / dương lịch và kẹp (clamp) biên tháng nhuận |

### 4.3 Nguyên văn cổ thư (`lib/classics/`)

- **Cốt Tủy Phú** (`gusuifu.ts`) — ca quyết cốt lõi của Tử Vi Đẩu Số
- **Tử Vi Đẩu Số Toàn Tập** (`quanji.ts`) — bản cổ đời Thanh
- **Tử Vi Đẩu Số Toàn Thư** (`quanshu.ts`) — bản truyền của Trần Hi Di

### 4.4 Đồ thị tri thức SEO (`lib/seo/`)

Dữ liệu tri thức có cấu trúc của 14 chính tinh × 12 cung vị, có thể dùng để sinh nội dung hoặc xây dựng kho tri thức.

---

<a id="muc-5"></a>

## V. Nguyên văn của thầy Nghê (*Thiên Kỷ · Tử Vi Đẩu Số*)

![Một hình xem toàn bộ Thiên Kỷ · Tử Vi Đẩu Số của Nghê Hải Hạ](./docs/tianji-ziwei/overview.png)

Phần Tử Vi Đẩu Số trong *Thiên Kỷ* của Nghê Hải Hạ có tổng cộng **1.848 câu** nguyên văn: 14 bài chính khóa (từ bài 2 đến phần trên của bài 15) cộng 2 đoạn bổ sung, chia theo bài thành 16 tệp, đặt trong [`docs/tianji-ziwei/`](./docs/tianji-ziwei/). Mỗi câu đều kèm mốc thời gian xuất xứ, bấm một cái là nhảy về đúng giây đó trong video gốc trên Bilibili.

- **Cách đọc**: trước tiên tìm chủ đề muốn xem trong hình trên, rồi bấm vào bài tương ứng, ví dụ [5 phần trên](./docs/tianji-ziwei/5%E4%B8%8A.md) (Tử Vi tại Tý), [13 phần trên](./docs/tianji-ziwei/13%E4%B8%8A.md) (Sát Phá Lang, Khoa Quyền Lộc tam hội).
- **Lấy từ đâu**: lấy từ kho chị em [nihai-tianji-corpus](https://github.com/Renhuai123/nihai-tianji-corpus), lấy kho ngữ liệu làm chuẩn và sẽ đồng bộ theo kho ngữ liệu.
- **Có được dùng thương mại không**: **không**. Nội dung của chương này áp dụng riêng CC BY-NC-SA 4.0, chi tiết xem [IX. Giấy phép](#muc-9).

---

<a id="muc-6"></a>

## VI. Giao diện chỉ là bản Demo

Mã giao diện nằm trong `app/` và `components/`. Giao diện trong kho là **một ví dụ tối thiểu chạy được**, dùng để chạy bộ máy lập lá số và vẽ lá số ra, giúp bạn dựa vào đó làm sản phẩm của mình. **Giao diện của bản thương mại trực tuyến không nằm trong phạm vi mã nguồn mở**, hai bên chênh lệch rất lớn:

| Trang / thành phần | Kho này (Demo) | Bản thương mại trực tuyến |
|------|------|------|
| Trang lập lá số `app/chart/page.tsx` | 75 dòng | 1.227 dòng |
| Bảng luận giải `InsightPanel` | 467 dòng | 5.088 dòng |
| Bàn lá số `ChartBoard` | 285 dòng | 1.334 dòng |
| Ô cung `PalaceCell` | 201 dòng | 1.192 dòng |
| Trang hợp bàn `app/heming/page.tsx` | 368 dòng | 1.937 dòng |

**Những gì Demo chạy được**: biểu mẫu thông tin ngày sinh, bàn lá số và chi tiết cung vị, chuyển đổi bản mệnh / Đại hạn / Lưu niên, trình đọc cổ thư (tìm kiếm toàn văn), bách khoa mệnh lý (14 chính tinh × 12 cung vị), giao diện sáng/tối, tương thích thiết bị di động.

**Những gì Demo không có**: giao diện tương tác đã được làm lại trên bản trực tuyến, luận giải AI dạng stream, đồ thị hợp bàn, thẻ chia sẻ, và **bản thân nội dung lời đoán** (`db-analysis.ts` chỉ là phần giữ chỗ). Nói cách khác, Demo vẽ được lá số nhưng không đưa ra được phần luận giải như bản trực tuyến.

---

<a id="muc-7"></a>

## VII. Ranh giới mã nguồn mở: những gì không có ở đây

| | Nội dung |
|---|---|
| ✅ **Mã nguồn mở** | Bộ máy lập lá số (`lib/ziwei/`), nguyên văn cổ thư thuộc phạm vi công cộng (`lib/classics/`), đồ thị tri thức SEO (`lib/seo/`), giao diện Demo, bộ dữ liệu 518 nghìn mẫu, bộ dữ liệu luận giải 13 phương diện v4.0 |
| ❌ **Không mở nguồn** | Thư viện lời đoán (`lib/ziwei/db-analysis.ts` chỉ là phần giữ chỗ, bản trực tuyến là hàng chục nghìn dòng lời đoán cho 13 chủ đề), prompt luận giải AI, API backend (`/api/interpret`…), hệ thống người dùng (đăng nhập / hội viên / thanh toán), bảo mật phía máy chủ (chữ ký, chống spam, watermark), cấu hình triển khai |

Nếu bạn cần năng lực luận giải AI, có thể tham khảo kho tri thức trong `lib/ziwei/patterns.ts` và `heming-knowledge.ts`, kết hợp với bất kỳ LLM nào để tự xây dựng prompt.

---

<a id="muc-8"></a>

## VIII. Nhịp bảo trì và đóng góp

Kho này là **bản chụp mở của bộ máy lập lá số + bộ dữ liệu**, không phải một sản phẩm mã nguồn mở được bảo trì toàn thời gian; nói rõ để mọi người khỏi phải đoán:

- **Đồng bộ bộ máy**: đồng bộ tầng bộ máy trong `lib/ziwei/` theo các lần phát hành trực tuyến và gắn tag; thư viện lời đoán, luận giải AI, frontend của trang thương mại không nằm trong phạm vi đồng bộ.
- **Issue**: có xem, nhưng phản hồi có thể không kịp thời; câu hỏi kèm bước tái hiện hoặc ví dụ lá số cụ thể (năm tháng ngày giờ + giới tính + điều nào không đúng) được ưu tiên xử lý.
- **PR**: hoan nghênh, đặc biệt là kiểm thử hồi quy, sửa chuẩn tính toán, tài liệu. Thay đổi đụng đến chuẩn lập lá số xin kèm căn cứ (nguyên văn cổ thư hoặc đối chiếu có thể kiểm chứng).

---

<a id="muc-9"></a>

## IX. Giấy phép

Kho này được cấp phép theo bốn phần. Ba phần đầu là giấy phép thoáng, **dùng thương mại không bị hạn chế**; thư mục nguyên văn của thầy Nghê **không được dùng thương mại**:

| Nội dung | Giấy phép | Nói đơn giản |
|------|------|--------|
| **Mã nguồn** (`lib/`, `app/`, `components/`) | [MIT License](./LICENSE) | Cứ lấy mà dùng, chỉ cần giữ tệp LICENSE |
| **Dữ liệu** (bộ dữ liệu 518 nghìn mẫu v3.0 và bộ dữ liệu luận giải 13 phương diện v4.0 trong Releases) | [CC BY 4.0](./DATASET-LICENSE) · yêu cầu attribution | Dùng thương mại cũng được, **chỉ cần ghi nguồn dữ liệu** |
| **Nguyên văn cổ thư** (Cốt Tủy Phú, Tử Vi Đẩu Số Toàn Tập / Toàn Thư…) | Public Domain | Sách cổ đều thuộc phạm vi công cộng, không có bản quyền |
| **Nguyên văn của thầy Nghê** ([`docs/tianji-ziwei/`](./docs/tianji-ziwei/)) | [CC BY-NC-SA 4.0](./docs/tianji-ziwei/LICENSE.md) | Có thể trích dẫn, đăng lại, ghi rõ xuất xứ; **không được dùng thương mại**, bản cải biên phải dùng cùng giấy phép |

**Một câu tóm lại**: mã nguồn và dữ liệu cứ lấy mà dùng, thương mại cũng được, chỉ cần kèm liên kết nguồn; nguyên văn của thầy Nghê chỉ dùng cho học tập, nghiên cứu phi thương mại (nguyên văn thầy Nghê được trích trong phần luận giải của bộ dữ liệu cũng không nằm trong phạm vi cấp phép dữ liệu).

---

<a id="muc-10"></a>

## X. Giới thiệu và liên hệ

### Triết lý dự án

Xem phần đầu trang này. Muốn tự dựng? Mã nguồn đều ở đây, cứ lấy mà dùng. Ngại phiền? Ghé [ouranic.cn](https://ouranic.cn/?from=gh-readme-vi) để dùng ngay.

### Công nghệ sử dụng

- **Framework**: Next.js 16 (App Router)
- **Ngôn ngữ**: TypeScript
- **Giao diện**: Tailwind CSS + hệ thống thiết kế CSS Variables
- **Lập lá số**: dựa trên [iztro](https://github.com/SylarLong/iztro) + lunar-javascript
- **Hoạt ảnh**: Framer Motion

### Liên hệ

- Nền tảng trực tuyến: [ouranic.cn](https://ouranic.cn/?from=gh-readme-vi) (đã hoàn tất đăng ký ICP: 京ICP备2026069066号-1)
- Báo lỗi, gửi bản sửa: xem [CONTRIBUTING.md](./CONTRIBUTING.md); trao đổi về cách dùng xin vào [khu thảo luận](https://github.com/Renhuai123/ziwei-doushu/discussions)
- 💕 Bấm một cái cho may mắn: theo dõi **王多鱼AI** trên Xiaohongshu / Douyin / Xianyu / X để xem các bản ra mắt sớm nhất và mở khóa thêm nhiều kiến thức Tử Vi hữu ích～
