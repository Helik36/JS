// Задание 1

for (let i = 0; i < 11; i++) {
    if (i == 0)
        alert(`${i} - это ноль`);

    else if (i % 2 != 0)
        alert(`${i} - не чётное число`);

    else if (i % 2 == 0)
        alert(`${i} - чётное чисо`)
}

// Задание 2


const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число 
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст 
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

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

products.forEach(function (salee) {
    salee.price = salee.price - (salee.price / 100) * 15
});

for (i = 0; i < 3; i++) {
    alert(products[i].price);
}


// Задание 4

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


products.forEach(function (ph) {
    if (ph.photos == undefined)
        console.log("skip");

    else if (ph.photos.length > 0)
        alert([ph.photos]);
    alert(products.price.sort((a, b) => a - b));
});


products.sort(function (a, b) {
    return a.price - b.price
});

console.log(products);




// Задание 6

let ch = "x";

for (i = 0; i < 20; i++) {
    console.log(`${ch}`);
    ch += "x";
}

