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

function operate(operator, firstVal, secondVal) {
  firstVal = parseInt(firstVal);
  secondVal = parseInt(secondVal);
  console.log(firstVal);
  console.log(secondVal);
  switch (operator) {
    case "+":
      return add(firstVal, secondVal);
    case "-":
      return subtract(firstVal, secondVal);
    case "*":
      return multiply(firstVal, secondVal);
    case "/":
      return divide(firstVal, secondVal);
  }
}

function equals() {
  if (eqCount >= 3 && opContinue == true) {
    firstNumber = output;
    output = operate(operator, firstNumber, secondNumber);
    result.textContent = output;
    console.log("this runnn");
    resetOperation();
  } else {
    output = operate(operator, firstNumber, secondNumber);
    console.log("this run");
    result.textContent = output;
    eqCount++;
    resetOperation();
  }
}

function resetEQCount() {
  if (eqCount == 2) {
    eqCount = 0;
  }
  if (currNumber == 1 && eqCount >= 3) {
    eqCount = 0;
  }
}

function evaluateOperator(operat) {
  disableEqual();
  result.textContent = "";
  currNumber = 2;
  eqCount++;
  if (eqCount > 2) {
    opContinue = true;
  }
  if (firstNumber != "" && secondNumber != "") {
    equals();
    firstNumber = output;
    currNumber = 2;
  }
  if (firstNumber == "" && secondNumber != "") {
    firstNumber = output;
    equals();
    firstNumber = output;
    currNumber = 2;
  }
  operator = operat;
}

function evaluateEqual() {
  if (firstNumber == "" && secondNumber == "") {
  } else if (disableEqualbtn == true) {
  } else {
    equals();
  }
}

function evaluate(s) {
  if (currNumber == 1) {
    return (firstNumber += s);
  } else return (secondNumber += s);
}

function setOperator(s) {
  operator = s;
  return operator;
}

function disableEqual() {
  disableEqualbtn = true;
}

function enableEqual() {
  disableEqualbtn = false;
}

function resetOperation() {
  currNumber = 1;
  firstNumber = "";
  secondNumber = "";
}

let firstNumber = "";
let secondNumber = "";
let output = "";
let operator = "";
let eqCount = 0;
let currNumber = 1;
let opContinue = false;
let disableEqualbtn = false;

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const multi = document.querySelector(".multiply");
const divi = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");

plus.addEventListener("click", () => {
  evaluateOperator("+");
});

minus.addEventListener("click", () => {
  evaluateOperator("-");
});

multi.addEventListener("click", () => {
  evaluateOperator("*");
});

divi.addEventListener("click", () => {
  evaluateOperator("/");
});

equal.addEventListener("click", () => {
  evaluateEqual();
});

zero.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("0");
  result.textContent = number;
});

one.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("1");
  result.textContent = number;
});

two.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("2");
  result.textContent = number;
});

three.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("3");
  result.textContent = number;
});

four.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("4");
  result.textContent = number;
});

five.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("5");
  result.textContent = number;
});

six.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("6");
  result.textContent = number;
});

seven.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("7");
  result.textContent = number;
});

eight.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("8");
  result.textContent = number;
});

nine.addEventListener("click", () => {
  enableEqual();
  resetEQCount();
  number = evaluate("9");
  result.textContent = number;
});
