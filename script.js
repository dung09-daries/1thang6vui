// Nội dung bức thư gửi Hà Ngọc Diệu Linh
const textToType = `Hi em bé yêu! 

Chiều nay anh mới lấy hết can đảm để viết cái này cho em vì anh nhớ em quá. Nhưng sợ sẽ làm phiền em nên anh không gửi tin nhắn đâu...

Gần 3 tháng từ khi em nói chia tay, nhưng anh chưa bao giờ muốn em đi cả. Em ở bên anh, anh chỉ mang tới những phiền phức với toàn làm em khóc thôi. Mọi bựa em chưa đi, anh còn có thể tìm em với hỏi em đang làm gì. Nhưng giờ anh nhớ em là anh vô TikTok tìm em rồi ngồi ngẩn người ra, mở máy coi lại hình em với mấy con gấu em tặng anh, anh cứ coi hắn mãi... Đi học ngồi ở đâu anh cũng nhìn em hết, anh nhớ em bé quá! 

Nhưng đó như hình phạt cho anh rứa hè. Anh nói dối em lần này đến lần khác, rồi còn làm điều em không thích nữa, làm em khó chịu với anh lắm mới quyết định nói chia tay như rứa. Anh vụng về quá, ích kỷ làm tổn thương em - người quan trọng nhất. 

Em bé ơi, anh không muốn mất em đâu! Anh không biết em có đọc những dòng này của anh không, nhưng nếu em đọc thì anh cảm ơn em đã cho anh một cơ hội nói ra hết. Từ ngày hôm đó, anh cứ suy nghĩ mãi về anh và em. Anh trở thành người mà anh không nhận ra anh là ai nữa, anh buồn quá mới nói ra hết. Nhiều lần em nói anh đừng liên quan tới nhau nữa, nhưng anh không làm như rứa được. Hôm bựa em bị ngã xe anh sợ lắm, bơ anh mới qua coi em đi học, với lại anh cũng không đi gần em đâu.

Anh chưa có khi nào coi tình cảm là cái dễ dàng buông bỏ đâu. Khi anh chọn yêu em, anh chưa từng nghĩ tới chuyện sẽ bỏ em đâu. Cho dù em có nói những cái chi nặng lời nhất thì anh cũng không bao giờ bỏ em đâu, anh không bỏ em được. Ngày em đi anh buồn anh đau rứa, từ ngày đó anh không ăn một cái chi nguyên cả ngày, nằm mơ mãi luôn. Hôm nào anh cũng qua nhà em một vòng rồi về... Anh nhớ em bé nhiều lắm rồi!

Anh viết những dòng này ra anh không mong em tha thứ cho anh đâu, anh chỉ mong vẫn có một cơ hội dù cho là nhỏ nhất thôi. Anh vẫn muốn được đồng hành cùng em thêm nữa, không muốn mất em. Anh mong anh sẽ được đồng hành cùng em bé...

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
