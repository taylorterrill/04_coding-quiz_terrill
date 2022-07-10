var startButton = document.getElementById('start-button');
var nextButton = document.getElementById('next-button');
var questionContainer = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

var shuffledQuestions;
var questionIndex;


// starts quiz when start button is clicked
startButton.addEventListener('click', startQuiz);

// creates functionality for next question button
nextButton.addEventListener('click', () => {
    questionIndex++;
    nextQuestion();
})


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
    // grabs question from objects in questions array
    questionElement.innerText = question.question;

    // creates new buttons for answers that correspond to the question selected
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

// clears default buttons when answer buttons appears
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//function to pick answer
function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > questionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        //show scoreboard
    }
    
}

//decides if status is correct or wrong
function setStatusClass (element, correct)  {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// clears status
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
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