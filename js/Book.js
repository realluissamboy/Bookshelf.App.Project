class Book {
  constructor(author, language, subject, title, bookcover, comment) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.bookcover =
      bookcover || "https://png.pngtree.com/png-clipart/20210311/original/pngtree-an-open-blue-cartoon-book-png-image_6019373.jpg";
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
    author.textContent = `Written by ${this.author}`;

    bookcard.append(bookcover, title, author);

    return bookcard;
  }
}
