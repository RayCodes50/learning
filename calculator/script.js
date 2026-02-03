const btnsNumbers = document.querySelectorAll(".number");
const displayCurrent = document.querySelector(".current");
const btnsOperators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

equal.addEventListener("click", function () {
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
  console.log(`Equal initiated`);
  console.log(operate(firstNumber, operator, secondNumber));
});
btnsOperators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.target.innerText;
    console.log(operator);
  });
});

btnsNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let number = Number(e.target.innerText);
    displayCurrent.innerText = `${number}`;
    if (firstNumber == 0) {
      firstNumber = number;
    } else {
      secondNumber = number;
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
