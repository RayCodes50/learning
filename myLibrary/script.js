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
  addBookToLibrary(
    formTitle.value,
    formAuthor.value,
    formPages.value,
    formRead.value,
  );
  displayBooks();

  console.log(myLibrary);
});

// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}
// adds book to the library (arr)
function addBookToLibrary(title, author, pages, read) {
  const book1 = new Book(title, author, pages, read);
  myLibrary.push(book1);
}

// display book algo
function displayBooks(book) {
  myLibrary.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerText = `${element.title} by ${element.author}, ${element.pages} and ${element.read}`;
    container.appendChild(div);
  });
}
