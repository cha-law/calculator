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
    } else if (target.id === "OPERATE") {
        let result = operate();
    } else {
        addToOperationsOutput(target);
        operate();
    }
}

function addToOperationsOutput(target) {
    let splitOperation = operationOutput.textContent.split("");
    if ( (splitOperation.at(-1) === "+") || (splitOperation.at(-1) === "-") || (splitOperation.at(-1) === "x") || (splitOperation.at(-1) === "÷") || (splitOperation.at(-1) === "%") ) {
        return;
    }
    operationOutput.textContent += target.textContent;
}

function operate() {
    const operationText = operationOutput.textContent;
    let splitOperation = operationText.split("");

    console.log(splitOperation)
}

// Operation Functions


function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function resetCalc() {
    operationOutput.textContent = "";
    resultOutput.textContent = "";
}

function removePrevious(target) {
    operationOutput.textContent = operationOutput.textContent.slice(0, -1);
}

// Variables


const operationOutput = document.querySelector(".operations");
const resultOutput = document.querySelector(".result");


assignEventListeners();