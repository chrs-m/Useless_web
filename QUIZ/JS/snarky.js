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
  "white",
  "red",
  "blue",
  "green",
  "hotpink",
  "limegreen",
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
  if (event.keyCode === 37) {
    // console.log("moving left");
    triangle.style.borderBottomColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});
// ARROW DOWN FUNCTION
document.addEventListener("keydown", (e) => {
  if (event.keyCode === 40) {
    // console.log("moving down");
    snarky.style.backgroundColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});
// ARROW UP FUNCTION
document.addEventListener("keydown", (e) => {
  if (event.keyCode === 38) {
    // console.log("moving up");
    snarky.style.backgroundColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }
});
