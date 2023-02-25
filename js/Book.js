class Book {
  constructor(author, language, subject, title, bookcover, comment) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.bookcover =
      bookcover ||
      "https://png.pngtree.com/png-clipart/20210311/original/pngtree-an-open-blue-cartoon-book-png-image_6019373.jpg";
    this.comment = [];
  }

  render() {
    const bookcard = document.createElement("li");
    bookcard.classList.add("bookcard");

    const bookcover = document.createElement("img");
    bookcover.src = this.bookcover;

    const title = document.createElement("em");
    title.textContent = this.title;

    const author = document.createElement("p");
    author.textContent = `Written by \n ${this.author}`;

    const commentButton = document.createElement("button");
    commentButton.setAttribute("type", "button");
    commentButton.textContent = "Leave a comment";

    // Comment Form Region

    const commentForm = document.createElement("form");
    commentForm.setAttribute("action", "#");
    commentForm.setAttribute("method", "POST");
    commentForm.style.display = "none";

    const commentField = document.createElement("textarea");
    commentField.setAttribute("name", "review");
    commentField.setAttribute(
      "placeholder",
      "What did you like about the book?"
    );
    commentField.maxLength = 280;
    commentForm.appendChild(commentField);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    commentForm.appendChild(submitButton);

    const commentsList = document.createElement("ul");
    commentsList.style.marginTop = "10px";

    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const commentText = commentField.value;
      const commentListItem = document.createElement("li");
      commentListItem.textContent = commentText;
      commentListItem.maxLength = 280;
      commentListItem.classList.add("commentBooks");
      commentsList.appendChild(commentListItem);

      commentField.value = "";
    });

    commentField.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();

        const commentText = commentField.value;
        const commentListItem = document.createElement("li");
        commentListItem.textContent = commentText;
        commentListItem.maxLength = 280;
        commentListItem.classList.add("commentBooks");
        commentsList.appendChild(commentListItem);

        commentField.value = "";
      }
    });

    commentButton.addEventListener("click", () => {
      if (commentForm.style.display === "none") {
        commentForm.style.display = "block";
        commentButton.textContent = "Cancel";
      } else {
        commentForm.style.display = "none";
        commentButton.textContent = "Thoughts?";
      }
    });

    // End Comment Form Region

    bookcard.append(
      bookcover,
      title,
      author,
      commentButton,
      commentForm,
      commentsList
    );

    return bookcard;
  }
}
