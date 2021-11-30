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
];

// PRESS FOR RANDOM SNARKY COMMENT
snarky.addEventListener("click", () => {
  commentBox.classList.remove("hide");
  commentBox.innerText =
    snarkyComments[Math.floor(Math.random() * snarkyComments.length)];
});

//BACKGROUNDCOLORS
const backgroundColors = [
  "aquamarine",
  "hotpink",
  "white",
  "rgb(255, 185, 127)",
  "rgb(255, 131, 127)",
  "rgb(127, 255, 191)",
  "rgb(127, 219, 255)",
  "rgb(127, 129, 255)",
  "rgb(241, 210, 180)",
  "rgb(241, 237, 180)",
  "rgb(197, 241, 180)",
  "rgb(184, 180, 241)",
  "rgb(199, 113, 113)",
  "rgb(83, 106, 235)",
  "rgb(235, 83, 116)",
  "rgb(83, 235, 129)",
  "rgb(154, 83, 235)",
];

// PRESS TO HIDE SNARKY COMMENT
commentBox.addEventListener("click", () => {
  commentBox.classList.add("hide");
});

// LISTEN FOR EVENT (FINDING KEYCODES)
document.addEventListener("keydown", (keyPress) => {
  //   console.log(event);
});

// SNARKY FUNCTIONS
// ARROW RIGHT FUNCTION
document.addEventListener("keydown", (e) => {
  if (event.keyCode === 39) {
    // console.log("moving right");
    triangle.style.borderBottomColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});
// ARROW LEFT FUNCTION
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) {
    // console.log("moving left");
    triangle.style.borderBottomColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});
// ARROW DOWN FUNCTION
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 40) {
    // console.log("moving down");
    snarky.style.backgroundColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});
// ARROW UP FUNCTION
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38) {
    // console.log("moving up");
    snarky.style.backgroundColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});

const surprise = document.querySelector(".surprise");

surprise.addEventListener("click", () => {
  celebrate();
});
