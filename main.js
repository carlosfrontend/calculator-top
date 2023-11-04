const numbers = document.querySelectorAll('.number');
const placeholder = document.querySelector('.placeholder');
const operators = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equal');
const display = document.querySelector('.display-text');
const clearButton = document.querySelector('.ac');
// Create an add function

function add(a, b) {
  return a + b;
}

// Create a subtract function

function subtract(a, b) {
  return a - b;
}

// Create a multiply function

function multiply(a, b) {
  return a * b;
}

// Create a divide function

function divide(a, b) {
  return a / b;
}

// Test all simple operations by console

/* console.log('Add ' + add(5, 16))
console.log('Subtract ' + subtract(10, 8))
console.log('Multiply ' + multiply(4, 6))
console.log('Divide ' + divide(24, 2)) */


// Create a variable for the first number and initialize it to zero
let firstNumber = 0;
// Create a variable for operator and initialize it to void string ''
let operator = '';
// Create a variable for the second number and initialize it to zero
let secondNumber = 0;
let result = 0;

// Create a function named operate that take a operator parameter and a num1 and num2 parameters and then call to one of the above functions in the numbers

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case 'x':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
    default:
      return null;

  }
}

// Create a variable named displayValue and initialize it to void string ''. This store the number that shows the in string format.


/* Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step. */


var displayValue = '';
display.textContent = '0';

function clearAll() {
  displayValue = '';
  firstNumber = 0;
  operator = '';
  secondNumber = 0;
  placeholder.textContent = '';
  display.textContent = '0';
}

function populateNumber(num) {
  displayValue = num;
  placeholder.textContent += displayValue;
  displayValue = '';
  return placeholder.textContent;
}

function getOperator(op) {
  displayValue = op;
  placeholder.textContent += displayValue;
  displayValue = '';
  return placeholder.textContent;
}

function updateDisplay() {
  display.textContent = result;
}

if (firstNumber === 0 && operator === '' && secondNumber === 0) {


  numbers.forEach(number => number.addEventListener('click', () => {
    if (operator === '') {
      firstNumber = populateNumber(number.textContent);
    } else {
      secondNumber = populateNumber(number.textContent).slice(firstNumber.length + 1);
    }
    console.log(`First: ${firstNumber} operator: ${operator} Second: ${secondNumber}`);

  }));

  operators.forEach(ope => ope.addEventListener('click', () => {
    operator = getOperator(ope.textContent).slice(firstNumber.length);
  }));

  equalsButton.addEventListener('click', () => {
    placeholder.textContent += '=';
    result = operate(operator, +firstNumber, +secondNumber);
    console.log('Result is: ' + result)
    updateDisplay();
  }, { once: true });
}


clearButton.addEventListener('click', clearAll);