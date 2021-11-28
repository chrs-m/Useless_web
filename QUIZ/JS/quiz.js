// DOCUEMNT QUERIES
const startButton = document.querySelector(".start-btn");
const nextButton = document.querySelector(".next-btn");
const questionContainer = document.querySelector(".question-container");
const questionElement = document.querySelector(".question");
const answerButtonsElement = document.querySelector(".answer-btns");

let shuffledQuestions, currentQuestionIndex;

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// START AND NEXT BUTTONS EVENTS
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// QUESTIONS ARRAY
const questions = [
  {
    question: "What is 1 + 1?",
    answers: [
      { text: "2", correct: true },
      { text: "5", correct: false },
      { text: "Yes", correct: false },
      { text: "Ok.", correct: false },
    ],
  },
  {
    question: "The year is?",
    answers: [
      { text: "1337", correct: false },
      { text: "1", correct: false },
      { text: "2021", correct: true },
      { text: "What was the question?", correct: false },
    ],
  },
];

// START GAME EVENT
function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

// QUESTION EVENTS
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// RESET
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// SELECTED ANSWER EVENTS AND RESTART
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Go again?";
    startButton.classList.remove("hide");
  }
}

// CORRECT OR WRONG EVENT
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// RESET BUTTONS AFTER ANSWER
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
