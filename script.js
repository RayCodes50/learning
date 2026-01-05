function favoriteAnimal(animal) {
  return animal + ` is my favorite animal!`;
}

console.log(favoriteAnimal(`Kura`));

const message = favoriteAnimal(`Goat`);
console.log(message);

function showMessage(from, text = "Kupa") {
  from = "*" + from + "*";
  alert(from + ": " + text);
}
let from = "Ann";
showMessage(from, "Hello!");

alert(from);
