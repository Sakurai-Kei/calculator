let currentInput;
let number1 = 0;
let number2 = 0;
let answer;
let operationSymbol;

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
    switch(symbol){
        case "+":
            answer = add(number1,number2);
            break;
        case "-":
            answer = subtract(number1,number2);
            break;
        case "X":
            answer = multiply(number1,number2);
            break;
        case "÷":
            answer = divide(number1,number2);
            break;
    }
    number1 = answer;
    number2 = 0;
    currentInput = answer;
    return answer;
}

function updateScreen(){
    // Update screen everytime it is supposed to change
    const screen = document.querySelector('#screen');
    previous = screen.textContent;
    screen.textContent = `${previous}${currentInput}`;
}

function resetScreen(symbol){
    //Shows the operation symbol
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
            operationSymbol = symbol;
            savePrevious();
            resetScreen(symbol);
            updateScreen();
        }
        else if(number1 !== 0 && number2 == 0){
            symbol = operator.textContent;
            saveCurrent();
            resetScreen(symbol);
            updateScreen;
        }
        
        if(number1 !== 0 && number2 !== 0){
            operate(operationSymbol);
            updateScreen();
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