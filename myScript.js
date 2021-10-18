let currentInput;

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

function resetScreen(){
    //Reset screen once an operation button or equal is pressed
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
        currentInput = parseInt(number.textContent);
        // console.log(currentInput);
        // console.log(typeof currentInput);
        updateScreen();
    });
});