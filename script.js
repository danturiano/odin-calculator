function add(firstVal, secondVal) {
  return firstVal + secondVal;
}

function subtract(firstVal, secondVal) {
  return firstVal - secondVal;
}

function multiply(firstVal, secondVal) {
  return firstVal * secondVal;
}

function divide(firstVal, secondVal) {
  return firstVal / secondVal;
}

function operate(operator, firstNumber, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}

let firstNumber;
let secondNumber;
let prevTotal;

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const plus = document.querySelector(".add");
const equal = document.querySelector(".equal");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
