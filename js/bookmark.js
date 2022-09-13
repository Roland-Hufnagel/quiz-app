import createCard from "../components/card/card.js";
import {loadCards} from "../components/localstorage.js";
//import {cards} from "../components/data/data.js";
const cardList = document.querySelector('[data-js="card-list"]');

// cards.forEach(card => {
//     const newCard = createCard(card.question, card.answer, card.tag);
//     cardList.append(newCard);
// })
const cards = loadCards();
cards.forEach(card => {
    const newCard = createCard(card.question, card.answer, card.tag);
    cardList.append(newCard);
})