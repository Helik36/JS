// Задание 1
//пример 1 
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 
// Ответ: ++a идёт как инкремент в префиксной форме, то есть увеличение параметра на 1

//пример 2 
d = b++;
alert(d); //ответ: 1 
//Ответ: Постфиксная форма. Сначала переменная d принимает первоночальное значение b, а уже та в свою очередь увеличивается на 1

//пример 3 
c = 2 + ++a;
alert(c); //ответ: 5 
//Ответ: c принимает значение 2 + 3. Т.к переменная а установлена в префиксной форме, она сразу же увеличивается на 1 (2+1)

//пример 4 
d = 2 + b++;
alert(d); //ответ: 4 
//Ответ: d принимает значение аперандов 2 + 2 т.к b стоит в постфиксной форме, после того, как операция произошла, он увеличивается на 1

alert(a); //3 
alert(b); //3
// Всё правильно, т.к а ранее в примере 3 увеличивался на 3 и оператор b в примере 4 так же стал тройкой  





//Задание 2
let a = 2;
let x = 1 + (a *= 2);
//Ответ: Переменная А приняла значение 2. Далее приоритет скобок. Переменная а умножается на саму себя и сразу же ей присваивается полученное значение (4) 
// далее просто идёт сложение на 1. х = 5, а = 4




//Задание 3

let a = Number(prompt("Введите число 1:"));
let b = Number(prompt("Введите число 2:"));

if (a > -1 && b > -1) {
    alert(`Разность ${a - b}`);
}

if (a < 0 && b < 0) {
    alert(`Умножение: ${a * b}`);
}

if (a > 0 && b < 0 || a < 0 && b > 0) {
    alert(`суммa: ${a + b}`);
}



//задание 4

function sum(a, b) {
    return `Сложение ${a + b}`;
}

function diff(a, b) {
    return `Разность ${a - b}`;
}

function comp(a, b) {
    return `произведение ${a * b}`;
}

function div(a, b) {
    return `Деление ${a / b}`;
}

let a = Number(prompt("Введите число 1:"));
let b = Number(prompt("Введите число 2:"));

alert(sum(a, b));
alert(diff(a, b));
alert(comp(a, b));
alert(div(a, b));



// Задание 5

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            alert(sum(arg1, arg2));
            break;
        case "вычетание":
            alert(diff(arg1, arg2));
            break;
        case "умножение":
            alert(comp(arg1, arg2));
            break;
        case "деление":
            alert(div(arg1, arg2));
            break;
        default:
            alert('Неверная операция');

    }
}

let arg1 = Number(prompt("Введите число 1:"));
let arg2 = Number(prompt("Введите число 2:"));
operation = prompt("Напиши: сложение, вычетание, умножение или деление").toLowerCase();

mathOperation(arg1, arg2, operation);



// задание 6

function answer(ask) {
    let strAsk = String(ask);
    let lastChar = strAsk.charAt(strAsk.length - 1)
    switch (lastChar) {
        case lastChar = '1':
            alert(`Ваша сумма в ${ask} рубль успешно зачислена.`);
            break;
        case lastChar = '2':
        case lastChar = '3':
        case lastChar = '4':
            alert(`Ваша сумма в ${ask} рубля успешно зачислена.`);
            break;
        case lastChar = '5':
        case lastChar = '6':
        case lastChar = '7':
        case lastChar = '8':
        case lastChar = '9':
        case lastChar = '0':
            alert(`Ваша сумма в ${ask} рублей успешно зачислена.`);
            break;
    }
}

let ask = Number(prompt("Какое количество денег вы хотите внести?"));

answer(ask);