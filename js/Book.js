class Book {
  constructor(author, language, subject, title, bookcover, comment) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.bookcover =
      bookcover || "http://clipart-library.com/images/kcKBM4E7i.png";
    this.comment = [];
  }

  render() {
    const bookcard = document.createElement("section");
    bookcard.classList.add("bookcard");

    let bookcover = document.createElement("img");
    bookcover.src = this.bookcover;

    let title = document.createElement("p");
    title.textContent = this.title;

    let author = document.createElement("p");
    author.textContent = this.author;

    bookcard.append(bookcover, title, author);

    return bookcard;
  }
}
