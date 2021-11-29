/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/
function sPr (a, b) {
    return (a * b);
}
let resSPr = sPr(1345, 759);
console.log(resSPr)
/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
S = 3.14 * r2
*/
function sCircle (r) {
    return (3.14 * r**2);
}
console.log(sCircle(5));

/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
*/
function sCylinder (h, r) {
    return (2 * 3.14 * r * h);
}
let sCyl = sCylinder(10, 5)
console.log(sCyl);

/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/
function massive (arr) {
    for (let i = 0; i < arr.length; i++) {
        const argument = arr[i];
        console.log(argument);
    }
}
massive([1, 11, 111]);

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/
function createP (text) {
    return (`<p>${text}</p>`)
}
let createParagraf = createP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, molestiae.')
document.write(createParagraf)

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/
function crUl (litext) {
    return (`<ul>
<li>${litext};</li>
<li>${litext};</li>
<li>${litext};</li>
</ul>`)
}
let createUl = crUl('Lorem ipsum dolor sit amet, consectetur adipisicing elit')
document.write(createUl)
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/
function crUl2 (litext, iter) {
    document.write(`<ul>`)
    for (let i = 0; i < iter; i++) {

       document.write(`<li>${litext}</li>`);
    }
    document.write(`</ul>`)
}
crUl2('Lorem ipsum dolor sit amet', 5);
/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/
function crIl (arr) {
    for (let i = 0; i < arr.length; i++) {
        const argument = arr[i];
        document.write(`<li>${argument}</li>`)
    }
}
crIl([1,4,5, true, 'java', 'java script', false])


/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/

let objects = [
    {id: 1, name: 'Anna',age: 55},
    {id: 2, name: 'Ivan',age: 22},
    {id: 3, name: 'Kristi',age: 19},
    {id: 4, name: 'Sofia',age: 43},
    {id: 5, name: 'Vika',age: 100},
];
function usersMassive (objects) {
    for (const object of objects) {
        document.write(`<div>${object.id} - ${object.name}, age: ${object.age}</div>`)
    }
}
usersMassive(objects)
