//BACKGROUND COLORS ***************
const backgroundColors = [
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
  "rgb(123,231,321)",
  "rgb(321,123,123)",
  "rgb(23,123,234)",
  "rgb(23,223,23)",
  "rgb(323,223,23)",
  "rgb(23,22,223)",
  "rgb(23,222,223)",
  "rgb(223,22,123)",
  "rgb(1,1,1)",
  "rgb(255,255,255)",
  "rgb(255,55,255)",
];

// CHANGE BACKGROUND ON SCROLL ***************
document.addEventListener("scroll", (e) => {
  document.body.style.backgroundColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
});

// INFO CONTAINER ***************
const info = document.querySelector(".info");
const infoContainer = document.querySelector(".info-container");

// TOGGLE TO SHOW INFO CONTAINER ***************
info.addEventListener("click", () => {
  infoContainer.classList.toggle("hide");
});

// HIDE THE INFO CONTAINER ***************
infoContainer.addEventListener("click", () => {
  infoContainer.classList.add("hide");
});
