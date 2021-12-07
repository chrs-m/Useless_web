// PRESS FOR JOKE FUNCTION ***************
const dadEmoji = document.querySelector(".dad-emoji");
const jokeContainer = document.querySelector(".dad-joke");

// RUN THIS CODE FOR LOCAL API ***************

// // REQUEST CONST
// const myRequest = new Request("api/jokes.json");
// dadEmoji.addEventListener("click", () => {
//   jokeContainer.classList.remove("hide");
//   fetch(myRequest)
//     .then((response) => response.json())
//     .then((jokes) => {
//       jokeContainer.classList.remove("hide");
//       jokeContainer.innerText = jokes[Math.floor(Math.random() * jokes.length)];
//     })
//     .catch(console.error);
// });

// ----------------------------------------------------------------

// RUN THIS CODE TO USE ICANHAZDADJOKE API ***************

dadEmoji.addEventListener("click", generateJokes);

async function generateJokes() {
  const jokes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await jokes.json();

  jokeContainer.classList.remove("hide");
  jokeContainer.innerText = joke.joke;
}

// TO HIDE THE JOKE CONTAINER ***************
jokeContainer.addEventListener("click", () => {
  jokeContainer.classList.add("hide");
});
