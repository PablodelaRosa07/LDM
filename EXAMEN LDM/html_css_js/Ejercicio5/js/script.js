const questions = [ // NO USAR CONST, USAR VAR
    {
        question: "¿Qué significa HTML?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "High Tech Modern Language", correct: false },
            { text: "HyperTransfer Markup Level", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },
    {
        question: "¿Cuál es el lenguaje de programación estándar para la web?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "Swift", correct: false }
        ]
    },
    {
        question: "¿Qué propiedad de CSS se usa para cambiar el color de fondo?",
        answers: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "border-style", correct: false },
            { text: "font-weight", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

const homeScreen = document.getElementById('home-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const timerDisplay = document.getElementById('timer');

document.getElementById('start-btn').addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    homeScreen.classList.add('hide');
    questionScreen.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    startTimer();
}

function showQuestion(question) {
    questionText.innerText = question.question;
    document.getElementById('question-number').innerText = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        if (answer.correct) button.dataset.correct = true;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    clearInterval(timerInterval);
    timeLeft = 15;
    timerDisplay.innerText = `Tiempo: ${timeLeft}s`;
    nextBtn.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }

    // Mostrar la respuesta correcta si se falló
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add('correct');
        button.disabled = true;
    });

    if (questions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        setTimeout(showResults, 1000);
    }
    clearInterval(timerInterval);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Tiempo: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add('correct');
        button.disabled = true;
    });
    nextBtn.classList.remove('hide');
}

function showResults() {
    questionScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    document.getElementById('score-text').innerText = `Puntaje Final: ${score} de ${questions.length}`;
}