// const answerButton = document.querySelector('[data-js="answer-button"]');

// answerButton.addEventListener("click", () => {
//   const answer = document.querySelector('[data-js="answer"]');

//   answer.classList.toggle("card__answer--off");

//   answerButton.textContent == "Hide Answer"
//     ? (answerButton.textContent = "Show Answer")
//     : (answerButton.textContent = "Hide Answer");
// });
// die Alternative:
const addCardButton = document.querySelector('[data-js="addCard"]');
addCardButton.addEventListener("click", (event) => {
  createCard();
});

function createCard() {
  const main = document.querySelector('[data-js="main"]');

  const section = document.createElement("section");
  section.classList.add("card");
  section.innerHTML = `
  <p class="card__question">What properties flips the axes in flexbox?</p>
        
        <p class="card__answer card__answer--off" data-js="answer">
          Property <strong>flex-direction</strong> will do so
        </p>
        <ul class="card__tag-list">
          <li class="card__list-item"><button>#html</button></li>
          <li class="card__list-item"><button>#flexbox</button></li>
          <li class="card__list-item"><button>#css</button></li>
        </ul>
        <input
          type="image"
          alt="bookmark icon"
          class="card__bookmark-icon"
          src="icons/bookmark.png"
        />
  `;
  const button = document.createElement("button");
  button.classList.add("card__answer-button");
  button.textContent = "Show Answer";
  section.insertBefore(button, section.children[2]);
  const p = document.createElement("p");
  p.classList.add("card__answer");
  p.classList.add("card__answer--off");
  p.innerHTML = "Property <strong>flex-direction</strong> will do so";
  section.insertBefore(p, section.children[3]);
  button.addEventListener("click", () => {
    p.classList.toggle("card__answer--off");
    button.textContent == "Hide Answer"
      ? (button.textContent = "Show Answer")
      : (button.textContent = "Hide Answer");
  });

  main.append(section);
}
