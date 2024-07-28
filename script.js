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
    firstNumber = outNumber;
    output = operate(operator, firstNumber, secondNumber);
    result.textContent = output;
    outNumber = output;
    console.log("this runnn");
    resetOperation();
  } else {
    output = operate(operator, firstNumber, secondNumber);
    console.log("this run");
    outNumber = output;
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

function evaluate(s) {
  if (currNumber == 1) {
    return (firstNumber += s);
  } else return (secondNumber += s);
}

function setOperator(s) {
  operator = s;
  return operator;
}

function resetOperation() {
  currNumber = 1;
  firstNumber = "";
  secondNumber = "";
}

let firstNumber = "";
let secondNumber = "";
let prevNumber = "";
let output = "";
let outNumber = "";
let opContinue = false;
let operator;
let eqCount = 0;

let currNumber = 1;

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const equal = document.querySelector(".equal");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");

one.addEventListener("click", () => {
  evaluate("1");
  resetEQCount();
});

two.addEventListener("click", () => {
  evaluate("2");
  resetEQCount();
});

plus.addEventListener("click", () => {
  setOperator("+");
  currNumber = 2;
  eqCount++;
  if (eqCount > 2) {
    opContinue = true;
  }
});

minus.addEventListener("click", () => {
  setOperator("-");
  currNumber = 2;
  eqCount++;
  if (eqCount > 2) {
    opContinue = true;
  }
});

equal.addEventListener("click", () => {
  if (firstNumber == "" && secondNumber == "") {
  } else {
    equals();
  }
});
