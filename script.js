let firstNumber = "";
let secondNumber = "";
let output = "";
let operator = "";
let eqCount = 0;
let currNumber = 1;
let opContinue = false;
let disableEqualBtn = false;

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
const decimal = document.querySelector(".decimal");

const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const multi = document.querySelector(".multiply");
const divi = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const modulo = document.querySelector(".modu");

const result = document.querySelector(".result");
const clear = document.querySelector(".clear");

result.textContent = "0";

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

modulo.addEventListener("click", () => {
  evaluateOperator("%");
});

equal.addEventListener("click", () => {
  evaluateEqual();
});

clear.addEventListener("click", () => {
  clearAll();
});

decimal.addEventListener("click", () => {
  evaluateNumber(".");
});

zero.addEventListener("click", () => {
  evaluateNumber("0");
});

one.addEventListener("click", () => {
  evaluateNumber("1");
});

two.addEventListener("click", () => {
  evaluateNumber("2");
});

three.addEventListener("click", () => {
  evaluateNumber("3");
});

four.addEventListener("click", () => {
  evaluateNumber("4");
});

five.addEventListener("click", () => {
  evaluateNumber("5");
});

six.addEventListener("click", () => {
  evaluateNumber("6");
});

seven.addEventListener("click", () => {
  evaluateNumber("7");
});

eight.addEventListener("click", () => {
  evaluateNumber("8");
});

nine.addEventListener("click", () => {
  evaluateNumber("9");
});

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

function modulos(firstVal, secondVal) {
  return firstVal % secondVal;
}

function operate(operator, firstVal, secondVal) {
  firstVal = Number(firstVal);
  secondVal = Number(secondVal);
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
    case "%":
      return modulos(firstVal, secondVal);
  }
}

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  output = "";
  operator = "";
  eqCount = 0;
  currNumber = 1;
  opContinue = false;
  disableEqualbtn = false;
  result.textContent = "0";
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

function evaluateNumber(s) {
  enableEqual();
  resetEQCount();
  number = evaluate(s);
  result.textContent = number;
}

function setOperator(s) {
  operator = s;
  return operator;
}

function disableEqual() {
  disableEqualBtn = true;
}

function enableEqual() {
  disableEqualBtn = false;
}

function resetOperation() {
  currNumber = 1;
  firstNumber = "";
  secondNumber = "";
}
