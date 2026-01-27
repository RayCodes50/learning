const pad = document.querySelector(".sketch");
const inputGrid = document.querySelector(".gridSize");

inputGrid.addEventListener("input", (e) => {
  const input = e.target.value;
  console.log(input);
});

function createGrid() {
  const fragment = document.createDocumentFragment();
  let size = 5;
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    fragment.appendChild(box);
  }
  pad.appendChild(fragment);
}
createGrid();
