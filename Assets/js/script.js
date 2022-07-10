var startButton = document.getElementById('start-button');
var nextButton = document.getElementById('next-button');
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
    resetState();
    showQuestion(shuffledQuestions[questionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);  
    })

}

// clears buttons when question appears
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//function to pick answer
function selectAnswer(e) {

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