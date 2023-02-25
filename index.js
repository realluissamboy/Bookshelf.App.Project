const app = document.querySelector("#book-list");
const bookshelf = new Bookshelf();

// Add initial books to the bookshelf
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

const bookList = document.querySelector("#book-list");
const bookForm = document.querySelector("#add-book-form");
bookList.append(bookshelf.render());

const addBookButton = document.querySelector(".add-book-button");
const closeButton = document.querySelector(".close-button");
const popup = document.querySelector(".popup");

// Show popup when "Add Book" button is clicked
addBookButton.addEventListener("click", () => {
  popup.style.display = "block";
});

// Hide popup when "Close" button is clicked
closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Add a new book to the bookshelf and to the DOM when the form is submitted
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values from the form
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const language = document.querySelector("#language").value;
  const subject = document.querySelector("#subject").value;
  const bookcover = document.querySelector("#coverurl").value;

  // Create a new book and add it to the bookshelf
  const book = new Book(author, language, subject, title, bookcover);
  bookshelf.addBook(book);

  // Create a new DOM element for the book and append it to the book list
  const bookElement = book.render();
  bookList.appendChild(bookElement);

  // Hide the popup
  popup.style.display = "none";
});
