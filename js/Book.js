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

    let bookcover = document.createElement("img");
    bookcover.src = this.bookcover;

    let title = document.createElement("em");
    title.textContent = this.title;

    let author = document.createElement("p");
    author.textContent = `Written by \n ${this.author}`;

    let commentForm = document.createElement("form");
    commentForm.setAttribute("action", "#");
    commentForm.setAttribute("method", "POST");

    let commentField = document.createElement("textarea");
    commentField.setAttribute("name", "review");
    commentField.setAttribute("placeholder", "Leave a review...");
    commentForm.appendChild(commentField);

    let submitButton = document.createElement("button");
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
      commentListItem.classList.add("commentBooks");
      commentsList.appendChild(commentListItem);

      commentField.value = "";
    });

    bookcard.append(bookcover, title, author, commentForm, commentsList);

    return bookcard;
  }
}
