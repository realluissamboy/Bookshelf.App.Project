class Bookshelf {
  constructor(books = []) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  render() {
    const div = document.createElement("div");

    for (const book of this.books) {
      div.append(book.render());
    }

    return div;
  }
}
