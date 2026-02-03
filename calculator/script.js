const btnsNumbers = document.querySelectorAll(".number");
const displayCurrent = document.querySelector(".current");
const btnsOperators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

equal.addEventListener("click", function () {
  let output = operate(firstNumber, operator, secondNumber);
  displayCurrent.innerText += ` = ${output}`;
});

btnsOperators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.target.innerText;
    displayCurrent.innerText += ` x`;
    console.log(operator);
  });
});

btnsNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let number = Number(e.target.innerText);
    if (firstNumber == 0) {
      firstNumber = number;
      displayCurrent.innerText = `${number}`;
    } else {
      secondNumber = number;
      displayCurrent.innerText += ` ${number}`;
    }
  });
});

function add(a, b) {
  return Number(a) + Number(b);
}
function subtract(a, b) {
  return Number(a) - Number(b);
}
function multiply(a, b) {
  return Number(a) * Number(b);
}
function divide(a, b) {
  return Math.round((a / b) * 100) / 100;
}

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      return `What are you dumb?`;
  }
}
