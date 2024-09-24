let score = 0;
let currentAnswer = 0;
let timer;

document.getElementById('startButton').addEventListener('click', startQuiz);
document.getElementById('rulesButton').addEventListener('click', showRules);
document.getElementById('submitAnswer').addEventListener('click', checkAnswer);
document.getElementById("quitButton").addEventListener("click", quithome);
function quithome(){
    window.location.href = "index.html";
}
function startQuiz() {
    score = 0;
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('rulesButton').classList.add('hidden');
    document.getElementById('quitButton').classList.add('hidden');
    document.getElementById('resultContainer').classList.add('hidden');
    nextQuestion(Math.floor(Math.random() * 10)); 
}

function showRules() {
    alert("Rules:\n1. Answer the math questions correctly.\n2. The difficulty increases as you progress.\n3. You have 10 seconds to answer each question.\n4. The quiz ends when you answer incorrectly.");
}

function nextQuestion(previousAnswer) {
    clearInterval(timer);  // Clear the previous timer
    const num2 = Math.floor(Math.random() * 10);
    currentAnswer = previousAnswer + num2;
    document.getElementById('question').textContent = `${previousAnswer} + ${num2} = ?`;
    document.getElementById('answerInput').value = '';
    startTimer();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answerInput').value);
    if (userAnswer === currentAnswer) {
        score++;
        nextQuestion(userAnswer);
    } else {
        endQuiz();
    }
}

function startTimer() {
    let timeLeft = 15;  // 10 seconds for each question
    document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}
function goToStart() {
    document.getElementById('container').classList.remove('hidden');
    document.getElementById('startButton').classList.remove('hidden');
    document.getElementById('rulesButton').classList.remove('hidden');
    document.getElementById('quitButton').classList.remove('hidden');
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultContainer').classList.add('hidden');
}
function endQuiz() {
    clearInterval(timer);
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultContainer').classList.remove('hidden');
    document.getElementById('resultMessage').textContent = 'Better luck next time!';
    document.getElementById('score').textContent = `Your score: ${score}`;
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('rulesButton').classList.add('hidden');
}