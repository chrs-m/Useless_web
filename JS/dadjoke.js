// REQUEST CONST
const myRequest = new Request("./api/jokes.json");

// PRESS FOR JOKE FUNCTION
const dadEmoji = document.querySelector(".dad-emoji");
const jokeContainer = document.querySelector(".dad-joke");

dadEmoji.addEventListener("click", () => {
  jokeContainer.classList.remove("hide");
  fetch(myRequest)
    .then((response) => response.json())
    .then((jokes) => {
      jokeContainer.classList.remove("hide");
      jokeContainer.innerText = jokes[Math.floor(Math.random() * jokes.length)];
    })
    .catch(console.error);
});

jokeContainer.addEventListener("click", () => {
  jokeContainer.classList.add("hide");
});
