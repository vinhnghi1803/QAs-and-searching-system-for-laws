<template>
  <div class="a4">
    <h1>Word Document Viewer</h1>
    <div class="content" v-html="wordContent"></div>
  </div>
</template>

<script>
export default {
  name: 'WordViewer',
  data() {
    return {
      wordContent: ''
    }
  },
  created() {
    this.wordContent = `<html>
    <head>
        <META http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style type="text/css">.b1{white-space-collapsing:preserve;}
.b2{margin: 1.0in 1.25in 1.0in 1.25in;}
.s1{font-weight:bold;}
.s2{font-style:italic;}
.p1{text-align:center;hyphenate:auto;font-family:Times New Roman;font-size:12pt;}
.p2{text-align:end;hyphenate:auto;font-family:Times New Roman;font-size:12pt;}
.p3{margin-bottom:0.083333336in;text-align:start;hyphenate:auto;font-family:Times New Roman;font-size:12pt;}
.p4{margin-bottom:0.083333336in;text-align:center;hyphenate:auto;font-family:Times New Roman;font-size:12pt;}
.p5{text-align:start;hyphenate:auto;font-family:Times New Roman;font-size:12pt;}
.td1{width:2.025in;padding-start:0.0in;padding-end:0.0in;}
.td2{width:3.975in;padding-start:0.0in;padding-end:0.0in;}
.td3{width:2.2881944in;padding-start:0.0in;padding-end:0.0in;}
.td4{width:3.7118056in;padding-start:0.0in;padding-end:0.0in;}
.r1{keep-together:always;}
.t1{table-layout:fixed;border-collapse:collapse;border-spacing:0;}
</style>
    </head>
    <body class="b1 b2">
        <table class="t1">
            <tbody>
                <tr class="r1">
                    <td class="td1">
                        <p class="p1">
                            <span class="s1">QUỐC HỘI</span>
                            <br>
                            <span class="s1">--------</span>
                        </p>
                    </td><td class="td2">
                        <p class="p1">
                            <span class="s1">CỘNG H&Ograve;A X&Atilde; HỘI CHỦ NGHĨA VIỆT NAM</span>
                            <br>
                            <span class="s1">Độc lập - Tự do - Hạnh ph&uacute;c </span>
                            <br>
                            <span class="s1">---------------</span>
                        </p>
                    </td>
                </tr>
                <tr class="r1">
                    <td class="td1">
                        <p class="p1">
                            <span>Luật số: 06/2012/QH13</span>
                        </p>
                    </td><td class="td2">
                        <p class="p2">
                            <span class="s2">H&agrave; Nội, ng&agrave;y 18 th&aacute;ng 6 năm 2012</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="p3">
            <span>&nbsp;</span>
        </p>
        <p class="p4">
            <a name="loai_1"><span class="s1">LUẬT</span></a>
        </p>
        <p class="p4">
            <a name="loai_1_name"><span>BẢO HIỂM TIỀN GỬI</span></a>
        </p>
        <p class="p3">
            <span class="s2">Căn cứ </span><a name="tvpllink_clrmocjvvu"><span class="s2">Hiến ph&aacute;p nước Cộng ho&agrave; x&atilde; hội chủ nghĩa Việt Nam năm 1992</span></a><span class="s2"> đ&atilde; được sửa đổi, bổ sung một số điều theo Nghị quyết số </span><a name="tvpllink_ihrnwmfgry"><span class="s2">51/2001/QH10</span></a><span class="s2">;</span>
        </p>
        <p class="p3">
            <span class="s2">Quốc hội ban h&agrave;nh Luật bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="chuong_1"><span class="s1">Chương I</span></a>
        </p>
        <p class="p4">
            <a name="chuong_1_name"><span class="s1">NHỮNG QUY ĐỊNH CHUNG</span></a>
        </p>
        <p class="p3">
            <a name="dieu_1"><span class="s1">Điều 1. Phạm vi điều chỉnh</span></a>
        </p>
        <p class="p3">
            <span>Luật n&agrave;y quy định về hoạt động bảo hiểm tiền gửi, quyền v&agrave; nghĩa vụ của người được bảo hiểm tiền gửi, tổ chức tham gia bảo hiểm tiền gửi, tổ chức bảo hiểm tiền gửi v&agrave; quản l&yacute; nh&agrave; nước về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_2"><span class="s1">Điều 2. Đối tượng &aacute;p dụng</span></a>
        </p>
        <p class="p3">
            <span>Luật n&agrave;y &aacute;p dụng đối với người được bảo hiểm tiền gửi, tổ chức tham gia bảo hiểm tiền gửi, tổ chức bảo hiểm tiền gửi, cơ quan, tổ chức v&agrave; c&aacute; nh&acirc;n kh&aacute;c c&oacute; li&ecirc;n quan đến hoạt động bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_3"><span class="s1">Điều 3. Mục đ&iacute;ch của bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>Bảo hiểm tiền gửi nhằm bảo vệ quyền v&agrave; lợi &iacute;ch hợp ph&aacute;p của người gửi tiền, g&oacute;p phần duy tr&igrave; sự ổn định của hệ thống c&aacute;c tổ chức t&iacute;n dụng, bảo đảm sự ph&aacute;t triển an to&agrave;n, l&agrave;nh mạnh của hoạt động ng&acirc;n h&agrave;ng.</span>
        </p>
        <p class="p3">
            <a name="dieu_4"><span class="s1">Điều 4. Giải th&iacute;ch từ ngữ</span></a>
        </p>
        <p class="p3">
            <span>Trong Luật n&agrave;y, c&aacute;c từ ngữ dưới đ&acirc;y được hiểu như sau:</span>
        </p>
        <p class="p3">
            <span>1. </span><span class="s2">Bảo hiểm tiền gửi</span><span> l&agrave; sự bảo đảm ho&agrave;n trả tiền gửi cho người được bảo hiểm tiền gửi trong hạn mức trả tiền bảo hiểm khi tổ chức tham gia bảo hiểm tiền gửi l&acirc;m v&agrave;o t&igrave;nh trạng mất khả năng chi trả tiền gửi cho người gửi tiền hoặc ph&aacute; sản.</span>
        </p>
        <p class="p3">
            <span>2. </span><span class="s2">Người được bảo hiểm tiền gửi</span><span> l&agrave; c&aacute; nh&acirc;n c&oacute; tiền gửi được bảo hiểm tại tổ chức tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="khoan_hd34"><span>3. </span><span class="s2">Tổ chức tham gia bảo hiểm tiền gửi</span><span> l&agrave; tổ chức t&iacute;n dụng, chi nh&aacute;nh ng&acirc;n h&agrave;ng nước ngo&agrave;i th&agrave;nh lập v&agrave; hoạt động theo</span></a><span> </span><a name="tvpllink_omdzpgcvsq"><span>Luật c&aacute;c tổ chức t&iacute;n dụng</span></a><span> </span><a name="khoan_hd34_name"><span>được nhận tiền gửi của c&aacute; nh&acirc;n.</span></a>
        </p>
        <p class="p3">
            <a name="khoan_hd44"><span>4. </span><span class="s2">Tổ chức bảo hiểm tiền gửi</span><span> l&agrave; tổ chức t&agrave;i ch&iacute;nh nh&agrave; nước, hoạt động kh&ocirc;ng v&igrave; mục ti&ecirc;u lợi nhuận, thực hiện ch&iacute;nh s&aacute;ch bảo hiểm tiền gửi, g&oacute;p phần duy tr&igrave; sự ổn định của hệ thống c&aacute;c tổ chức t&iacute;n dụng, bảo đảm sự ph&aacute;t triển an to&agrave;n, l&agrave;nh mạnh của hoạt động ng&acirc;n h&agrave;ng.</span></a>
        </p>
        <p class="p3">
            <span>5. </span><span class="s2">Ph&iacute; bảo hiểm tiền gửi</span><span> l&agrave; khoản tiền m&agrave; tổ chức tham gia bảo hiểm tiền gửi phải nộp cho tổ chức bảo hiểm tiền gửi để bảo hiểm cho tiền gửi của người được bảo hiểm tiền gửi tại tổ chức tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_5"><span class="s1">Điều 5. Nguy&ecirc;n tắc bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Bảo hiểm tiền gửi l&agrave; loại h&igrave;nh bảo hiểm bắt buộc theo quy định của Luật n&agrave;y.</span>
        </p>
        <p class="p3">
            <span>2. Hoạt động bảo hiểm tiền gửi phải c&ocirc;ng khai, minh bạch, bảo đảm quyền v&agrave; lợi &iacute;ch hợp ph&aacute;p của người được bảo hiểm tiền gửi, tổ chức tham gia bảo hiểm tiền gửi, tổ chức bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_6"><span class="s1">Điều 6. Tham gia bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức t&iacute;n dụng, chi nh&aacute;nh ng&acirc;n h&agrave;ng nước ngo&agrave;i được nhận tiền gửi của c&aacute; nh&acirc;n phải tham gia bảo hiểm tiền gửi, trừ trường hợp quy định tại khoản 2 Điều n&agrave;y.</span>
        </p>
        <p class="p3">
            <span>2. Ng&acirc;n h&agrave;ng ch&iacute;nh s&aacute;ch kh&ocirc;ng phải tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_7"><span class="s1">Điều 7. Ch&iacute;nh s&aacute;ch của nh&agrave; nước về bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Nh&agrave; nước c&oacute; ch&iacute;nh s&aacute;ch bảo vệ quyền v&agrave; lợi &iacute;ch hợp ph&aacute;p của người gửi tiền.</span>
        </p>
        <p class="p3">
            <a name="khoan_27"><span>2. Nh&agrave; nước c&oacute; ch&iacute;nh s&aacute;ch quản l&yacute;, sử dụng nhằm bảo to&agrave;n v&agrave; tăng trưởng nguồn vốn của tổ chức bảo hiểm tiền gửi. Nguồn thu của tổ chức bảo hiểm tiền gửi được miễn nộp c&aacute;c loại thuế.</span></a>
        </p>
        <p class="p3">
            <a name="dieu_8"><span class="s1">Điều 8. Cơ quan quản l&yacute; nh&agrave; nước về bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Ch&iacute;nh phủ thống nhất quản l&yacute; nh&agrave; nước về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>2. Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam chịu tr&aacute;ch nhiệm trước Ch&iacute;nh phủ thực hiện quản l&yacute; nh&agrave; nước về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>3. Bộ, cơ quan ngang bộ trong phạm vi nhiệm vụ, quyền hạn của m&igrave;nh c&oacute; tr&aacute;ch nhiệm phối hợp với Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam thực hiện quản l&yacute; nh&agrave; nước về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>4. Ủy ban nh&acirc;n d&acirc;n c&aacute;c cấp trong phạm vi nhiệm vụ, quyền hạn của m&igrave;nh c&oacute; tr&aacute;ch nhiệm phối hợp với c&aacute;c cơ quan quản l&yacute; nh&agrave; nước thực hiện quản l&yacute; nh&agrave; nước về bảo hiểm tiền gửi tại địa phương.</span>
        </p>
        <p class="p3">
            <a name="dieu_9"><span class="s1">Điều 9. Tr&aacute;ch nhiệm quản l&yacute; nh&agrave; nước về bảo hiểm tiền gửi của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam</span></a>
        </p>
        <p class="p3">
            <span>1. Ban h&agrave;nh hoặc tr&igrave;nh cơ quan c&oacute; thẩm quyền ban h&agrave;nh văn bản quy phạm ph&aacute;p luật về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>2. Tr&igrave;nh Thủ tướng Ch&iacute;nh phủ ph&ecirc; duyệt chiến lược ph&aacute;t triển bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="khoan_3_9"><span>3. Kiểm tra, thanh tra, xử l&yacute; vi phạm v&agrave; giải quyết khiếu nại, tố c&aacute;o về bảo hiểm tiền gửi.</span></a>
        </p>
        <p class="p3">
            <span>4. Tr&igrave;nh Thủ tướng Ch&iacute;nh phủ quyết định việc tham gia tổ chức quốc tế về bảo hiểm tiền gửi của tổ chức bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>5. K&yacute; kết thỏa thuận quốc tế hoặc tr&igrave;nh cơ quan c&oacute; thẩm quyền k&yacute; kết, gia nhập điều ước quốc tế về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_10"><span class="s1">Điều 10. C&aacute;c h&agrave;nh vi bị cấm</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức tham gia bảo hiểm tiền gửi kh&ocirc;ng nộp ph&iacute; bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>2. Tổ chức bảo hiểm tiền gửi kh&ocirc;ng chi trả hoặc chi trả kh&ocirc;ng đầy đủ tiền bảo hiểm.</span>
        </p>
        <p class="p3">
            <span>3. Gian lận, giả mạo hồ sơ, t&agrave;i liệu, giấy tờ về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>4. Cản trở, g&acirc;y kh&oacute; khăn, l&agrave;m thiệt hại đến quyền v&agrave; lợi &iacute;ch hợp ph&aacute;p của tổ chức bảo hiểm tiền gửi, tổ chức tham gia bảo hiểm tiền gửi, người được bảo hiểm tiền gửi v&agrave; cơ quan, tổ chức c&oacute; li&ecirc;n quan đến bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>5. Lợi dụng chức vụ, quyền hạn l&agrave;m tr&aacute;i c&aacute;c quy định của ph&aacute;p luật về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="chuong_2"><span class="s1">Chương II</span></a>
        </p>
        <p class="p4">
            <a name="chuong_2_name"><span class="s1">QUYỀN, NGHĨA VỤ CỦA NGƯỜI ĐƯỢC BẢO HIỂM TIỀN GỬI, TỔ CHỨC THAM GIA BẢO HIỂM TIỀN GỬI, TỔ CHỨC BẢO HIỂM TIỀN GỬI</span></a>
        </p>
        <p class="p3">
            <a name="dieu_11"><span class="s1">Điều 11. Quyền v&agrave; nghĩa vụ của người được bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Được bảo hiểm số tiền gửi của m&igrave;nh tại tổ chức tham gia bảo hiểm tiền gửi theo quy định của Luật n&agrave;y.</span>
        </p>
        <p class="p3">
            <span>2. Được nhận tiền bảo hiểm đầy đủ v&agrave; đ&uacute;ng thời hạn theo quy định của Luật n&agrave;y.</span>
        </p>
        <p class="p3">
            <span>3. Y&ecirc;u cầu tổ chức tham gia bảo hiểm tiền gửi, tổ chức bảo hiểm tiền gửi cung cấp đầy đủ, ch&iacute;nh x&aacute;c th&ocirc;ng tin, chế độ về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>4. Khiếu nại, tố c&aacute;o, khởi kiện cơ quan, tổ chức, c&aacute; nh&acirc;n c&oacute; li&ecirc;n quan đến bảo hiểm tiền gửi theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <span>5. C&oacute; nghĩa vụ cung cấp đầy đủ, trung thực th&ocirc;ng tin về tiền gửi theo y&ecirc;u cầu của tổ chức tham gia bảo hiểm tiền gửi, tổ chức bảo hiểm tiền gửi khi thực hiện thủ tục trả tiền bảo hiểm.</span>
        </p>
        <p class="p3">
            <a name="dieu_12"><span class="s1">Điều 12. Quyền v&agrave; nghĩa vụ của tổ chức tham gia bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Nộp hồ sơ đề nghị cấp Chứng nhận tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>2. Được cấp Chứng nhận tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>3. Nộp ph&iacute; bảo hiểm tiền gửi đầy đủ v&agrave; đ&uacute;ng thời hạn.</span>
        </p>
        <p class="p3">
            <span>4. Y&ecirc;u cầu tổ chức bảo hiểm tiền gửi chi trả tiền bảo hiểm cho người được bảo hiểm tiền gửi tại tổ chức tham gia bảo hiểm tiền gửi khi ph&aacute;t sinh nghĩa vụ trả tiền bảo hiểm.</span>
        </p>
        <p class="p3">
            <span>5. Khiếu nại, tố c&aacute;o, khởi kiện cơ quan, tổ chức, c&aacute; nh&acirc;n c&oacute; li&ecirc;n quan đến bảo hiểm tiền gửi theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <a name="khoan_hd12"><span>6. Cung cấp th&ocirc;ng tin về tiền gửi được bảo hiểm cho tổ chức bảo hiểm tiền gửi theo định kỳ hoặc theo y&ecirc;u cầu của tổ chức bảo hiểm tiền gửi.</span></a>
        </p>
        <p class="p3">
            <a name="dieu_13"><span class="s1">Điều 13. Quyền v&agrave; nghĩa vụ của tổ chức bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. X&acirc;y dựng chiến lược ph&aacute;t triển bảo hiểm tiền gửi để Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam tr&igrave;nh Thủ tướng Ch&iacute;nh phủ ph&ecirc; duyệt v&agrave; tổ chức thực hiện.</span>
        </p>
        <p class="p3">
            <span>2. Đề xuất với cơ quan quản l&yacute; nh&agrave; nước c&oacute; thẩm quyền ban h&agrave;nh mới hoặc sửa đổi, bổ sung, thay thế, hủy bỏ, b&atilde;i bỏ, đ&igrave;nh chỉ việc thi h&agrave;nh văn bản quy phạm ph&aacute;p luật c&oacute; li&ecirc;n quan đến hoạt động bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>3. Chịu sự kiểm tra, thanh tra, gi&aacute;m s&aacute;t của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam v&agrave; c&aacute;c cơ quan nh&agrave; nước c&oacute; thẩm quyền theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <span>4. Cấp v&agrave; thu hồi Chứng nhận tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>5. Y&ecirc;u cầu tổ chức tham gia bảo hiểm tiền gửi cung cấp th&ocirc;ng tin về tiền gửi được bảo hiểm.</span>
        </p>
        <p class="p3">
            <span>6. T&iacute;nh v&agrave; thu ph&iacute; bảo hiểm tiền gửi đối với tổ chức tham gia bảo hiểm tiền gửi theo quy định của Luật n&agrave;y.</span>
        </p>
        <p class="p3">
            <span>7. Quản l&yacute;, sử dụng v&agrave; bảo to&agrave;n nguồn vốn bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>8. Chi trả tiền bảo hiểm cho người được bảo hiểm tiền gửi theo quy định của Luật n&agrave;y.</span>
        </p>
        <p class="p3">
            <span>9. Theo d&otilde;i, kiểm tra việc chấp h&agrave;nh c&aacute;c quy định ph&aacute;p luật về bảo hiểm tiền gửi; kiến nghị Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam xử l&yacute; h&agrave;nh vi vi phạm quy định của ph&aacute;p luật về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="khoan_10_13"><span>10. Tổng hợp, ph&acirc;n t&iacute;ch v&agrave; xử l&yacute; th&ocirc;ng tin về tổ chức tham gia bảo hiểm tiền gửi nhằm ph&aacute;t hiện v&agrave; kiến nghị Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam xử l&yacute; kịp thời những vi phạm quy định về an to&agrave;n hoạt động ng&acirc;n h&agrave;ng, rủi ro g&acirc;y mất an to&agrave;n trong hệ thống ng&acirc;n h&agrave;ng.</span></a>
        </p>
        <p class="p3">
            <span>11. Bảo đảm b&iacute; mật số liệu tiền gửi v&agrave; t&agrave;i liệu li&ecirc;n quan đến bảo hiểm tiền gửi của tổ chức tham gia bảo hiểm tiền gửi theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <a name="khoan_12_13"><span>12. Tiếp nhận hỗ trợ theo nguy&ecirc;n tắc c&oacute; ho&agrave;n trả từ ng&acirc;n s&aacute;ch nh&agrave; nước theo quyết định của Thủ tướng Ch&iacute;nh phủ hoặc vay của tổ chức t&iacute;n dụng, tổ chức kh&aacute;c c&oacute; bảo l&atilde;nh của Ch&iacute;nh phủ trong trường hợp nguồn vốn của tổ chức bảo hiểm tiền gửi tạm thời kh&ocirc;ng đủ để trả tiền bảo hiểm; tiếp nhận c&aacute;c nguồn t&agrave;i trợ của c&aacute;c tổ chức, c&aacute; nh&acirc;n trong nước v&agrave; nước ngo&agrave;i để tăng cường năng lực hoạt động.</span></a>
        </p>
        <p class="p3">
            <a name="khoan_13"><span>13. Tham gia v&agrave;o qu&aacute; tr&igrave;nh kiểm so&aacute;t đặc biệt đối với tổ chức tham gia bảo hiểm tiền gửi theo quy định của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam; tham gia quản l&yacute;, thanh l&yacute; t&agrave;i sản của tổ chức tham gia bảo hiểm tiền gửi theo quy định của Ch&iacute;nh phủ.</span></a>
        </p>
        <p class="p3">
            <span>14. Tổ chức tuy&ecirc;n truyền ch&iacute;nh s&aacute;ch, ph&aacute;p luật về bảo hiểm tiền gửi; tổ chức đ&agrave;o tạo, bồi dưỡng nghiệp vụ về bảo hiểm tiền gửi, nghi&ecirc;n cứu ứng dụng khoa học, c&ocirc;ng nghệ v&agrave; phương thức quản l&yacute; ph&ugrave; hợp với y&ecirc;u cầu ph&aacute;t triển của tổ chức bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="chuong_3"><span class="s1">Chương III</span></a>
        </p>
        <p class="p4">
            <a name="chuong_3_name"><span class="s1">HOẠT ĐỘNG BẢO HIỂM TIỀN GỬI</span></a>
        </p>
        <p class="p3">
            <a name="muc_1_3"><span class="s1">Mục 1. CHỨNG NHẬN THAM GIA BẢO HIỂM TIỀN GỬI</span></a>
        </p>
        <p class="p3">
            <a name="dieu_14"><span class="s1">Điều 14. Cấp Chứng nhận tham gia bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Chậm nhất l&agrave; 15 ng&agrave;y trước ng&agrave;y khai trương hoạt động, tổ chức tham gia bảo hiểm tiền gửi phải nộp hồ sơ đề nghị cấp Chứng nhận tham gia bảo hiểm tiền gửi cho tổ chức bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>2. Trong thời hạn 05 ng&agrave;y l&agrave;m việc, kể từ ng&agrave;y nhận được hồ sơ đề nghị cấp Chứng nhận tham gia bảo hiểm tiền gửi của tổ chức tham gia bảo hiểm tiền gửi, tổ chức bảo hiểm tiền gửi c&oacute; tr&aacute;ch nhiệm cấp Chứng nhận tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="khoan_3_14"><span>3. Hồ sơ đề nghị cấp Chứng nhận tham gia bảo hiểm tiền gửi bao gồm:</span></a>
        </p>
        <p class="p3">
            <span>a) Đơn đăng k&yacute; tham gia bảo hiểm tiền gửi;</span>
        </p>
        <p class="p3">
            <span>b) Bản sao giấy ph&eacute;p th&agrave;nh lập v&agrave; hoạt động của tổ chức t&iacute;n dụng hoặc giấy ph&eacute;p th&agrave;nh lập chi nh&aacute;nh ng&acirc;n h&agrave;ng nước ngo&agrave;i;</span>
        </p>
        <p class="p3">
            <span>c) Bản sao giấy chứng nhận đăng k&yacute; kinh doanh.</span>
        </p>
        <p class="p3">
            <a name="dieu_15"><span class="s1">Điều 15. Ni&ecirc;m yết Chứng nhận tham gia bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>Tổ chức tham gia bảo hiểm tiền gửi phải ni&ecirc;m yết c&ocirc;ng khai bản sao Chứng nhận tham gia bảo hiểm tiền gửi tại tất cả c&aacute;c điểm giao dịch c&oacute; nhận tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_16"><span class="s1">Điều 16. Thu hồi Chứng nhận tham gia bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức tham gia bảo hiểm tiền gửi bị tạm thu hồi Chứng nhận tham gia bảo hiểm tiền gửi khi Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam c&oacute; văn bản tạm đ&igrave;nh chỉ hoạt động nhận tiền gửi theo quy định của ph&aacute;p luật. Trong thời gian tạm thu hồi Chứng nhận tham gia bảo hiểm tiền gửi, tổ chức tham gia bảo hiểm tiền gửi phải nộp ph&iacute; bảo hiểm tiền gửi đối với khoản tiền gửi chưa nộp ph&iacute;.</span>
        </p>
        <p class="p3">
            <span>2. Tổ chức tham gia bảo hiểm tiền gửi bị thu hồi Chứng nhận tham gia bảo hiểm tiền gửi khi Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam c&oacute; văn bản thu hồi giấy ph&eacute;p th&agrave;nh lập v&agrave; hoạt động của tổ chức t&iacute;n dụng, giấy ph&eacute;p th&agrave;nh lập chi nh&aacute;nh ng&acirc;n h&agrave;ng nước ngo&agrave;i theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <span>3. Trong thời hạn 05 ng&agrave;y l&agrave;m việc, kể từ ng&agrave;y thu hồi Chứng nhận tham gia bảo hiểm tiền gửi, tổ chức bảo hiểm tiền gửi phải th&ocirc;ng b&aacute;o c&ocirc;ng khai về việc thu hồi Chứng nhận tham gia bảo hiểm tiền gửi tr&ecirc;n ba số li&ecirc;n tiếp của một tờ b&aacute;o trung ương, một tờ b&aacute;o địa phương nơi đặt trụ sở ch&iacute;nh, c&aacute;c chi nh&aacute;nh của tổ chức tham gia bảo hiểm tiền gửi v&agrave; tr&ecirc;n một b&aacute;o điện tử của Việt Nam.</span>
        </p>
        <p class="p3">
            <a name="dieu_17"><span class="s1">Điều 17. Cấp lại Chứng nhận tham gia bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức tham gia bảo hiểm tiền gửi được cấp lại Chứng nhận tham gia bảo hiểm tiền gửi khi được Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam cho ph&eacute;p phục hồi hoạt động nhận tiền gửi.</span>
        </p>
        <p class="p3">
            <span>2. Chứng nhận tham gia bảo hiểm tiền gửi bị mất, r&aacute;ch n&aacute;t, hư hỏng được cấp lại trong thời hạn 05 ng&agrave;y l&agrave;m việc, kể từ ng&agrave;y nhận được đơn đề nghị cấp lại Chứng nhận tham gia bảo hiểm tiền gửi của tổ chức tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="muc_2_3"><span class="s1">Mục 2. TIỀN GỬI ĐƯỢC BẢO HIỂM</span></a>
        </p>
        <p class="p3">
            <a name="dieu_18"><span class="s1">Điều 18. Tiền gửi được bảo hiểm</span></a>
        </p>
        <p class="p3">
            <span>Tiền gửi được bảo hiểm l&agrave; tiền gửi bằng đồng Việt Nam của c&aacute; nh&acirc;n gửi tại tổ chức tham gia bảo hiểm tiền gửi dưới h&igrave;nh thức tiền gửi c&oacute; kỳ hạn, tiền gửi kh&ocirc;ng kỳ hạn, tiền gửi tiết kiệm, chứng chỉ tiền gửi, kỳ phiếu, t&iacute;n phiếu v&agrave; c&aacute;c h&igrave;nh thức tiền gửi kh&aacute;c theo quy định của </span><a name="tvpllink_omdzpgcvsq_1"><span>Luật c&aacute;c tổ chức t&iacute;n dụng</span></a><span>, trừ c&aacute;c loại tiền gửi quy định tại </span><a name="tc_1"><span>Điều 19 của Luật n&agrave;y</span></a><span>.</span>
        </p>
        <p class="p3">
            <a name="dieu_19"><span class="s1">Điều 19. Tiền gửi kh&ocirc;ng được bảo hiểm</span></a>
        </p>
        <p class="p3">
            <span>1. Tiền gửi tại tổ chức t&iacute;n dụng của c&aacute; nh&acirc;n l&agrave; người sở hữu tr&ecirc;n 5% vốn điều lệ của ch&iacute;nh tổ chức t&iacute;n dụng đ&oacute;.</span>
        </p>
        <p class="p3">
            <span>2. Tiền gửi tại tổ chức t&iacute;n dụng của c&aacute; nh&acirc;n l&agrave; th&agrave;nh vi&ecirc;n Hội đồng th&agrave;nh vi&ecirc;n, th&agrave;nh vi&ecirc;n Hội đồng quản trị, th&agrave;nh vi&ecirc;n Ban kiểm so&aacute;t, Tổng gi&aacute;m đốc (Gi&aacute;m đốc), Ph&oacute; Tổng gi&aacute;m đốc (Ph&oacute; Gi&aacute;m đốc) của ch&iacute;nh tổ chức t&iacute;n dụng đ&oacute;; tiền gửi tại chi nh&aacute;nh ng&acirc;n h&agrave;ng nước ngo&agrave;i của c&aacute; nh&acirc;n l&agrave; Tổng gi&aacute;m đốc (Gi&aacute;m đốc), Ph&oacute; Tổng gi&aacute;m đốc (Ph&oacute; Gi&aacute;m đốc) của ch&iacute;nh chi nh&aacute;nh ng&acirc;n h&agrave;ng nước ngo&agrave;i đ&oacute;.</span>
        </p>
        <p class="p3">
            <span>3. Tiền mua c&aacute;c giấy tờ c&oacute; gi&aacute; v&ocirc; danh do tổ chức tham gia bảo hiểm tiền gửi ph&aacute;t h&agrave;nh.</span>
        </p>
        <p class="p3">
            <a name="muc_3_3"><span class="s1">Mục 3. PH&Iacute; BẢO HIỂM TIỀN GỬI</span></a>
        </p>
        <p class="p3">
            <a name="dieu_20"><span class="s1">Điều 20. Ph&iacute; bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Thủ tướng Ch&iacute;nh phủ quy định khung ph&iacute; bảo hiểm tiền gửi theo đề nghị của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam.</span>
        </p>
        <p class="p3">
            <span>2. Căn cứ v&agrave;o khung ph&iacute; bảo hiểm tiền gửi, Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam quy định mức ph&iacute; bảo hiểm tiền gửi cụ thể đối với tổ chức tham gia bảo hiểm tiền gửi tr&ecirc;n cơ sở kết quả đ&aacute;nh gi&aacute; v&agrave; ph&acirc;n loại c&aacute;c tổ chức n&agrave;y.</span>
        </p>
        <p class="p3">
            <a name="khoan_2"><span>3. Ph&iacute; bảo hiểm tiền gửi được t&iacute;nh tr&ecirc;n cơ sở số dư tiền gửi b&igrave;nh qu&acirc;n của tiền gửi được bảo hiểm tại tổ chức tham gia bảo hiểm tiền gửi.</span></a>
        </p>
        <p class="p3">
            <a name="khoan_1"><span>4. Ph&iacute; bảo hiểm tiền gửi được t&iacute;nh v&agrave; nộp định kỳ h&agrave;ng qu&yacute; trong năm t&agrave;i ch&iacute;nh. Tổ chức tham gia bảo hiểm tiền gửi phải nộp ph&iacute; bảo hiểm tiền gửi cho tổ chức bảo hiểm tiền gửi chậm nhất v&agrave;o ng&agrave;y 20 th&aacute;ng đầu ti&ecirc;n của qu&yacute; kế tiếp.</span></a>
        </p>
        <p class="p3">
            <span>5. Ph&iacute; bảo hiểm tiền gửi được hạch to&aacute;n v&agrave;o chi ph&iacute; hoạt động của tổ chức tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_21"><span class="s1">Điều 21. Ph&iacute; nộp thiếu, nộp chậm</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức tham gia bảo hiểm tiền gửi vi phạm thời hạn nộp ph&iacute; bảo hiểm tiền gửi theo quy định tại </span><a name="tc_2"><span>Điều 20 của Luật n&agrave;y</span></a><span>, th&igrave; ngo&agrave;i việc phải nộp đủ số ph&iacute; c&ograve;n thiếu phải chịu phạt mỗi ng&agrave;y nộp chậm bằng 0,05% số tiền nộp chậm.</span>
        </p>
        <p class="p3">
            <span>2. Trường hợp tổ chức bảo hiểm tiền gửi ph&aacute;t hiện sự thiếu ch&iacute;nh x&aacute;c trong việc t&iacute;nh v&agrave; nộp ph&iacute; bảo hiểm tiền gửi, th&igrave; tổ chức bảo hiểm tiền gửi c&oacute; tr&aacute;ch nhiệm th&ocirc;ng b&aacute;o v&agrave; truy thu số ph&iacute; c&ograve;n thiếu hoặc tho&aacute;i thu đối với số ph&iacute; nộp thừa trong thời hạn 15 ng&agrave;y, kể từ ng&agrave;y ph&aacute;t hiện.</span>
        </p>
        <p class="p3">
            <span>3. Sau thời hạn 30 ng&agrave;y, kể từ ng&agrave;y phải nộp ph&iacute; bảo hiểm tiền gửi m&agrave; tổ chức tham gia bảo hiểm tiền gửi kh&ocirc;ng nộp hoặc nộp kh&ocirc;ng đầy đủ ph&iacute; bảo hiểm tiền gửi v&agrave; tiền phạt, th&igrave; tổ chức bảo hiểm tiền gửi c&oacute; văn bản đề nghị Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam tr&iacute;ch t&agrave;i khoản của tổ chức tham gia bảo hiểm tiền gửi tại Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam để nộp ph&iacute; bảo hiểm tiền gửi v&agrave; tiền phạt. Trong thời hạn 30 ng&agrave;y, kể từ ng&agrave;y nhận văn bản đề nghị của tổ chức bảo hiểm tiền gửi, Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam c&oacute; tr&aacute;ch nhiệm xử l&yacute;.</span>
        </p>
        <p class="p3">
            <span>4. Trong trường hợp tổ chức tham gia bảo hiểm tiền gửi kh&ocirc;ng nộp hoặc nộp kh&ocirc;ng đầy đủ ph&iacute; bảo hiểm tiền gửi m&agrave; Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam phải tr&iacute;ch t&agrave;i khoản của tổ chức tham gia bảo hiểm tiền gửi để nộp ph&iacute; theo quy định tại khoản 3 Điều n&agrave;y lần thứ hai, th&igrave; tổ chức bảo hiểm tiền gửi c&oacute; văn bản đề nghị Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam đ&igrave;nh chỉ hoặc tạm đ&igrave;nh chỉ hoạt động nhận tiền gửi của tổ chức tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="muc_4_3"><span class="s1">Mục 4. TRẢ TIỀN BẢO HIỂM</span></a>
        </p>
        <p class="p3">
            <a name="dieu_22"><span class="s1">Điều 22. Thời điểm ph&aacute;t sinh nghĩa vụ trả tiền bảo hiểm</span></a>
        </p>
        <p class="p3">
            <span>Nghĩa vụ trả tiền bảo hiểm ph&aacute;t sinh kể từ thời điểm Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam c&oacute; văn bản chấm dứt kiểm so&aacute;t đặc biệt hoặc văn bản chấm dứt &aacute;p dụng hoặc văn bản kh&ocirc;ng &aacute;p dụng c&aacute;c biện ph&aacute;p phục hồi khả năng thanh to&aacute;n m&agrave; tổ chức t&iacute;n dụng l&agrave; tổ chức tham gia bảo hiểm tiền gửi vẫn l&acirc;m v&agrave;o t&igrave;nh trạng ph&aacute; sản hoặc Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam c&oacute; văn bản x&aacute;c định chi nh&aacute;nh ng&acirc;n h&agrave;ng nước ngo&agrave;i l&agrave; tổ chức tham gia bảo hiểm tiền gửi mất khả năng chi trả tiền gửi cho người gửi tiền.</span>
        </p>
        <p class="p3">
            <a name="dieu_23"><span class="s1">Điều 23. Thời hạn trả tiền bảo hiểm</span></a>
        </p>
        <p class="p3">
            <span>Trong thời hạn 60 ng&agrave;y, kể từ thời điểm ph&aacute;t sinh nghĩa vụ trả tiền bảo hiểm, tổ chức bảo hiểm tiền gửi c&oacute; tr&aacute;ch nhiệm trả tiền bảo hiểm cho người được bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="dieu_24"><span class="s1">Điều 24. Hạn mức trả tiền bảo hiểm</span></a>
        </p>
        <p class="p3">
            <span>1. Hạn mức trả tiền bảo hiểm l&agrave; số tiền tối đa m&agrave; tổ chức bảo hiểm tiền gửi trả cho tất cả c&aacute;c khoản tiền gửi được bảo hiểm của một người tại một tổ chức tham gia bảo hiểm tiền gửi khi ph&aacute;t sinh nghĩa vụ trả tiền bảo hiểm.</span>
        </p>
        <p class="p3">
            <a name="khoan_2_24"><span>2. Thủ tướng Ch&iacute;nh phủ quy định hạn mức trả tiền bảo hiểm theo đề nghị của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam trong từng thời kỳ.</span></a>
        </p>
        <p class="p3">
            <a name="dieu_25"><span class="s1">Điều 25. Số tiền bảo hiểm được trả</span></a>
        </p>
        <p class="p3">
            <span>1. Số tiền bảo hiểm được trả cho tất cả c&aacute;c khoản tiền gửi được bảo hiểm của một người tại một tổ chức tham gia bảo hiểm tiền gửi bao gồm tiền gốc v&agrave; tiền l&atilde;i, tối đa bằng hạn mức trả tiền bảo hiểm quy định tại </span><a name="tc_3"><span>Điều 24 của Luật n&agrave;y</span></a><span>.</span>
        </p>
        <p class="p3">
            <span>2. Số tiền bảo hiểm được trả trong trường hợp nhiều người sở hữu chung tiền gửi được bảo hiểm tiền gửi được quy định như sau:</span>
        </p>
        <p class="p3">
            <span>a) Số tiền bảo hiểm được trả cho tất cả c&aacute;c khoản tiền gửi được bảo hiểm của nhiều người sở hữu chung tại một tổ chức tham gia bảo hiểm tiền gửi bao gồm tiền gốc v&agrave; tiền l&atilde;i, tối đa bằng hạn mức trả tiền bảo hiểm cho một người quy định tại </span><a name="tc_4"><span>Điều 24 của Luật n&agrave;y</span></a><span>. Số tiền bảo hiểm được trả sẽ được chia theo thỏa thuận của c&aacute;c đồng chủ sở hữu; trường hợp giữa c&aacute;c đồng chủ sở hữu kh&ocirc;ng c&oacute; thỏa thuận hoặc kh&ocirc;ng thỏa thuận được th&igrave; giải quyết theo quy định của ph&aacute;p luật;</span>
        </p>
        <p class="p3">
            <span>b) Trường hợp một trong c&aacute;c đồng chủ sở hữu c&oacute; khoản tiền gửi kh&aacute;c được bảo hiểm tại c&ugrave;ng một tổ chức tham gia bảo hiểm tiền gửi th&igrave; tổng số tiền bảo hiểm được trả cho một đồng chủ sở hữu kh&ocirc;ng vượt qu&aacute; hạn mức trả tiền bảo hiểm.</span>
        </p>
        <p class="p3">
            <span>3. Trường hợp người được bảo hiểm tiền gửi c&oacute; khoản nợ tại tổ chức tham gia bảo hiểm tiền gửi th&igrave; số tiền gửi được bảo hiểm l&agrave; số tiền c&ograve;n lại sau khi trừ khoản nợ đ&oacute;.</span>
        </p>
        <p class="p3">
            <a name="dieu_26"><span class="s1">Điều 26. Thủ tục trả tiền bảo hiểm</span></a>
        </p>
        <p class="p3">
            <span>1. Trong thời hạn 10 ng&agrave;y l&agrave;m việc, kể từ thời điểm ph&aacute;t sinh nghĩa vụ trả tiền bảo hiểm, tổ chức tham gia bảo hiểm tiền gửi phải gửi hồ sơ đề nghị trả tiền bảo hiểm cho tổ chức bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>Hồ sơ đề nghị trả tiền bảo hiểm bao gồm văn bản đề nghị trả tiền bảo hiểm, danh s&aacute;ch người được bảo hiểm tiền gửi, số tiền gửi của từng người được bảo hiểm tiền gửi v&agrave; số tiền bảo hiểm đề nghị tổ chức bảo hiểm tiền gửi chi trả.</span>
        </p>
        <p class="p3">
            <span>2. Trong thời hạn 05 ng&agrave;y l&agrave;m việc, kể từ ng&agrave;y nhận đủ hồ sơ theo quy định tại khoản 1 Điều n&agrave;y, tổ chức bảo hiểm tiền gửi tiến h&agrave;nh kiểm tra c&aacute;c chứng từ, sổ s&aacute;ch để x&aacute;c định số tiền chi trả.</span>
        </p>
        <p class="p3">
            <span>3. Trong thời hạn 10 ng&agrave;y l&agrave;m việc, kể từ ng&agrave;y kết th&uacute;c kiểm tra theo quy định tại khoản 2 Điều n&agrave;y, tổ chức bảo hiểm tiền gửi phải c&oacute; phương &aacute;n trả tiền bảo hiểm cho người được bảo hiểm tiền gửi; th&ocirc;ng b&aacute;o c&ocirc;ng khai về địa điểm, thời gian, phương thức trả tiền bảo hiểm tr&ecirc;n ba số li&ecirc;n tiếp của một tờ b&aacute;o trung ương, một tờ b&aacute;o địa phương nơi đặt trụ sở ch&iacute;nh, c&aacute;c chi nh&aacute;nh của tổ chức tham gia bảo hiểm tiền gửi v&agrave; tr&ecirc;n một b&aacute;o điện tử của Việt Nam; ni&ecirc;m yết danh s&aacute;ch người được trả tiền bảo hiểm tại địa điểm đ&atilde; th&ocirc;ng b&aacute;o.</span>
        </p>
        <p class="p3">
            <a name="khoan_hd26_1"><span>4. Khi nhận tiền bảo hiểm, người được bảo hiểm tiền gửi phải xuất tr&igrave;nh c&aacute;c giấy tờ chứng minh quyền sở hữu hợp ph&aacute;p đối với c&aacute;c khoản tiền gửi được bảo hiểm tại tổ chức tham gia bảo hiểm tiền gửi.</span></a>
        </p>
        <p class="p3">
            <a name="khoan_hd26"><span>5. Tổ chức bảo hiểm tiền gửi trực tiếp trả tiền bảo hiểm cho người được bảo hiểm tiền gửi hoặc ủy quyền cho tổ chức tham gia bảo hiểm tiền gửi kh&aacute;c thực hiện.</span></a>
        </p>
        <p class="p3">
            <a name="khoan_6_26"><span>6. Sau thời hạn 10 năm, kể từ ng&agrave;y tổ chức bảo hiểm tiền gửi c&oacute; th&ocirc;ng b&aacute;o lần thứ nhất về việc trả tiền bảo hiểm, những khoản tiền bảo hiểm kh&ocirc;ng c&oacute; người nhận sẽ được x&aacute;c lập quyền sở hữu nh&agrave; nước v&agrave; bổ sung v&agrave;o nguồn vốn hoạt động của tổ chức bảo hiểm tiền gửi, người c&oacute; quyền sở hữu khoản tiền gửi được bảo hiểm sẽ kh&ocirc;ng c&oacute; quyền y&ecirc;u cầu tổ chức bảo hiểm tiền gửi trả số tiền bảo hiểm đ&oacute;.</span></a>
        </p>
        <p class="p3">
            <a name="dieu_27"><span class="s1">Điều 27. Xử l&yacute; số tiền gửi vượt hạn mức trả tiền bảo hiểm</span></a>
        </p>
        <p class="p3">
            <span>Số tiền gửi của người được bảo hiểm tiền gửi bao gồm tiền gốc v&agrave; tiền l&atilde;i vượt qu&aacute; hạn mức trả tiền bảo hiểm sẽ được giải quyết trong qu&aacute; tr&igrave;nh xử l&yacute; t&agrave;i sản của tổ chức tham gia bảo hiểm tiền gửi theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <a name="dieu_28"><span class="s1">Điều 28. Thu hồi số tiền bảo hiểm phải trả từ tổ chức tham gia bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức bảo hiểm tiền gửi trở th&agrave;nh chủ nợ của tổ chức tham gia bảo hiểm tiền gửi đối với số tiền bảo hiểm phải trả cho người được bảo hiểm tiền gửi, kể từ ng&agrave;y trả tiền bảo hiểm theo th&ocirc;ng b&aacute;o quy định tại </span><a name="tc_5"><span>khoản 3 Điều 26 của Luật n&agrave;y</span></a><span>.</span>
        </p>
        <p class="p3">
            <span>2. Tổ chức bảo hiểm tiền gửi được ph&acirc;n chia gi&aacute; trị t&agrave;i sản theo thứ tự như người gửi tiền v&agrave; thu hồi số tiền bảo hiểm phải trả trong qu&aacute; tr&igrave;nh xử l&yacute; t&agrave;i sản của tổ chức tham gia bảo hiểm tiền gửi theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <a name="chuong_4"><span class="s1">Chương IV</span></a>
        </p>
        <p class="p4">
            <a name="chuong_4_name"><span class="s1">TỔ CHỨC BẢO HIỂM TIỀN GỬI</span></a>
        </p>
        <p class="p3">
            <a name="dieu_29"><span class="s1">Điều 29. Tổ chức bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức bảo hiểm tiền gửi l&agrave; tổ chức t&agrave;i ch&iacute;nh do Thủ tướng Ch&iacute;nh phủ th&agrave;nh lập v&agrave; quy định chức năng, nhiệm vụ.</span>
        </p>
        <p class="p3">
            <span>2. Tổ chức bảo hiểm tiền gửi l&agrave; ph&aacute;p nh&acirc;n, hoạt động kh&ocirc;ng v&igrave; mục ti&ecirc;u lợi nhuận, bảo đảm an to&agrave;n vốn v&agrave; tự b&ugrave; đắp chi ph&iacute;.</span>
        </p>
        <p class="p3">
            <a name="dieu_30"><span class="s1">Điều 30. Nguồn vốn hoạt động</span></a>
        </p>
        <p class="p3">
            <span>1. Vốn điều lệ của tổ chức bảo hiểm tiền gửi do ng&acirc;n s&aacute;ch nh&agrave; nước cấp.</span>
        </p>
        <p class="p3">
            <span>2. Nguồn thu từ ph&iacute; bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <a name="khoan_3_30"><span>3. Nguồn thu từ hoạt động đầu tư nguồn vốn tạm thời nh&agrave;n rỗi của tổ chức bảo hiểm tiền gửi.</span></a>
        </p>
        <p class="p3">
            <span>4. Nguồn thu kh&aacute;c theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <a name="dieu_31"><span class="s1">Điều 31. Hoạt động đầu tư</span></a>
        </p>
        <p class="p3">
            <span>Tổ chức bảo hiểm tiền gửi được sử dụng nguồn vốn tạm thời nh&agrave;n rỗi để mua tr&aacute;i phiếu Ch&iacute;nh phủ, t&iacute;n phiếu Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam v&agrave; gửi tiền tại Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam.</span>
        </p>
        <p class="p3">
            <a name="dieu_32"><span class="s1">Điều 32. Chế độ t&agrave;i ch&iacute;nh, hạch to&aacute;n kế to&aacute;n v&agrave; kiểm to&aacute;n</span></a>
        </p>
        <p class="p3">
            <span>1. Chế độ t&agrave;i ch&iacute;nh của tổ chức bảo hiểm tiền gửi do Bộ T&agrave;i ch&iacute;nh chủ tr&igrave;, phối hợp với Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam quy định.</span>
        </p>
        <p class="p3">
            <span>Năm t&agrave;i ch&iacute;nh của tổ chức bảo hiểm tiền gửi bắt đầu từ ng&agrave;y 01 th&aacute;ng 01 v&agrave; kết th&uacute;c v&agrave;o ng&agrave;y 31 th&aacute;ng 12 năm dương lịch.</span>
        </p>
        <p class="p3">
            <span>2. Tổ chức bảo hiểm tiền gửi thực hiện hạch to&aacute;n kế to&aacute;n theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <span>3. B&aacute;o c&aacute;o t&agrave;i ch&iacute;nh hằng năm của tổ chức bảo hiểm tiền gửi phải được Kiểm to&aacute;n Nh&agrave; nước kiểm to&aacute;n v&agrave; x&aacute;c nhận.</span>
        </p>
        <p class="p3">
            <a name="chuong_5"><span class="s1">Chương V</span></a>
        </p>
        <p class="p4">
            <a name="chuong_5_name"><span class="s1">HOẠT ĐỘNG TH&Ocirc;NG TIN, B&Aacute;O C&Aacute;O</span></a>
        </p>
        <p class="p3">
            <a name="dieu_33"><span class="s1">Điều 33. Tr&aacute;ch nhiệm b&aacute;o c&aacute;o v&agrave; c&ocirc;ng bố th&ocirc;ng tin của tổ chức bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức bảo hiểm tiền gửi c&oacute; tr&aacute;ch nhiệm b&aacute;o c&aacute;o Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam c&aacute;c th&ocirc;ng tin sau đ&acirc;y:</span>
        </p>
        <p class="p3">
            <span>a) Th&ocirc;ng tin về việc chấp h&agrave;nh quy định ph&aacute;p luật về bảo hiểm tiền gửi của tổ chức tham gia bảo hiểm tiền gửi định kỳ 06 th&aacute;ng hoặc đột xuất theo y&ecirc;u cầu của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam;</span>
        </p>
        <p class="p3">
            <span>b) Th&ocirc;ng tin về việc trả tiền bảo hiểm đối với người được bảo hiểm tiền gửi định kỳ 06 th&aacute;ng hoặc đột xuất theo y&ecirc;u cầu của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam;</span>
        </p>
        <p class="p3">
            <span>c) Kết quả thực hiện nhiệm vụ quy định tại </span><a name="tc_6"><span>khoản 10 Điều 13 của Luật n&agrave;y</span></a><span> theo định kỳ hằng qu&yacute; hoặc đột xuất theo y&ecirc;u cầu của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam;</span>
        </p>
        <p class="p3">
            <span>d) B&aacute;o c&aacute;o t&agrave;i ch&iacute;nh hằng năm đ&atilde; được kiểm to&aacute;n v&agrave; b&aacute;o c&aacute;o hoạt động hằng năm;</span>
        </p>
        <p class="p3">
            <span>đ) C&aacute;c th&ocirc;ng tin kh&aacute;c về hoạt động bảo hiểm tiền gửi theo y&ecirc;u cầu của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam.</span>
        </p>
        <p class="p3">
            <span>2. Tổ chức bảo hiểm tiền gửi c&oacute; tr&aacute;ch nhiệm c&ocirc;ng bố th&ocirc;ng tin về việc thu hồi Chứng nhận tham gia bảo hiểm tiền gửi v&agrave; phương &aacute;n trả tiền bảo hiểm cho người được bảo hiểm tiền gửi theo quy định tại </span><a name="tc_7"><span>khoản 3 Điều 16 v&agrave; khoản 3 Điều 26 của Luật n&agrave;y</span></a><span>.</span>
        </p>
        <p class="p3">
            <a name="dieu_34"><span class="s1">Điều 34. Cung cấp th&ocirc;ng tin của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam</span></a>
        </p>
        <p class="p3">
            <span>1. Tổ chức bảo hiểm tiền gửi được ph&eacute;p tiếp cận dữ liệu th&ocirc;ng tin của Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam về tổ chức tham gia bảo hiểm tiền gửi để thực hiện chức năng, nhiệm vụ theo quy định của Luật n&agrave;y.</span>
        </p>
        <p class="p3">
            <span>2. Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam c&oacute; tr&aacute;ch nhiệm để tổ chức bảo hiểm tiền gửi tiếp cận dữ liệu th&ocirc;ng tin về tổ chức tham gia bảo hiểm tiền gửi theo quy định của Ch&iacute;nh phủ.</span>
        </p>
        <p class="p3">
            <a name="chuong_6"><span class="s1">Chương VI</span></a>
        </p>
        <p class="p4">
            <a name="chuong_6_name"><span class="s1">THANH TRA, KHIẾU NẠI VỀ BẢO HIỂM TIỀN GỬI</span></a>
        </p>
        <p class="p3">
            <a name="dieu_35"><span class="s1">Điều 35. Thanh tra về bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam thực hiện chức năng thanh tra về bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>2. Đối tượng thanh tra về bảo hiểm tiền gửi l&agrave; tổ chức bảo hiểm tiền gửi, tổ chức tham gia bảo hiểm tiền gửi.</span>
        </p>
        <p class="p3">
            <span>3. Quyền v&agrave; nghĩa vụ của đối tượng thanh tra về bảo hiểm tiền gửi thực hiện theo quy định của </span><a name="tvpllink_tggrziuxhl"><span>Luật Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam</span></a><span> v&agrave; ph&aacute;p luật về thanh tra.</span>
        </p>
        <p class="p3">
            <span>4. Quy tr&igrave;nh, thủ tục thanh tra về bảo hiểm tiền gửi đối với c&aacute;c tổ chức tham gia bảo hiểm tiền gửi thực hiện theo quy định của </span><a name="tvpllink_tggrziuxhl_1"><span>Luật Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam</span></a><span> v&agrave; ph&aacute;p luật về thanh tra.</span>
        </p>
        <p class="p3">
            <span>5. Quy tr&igrave;nh, thủ tục thanh tra về bảo hiểm tiền gửi đối với tổ chức bảo hiểm tiền gửi thực hiện theo quy định của ph&aacute;p luật về thanh tra.</span>
        </p>
        <p class="p3">
            <a name="dieu_36"><span class="s1">Điều 36. Khiếu nại về bảo hiểm tiền gửi</span></a>
        </p>
        <p class="p3">
            <span>1. Việc giải quyết khiếu nại đối với quyết định h&agrave;nh ch&iacute;nh, h&agrave;nh vi h&agrave;nh ch&iacute;nh về bảo hiểm tiền gửi được thực hiện theo quy định của ph&aacute;p luật về khiếu nại.</span>
        </p>
        <p class="p3">
            <span>2. Việc giải quyết khiếu nại đối với quyết định, h&agrave;nh vi của tổ chức bảo hiểm tiền gửi được thực hiện như sau:</span>
        </p>
        <p class="p3">
            <span>a) Người c&oacute; thẩm quyền giải quyết khiếu nại lần đầu về bảo hiểm tiền gửi l&agrave; tổ chức bảo hiểm tiền gửi. Thời hạn giải quyết khiếu nại của tổ chức bảo hiểm tiền gửi l&agrave; 15 ng&agrave;y, kể từ ng&agrave;y nhận được đơn khiếu nại;</span>
        </p>
        <p class="p3">
            <span>b) Trường hợp người khiếu nại kh&ocirc;ng đồng &yacute; với quyết định giải quyết khiếu nại lần đầu hoặc qu&aacute; thời hạn quy định m&agrave; khiếu nại kh&ocirc;ng được giải quyết, người khiếu nại c&oacute; quyền khiếu nại đến Thống đốc Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam;</span>
        </p>
        <p class="p3">
            <span>c) Thống đốc Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam c&oacute; tr&aacute;ch nhiệm giải quyết khiếu nại trong thời hạn 30 ng&agrave;y, kể từ ng&agrave;y nhận được đơn khiếu nại. Trường hợp kh&ocirc;ng đồng &yacute; với quyết định giải quyết khiếu nại của Thống đốc Ng&acirc;n h&agrave;ng Nh&agrave; nước Việt Nam, người khiếu nại c&oacute; quyền khởi kiện tại T&ograve;a &aacute;n theo quy định của ph&aacute;p luật.</span>
        </p>
        <p class="p3">
            <a name="chuong_7"><span class="s1">Chương VII</span></a>
        </p>
        <p class="p4">
            <a name="chuong_7_name"><span class="s1">ĐIỀU KHOẢN THI H&Agrave;NH</span></a>
        </p>
        <p class="p3">
            <a name="dieu_37"><span class="s1">Điều 37. Điều khoản chuyển tiếp</span></a>
        </p>
        <p class="p3">
            <span>Chứng nhận bảo hiểm tiền gửi được cấp trước ng&agrave;y Luật n&agrave;y c&oacute; hiệu lực tiếp tục c&oacute; gi&aacute; trị sử dụng.</span>
        </p>
        <p class="p3">
            <a name="dieu_38"><span class="s1">Điều 38. Hiệu lực thi h&agrave;nh</span></a>
        </p>
        <p class="p3">
            <span>Luật n&agrave;y c&oacute; hiệu lực thi h&agrave;nh từ ng&agrave;y 01 th&aacute;ng 01 năm 2013.</span>
        </p>
        <p class="p3">
            <a name="dieu_39"><span class="s1">Điều 39. Quy định chi tiết v&agrave; hướng dẫn thi h&agrave;nh</span></a>
        </p>
        <p class="p3">
            <span>Ch&iacute;nh phủ quy định chi tiết, hướng dẫn thi h&agrave;nh c&aacute;c điều, khoản được giao trong Luật.</span>
        </p>
        <p class="p3">
            <span class="s2">Luật n&agrave;y đ&atilde; được Quốc hội nước Cộng h&ograve;a x&atilde; hội chủ nghĩa Việt Nam kh&oacute;a XIII, kỳ họp thứ 3 th&ocirc;ng qua ng&agrave;y 18 th&aacute;ng 6 năm 2012.</span>
        </p>
        <p class="p3">
            <span>&nbsp;</span>
        </p>
        <table class="t1">
            <tbody>
                <tr class="r1">
                    <td class="td3">
                        <p class="p5">
                            <span class="s1">&nbsp;</span>
                        </p>
                    </td><td class="td4">
                        <p class="p1">
                            <span class="s1">CHỦ TỊCH QUỐC HỘI</span>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <span class="s1">Nguyễn Sinh H&ugrave;ng</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="p3">
            <span>&nbsp;</span>
        </p>
        <p class="p3">
            <span>&nbsp;</span>
        </p>
    </body>
</html>
`
  }
}
</script>

<style>
.a4 {
  width: 21cm;
  height: 29.7cm;
  margin: 0 auto;
  padding: 2cm;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.content {
  font-family: Arial, sans-serif;
  font-size: 12pt;
  line-height: 1.5;
  word-wrap: break-word;
}
</style>
