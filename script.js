// Nội dung bức thư gửi Hà Ngọc Diệu Linh
const textToType = `Chào emm bee yêu cô gái anhh thương nhất anhh đã làm cho emm thất vọng rất nhiều ruii aa emm bee ơi anhh muốn gặp emm để ôm emm thật lâu vô long và cho emm bee trút hết những sự thất vong nớ vô anhh, anhh luôn là người gây ra rắc rối cho emm bee aa , emm bee vì anhh mà thất vọng rất laa nhìu , lúc emm bee mệt anhh cx gây chuyện lúc emm bee họt baii anhh cũm gây chuyên aa...

Đây anhh nói hemm phải là nói lẫy hay chi aa nhma anhh chộ như rua thiệt từ khi yêu anh emm bee bị anhh kiểm soát nhiều quái lúc mô cũng cấm emm bee cấy ni cấy tê hêm cho emm bee được làm chính mình cũn vì sự ích kỉ của mình maaa lamm cho emm bee khó chịu hemm vui , đôi lúc anhh nóng giận nữa những lúc nớ anhh đã vô tình k kiểm soát đc cảm xúc của anhh làm cho emm bee bị mất mặt trước tất cả mọi người...

Từ trước đến h anhh chưa từng yêu 1 cách đàng hoàng aa nhma từ khi gặp emm bee aa anhh cảm giác được yêu hắn như rang hắn khó tả lắm kiểu như được qtam môi khi bị chi đó … nhma niềm vui hemm được lâu thì anhh lại làm emm thất vọng anhh vs emm bee đã cãi nhau hơn 1 tháng vẫn chưa có dấu hiệu dừng lại những niềm vui thường tới rất sớm nhưng đi cx sớm để lại sau đó là những nỗi buồn , đêm mô nằm anhh cx khóc hết aaa hemm phai vi buồn mà là khóc vì anhh đã làm cho cô gái của anhh thươnng buồn thất vọng.

Nhma cho dù emm bee coos nói chi nặng lời vs anhh hay nói chia tay cả ngàn lần cả tram lần đi nữa thì anhh sẽ k bao h đồng ý mô aa vì emm bee là một nữa của anhh , anhh k còn chi trong tay nữa , anhh mong emm sẽ ở bên anhh aaa hemm rời đi nũa aaa...

Nãy h nói đủ ruii nhma 1/6 ni anhh chúc cho cô gái của anhh luôn vui vẻ khônng buồn bã và luôn giữ nụ cười ở trên môi để che lấp đi những giọt nước mắt những nỗi buồn mà anhh đã làm aaa, chúc emm ngày càng xinh đẹp aa sức khoẻ dồi dào và luôn là của anhh và là chính mình emm nhé!

Cuối cùng anhh xin cảm ơn emm đã luôn đồng hành cùng anhh aa!!! 
Anhh yêu emm Hà Ngọc Diệu Linh. ❤️`;

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