document.addEventListener("DOMContentLoaded", function () {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const question = document.getElementById("question");
    const answerInput = document.getElementById("answer");
    const result = document.getElementById("result");
    const submitButton = document.getElementById("submit");

    let questions = [];
    let currentQuestionIndex = 0;

    function startGame() {
        // Populate questions array (you can fetch this from your server if needed)
        for (let i = 1; i <= 12; i++) {
            for (let j = 1; j <= 12; j++) {
                questions.push({ num1: i, num2: j, answer: i * j });
            }
        }
        // Shuffle the questions
        questions.sort(() => Math.random() - 0.5);
        askQuestion();
    }

    function askQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            question.textContent = `What is ${currentQuestion.num1} x ${currentQuestion.num2}?`;
            answerInput.value = "";
            result.textContent = "";
            currentQuestionIndex++;
        } else {
            questionContainer.style.display = "none";
            resultContainer.innerHTML = "<h2>Game Over</h2>";
        }
    }

    submitButton.addEventListener("click", function () {
        const userAnswer = parseInt(answerInput.value);
        const currentQuestion = questions[currentQuestionIndex - 1];
        if (userAnswer === currentQuestion.answer) {
            result.textContent = "Correct!";
        } else {
            result.textContent = `Wrong! The correct answer is ${currentQuestion.answer}`;
        }
        askQuestion();
    });

    startGame();
});
