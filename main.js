const buttons = document.querySelectorAll('button');
const placeholder = document.querySelector('.placeholder');
const equalsButton = document.querySelector('.equal');
const display = document.querySelector('.display-text');
const clearButton = document.querySelector('.ac');
const decimal = document.querySelector('.decimal');


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

let firstNumber = '';
let operator = '';
let secondNumber = '';
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

let displayData = '';

let showFirstOperand = (num) => {
  displayData = num;
  placeholder.textContent = displayData;
  displayData = '';
}

let showOperator = (num1, operator) => {
  placeholder.textContent = num1 + operator;
}

let showSecondOperand = (num1, operator, num2) => {
  placeholder.textContent = num1 + operator + num2;
}

let showResult = (result) => {
  display.textContent = result;
}



buttons.forEach(button => button.addEventListener('click', () => {
  let btn = button.textContent;
  let temp = '';
  if (operator === '' && btn !== 'AC' && btn !== 'C' && btn !== '=' && btn !== '+' && btn !== '-' && btn !== 'x' && btn !== '/') {
    temp = btn;
    firstNumber += temp;
    console.log(+firstNumber);
    temp = '';
    showFirstOperand(firstNumber);
  }

  if (operator === '' && btn === '+' || btn === '-' || btn === 'x' || btn === '/') {
    temp = btn;
    operator = temp;
    console.log(operator);
    temp = '';
    showOperator(firstNumber, operator)
  }

  if (operator !== '' && btn !== 'AC' && btn !== 'C' && btn !== '=' && btn !== '+' && btn !== '-' && btn !== 'x' && btn !== '/') {
    temp = btn;
    secondNumber += temp;
    console.log(+secondNumber);
    temp = '';
    showSecondOperand(firstNumber, operator, secondNumber);
  }

  if(btn == '='){
    display.textContent = firstNumber;
  }

  if(firstNumber !== '' && operator !== '' && secondNumber !== '' && btn === '='){
    temp = operate(operator, +firstNumber, +secondNumber);
    firstNumber = temp;
    result = firstNumber;
    showResult(result);
    firstNumber = result;
    secondNumber = '';
    showOperator(firstNumber, operator);
    showSecondOperand(firstNumber, operator, secondNumber);
  }  
}));






/* numbers.forEach(number => number.removeEventListener('click',_handleFirstOperand)); Works fine! */