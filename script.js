let number1 = 0;
let number2 = 0;
let result = 0;
let operator = '';

function add(number1, number2) {
    return result = number1 + number2;
}

function subtract(number1, number2) {
    return result = number1 - number2;
}

function multiply(number1, number2) {
    return result = number1 * number2;
}

function divide(number1, number2) {
    return result = number1 / number2;
}

function operate(number1, number2, operator) {
    switch (operator) {
        case '+':
        add(number1, number2);
        break;
        case '-':
        subtract(number1, number2);
        break;
        case '*':
        multiply(number1, number2);
        break;
        case '/':
        divide(number1, number2);
        break;
    } 
}