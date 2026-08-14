// Nội dung bức thư gửi Hà Ngọc Diệu Linh
const textToType = `Hi lô  Emm beee hì chiều ni anhh lấy hết can đảm để viết cái ni cho em vi anh nhớ em quái nhma sợ sẽ làm phiền emm nên anhh k gửi tin nhắn mô , gần 3 tháng từ khi em ctay anhh nhma anhh k bao h muốn emm đi cả emm ở bên anhh anhh chỉ mang tới những phiền phức vs toàn làm emm khóc thôi , mọi bựa emmn bee chua đi anhh còn có thể tìm emmm bee vs hỏi emm làm chi đó nhma chừ anhh nhớ emm là anhh vô tik tìm emm bee xong bơ ngẩn người ra vs mở máy ra coi hình emm bee vs mấy con gấu emm bee tặng anhh anhh cứ coi hắn mãi , đi học anhh ngồi mô anhh cx nhìn emm hết cả anhh nhớ emm bee quái nhma đó như hình phạt cho anh rứa he anhh nói dối emm lần ni đến lần khác r còn làm điều em không thích nựa chơ emm bee è khó chịu vs anhh lắm hè mới quyết định nói chia tay như rứa anhh vụng về quái ích kỉ làm tổn thương emm người qtrong nhất emm bee ơi anhh k muốn mất emm mô anhh không biết emm bee đọc những dòng ni của anhh mô nhma nếu emm đọc thì anh cảm ơn emm đã cho anhh 1 cơ hội nói ra hết từ ngày hôm nớ anhh cứ suy nghĩ mãi về anhh vs về em anhh trở thành người mà anhh k nhận ra anhh là ai nữa anhh buồn hung quái anhh ms nói ra hết nhiều lần emm nói anhh là đừng liên quan tới chắc nữa nhma anhh k làm như rứa được hôm bựa emm bee bị bổ xe anhh sợ , bơ anhh mới qua coi emm đi học vs laii anhh cx k đi gânf emm bee mô . Anh chưa có khi mô coi tình cảm là cấy dễ dàng buông bỏ mô khi anhh chọn yêu emm bee anhh chưa nghĩ tới chuyện là bỏ emm mô cho dù emm bee có nói những cấy chi nặng lời nhất thì anh cũng k bao h bỏ emm bee mô anhh k bỏ emm được ngày emm bee đi anhh buồn anhh đau aa rua từ ngày nớ anhh k ăn 1 cái chi nguyên 1 ngày nớ anh nằm mơ mãi luon aaa hôm mô anhh cũng qua nhà emm1 vòng rồi về hết aaaa anhh nhớ emm bee nhìu lắm rồi… anhh viết những dòng ni ra anhh k mong emm bee tha thứ cho anhh mô aaa anh chỉ mong vẫn có 1 cơ hội dù cho là nhỏ nhất thuii aaa anhh vẫn muốn được đồng hành cùng emmm them nữa k muon mất emm anhh mong anhh se duoc đồng hành cùng emm bee..ANH YÊU EMM HA NGOC DIEU LINH;

const startBtn = document.getElementById('start-btn');
const textBox = document.getElementById('text-box');
const audio = document.getElementById('my-audio');

let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        textBox.innerHTML += textToType.charAt(index);
        index++;
        textBox.scrollTop = textBox.scrollHeight; // Tự động cuộn hộp thư xuống khi chữ dài ra
        setTimeout(typeWriter, 75); // Tốc độ chạy từng chữ (75ms/ký tự)
    }
}

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    textBox.classList.remove('hidden');
    
    // Phát bài nhạc Nếu Ngày Ấy (Piano)
    audio.play().catch(error => {
        console.log("Trình duyệt chặn phát nhạc: ", error);
    });
    
    // Bắt đầu chạy chữ tự động
    typeWriter();
});
