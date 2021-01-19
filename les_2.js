"use strict";

/*
// Задание 1
// пример 1
// 1. a с помощью ++ увеличивается на 1 (a = 2)
// 2. c присваивается новое значение a (c = 2)
let a = 1, b = 1, c, d;
c = ++a;
alert(c);

// пример 2
// 1. d присваивается значение b (d = 1)
// 2. и после этого b увеличивается на 1 (b = 2)
d = b++;
alert(d);

// пример 3
// 1. a с помощью ++ увеличивается на 1 (a = 3)
// 2. к a прибавляется 2, и значение записывается в c (c = 5)
c = 2 + ++a;
alert(c);

// пример 4
// 1. к b прибавляется 2, и значение записывается в d (d = 4)
// 2. после этого b с помощью ++ увеличивается на 1 (b = 3)
d = 2 + b++;
alert(d);
alert(a);
alert(b);
*/

/*
// Задание 2
// 1. a *= 2 - это a = a * 2, поэтому теперь a = 4
// 2. 1 + 4 = 5, поэтому x = 5
let a = 2;
let x = 1 + (a *= 2);
*/

// Задание 3
let a = 5;
let b = 2;
let result = null;
if (a >= 0 && b >= 0) {
    result = a - b;
} else if (a < 0 && b < 0) {
    result = a * b;
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    result = a + b;
}

// Задание 4
function getSum(num1, num2) {
    return num1 + num2;
}

function getDif(num1, num2) {
    return num1 - num2;
}

function getMult(num1, num2) {
    return num1 * num2;
}

function getDiv(num1, num2) {
    return num1 / num2;
}

// Задание 5
function mathOperation(arg1, arg2, operation) {
    let result = null;
    switch (operation) {
        case "+":
            result = getSum(arg1, arg2);
            break;
        case "-":
            result = getDif(arg1, arg2);
            break;
        case "*":
            result = getMult(arg1, arg2);
            break;
        case "/":
            result = getDiv(arg1, arg2);
            break;
    }
    return result;
}

// Задание 6
let userInput = prompt("Введите сумму, которую хотите положить на счёт");
let symbol = userInput.charAt(userInput.length - 1);
let rubles = "";

switch (symbol) {
    case "1":
        rubles = "рубль";
        alert(`Ваша сумма в ${userInput} ${rubles} успешно зачислена`);
        break;
    case "2":
    case "3":
    case "4":
        rubles = "рубля";
        alert(`Ваша сумма в ${userInput} ${rubles} успешно зачислена`);
        break;
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
        rubles = "рублей";
        alert(`Ваша сумма в ${userInput} ${rubles} успешно зачислена`);
        break;
    default:
        alert("Сумма введена неверно, использованы недопустимые символы");
}