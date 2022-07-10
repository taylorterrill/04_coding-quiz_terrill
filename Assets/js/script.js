var startButton = document.getElementById('start-button');
var questionContainer = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

var shuffledQuestions;
var questionIndex;


// starts quiz when start button is clicked
startButton.addEventListener('click', startQuiz);

// function to start game
function startQuiz() {
    // hides start button
    startButton.classList.add('hide');
    // shows questions
    questionContainer.classList.remove('hide');
    // shuffles questions
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionIndex = 0;

    nextQuestion()

}


// function to display next question
function nextQuestion() {
    showQuestion(shuffledQuestions[questionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question

}

//function to pick answer
function selectAnswer() {

}

//array for Qs & As objects

var questions = [
    { 
        question: 'Inside which tag do you put JavaScript?',
        answers: [
            { text: '<var>', correct: false },
            { text: '<script>', correct: true },
            { text: '<section>', correct: false },
            { text: '<div>', correct: false },
        ]
    }

]