import createCard from "../card/card.js";
import {loadCards, saveCards} from "../localstorage.js"

// Funktionalität Create Card
const form = document.querySelector('[data-js="form"]');
form.querySelector('[data-js="question-input"]').focus();

// Funktionalität '...Characters left':
const questionInput = form.querySelector('[data-js="question-input"]');
const answerInput = form.querySelector('[data-js="answer-input"]');
const max1 = questionInput.maxLength;
const max2 = answerInput.maxLength;

resetLeftChar();
function resetLeftChar() {
  questionInput.nextElementSibling.textContent = `(${max1} Characters left)`;
  answerInput.nextElementSibling.textContent = `(${max2} Characters left)`;
}
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Daten aus der Form holen
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //Neue Karte erzeugen
  const newCard = createCard(data.question, data.answer, data.tag);
  //Die neuen Karten OBEN hinzufügen:
  const cardList = document.querySelector('[data-js="card-list"]');
  cardList.insertBefore(newCard, cardList.firstElementChild);
  //Left-Character resetten, Form leeren und Focus setzen
  resetLeftChar();
  form.reset();
  form.querySelector('[data-js="question-input"]').focus();
  //Karte im localStorage speichern:
  const cardObject = {
    id: Math.random() + "",
    question: data.question,
    answer: data.answer,
    tag: data.tag,
    bookmarked: false,
  };
  const cards = loadCards();
  cards.push(cardObject);
  saveCards(cards);
});
