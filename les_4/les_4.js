"use strict";

// Задание 1
function numberToObject(number) {
    if (!Number.isInteger(number)) {
        console.log("Необходимо ввести целое число");
        return {};
    } else if (number < 0 || number > 999) {
        console.log("Число должно быть в диапазоне от 0 до 999");
        return {};
    }

    let units = number % 10;
    let tens = (number % 100 - units) / 10;
    let hundreds = (number - tens * 10 - units) / 100;

    const obj = {};
    obj.units = units;
    obj.tens = tens;
    obj.hundreds = hundreds;

    return obj;
}

console.log(numberToObject(+prompt("Введите число от 0 до 999")));

// Задание 1.1
// es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

// //es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

// Задание 1.2
// es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

//es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}