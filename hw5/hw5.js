"use scrict";


// 1.1.1
let fourr = document.getElementById("four");
console.log(fourr);


// 1.2
let nclass = document.getElementsByClassName("one");
console.log(nclass);


// 1.3
let matches = document.querySelectorAll('div[class="card-body"] a.card-link');
for (let i = 0; i < matches.length; i++) {
    console.log(matches[i]);
};

// 1.4
let qS = document.querySelector('.progress-bar[aria-valuenow="50"]');
console.log(qS);


//1.5
let title = document.title
console.log(title);


// 2.1
let parent = document.querySelector('.mt-0');
let id = parent.parentElement;
console.log(id);


//2.2
let hh3 = document.createElement('h3');
let divE = document.querySelector('div');
let h3 = divE.appendChild(hh3);
h3.textContent = 'hello world';


// 2.3
let remCl1 = document.querySelector('.btn-outline-warning');
remCl1.remove();

let remCl2 = document.querySelector('.btn-outline-dark');
remCl2.remove();


// 2.4
document.querySelector('.btn-info').innerHTML = "-->";


// 3.1
let ulList = document.querySelector('ul');
ulList.classList.add('one');


// 3.2
let tog = document.querySelector('.nav-link');
tog.classList.toggle('active');


// 3.3
let classListRem = document.querySelector('.dropdown-menu');
console.log(classListRem);
classListRem.classList.remove('dropdown-menu');


// 3.4
let insert = document.querySelector('div');
console.log(insert);
insert.insertAdjacentHTML("beforeend", '<a href="#">link</a>');


// 3.5
let atr = document.querySelector('.close');
console.log(atr.getAttribute('data-dismiss'));
console.log(atr.getAttribute('aria-label'));


// 3.6
let setAtr = document.querySelector('h1');
setAtr.setAttribute('data-one', 'один');
setAtr.setAttribute('data-two', 'два');


//3.7
let idtitle = document.getElementById("title");
idtitle.setAttribute('id', 'not title');


// 4.1
document.addEventListener('DOMContentLoaded', function () {
    alert('все теги добавлены на страницу');
});


// 4.2
window.addEventListener('load', function () {
    alert('все картинки загружены');
});


// 4.3
let button1 = document.querySelector('.btn');
button1.addEventListener('click', function (event) {
    alert('click');
});


// 4.4
let button2 = document.querySelector('textarea');
button2.addEventListener('mouseover', function (event) {
    console.log('вы навели на textarea');
});


// 2.1.1
let images = document.querySelectorAll('img');
for (i = 0; i < images.length; i++) {
    console.log(images[i]);
};


// 2.1.3
let nametag = document.getElementsByTagName('h2');
for (i = 0; i < nametag.length; i++) {
    console.log(nametag[i].className);
};


// 2.1.4
let divclass = document.querySelector('div');
const classes = divclass.classList;
classes.forEach(function (classes) {
    for (i = 0; i < classes; i++); {
        console.log(classes);
    };
});


//2.1.5
let ifdiv = document.querySelector('div');
const classes2 = ifdiv.classList;
let result = classes2.contains('hidden');
console.log(result);


// 2.1.6
let divcls = document.querySelectorAll('.card');
for (i = 0; i < divcls.length; i++) {
    divcls[i].classList.contains('hidden');
    if (divcls[i].classList.contains('hidden') == true) {
        divcls[i].classList.remove('hidden');
    };
};
for (i = 0; i < divcls.length; i++) {
    console.log(divcls[i].classList.contains('hidden'))
};


// 2.1.8
const tegB = document.getElementsByTagName('b');
for (i = 0; i < tegB.length; i++) {
    tegB[i].classList.contains('sign');
    if (tegB[i].classList.contains('sign') == false) {
        tegB[i].classList.add('sign')
    };
};
for (i = 0; i < tegB.length; i++) {
    console.log(tegB[i].classList.contains('sign'));
};

// 2.1.9

let togtag = document.querySelectorAll('i')
console.log(togtag);
for (i = 0; i < togtag.length; i++) {
    console.log(togtag[i]);
    togtag[i].classList.toggle('green');
};


//2.2.1
let varButt = document.querySelector('button');
varButt.addEventListener('click', function (event) {
    console.log(varButt.getAttribute('id'));
    console.log(varButt.className);
    console.log(varButt.textContent);
});


// 2.2.2
let clickP = document.querySelector('p');
clickP.addEventListener('click', function (event) {
    console.log(event.target.classList);
    event.target.classList.forEach(function (clk) {
        console.log(clk);
    });
});


// 2.2.3
let varDiv = document.querySelector('div');
varDiv.addEventListener('click', function (event) {
    console.log(event.target.getAttribute('id'));
    console.log(event.target.getAttribute('tabindex'));
    console.log(event.target.getAttribute('aria-labelledby'));
    console.log(event.target.getAttribute('aria-hidden'));
});


// 2.2.4
let linkProd = document.querySelector('.product');
linkProd.addEventListener('click', function (event) {
    linkProd.innerHTML = "<div>Другой товар</div> <div>Другое описание</div>";
});


// 2.2.5
let butUl = document.querySelector('ul');
butUl.addEventListener('click', function (event) {
    console.log(event.target);
})


// 2.3.1
let stbut = document.querySelector('button');
stbut.style.fontSize = '30px';
let starea = document.querySelector('textarea');
starea.style.background = '#07FE06';
