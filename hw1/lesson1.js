// task 1
/*
"use strict";
let Tc = prompt("Введи градус по цельсию");
let Tf = (9 / 5) * Tc + 32;
alert(`${Tc} Градусов по Цельсию =  + ${Tf} градусов по Фарингейту.`);

// task 2

let admin;
let name;

name = "Василий";
admin = name;
alert("admin = " + admin);
*/
//task 3

result = 10 + 10 + "10" // Два числа складываются и текст 10 склеивается справа
console.log(result);

result = 10 + "10" + 10 // т.к текст по центру, просто склеиваются
console.log(result);

result = 10 + 10 + +"10" // принял текст как за число и сложил
console.log(result);

result = 10 / -"" // т.к перед текстом есть минус, число делиться на минус бесконечность
console.log(result);

result = 10 / +"2,5" // JS не понимает, что число умножается на текст
console.log(result);