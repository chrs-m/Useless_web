const startButton = document.querySelector(".start-btn");
const nextButton = document.querySelector(".next-btn");
const questionContainer = document.querySelector(".question-container");
const questionElement = document.querySelector(".question");
const answerBtnsElement = document.querySelector(".answer-btns");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  questions.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerBtnsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerBtnsElement.firstChild) {
    answerBtnsElement.removeChild(answerBtnsElement.firstChild);
  }
}

function selectAnswer(e) {}

const questions = [
  {
    question: "What is 1 + 1?",
    answers: [
      { text: "2", correct: true },
      { text: "5", correct: false },
    ],
  },
];
