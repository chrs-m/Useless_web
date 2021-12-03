//BACKGROUND COLORS
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

// CHANGE BACKGROUND ON SCROLL
document.addEventListener("scroll", (e) => {
  document.body.style.backgroundColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
});

// INFO CONTAINER
const info = document.querySelector(".info");
const infoContainer = document.querySelector(".info-container");

// TOGGLE TO SHOW INFO CONTAINER
info.addEventListener("click", () => {
  infoContainer.classList.toggle("hide");
});

// HIDE THE INFO CONTAINER
infoContainer.addEventListener("click", () => {
  infoContainer.classList.add("hide");
});
