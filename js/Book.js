class Book {
  constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
  }

  render() {
    const li = document.createElement("li");
    li.textContent = this.title;
    return li;
  }
}
