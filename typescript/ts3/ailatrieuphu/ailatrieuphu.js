class Question {
    constructor(question, answers = [], correct_answer) {
        this.question = question;
        this.answers = answers;
        this.correct_answer = correct_answer;
    }
}
let questions =
    [
        new Question(
            "Ai là tác giả của cuốn tiểu thuyết \"Chiến tranh và hòa bình\"?",
            [
                "A. Leo Tolstoy",
                "B. Fyodor Dostoevsky",
                "C. Charles Dickens",
                "D. Jane Austen"
            ],
            "A. Leo Tolstoy"
        ),

        new Question(
            "Ai là người phát minh ra đèn đốt than?",
            [
                "A. Thomas Edison",
                "B. Nikola Tesla",
                "C. Alexander Graham Bell",
                "D. Benjamin Franklin"
            ],
            "A. Thomas Edison"
        ),

        new Question(
            "Đâu là quốc gia có diện tích lớn nhất thế giới?",
            [
                "A) Nga",
                "B) Trung Quốc",
                "C) Mỹ",
                "D) Canada"
            ],
            "A) Nga"
        ),

        new Question(
            "Loài động vật nào có khả năng bay cao nhất?",
            [
                "A) Đại bàng",
                "B) Hang glider",
                "C) Chim cánh cụt",
                "D) Đại bàng đầu vàng"
            ],
            "A) Đại bàng"
        ),

        new Question(
            "Thành phố nào được gọi là \"Thành phố không bao giờ ngủ\"?",
            [
                "A) New York",
                "B) Paris",
                "C) Tokyo",
                "D) Las Vegas"
            ],
            "D) Las Vegas"
        ),

        new Question(
            "Ai là nhà khoa học phát minh ra lý thuyết hấp dẫn?",
            [
                "A) Albert Einstein",
                "B) Isaac Newton",
                "C) Galileo Galilei",
                "D) Stephen Hawking"
            ],
            "B) Isaac Newton"
        ),

        new Question(
            "Thành phố nào là thủ đô của Pháp?",
            [
                "A) Rome",
                "B) Berlin",
                "C) Paris",
                "D) Madrid"
            ],
            "C) Paris"
        ),

        new Question(
            "Điều gì làm cho lá cây xanh?",
            ["A) Chlorophyll",
                "B) Anthocyanin",
                "C) Xanthophyll",
                "D) Carotenoid"
            ],
            "A) Chlorophyll"
        ),

        new Question(
            "Ai là người đầu tiên đặt chân lên Mặt Trăng?",
            ["A) Neil Armstrong",
                "B) Buzz Aldrin",
                "C) Yuri Gagarin",
                "D) Alan Shepard"
            ],
            "A) Neil Armstrong"
        ),

        new Question(
            "Bức tượng nào nổi tiếng ở New York?",
            ["A) Tượng Chúa Kitô Phục Sinh",
                "B) Tượng Chúa Jesus",
                "C) Tượng Nữ Thần Tự Do",
                "D) Tượng Chúa Giêsu"
            ],
            "C) Tượng Nữ Thần Tự Do"
        ),

        new Question(
            "Loài động vật nào được coi là vua của rừng?",
            ["A) Sư tử",
                "B) Hổ",
                "C) Báo",
                "D) Hà mã"
            ],
            "A) Sư tử"
        ),

        new Question(
            "Đâu là thành phố nằm ở châu Phi?",
            ["A) Sydney",
                "B) Cairo",
                "C) Tokyo",
                "D) Mumbai"
            ],
            "B) Cairo"
        ),

        new Question(
            "Đâu là ngôn ngữ phổ biến nhất trên thế giới?",
            [
                "A) Tiếng Anh",
                "B) Tiếng Tây Ban Nha",
                "C) Tiếng Trung Quốc",
                "D) Tiếng Pháp"
            ],
            "A) Tiếng Anh"
        ),

        new Question(
            "Bộ phim \"Forrest Gump\" được dựa trên cuốn sách nào?",
            [
                "A) The Great Gatsby",
                "B) Catcher in the Rye",
                "C) To Kill a Mockingbird",
                "D) Forrest Gump"
            ],
            "D) Forrest Gump"
        ),

        new Question(
            "Trong hệ Mặt Trời, hành tinh nào là hành tinh lớn nhất?",
            [
                "A) Mặt Trăng",
                "B) Sao Mộc",
                "C) Sao Kim",
                "D) Sao Mộc"
            ],
            "D) Sao Mộc"
        ),

        new Question(
            "Ai là người đầu tiên nhận được giải Nobel Văn học?",
            [
                "A) Ernest Hemingway",
                "B) William Faulkner",
                "C) Rudyard Kipling",
                "D) Thomas Mann"
            ],
            "C) Rudyard Kipling"
        ),

        new Question(
            "Thành phố nào được biết đến với biệt danh \"Thành phố ánh sáng\"?",
            [
                "A) Paris",
                "B) New York",
                "C) Tokyo",
                "D) Sydney"
            ],
            "A) Paris"
        ),

        new Question(
            "Đâu là dòng sông dài nhất thế giới?",
            [
                "A) Dòng sông Amazon",
                "B) Dòng sông Nile",
                "C) Dòng sông Mississippi",
                "D) Dòng sông Yangtze"
            ],
            "B) Dòng sông Nile"
        ),

        new Question(
            "Ai là người phát minh ra máy tính đầu tiên?",
            [
                "A) Alan Turing",
                "B) Charles Babbage",
                "C) Ada Lovelace",
                "D) John von Neumann",
            ],
            " B) Charles Babbage"
        ),
        new Question(
            "Bảng tính toán nào nổi tiếng trong các trò chơi máy tính?",
            [
                "A) Microsoft Excel",
                "B) Google Sheets",
                "C) Lotus 1 - 2 - 3",
                "D) OpenOffice Calc"
            ],
            "C) Lotus 1 - 2 - 3"
        )
    ]
