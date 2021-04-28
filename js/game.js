class Question {
    constructor(content, answer, correctAnswer,) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) { // check câu hỏi
        return answer === this.correctAnswer;
    }
}

let timeCount;
let message;
let timeID = setInterval(function () {
    document.getElementById('timeCountDown').innerHTML = timeCount + "s";
    timeCount--;
    countdown();
}, 1000);

function countdown() { // check thời gian
    if (timeCount < 0) {
        clearInterval(timeID);
        message = window.confirm('BẠN ĐÃ HẾT THỜI GIAN TRẢ LỜI CÂU HỎI');
        reload()
    }
}

let question1 = new Question("Câu 1: Một bàn cờ vua có bao nhiêu quân Tốt? ", ["A. 16 quân", "B. 10 quân", "C. 5 quân", "D. 8 quân"], "A. 16 quân");
let question2 = new Question("Câu 2: A gọi B là bác, B gọi C là ông nội , C kêu D là cậu, D kêu E là dì, E kêu F là chú, F gọi Z là con. Hỏi A gọi Z bằng gì?", ["A.Bằng anh", "B.Bằng miệng", "C.Bằng cháu", "D.Bằng em"], "B.Bằng miệng");
let question3 = new Question("Câu 3: Ấu trùng của muỗi được gọi là gì?", ["A. Bọ chét ", "B. Bọ xít ", "C. Bọ hung", "D. Bọ gậy"], "D. Bọ gậy");
let question4 = new Question("Câu 4: Theo một câu hát: (ba thương con vì con giống me.Mẹ thương con vì con giống ...) ai?", ["A.Thợ sửa ống nước", "B.Bác hàng xóm", "C.Bác trưởng thôn", "D.Ba"], "D.Ba");
let question5 = new Question("Câu 5: Ai là vị vua thứ tám của triều đại nhà Lý?", ["A. Lý Thánh Tông", "B. Lý Nhân Tông", "C. Lý Anh Tông", "D. Lý Huệ Tông"], "D. Lý Huệ Tông");
let question6 = new Question("Câu 6: Tốc độ truyền tin nhanh nhất là gì?", ["A. Đài phát thanh", "B. Smartphone", "C. Đàn bà", "D. google"], "C. Đàn bà");
let question7 = new Question("Câu 7: Mọi  khó khăn đều có thể giải quyết bằng? ", ["A. Hỏi ý mọi người", "B. Hỏi google", "C. Tự mình giải quyết", "D. Hỏi ý kiến vợ"], "B. Hỏi google");
let question8 = new Question("Câu 8: Gấu nào không thích ăn mật ong", ["A. Gấu Xám", "B. Gấu Đen", "C. Gấu Mèo", "D. Đầu Gấu"], "D. Đầu Gấu");
let question9 = new Question("Câu 9: (Cơn lốc màu da cam) là tên của đội bóng nào?", ["A. Hà Lan", "B. Nigeria", "C. Cô-Lôm-Bi-A ", "D. Bờ Biển Ngà"], "A. Hà Lan");
let question10 = new Question("Câu 10: (Nhập gia ...) thì làm sao", ["A. Tùy người", "B. Tùy tâm", "C. Tùy tục", "D. Tùy cảnh"], "C. Tùy tục");

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let getQuestion = document.getElementById('question');
showQuestion(question1);

function next(index) { // chuyển câu hỏi
    index++;
    showQuestion(questions[index]);
}

function showQuestion(question_1) { //show về câu hỏi
    timeCount = 30;
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("questionScreen", questions.indexOf(question_1));
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('answer_' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];
    }
}

showQuestion(question1);
let index = 0;

function checkAnswer(id) {
    console.log(index);
    let answer = document.getElementById(id).innerHTML;
    // let getQuestionId = document.getElementById('question');
    if (!confirm("Bạn đã chắc chắn phương án này không.")) {
        return true;
    }
    if (questions[index].checkAnswer(answer)) {
        alert('Chúc mừng bạn đó là một câu trả lời chính xác.');
        if (index === 9) {
            alert("Xin chúc mừng bạn đã vượt qua toàn bộ câu hỏi, Bạn đã chiến thắng.");
            // document.write("Xin chúc mừng bạn đã vượt qua toàn bộ câu hỏi, Bạn đã chiến thắng.")
            timeCount = 1;
            reload();

        }

        next(index);
        index++;
        console.log(index);
    } else {
        alert(' Đó là một câu trả lời sai.ngu vl');
        reload();
    }
}

function reload() {
    location.replace("index.html");
}
