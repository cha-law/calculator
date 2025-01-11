// Code Functions


function assignEventListeners() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(function (button) {
        button.addEventListener("click", buttonPressed);
    });
}

function buttonPressed(event) {
    const numbers = "0123456789"
    const target = event.target;

    if (target.id === "AC") {
        resetCalc();
    } else if (target.id === "C") {
        removePrevious();
        operate(operator, num1, num2)
    } else if (target.id === "OPERATE") {
        result = operate(operator, num1, num2);
        num1 = result;
        operationOutput.textContent = result;
        operatorPresent = false;
        operator = "";
        num2 = "";
        result = "";
        addToResultOutput("");
    } else {
        addToOperationsOutput(target);
        result = operate(operator, num1, num2);
        addToResultOutput(String(result));
    }
}

function addToOperationsOutput(target) {
    const operations = "+-x÷%"

    if (operations.includes(target.textContent)) {
        // Preventing user from adding double operators.
        if ((operatorPresent === true) || (num1 === "")) {
            // Ensuring that the answers are added to the operator output if another calculation is made.
            if (result != "") {
                operatorPresent = false;
                operationOutput.textContent = result;
                num1 = result;
                operator = "";
                num2 = "";
                result = operate(operator, num1, num2);
                addToResultOutput(String(result));
            } else {
                return;
            }
        }
        operatorPresent = true;
        operator = target.textContent;
    } else if (operatorPresent === true) {
        num2 = num2 + target.textContent;
    } else {
        num1 = num1 + target.textContent;
    }
    operationOutput.textContent += target.textContent;
}

function addToResultOutput(result) {
    const resultOutput = document.querySelector(".result");
    if (result != "") {
        resultOutput.textContent = result;
    } else {
        resultOutput.textContent = "";
    }
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "÷":
            return divide(a,b);
        case "%":
            return divide(a,b);
        default:
            return "";
    }
}

// Operation Functions


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

function remainder(a, b) {
    return a % b;
}

function resetCalc() {
    operationOutput.textContent = "";
    resultOutput.textContent = "";
    operator = "";
    num1 = "";
    num2 = "";
    operatorPresent = false;
    result = "";
}

function removePrevious(target) {
    operationOutput.textContent = operationOutput.textContent.slice(0, -1);

    if (num2 != "") {
        String(num2).slice(0, -1);
    } else if (operator != "") {
        operator.slice(0, -1);
    } else {
        String(num1).slice(0, -1);
    }
    result = operate(operator, num1, num2);
    addToResultOutput(result);
}

// Variables


const operationOutput = document.querySelector(".operations");
const resultOutput = document.querySelector(".result");

let operator = "";
let num1 = "";
let num2 = "";
let operatorPresent = false;
let result = "";


assignEventListeners();