const cells = document.querySelectorAll(".cell");

let clicks = 0;
const handlers = [];
cells.forEach((el, i) => {
  function handleClick() {
    clicks++;
    console.log(`hello ${i} click:${clicks}`);
    if (clicks == 10) {
      console.log(`Finito`);
      cells.forEach((el, idx) => {
        el.removeEventListener("click", handlers[idx]);
      });
    }
  }
  el.addEventListener("click", handleClick);
  handlers[i] = handleClick;
  console.log(handlers[i]);
});
