const buttons = document.querySelectorAll("button");
const placeholder = document.querySelector(".placeholder");
const equalsButton = document.querySelector(".equal");
const display = document.querySelector(".display-text");
const clearButton = document.querySelector(".ac");
const decimal = document.querySelector("#decimal");
const operatorButtons = document.querySelectorAll(".operator");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = 0;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Create a function named operate that take a operator parameter and a num1 and num2 parameters and then call to one of the above functions in the numbers

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      // When user click on equal button (default value) return  the result of the firstNumber that can be the first number or the result.
      return firstNumber;
  }
}

let tempValue = "";

display.textContent = "=0";

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let displayValue = "";
    switch (button.className) {
      case "operator":
        if (firstNumber !== "" && secondNumber !== "") {
          // Assings the result of the operation to the firsNumber variable.
          firstNumber = operate(operator, +firstNumber, +secondNumber);
          secondNumber = "";
          display.textContent = "=" + firstNumber;
        }
        displayValue = button.textContent;
        operator = displayValue;
        console.log(operator);
        placeholder.textContent += displayValue;
        if (
          placeholder.textContent[placeholder.textContent.length - 1] ===
          operator
        ) {
          //Disable operator buttons.
          operatorButtons.forEach((btn) => (btn.disabled = true));
        }
        decimal.disabled = false;
        break;
      case "equal":
        display.textContent =
          "=" + operate(operator, +firstNumber, +secondNumber);
        break;
      case "number":
        // Disable the decimal button if there are one decimal.
        button.textContent === "."
          ? (button.disabled = true)
          : (button.disabled = false);
        if (operator === "") {
          displayValue = button.textContent;
          firstNumber += displayValue;
          console.log(firstNumber);
          placeholder.textContent += displayValue;
          break;
        }
      case "number":
        console.log(`secondNumber is ${secondNumber}`);
        if (firstNumber !== "" && operator !== "") {
          displayValue = button.textContent;
          secondNumber += displayValue;
          // Enable operator buttons.
          operatorButtons.forEach((btn) => (btn.disabled = false));
          console.log(secondNumber);
          placeholder.textContent += displayValue;
          console.log(
            `First Number: ${+firstNumber} Operator: ${operator} Second Number: ${+secondNumber}`
          );
          break;
        }

      case "ac":
        if (button.textContent === "AC") {
          firstNumber = "";
          operator = "";
          secondNumber = "";
          displayValue = "";
          placeholder.textContent = "";
          display.textContent = "=0";
        }
    }
  })
);
