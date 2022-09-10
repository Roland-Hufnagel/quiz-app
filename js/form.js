// Funktionalität Create Card
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  createCard(data);
  form.reset();
  form.querySelector('[data-js="question-input"]').focus();
  const paragraphs = form.querySelectorAll("p");
  for (const p of paragraphs) {
    p.textContent = "";
  }
});

function createCard(data) {
  const main = document.querySelector('[data-js="main"]');
  const section = document.createElement("section");
  section.classList.add("card");
  section.classList.add("explode-animation");
  section.innerHTML = `
    <p class="card__question" data-js="question"></p>
    <button class="card__answer-button" data-js="answer-button">Show Answer</button>
    <p class="card__answer card__answer--off" data-js="answer"></p>
    <ul class="card__tag-list">
      <li class="card__list-item"><button data-js="tag"></button></li>
    </ul>
    <input
      type="image"
      alt="bookmark icon"
      class="card__bookmark-icon"
      src="icons/bookmark.png"
      data-js="bookmark-button"
    />
    `;
  section.querySelector('[data-js="question"]').textContent = data.question;
  section.querySelector('[data-js="answer"]').textContent = data.answer;
  section.querySelector('[data-js="tag"]').textContent = "#" + data.tag;

  //Die neuen Karten OBEN hinzufügen:

  const output = main.querySelector('[data-js="output"]');
  output.insertBefore(section, output.firstElementChild);

  //Bookmark-Eventlistener hinzufügen:
  const bookmarkButton = section.querySelector('[data-js="bookmark-button"]');
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.src.endsWith("bookmark.png")
      ? (bookmarkButton.src = "icons/bookmark-black.png")
      : (bookmarkButton.src = "icons/bookmark.png");
  });
  //Show Answer Eventlistener hinzufügen:
  const answerButton = section.querySelector('[data-js="answer-button"]');
  answerButton.addEventListener("click", (event) => {
    console.log(event.target.nextElementSibling); //querySelector geht hier nicht, weil immer das erste Element genommen wird!!!
    //const answer = document.querySelector('[data-js="answer"]');
    const answer = event.target.nextElementSibling;
    answer.classList.toggle("card__answer--off");
    answerButton.textContent == "Hide Answer"
      ? (answerButton.textContent = "Show Answer")
      : (answerButton.textContent = "Hide Answer");
  });
}

// Funktionalität '...Characters left':
const questionInput = form.querySelector('[data-js="question-input"]');
const answerInput = form.querySelector('[data-js="answer-input"]');
const max1 = questionInput.maxLength;
const max2 = answerInput.maxLength;

questionInput.addEventListener("input", (event) => {
  const actualInputLength = questionInput.value.length;
  questionInput.nextElementSibling.textContent = `(${
    max1 - actualInputLength
  } characters left.)`;
});

answerInput.addEventListener("input", (event) => {
  const actualInputLength = answerInput.value.length;
  answerInput.nextElementSibling.textContent = `(${
    max2 - actualInputLength
  } characters left.)`;
});
