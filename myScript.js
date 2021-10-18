let currentInput;
let number1 = 0;
let number2 = 0;

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(symbol){
    // Detect the operation to be performed
}

function updateScreen(){
    // Update screen everytime it is supposed to change
    const screen = document.querySelector('#screen');
    previous = screen.textContent;
    screen.textContent = `${previous}${currentInput}`;
}

function resetScreen(symbol){
    const screen = document.querySelector('#screen');
    screen.textContent = `${symbol}`;
    currentInput = '';
}

function undo(){
    //Undo once per click
}

function reset(){
    //Reset the calculator to initial state
}

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        const screen = document.querySelector('#screen');
        if(screen.textContent == "+" | screen.textContent =="-" | screen.textContent == "X" | screen.textContent == "÷"){
            screen.textContent = "";
        }
        currentInput = parseInt(number.textContent);
        updateScreen();
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(number1 === 0){
            symbol = operator.textContent;
            savePrevious();
            resetScreen(symbol);
            updateScreen();
        }
        else if(number1 !== 0){
            saveCurrent();
            resetScreen(symbol);
            updateScreen;
        }
    });
});

function savePrevious(){
    const screen = document.querySelector('#screen');
    number1 = parseInt(screen.textContent);
}

function saveCurrent(){
    const screen = document.querySelector('#screen');
    number2 = parseInt(screen.textContent);
}