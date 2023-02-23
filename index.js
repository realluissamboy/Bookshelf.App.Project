// Initialization

const app = document.querySelector("#app");
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

app.append(bookshelf.render());

// Add new books

const addNewBook = (author, language, subject, title) => {
  const newBook = new Book(author, language, subject, title);
  bookshelf.addBook(newBook);
};

function toggleForm() {
  let addBookForm = document.getElementById("createBook");
  if (addBookForm.style.display === "none") {
    addBookForm.style.display = "block";
  } else {
    addBookForm.style.display = "none";
  }
}

// Add event listener to form
const form = document.querySelector("#createBook form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  // Prevent form from reloading page
  event.preventDefault();

  // Retrieve form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const language = document.querySelector("#language").value;
  const subject = document.querySelector("#subject").value;

  // Create new Book object
  const newBook = new Book(author, language, subject, title);

  // Add new book to bookshelf
  bookshelf.addBook(newBook);

  // Reset form fields
  form.reset();

  // Hide form
  document.querySelector("#createBook").style.display = "none";
}
