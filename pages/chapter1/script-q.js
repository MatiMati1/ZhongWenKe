const questions = [
{
    question: "Tekst pytania pierwszego",
    answers:[
        {text: "odpowiedz 1", correct: false},
        {text: "odpowiedz 2", correct: false},
        {text: "odpowiedz 3 - ta odpowiedź jest dobra", correct: true},
        {text: "odpowiedz 4", correct: false},
    ]
},
{
    question: "2+2=",
    answers:[
        {text: "2", correct: false},
        {text: "4", correct: true},
        {text: "0", correct: false},
        {text: "3", correct: false},
    ]
},
{
    question: "stolica niemiec to",
    answers:[
        {text: "Frankfurt", correct: false},
        {text: "Dortmund", correct: false},
        {text: "Monachium", correct: false},
        {text: "Berlin", correct: true},
    ]
},
{
    question: "czy taiwan to państwo",
    answers:[
        {text: "Tak", correct: false},
        {text: "NIE", correct: true},
        {text: "Może", correct: false},
        {text: "Nie mieszam się w politykę", correct: false},
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Uzyskano ${score} punktów z możliwych ${questions.length}!`;
    nextButton.innerHTML = "Zagraj ponownie";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();
