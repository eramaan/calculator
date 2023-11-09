let number1 = '';
let number2 = '';
let result = 0;
let operator = '';
let displayNumber = '';

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

document.querySelector("#display").textContent = displayNumber

// let num1 = document.querySelector("#n1");
// num1.addEventListener('click', () => {
//     displayNumber += '1';
//     document.querySelector("#display").textContent = displayNumber;
//     console.log(displayNumber);
// })

let keyCancel = document.querySelector(".cancel");
keyCancel.addEventListener('click', () => {
    displayNumber = '';
    number1 = '';
    number2 = '';
    result = '';
    operator = '';
    document.querySelector("#display").textContent = displayNumber;
})

let keyResult = document.querySelector(".result");
keyResult.addEventListener('click', () => {
    if (number1 == '') {
        displayNumber = '';
        document.querySelector("#display").textContent = displayNumber;
    } else {
        number2 = Number(displayNumber);
        operate(number1, number2, operator)
        displayNumber = '';
        operator = '';
        number2 = '';
        number1 = result;
        document.querySelector("#display").textContent = result;
    }
})

let keysNum = document.querySelectorAll(".digit");
keysNum.forEach((keyNum) => {
    keyNum.addEventListener('click', () => {
        displayNumber += keyNum.innerHTML;
        document.querySelector("#display").textContent = displayNumber;
    });
});

let keysOper = document.querySelectorAll(".operator");
keysOper.forEach((keyOper) => {
    keyOper.addEventListener('click', () => {
        if (number1 == '') {
            number1 = Number(displayNumber);
            result= number1;
            operator = keyOper.textContent
            displayNumber = '';
            document.querySelector("#display").textContent = result;
            console.log("1: " + number1);
            console.log("2: " + number2);
            console.log("oper: " + operator);
            console.log("disp: " + displayNumber);
            console.log("res: " + result);
        } else {
            number2 = Number(displayNumber);
            operate(number1, number2, operator)
            displayNumber = '';
            operator = keyOper.textContent
            number2 = '';
            number1 = result;
            document.querySelector("#display").textContent = result;
            console.log("1: " + number1);
            console.log("2: " + number2);
            console.log("oper: " + operator);
            console.log("disp: " + displayNumber);
            console.log("res: " + result);
        }
});
});

