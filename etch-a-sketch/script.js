const pad = document.querySelector(".sketch");
const inputGrid = document.querySelector(".gridSize");
const box = document.querySelector(".box");

// Default grid at page load
let num = 5;

inputGrid.addEventListener("change", (e) => {
  // change users input to number
  const value = Number(e.target.value);
  //throws an Error when we wan to create grid larger than 100 x100
  if (value > 100) {
    return console.log(`Grid cannot be larger than 100`);
  }
  // checks for "" since number "" is 0
  if (!Number.isNaN(value)) {
    num = value;
  }
  console.log(num);
  pad.style.setProperty("--tiles", num);

  createGrid(num);
});

function createGrid(num) {
  // modern way of creating DOM elements that batches it and ships all
  // at once
  const fragment = document.createDocumentFragment();
  let size = num;
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    fragment.appendChild(box);
  }
  // modern version of replacing DOM elements need it since there is a
  // starting grid

  pad.replaceChildren(fragment);
  const tiles = document.querySelectorAll(".box");

  tiles.forEach((tile) => {
    console.log(`initiated`);
    tile.addEventListener("mouseenter", (e) => {
      console.log(`You just hovered over me`);
    });
  });
}
createGrid(num);
