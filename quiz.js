const questions = [

    {
        questions: "Which is the Largest animal in the World",
        answers : [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        questions: "Which is the Largest desert in the World",
        answers : [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: true},
            { text: "Sahara", correct: false},
            { text: "Egypt", correct: false},
        ]
    },
    {
        questions: "Which is the Largest Ocean in the World",
        answers : [
            { text: "Pacific", correct: false},
            { text: "Indian", correct: true},
            { text: "Atlantic", correct: false},
            { text: "Arctic", correct: false},
        ]
    },
    {
        questions: "Which is the smallest continent in the World",
        answers : [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    questions;


}
