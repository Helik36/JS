'use strict';
// Задание 1.1 es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}

let prod1 = new Product('prod1', 100);
let prod2 = new Product('prod2', 150);
let prod3 = new Product('prod3', 200);

prod1.make25PercentDiscount = function (discount) {
    return this.price = this.price - (this.price / 100 * discount);
};

prod2.make25PercentDiscount = function (discount) {
    return this.price = this.price - (this.price / 100 * discount);
};

prod3.make25PercentDiscount = function (discount) {
    return this.price = this.price - (this.price / 100 * discount);
};

console.log(prod1.make25PercentDiscount(25));

console.log(prod2.make25PercentDiscount(25));

console.log(prod3.make25PercentDiscount(25));

/* es 6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
*/



// Задание 1.2
// a
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

let post = new Post();

post.edit = function () {
    post.text = prompt("Введите текст: ");
};

post.edit();

console.log(post.text);


// б
function AttachedPost(author, text, date) {
    Post.call(author, text, date);
    this.highlighted = 1;
}

let attached_post = post.edit();

let makeText = new AttachedPost();

makeText.makeTextHighlighted = function () {
    return makeText.highlighted = true;
};
console.log(makeText.makeTextHighlighted());

// es6
/*
class AttachedPost {
   constructor(author, text, date) {
       this.author = author;
       this.text = text.date;
       this.date = date;
   }
}

class Post extends Post {
   constructor(author, text, date, highlighted) {
       super(author, text, date);
       this.highlighted = highlighted
   }
}

*/