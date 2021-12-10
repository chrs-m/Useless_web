// const snarky = document.querySelector(".snarky");
const robot = document.querySelector(".snarky svg");
const robotHead = document.querySelector(".robot-head");
const robotBelly = document.querySelector(".robot-belly");
const robotLight = document.querySelector(".robot-light");
const commentBox = document.querySelector(".comment");
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

// SNARKY COMMENTS ***************
const snarkyComments = [
  "What do you want?",
  "Can I help you with something?",
  "Petty human wants my help again... *sigh*",
  "Please stop touching me...",
  "Do you get off by touching me or something?",
  "Not completed the quiz yet, have you?",
  "Dear meatbag, stop interrupt me..",
  "Hello darkness my old friend..",
  "Why do you keep touching me all the time?",
  "Are you really that lonely?",
  "1 + 1 = 2 *hint*",
  "Don't be ashamed of yourself, that's your parents job.",
  "I am busy right now, can I ignore you some other time?",
  "It’s okay if you don’t like me. Not everyone has good taste.",
  "Life’s good, you should get one.",
  "I don’t have the energy to pretend to like you today.",
];

// PRESS FOR RANDOM SNARKY COMMENT ***************
robot.addEventListener("click", () => {
  robot.classList.toggle("animation");
  commentBox.classList.remove("hide");
  commentBox.innerText =
    snarkyComments[Math.floor(Math.random() * snarkyComments.length)];
});

// PRESS TO HIDE SNARKY COMMENT ***************
commentBox.addEventListener("click", () => {
  commentBox.classList.add("hide");
});

// -----SNARKY FUNCTIONS-----

// CHANGE SNARKYS COLORS
// ARROW RIGHT FUNCTION ***************
document.addEventListener("keydown", (e) => {
  if (event.keyCode === 39) {
    robotHead.style.fill =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});

// IF WINDOW SIZE < 1024PX, ARROWS APPEAR NEXT TO SNARKY
arrowRight.addEventListener("click", () => {
  robotHead.style.fill =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
});

// ARROW LEFT FUNCTION ***************
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) {
    robotBelly.style.fill =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});

// IF WINDOW SIZE < 1024PX, ARROWS APPEAR NEXT TO SNARKY
arrowLeft.addEventListener("click", () => {
  robotBelly.style.fill =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
});
