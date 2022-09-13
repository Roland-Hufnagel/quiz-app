import createCard from "../components/card/card.js";
//import {cards} from "../components/data/data.js";
import { loadCards } from "../components/localstorage.js";
const cardList = document.querySelector('[data-js="card-list"]');

// cards.forEach(card => {
//   const newCard = createCard(card.question, card.answer, card.tag);
//   cardList.append(newCard);
//})
// const objArray = JSON.stringify(cards);
// console.log(objArray);
// localStorage.setItem("cards", objArray);

// const card1 = createCard("Frage1", "Antwort1", "Tag1");
// const card2 = createCard("Frage2", "Antwort2", "Tag2");
// const card3 = createCard("Frage3", "Antwort3", "Tag3");
// cardList.append(card1, card2, card3);

const cards = loadCards();

cards.forEach((card) => {
  const newCard = createCard(card.question, card.answer, card.tag);
  cardList.append(newCard);
});
