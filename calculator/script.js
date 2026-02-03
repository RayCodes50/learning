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
    displayCurrent.innerText += ` ${operator}`;
    console.log(operator);
  });
});

btnsNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let number = e.target.innerText;
    // checks if operator pressed if not adds additional number to first
    // like 1 click 2 instead of operator creates 12
    if (operator == "" && firstNumber != 0) {
      //changes to string to concatinate most likely there is a better solution
      let temp = firstNumber.toString();
      // same here as up
      let additional = number.toString();
      // makes 12 from 1 and 2 and then changes to number just in case
      firstNumber = Number(temp + additional);
      // updates the display accordingly, e.g. displays first number correctly
      displayCurrent.innerText = `${firstNumber}`;
      return;
    } else if (operator != "" && secondNumber != 0) {
      let temp = secondNumber.toString();
      let additional = number.toString();
      secondNumber = Number(temp + additional);
      //this line below resets the display after trying to create two digit
      // second number without it when pressing 8 and then 8 again it would
      // give 888 cos display would still hold 8 from before
      displayCurrent.innerText = `${firstNumber + " " + operator}`;
      displayCurrent.innerText += ` ${secondNumber}`;
      return;
    }
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
