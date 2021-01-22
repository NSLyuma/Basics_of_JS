"use strict";

// Задание 1
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + " – это ноль");
    } else if (i % 2 !== 0) {
        console.log(i + " – нечётное число");
    } else if (i % 2 === 0 && i !== 0) {
        console.log(i + " – чётное число");
    }
}

// Задание 2
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести этот текст
            },
        },
        {
            userId: 5, // вывести этот текст
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ]
};

console.log(`${post.author}, ${post.comments[0].rating.dislikes}, ${post.comments[1].userId}, ${post.comments[1].text}`);

// Задание 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    console.log(product.price * 0.85); // сократила price - (price * 15 / 100)
});

// Задание 4
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhoto = products2.filter(function (product) {
    return product.photos != undefined && product.photos != "";
});

console.log(productsWithPhoto);

let sortedProducts = products2.sort(function (a, b) {
    if (a.price > b.price)
        return 1;
    else
        return -1;
});

console.log(sortedProducts);

// Задание 5
for (let i = 0; i <= 9; console.log(i++)) { }

// Задание 6
let x = "x";
let result = ""
for (let i = 0; i < 20; i++) {
    result += x;
    console.log(result);
}