const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", btnClicked);

function btnClicked(event) {
  event.preventDefault();
  const inputVal = input.value;
  input.value = "";
  console.log(input.value);
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");
  newLi.appendChild(newSpan);
  newLi.appendChild(newBtn);
  newSpan.textContent = inputVal;
  newBtn.textContent = "Delete";
  list.appendChild(newLi);
  newBtn.addEventListener("click", function () {
    newLi.remove();
  });
  input.focus();
}