class Program {
    static i = 0;
    static getQuestion() {
        return questions[Program.i]
    }
    static printQuestion() {
        let currentQ = Program.getQuestion();
        let question = document.getElementById('question');
        question.innerHTML = currentQ.question;

        let i = 1;
        for (let current_answer of currentQ.answers) {
            let answer = document.getElementById(`answer` + i++);
            answer.innerHTML = current_answer;
        }
    }
    static getNextQuetstion() {
        Program.i++;
        Program.printQuestion()
    }

    static resetGame() {
        Program.i = 0;
        Program.printQuestion();
    }
    static run() {
        Program.printQuestion();
    }
}

document.getElementById('start').addEventListener('click', Program.printQuestion());


let answers = document.querySelectorAll('.answers')
for (let user_answer of answers) {
    user_answer.addEventListener('click', function () {
        Animation.chooseAnswer(user_answer);
        if (user_answer.innerHTML == Program.getQuestion().correct_answer) {
            Animation.highlightCorrectAnswer(user_answer)
            Animation.resetColor(user_answer);
            setTimeout(Program.getNextQuetstion, 2000);
            console.log(Program.i)
        }
        if (user_answer.innerHTML !== Program.getQuestion().correct_answer) {
            for (let correct_answer of answers) {
                if (correct_answer.innerHTML == Program.getQuestion().correct_answer) {
                    Animation.highlightCorrectAnswer(correct_answer)
                    setTimeout(Animation.resetColor(user_answer), 1000)
                   
                    console.log("uar alo reset cham thoi")
                    setTimeout(Program.resetGame, 2000)
                }
            }
        }
    }
    )
}
class Animation {
    static chooseAnswer(user_answer) {
        user_answer.style.background = 'rgba(255,171,0,1)';
    }
    static highlightCorrectAnswer(correct_answer) {
        setTimeout(function () {
            correct_answer.style.animation = 'right 0.5s 2';
        }, 1000)

    }
    static resetColor(user_answer) {
        setTimeout(function() {
            user_answer.style.background = 'linear-gradient(rgba(5, 0, 82, 1) 22%, rgba(9, 9, 121, 1) 29%, rgba(0, 116, 255, 1) 100%)'
        }, 1000)
    }
    static pointColor
}





