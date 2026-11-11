// Nội dung thư gửi Hà Ngọc Diệu Linh
hằng số văn bản cần nhập = `Chào emm beee,

Nghe chắc là lâu rồi mới nghe 2 chữ emm bee hè, chắc là emm bee cũng không rảnh để vô đọc cái ni mô nhma chừ anh gửi tin nhắn hắn sẽ phiền em. Sinh nhật năm trước của em thì có anhh nhma nhắn không vui. Năm ni không có anh thì hắn sẽ vui hơn rất nhiều.

Anhh chúc emm bee sẽ luôn thành công trong cuộc sống luôn hạnh phúc, thành công trên con đường đã chọn, luôn xinh đẹp, không được yếu đuối mô nghe. Anh xin lỗi vì không đủ can đảm để nhắn chúc sinh nhật em 1 cách đàng hoàng, sinh nhật năm ni vs cả năm sau anh cx k đc đón tuổi mới cùng em nữa mô.

Chúc em hạnh phúc và đặc biệt anh chúc em sẽ tìm được một người mới cùng đón sinh nhật với em nha. Xin lỗi vì đã làm bẩn 1 phần kí ức của em. Cuối cùng anh chúc em sinh nhật vui vẻ nha! ❤️`;

hằng số nút bắt đầu = tài liệu.getElementById('nút bắt đầu');
hằng số hộp văn bản = tài liệu.getElementById('hộp văn bản');
hằng số âm thanh = tài liệu.getElementById('âm thanh của tôi');

cho phép chỉ mục = 0;

chức năng Máy đánh chữ() {
    nếu như (chỉ mục < văn bản cần nhập.chiều dài) {
        hộp văn bản.innerHTML += văn bản cần nhập.charAt(chỉ mục);
        chỉ mục++;
        hộp văn bản.cuộn lên trên = hộp văn bản.chiều cao cuộn;
        đặt thời gian chờ(Máy đánh chữ, 75);
    }
}
