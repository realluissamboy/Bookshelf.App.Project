// Initialization

const app = document.querySelector("#book-list");
const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}
// app.append(bookshelf.render());

// const bookForm = document.querySelector(".book-form");
const bookList = document.querySelector("#book-list");

// bookForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const title = document.querySelector("#title").value;
//   const author = document.querySelector("#author").value;
//   const language = document.querySelector("#language").value;
//   const subject = document.querySelector("#subject").value;
//   const bookcover = document.querySelector("#coverurl").value;
//   const book = new Book(author, language, subject, title, bookcover);
//   bookshelf.addBook(book);
//   bookList.append(bookshelf.render());
// });

bookList.append(bookshelf.render());
