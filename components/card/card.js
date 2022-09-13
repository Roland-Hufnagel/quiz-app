function createCard(question, answer, tag) {
    const li = document.createElement("li");
    li.classList.add("card__list-item", "explode-animation");
    li.innerHTML = `
      <section class="card">
      <p class="card__question" data-js="question"></p>
      <button class="card__answer-button" data-js="answer-button">Show Answer</button>
      <p class="card__answer card__answer--off" data-js="answer"></p>
      <ul class="card__tag-list">
        <li class="card__tag-list-item"><button data-js="tag"></button></li>
      </ul>
      <input
        type="image"
        alt="bookmark icon"
        class="card__bookmark-icon"
        src="icons/bookmark.png"
        data-js="bookmark-button"
      />
      </section
      `;
    li.querySelector('[data-js="question"]').textContent = question;
    li.querySelector('[data-js="answer"]').textContent = answer;
    li.querySelector('[data-js="tag"]').textContent = "#" + tag;
  
    //Bookmark-Eventlistener hinzufügen:
    const bookmarkButton = li.querySelector('[data-js="bookmark-button"]');
    bookmarkButton.addEventListener("click", () => {
      bookmarkButton.src.endsWith("bookmark.png")
        ? (bookmarkButton.src = "icons/bookmark-black.png")
        : (bookmarkButton.src = "icons/bookmark.png");
      bookmarkButton.classList.toggle("small-animation");
    });
    //Show Answer Eventlistener hinzufügen:
    const answerButton = li.querySelector('[data-js="answer-button"]');
    answerButton.addEventListener("click", (event) => {
      //const answer = document.querySelector('[data-js="answer"]');
      const answer = event.target.nextElementSibling; //querySelector geht hier nicht, weil immer das erste Element genommen wird!!!
      answer.classList.toggle("card__answer--off");
      answerButton.textContent == "Hide Answer"
        ? (answerButton.textContent = "Show Answer")
        : (answerButton.textContent = "Hide Answer");
    });
    return li;
  }

  export default createCard;