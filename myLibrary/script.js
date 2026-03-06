const container = document.querySelector(".container");
const addForm = document.querySelector(".add");
const form = document.querySelector(".form");
const formTitle = document.querySelector(".title");
const formAuthor = document.querySelector(".author");
const formPages = document.querySelector(".pages");
const formRead = document.querySelector(".read");
const formBtn = document.querySelector(".formBtn");
const myLibrary = [];

//Hides form in the DOM and toggles it being displayed
addForm.addEventListener("click", () => {
  form.classList.toggle("visibility");
});

//prevents form from refreshing the page
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//adds book to the arr by user
formBtn.addEventListener("click", function () {
  const library = new Library(
    formTitle.value,
    formAuthor.value,
    formPages.value,
    formRead.value,
  );
  library.add();
  console.log(library);

  displayBooks(library);
});

class Library {
  constructor(title, author, pages, read) {
    this.book1 = new Book(title, author, pages, read);
  }
  add() {
    return myLibrary.push(this.book1);
  }
}

//Class constructor for book
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }
}

// display book algo
function displayBooks(book) {
  console.log(book);
  myLibrary.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerText = `${element.title} by ${element.author}, ${element.pages} and ${element.read}`;
    container.appendChild(div);
  });
}
