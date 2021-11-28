const snarky = document.querySelector(".snarky");
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

snarky.addEventListener("click", () => {
  commentBox.classList.remove("hide");
  commentBox.innerText =
    snarkyComments[Math.floor(Math.random() * snarkyComments.length)];
});

commentBox.addEventListener("click", () => {
  commentBox.classList.add("hide");
});
