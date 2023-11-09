let number1 = '';
let number2 = '';
let result = 0;
let operator = '';
let displayNumber = '';

function add(number1, number2) {
    return result = Math.round((number1 + number2)*1000)/1000;
}

function subtract(number1, number2) {
    return result = Math.round((number1 - number2)*1000)/1000;
}

function multiply(number1, number2) {
    return result = Math.round((number1 * number2)*1000)/1000;
}

function divide(number1, number2) {
    if (number1 == 0 || number2 == 0) {
        return result = "forReal?";
    } else {
        return result = Math.round((number1 / number2)*1000)/1000;
    }
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

let keyCancel = document.querySelector(".cancel");
keyCancel.addEventListener('click', () => {
    displayNumber = '';
    number1 = '';
    number2 = '';
    result = '';
    operator = '';
    keyDecimal.disabled = false;
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
        keyDecimal.disabled = false;
        document.querySelector("#display").textContent = result;
    }
})

let keysNum = document.querySelectorAll(".digit");
keysNum.forEach((keyNum) => {
    keyNum.addEventListener('click', () => {
        displayNumber += keyNum.innerHTML;
        document.querySelector("#display").textContent = displayNumber;
        if (displayNumber.includes(".")) {
            keyDecimal.disabled = true;
        } else {
            keyDecimal.disabled = false;
        }
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
        } else {
            number2 = Number(displayNumber);
            operate(number1, number2, operator)
            displayNumber = '';
            operator = keyOper.textContent
            number2 = '';
            number1 = result;
            document.querySelector("#display").textContent = result;
        }
});
});

let keyDecimal = document.querySelector("#decimal");
keyDecimal.addEventListener('click', () => {
    if (displayNumber.includes(".")) {
        keyDecimal.disabled = true;
    }
})


