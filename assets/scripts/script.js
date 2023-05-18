const body = document.body;
const calculator = document.querySelector(".calculator-main");
const calcScreen = document.querySelector(".calc-screen");
const numberButtons = document.querySelectorAll(".data-number");
const operationButtons = document.querySelectorAll(".data-operation");
const equalsButton = document.querySelectorAll(".data-equals");
const deleteButton = document.querySelector(".data-delete");
const allClearButton = document.querySelector(".data-all-clear");
const currentOperand = document.querySelector(".result");


function addNumber(number) {
  currentOperand.textContent += number;
}

function addOperation(operation) {
  const operators = ["+", "-", "*", "/"];
  const currentResult = currentOperand.textContent.trim();

  if (
    operators.includes(currentResult.slice(-1))
  ) {
    currentOperand.textContent = currentResult.slice(0, -1) + operation;
  } else {
    currentOperand.textContent += operation;
  }
}

function clearCurrentOperand() {
  currentOperand.textContent = "";
}

function deleteLast() {
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
}

function computeResult() {
  const expression = currentOperand.textContent;
  if (expression === "") {
    return "0";
  }
  else {
    const result = eval(expression);
    currentOperand.textContent = result;
  }
}

function addEventListeners() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      addNumber(button.textContent);
    });
  });

  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      addOperation(button.textContent);
    });
  });

  equalsButton.forEach((button) => {
    button.addEventListener("click", () => {
      computeResult();
    });
  });

  allClearButton.addEventListener("click", () => {
    clearCurrentOperand();
  });

  deleteButton.addEventListener("click", () => {
    deleteLast();
  });
}

addEventListeners();
