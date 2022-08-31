const answerButton = document.querySelector('[data-js="answer-button"]');

answerButton.addEventListener("click", () => {
  const answer = document.querySelector('[data-js="answer"]');
  
  answer.classList.toggle("card__answer--off");

  answerButton.textContent == "Hide Answer"
    ? (answerButton.textContent = "Show Answer")
    : (answerButton.textContent = "Hide Answer");
});
