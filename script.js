let firstNumber = "";
let secondNumber = "";
let output = "";
let operator = "";
let eqCount = 0;
let currNumber = 1;
let opContinue = false;
let disableEqualBtn = true;

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
const posneg = document.querySelector(".posneg");

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
  if (firstNumber != "" && secondNumber != "") {
    enableEqual();
  }
  if (secondNumber != "" && currNumber == 2) {
    enableEqual();
  }
  evaluateEqual();
});

clear.addEventListener("click", () => {
  clearAll();
});

posneg.addEventListener("click", () => {
  positiveNegative();
});

decimal.addEventListener("click", () => {
  evaluateNumber(".");
  disableDecimal(true);
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

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "0":
      evaluateNumber("0");
      break;
    case "1":
      evaluateNumber("1");
      break;
    case "2":
      evaluateNumber("2");
      break;
    case "3":
      evaluateNumber("3");
      break;
    case "4":
      evaluateNumber("4");
      break;
    case "5":
      evaluateNumber("5");
      break;
    case "6":
      evaluateNumber("6");
      break;
    case "7":
      evaluateNumber("7");
      break;
    case "8":
      evaluateNumber("8");
      break;
    case "9":
      evaluateNumber("9");
      break;
    case "+":
      evaluateOperator("+");
      break;
    case "-":
      evaluateOperator("-");
      break;
    case "*":
      evaluateOperator("*");
      break;
    case "/":
      evaluateOperator("/");
      break;
    case "%":
      evaluateOperator("%");
      break;
    case "=":
      if (firstNumber != "" && secondNumber != "") {
        enableEqual();
      }
      if (secondNumber != "" && currNumber == 2) {
        enableEqual();
      }
      evaluateEqual();
    case "Enter":
      if (firstNumber != "" && secondNumber != "") {
        enableEqual();
      }
      if (secondNumber != "" && currNumber == 2) {
        enableEqual();
      }
      evaluateEqual();
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Backspace") {
    if (currNumber == 1) {
      firstNumber = firstNumber.slice(0, -1);
      result.textContent = firstNumber;
    } else {
      secondNumber = secondNumber.slice(0, -1);
      result.textContent = secondNumber;
    }
  }
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

function positiveNegative() {
  if (currNumber == 1) {
    if (firstNumber.includes("-")) {
      firstNumber = firstNumber.slice(1, 1) + "" + firstNumber.slice(1);
      result.textContent = firstNumber;
    } else {
      firstNumber = firstNumber.slice(0, 0) + "-" + firstNumber.slice(0);
      result.textContent = firstNumber;
    }
  } else {
    if (secondNumber.includes("-")) {
      secondNumber = secondNumber.slice(1, 1) + "" + secondNumber.slice(1);
      result.textContent = secondNumber;
    } else {
      secondNumber = secondNumber.slice(0, 0) + "-" + secondNumber.slice(0);
      result.textContent = secondNumber;
    }
  }
}

function disableDecimal(isTrue) {
  decimal.disabled = isTrue;
}

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  output = "";
  operator = "";
  eqCount = 0;
  currNumber = 1;
  opContinue = false;
  disableEqualBtn = true;
  result.textContent = "0";
}

function equals() {
  if (eqCount >= 3 && opContinue == true) {
    firstNumber = output;
    output = operate(operator, firstNumber, secondNumber);
    result.textContent = output;
    resetOperation();
  } else {
    output = operate(operator, firstNumber, secondNumber);
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
  decimal.disabled = false;
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
  } else if (disableEqualBtn == true) {
  } else if (firstNumber != "" && currNumber == 2) {
    equals();
  } else {
    equals();
    25;
  }
}

function evaluate(s) {
  if (currNumber == 1) {
    return (firstNumber += s);
  } else return (secondNumber += s);
}

function evaluateNumber(s) {
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
