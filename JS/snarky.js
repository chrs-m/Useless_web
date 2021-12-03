const snarky = document.querySelector(".snarky");
const triangle = document.querySelector(".triangle");
const commentBox = document.querySelector(".comment");

// SNARKY COMMENTS
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
  "Go do someting meaningful instead of taking up my time with this nonsense.",
  "1 + 1 = 2 *hint*",
];

// PRESS FOR RANDOM SNARKY COMMENT
snarky.addEventListener("click", () => {
  commentBox.classList.remove("hide");
  commentBox.innerText =
    snarkyComments[Math.floor(Math.random() * snarkyComments.length)];
});

// PRESS TO HIDE SNARKY COMMENT
commentBox.addEventListener("click", () => {
  commentBox.classList.add("hide");
});

// -----SNARKY FUNCTIONS-----

// CHANGE SNARKYS COLORS
// ARROW RIGHT FUNCTION
document.addEventListener("keydown", (e) => {
  if (event.keyCode === 39) {
    triangle.style.borderBottomColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});
// ARROW LEFT FUNCTION
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) {
    snarky.style.backgroundColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});
