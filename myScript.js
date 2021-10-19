let currentInput;
let number1 = 0;
let number2 = 0;
let answer = 0;
let operationSymbol;
let onGoing; //This is to check if the calculator is still performing calculation

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
    currentInput = answer;
    return answer;
}

function updateScreen(){
    const screen = document.querySelector('#screen');
    previous = screen.textContent;
    screen.textContent = `${previous}${currentInput}`;
}

function undo(){

}

function reset(){

}

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        const screen = document.querySelector('#screen');
        if(screen.textContent == "+" | screen.textContent == "-" | screen.textContent == "X" | screen.textContent == "÷"){
            screen.textContent = "";
        }
        if(onGoing === true){
            screen.textContent = "";
            onGoing = false;
        }
        currentInput = number.textContent;
        updateScreen();
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        const screen = document.querySelector('#screen');
        if(number1 === 0){
            number1 = Number(screen.textContent);
            operationSymbol = operator.textContent;
            screen.textContent = operator.textContent
        }

        else if(number1 !== 0 && number2 === 0){
            number2 = Number(screen.textContent);
            onGoing = true;
            number1 = operate(operationSymbol);
            number2 = 0;
            screen.textContent = answer;
            operationSymbol = operator.textContent;
        }
    })
})

const calculate = document.querySelector('.equal');
calculate.addEventListener('click', () => {
    // console.log('It\'s Working');
    const screen = document.querySelector('#screen');
    number2 = Number(screen.textContent);
    screen.textContent = operate(operationSymbol);
    number1 = 0;
    number2 = 0;
    onGoing = true;
    operationSymbol = undefined;
})