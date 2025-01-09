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

// Code Functions

function resetCalc() {
    //
}

function addNumber(target) {
    //
}

function buttonPressed(event) {
    let numbers = "0123456789"
    let target = event.target;
    console.log(target.id);
    if (target.id in numbers) {
        addNumber(target);
    }
}

function assignEventListeners() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(function (button) {
        button.addEventListener("click", buttonPressed);
    });
}

assignEventListeners();