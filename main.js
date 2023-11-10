const buttons = document.querySelectorAll("button");
const placeholder = document.querySelector(".placeholder");
const equalsButton = document.querySelector(".equal");
const display = document.querySelector(".display-text");
const clearButton = document.querySelector(".clear");
const decimal = document.querySelector("#decimal");
const zero = document.querySelector("#zero");
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
      return parseFloat(add(num1, num2));
      break;
    case "-":
      return parseFloat(subtract(num1, num2));
      break;
    case "x":
      return parseFloat(multiply(num1, num2));
      break;
    case "/":
      return parseFloat(divide(num1, num2));
      break;
    default:
      // When user click on equal button (default value) return  the result of the firstNumber that can be the first number or the result.
      return firstNumber;
  }
}

let clearAll = () => {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  displayValue = "";
  placeholder.textContent = "";
  // Enable decimal when AC is clicked!
  decimal.disabled = false;
  display.textContent = "=0";
  zero.disabled = false;
};

// display.textContent = "=0";

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let displayValue = "";
    switch (button.className) {
      case "operator":
        if (firstNumber !== "" && secondNumber !== "") {
          // Assings the result of the operation to the firsNumber variable.
          firstNumber = operate(operator, +firstNumber, +secondNumber);
          secondNumber = "";
          placeholder.textContent = firstNumber;
          display.textContent = "=" + firstNumber;
        }
        operator = button.textContent;
        placeholder.textContent = firstNumber + operator;
        if (
          placeholder.textContent[placeholder.textContent.length - 1] ===
          operator
        )
          decimal.disabled = false;
        break;
      case "number":
        // Disable the decimal button if there are one decimal.
        button.textContent === "."
          ? (button.disabled = true)
          : (button.disabled = false);
        if (button.textContent === "0" && firstNumber === "") {
          zero.disabled = true;
        } else {
          zero.disabled = false;
        }
        if (operator === "") {
          displayValue = button.textContent;
          firstNumber += displayValue;
          display.textContent = "=" + firstNumber;

          // If Only one symbol decimal is clicked display "0." for the first operand
          if (firstNumber === ".") {
            firstNumber = "0.";
            placeholder.textContent += "0";
            display.textContent = "=0.";
          }
          placeholder.textContent += displayValue;
          break;
        }
      case "number":
        if (firstNumber !== "" && operator !== "") {
          button.textContent === "."
            ? (button.disabled = true)
            : (button.disabled = false);
          if (button.textContent === "0" && secondNumber === "") {
            zero.disabled = true;
          } else {
            zero.disabled = false;
          }
          displayValue = button.textContent;
          secondNumber += displayValue;
          display.textContent =
            "=" + operate(operator, +firstNumber, +secondNumber);
          // If Only one symbol decimal is clicked display "0." for the second operand
          if (secondNumber === ".") {
            secondNumber = "0.";
            placeholder.textContent += "0";
            display.textContent = "=0.";
          }
          placeholder.textContent += displayValue;
          break;
        }

      case "equal":
        if (firstNumber === "" || secondNumber === "" || operator === "") {
          // Show error if operand or operator not exist and disable all buttons except AC
          // display.textContent = "Error!";
          placeholder.textContent = "";
          buttons.forEach((btn) => {
            if (btn.className !== "ac") {
              btn.disabled = true;
            }
          });
        } else {
          // Assings the result of the operation to the firsNumber variable.
          firstNumber = operate(operator, +firstNumber, +secondNumber);
          secondNumber = "";
          placeholder.textContent = firstNumber;
          display.textContent = "=" + firstNumber;
        }
        break;

      case "ac":
        if (button.textContent === "AC") {
          clearAll();
          buttons.forEach((btn) => (btn.disabled = false));
          break;
        }
      case "clear":
        if (firstNumber !== "") {
          placeholder.textContent = placeholder.textContent.slice(0, -1);
          firstNumber = placeholder.textContent;
          display.textContent = `=${operate(
            operator,
            +firstNumber,
            +secondNumber
          )}`;
        }
        if (firstNumber === "") {
          firstNumber = "0";
          display.textContent =
            "=" + operate(operator, +firstNumber, +secondNumber);
        }

        if (secondNumber !== "") {
          secondNumber = secondNumber.slice(0, -1);
          firstNumber = placeholder.textContent.slice(
            0,
            placeholder.textContent.length -
              secondNumber.length -
              operator.length
          );
          display.textContent = `=${operate(
            operator,
            +firstNumber,
            +secondNumber
          )}`;
        }

        if (secondNumber === "") {
          secondNumber = "";
        }
        break;
    }
    result = operate(operator, +firstNumber, +secondNumber);
    console.log(
      `First Number: ${+firstNumber} Operator: ${operator} Second Number: ${+secondNumber} Result = ${result})`
    );
  })
);
