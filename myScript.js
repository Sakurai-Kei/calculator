let currentInput;
let number1 = 0;
let number2 = 0;
let answer = 0;
let operationSymbol;
let onGoing = false; //This is to check if the calculator is still performing calculation

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

function powerOf(base,power){
    return Math.pow(base,power);
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
        case "EXP":
            answer = powerOf(number1,number2);
            break;
    }
    currentInput = answer;
    if(answer == Infinity){
        reset();
        alert('Unfortunately, you do not have the hardware capable to calculate this :( \nCalculator now resetting to initial state');
    }
    else if(isNaN(answer)){
        reset();
        alert('Answer calculated does not result in a number. Calculator now resetting to initial state');
    }
    return answer;
}

function updateScreen(){
    const screen = document.querySelector('#screen');
    previous = screen.textContent;
    screen.textContent = `${previous}${currentInput}`;
}

function undo(){
    const screen = document.querySelector('#screen');
    if(onGoing == false){
        previous = screen.textContent;
        newPrevious = previous.slice(0,previous.length-1);
        screen.textContent = newPrevious;
        if(newPrevious == ""){
            number1 = 0;
            operationSymbol = undefined;
        }
    }
}

function reset(){
    const screen = document.querySelector('#screen');
    screen.textContent = "";
    number1 = 0;
    number2 = 0;
    answer = 0;
    operationSymbol = undefined;
    onGoing = undefined;
}

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        const screen = document.querySelector('#screen');
        if(screen.textContent.length >= 12){
            alert('Decimal place is too high. Calculator will stop registering more input');
            return;
        }
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
            if(isNaN(number1)){
                reset();
                alert('First number was not a number. Calculator now resetting');
                return;
            }
            operationSymbol = operator.textContent;
            screen.textContent = operator.textContent
        }

        else if(number1 !== 0 && number2 === 0){
            number2 = Number(screen.textContent);
            if(isNaN(number2)){
                reset();
                alert('Second number was not a number. Calculator now resetting');
                return;
            }
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
    if(isNaN(number2)){
        //Check if is doing exponent calculation
        const screenDisplay = screen.textContent
        const regex = /[^]/g;
        const found = screenDisplay.match(regex);
        if(found == ""){
            reset();
            alert('Second number was not a number. Calculator now resetting');
            return;
    
        }
        const exponentIndex = found.indexOf('^');
        number2 = Number(found.slice(exponentIndex+1));
        // console.log(number2);
        // console.log(found);
        // console.log(exponentIndex);
    }
    screen.textContent = operate(operationSymbol);
    number1 = 0;
    number2 = 0;
    onGoing = true;
    operationSymbol = undefined;
})

const specials = document.querySelectorAll('.special')
specials.forEach((special) => {
    special.addEventListener('click', () => {
        switch(special.textContent){
            case "CLR":
                reset();
                break;
            case "DEL":
                undo();
                break;
        }
    })
})

const exponent = document.querySelector('.exponent');
exponent.addEventListener('click', () => {
    const screen = document.querySelector('#screen');
    number1 = Number(screen.textContent);
    beforeExponent = screen.textContent;
    screen.textContent = `${beforeExponent}^`
    operationSymbol = exponent.textContent;
})