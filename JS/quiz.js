// QUERY SELECTORS
const startButton = document.querySelector(".start-btn");
const nextButton = document.querySelector(".next-btn");
const questionContainer = document.querySelector(".question-container");
const questionElement = document.querySelector(".question");
const answerButtonsElement = document.querySelector(".answer-btns");

let shuffledQuestions, currentQuestionIndex;

const setNextQuestion = () => {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

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
  {
    question: "You are?",
    answers: [
      { text: "Not great", correct: true },
      { text: "Epic", correct: false },
      { text: "Alive?", correct: false },
      { text: "Worthy", correct: false },
    ],
  },
  {
    question: "Most useless thing",
    answers: [
      { text: "Food", correct: false },
      { text: "Water", correct: false },
      { text: "This quiz", correct: false },
      { text: "Me", correct: true },
    ],
  },
];

// START GAME EVENT
const startGame = () => {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
};

// START AND NEXT BUTTONS EVENTS
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
  commentBox.classList.toggle("hide");
});

// QUESTION EVENTS

// RUN THIS CODE IF YOU WANT A NORMAL QUIZ
// const showQuestion = (question) => {
//   questionElement.innerText = question.question;
//   question.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerText = answer.text;
//     button.classList.add("btn");
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//     answerButtonsElement.appendChild(button);
//   });
// };

// RUN THIS CODE IF YOU WANT A 'NEVER CORRECT ANSWER' QUIZ
const showQuestion = (question) => {
  questionElement.innerText = question.question;
  question.answers.forEach((answer, i) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", (event) => {
      selectAnswer(event, i);
    });
    answerButtonsElement.appendChild(button);
  });
};

// RESET
const resetState = () => {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

// SELECTED ANSWER EVENTS AND RESTART

// RUN THIS CODE IF YOU WANT A NORMAL QUIZ
// const selectAnswer = (e) => {
//   const selectedButton = e.target;
//   const correct = selectedButton.dataset.correct;
//   setStatusClass(document.body, correct);
//   Array.from(answerButtonsElement.children).forEach((button) => {
//     setStatusClass(button, button.dataset.correct);
//   });
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove("hide");
//   } else {
//     startButton.innerText = "Go again?";
//     startButton.classList.remove("hide");
//   }
//   // selectedButton.style.backgroundColor = "rgb(143, 143, 143)";
// };

// RUN THIS CODE IF YOU WANT A 'NEVER CORRECT ANSWER' QUIZ
const generateRandomBetween = (min, max, exclude) => {
  let ranNum = Math.floor(Math.random() * (max - min)) + min;

  if (ranNum === exclude) {
    ranNum = generateRandomBetween(min, max, exclude);
  }

  return ranNum;
};

// Test
let randomNr = generateRandomBetween(
  0,
  document.querySelectorAll(".btn").length,
  i
);
console.log(x);

const selectAnswer = (e, i) => {
  const selectedButton = document.querySelectorAll(".btn")[3];
  if (questions[currentQuestionIndex].answers[i].correct) {
    selectedButton = document.querySelectorAll(".btn")[0];
  }
  // const correct = selectedButton.dataset.correct;
  selectedButton.classList.add("correct");
  // setStatusClass(document.body, correct);
  // Array.from(answerButtonsElement.children).forEach((button) => {
  //   setStatusClass(button, button.dataset.correct);
  // });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Go again?";
    startButton.classList.remove("hide");
  }
};

// SNARKY COMMENTS
const answerSnarkyComments = [
  "LOL",
  "This quiz such hard..",
  "The dumbulance is on it's way",
  "Such a hard question, right??? *eyeroll*",
  "Please stop embarassing yourself..",
  "Maybe there is a point for the show 'smarter than a 5h grader' to exist.. (you)",
  "This is just embarassing..",
  "Zzz..",
  "Watching you take this quiz is more entertaining than watching reality TV!",
];

const answerCommentBox = document.querySelector(".comment");

// CORRECT OR WRONG ANSWER
const setStatusClass = (element, correct) => {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
    commentBox.classList.remove("hide");
    answerCommentBox.innerText =
      answerSnarkyComments[
        Math.floor(Math.random() * answerSnarkyComments.length)
      ];
  }
};

// RESET BUTTONS AFTER ANSWER
const clearStatusClass = (element) => {
  element.classList.remove("correct");
  element.classList.remove("wrong");
};
