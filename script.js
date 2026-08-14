// Nội dung bức thư gửi Hà Ngọc Diệu Linh
const textToType = `Hello em bé yêu! 

Chiều nay anh mới lấy hết can đảm để viết những dòng này cho em. Anh nhớ em nhiều lắm, nhưng sợ làm phiền em nên anh không dám nhắn tin напрямую...

Gần 3 tháng từ ngày em nói chia tay, nhưng chưa một khoảnh khắc nào anh muốn em rời đi cả. Lúc còn ở bên anh, anh chỉ toàn mang lại phiền phức và làm em phải khóc. Ngày trước khi em chưa đi, anh còn có thể tìm em, hỏi xem em đang làm gì. Còn bây giờ, mỗi lần nhớ em, anh chỉ biết vào TikTok tìm em rồi ngồi ngẩn người ra... Anh lại mở máy coi lại những bức hình cũ, nhìn mấy con gấu bông em tặng mà cứ ngắm mãi. Đi học, ngồi ở đâu mắt anh cũng chỉ hướng về phía em.

Anh nhớ em bé nhiều lắm! Nhưng có lẽ đây là hình phạt đích đáng dành cho anh. Anh đã dối em hết lần này đến lần khác, lại còn làm những điều em không thích. Cắc chắn em đã phải chịu đựng và khó chịu với anh lắm mới quyết định buông tay như vậy. Anh quá vụng về, ích kỷ và đã làm tổn thương người quan trọng nhất cuộc đời mình.

Em bé ơi, anh không muốn mất em đâu... Anh không biết liệu em có đọc được những dòng này không, nhưng nếu em đọc, anh cảm ơn em vì đã cho anh một cơ hội để trút hết lòng mình. 

Từ ngày hôm đó, anh cứ suy nghĩ mãi về chuyện của hai đứa. Anh dằn dặt đến mức trở thành một người mà chính anh cũng không còn nhận ra. Nhiều lần em nhắn đừng liên quan đến nhau nữa, nhưng anh thật sự không làm được. Hôm trước nghe tin em bị ngã xe, anh sợ lắm... Anh chỉ biết lặng lẽ qua nhìn em đi học, cũng không dám đi lại quá gần em.

Anh chưa bao giờ xem tình cảm là điều dễ dàng buông bỏ. Khi đã chọn yêu em, anh chưa từng nghĩ đến chuyện sẽ rời xa em. Cho dù em có nói những lời nặng nề nhất, anh cũng không bao giờ bỏ em bé đâu... anh không làm được. Ngày em đi, anh buồn và đau đến mức nguyên cả ngày chẳng ăn uống được gì, đêm nào nằm ngủ cũng mơ thấy em. Ngày nào anh cũng chạy xe qua nhà em một vòng rồi mới chịu về...

Anh viết những dòng này ra, không dám mong em sẽ dễ dàng tha thứ ngay. Anh chỉ mong mình vẫn còn một cơ hội — dù là nhỏ ngoi nhất. Anh vẫn muốn được tiếp tục đồng hành cùng em, không muốn mất em bé đâu...

ANH YÊU EM, HÀ NGỌC DIỆU LINH! ❤️`;

const startBtn = document.getElementById('start-btn');
const textBox = document.getElementById('text-box');
const audio = document.getElementById('my-audio');

let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        textBox.innerHTML += textToType.charAt(index);
        index++;
        textBox.scrollTop = textBox.scrollHeight; // Tự động cuộn hộp thư xuống khi chữ dài ra
        setTimeout(typeWriter, 65); // Đã chỉnh tốc độ gõ vừa phải để người đọc thấm từng câu
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
