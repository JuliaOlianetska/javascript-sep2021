/*
Всі функції повинні бути описані стрілочним типом!!!!
    - створити функцію яка обчислює та повертає площу прямокутника висотою
 */
let priamS = (a, b) => a * b;
console.log(priamS(10, 2));

/*
- створити функцію яка обчислює та повертає площу кола
 */
let circleS = (radius) => 3.14 * radius ** 2;
console.log(circleS(5));

/*
- створити функцію яка обчислює та повертає площу циліндру
 */
let cylinderS = (radius, height) => 2 * 3.14 * radius * height;
console.log(cylinderS(5, 10));

/*
- створити функцію яка приймає масив та виводить кожен його елемент
 */
let arr = [1, 11, 111];
let massiveF = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const argument = arr[i];
        console.log(argument);
    }
}
massiveF(arr);

/*
- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
 */
let createP = (text) => (`<p>${text}</p>`);
document.write(createP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, tenetur!'));

/*
- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 */
let createLi = (text) =>
    (`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`);

document.write(createLi('Lorem ipsum dolor sit amet, consectetur adipisicing'));

/*
- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 */
let createLi2 = (text, liqty) => {
    document.write(`<ul>`);
    for (let i = 0; i < liqty; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createLi2('Lorem ipsum dolor sit amet, consectetur adipisicing', 4);

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
 */

let someArr = [1, 55, true, 'banana', 'potato', 3000];
let list = (someArr) => {
    for (const someArrElement of someArr) {
        document.write(`<li>${someArrElement}</li>`);
    }
}
list(someArr);

/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/

let users = [
    {id: 1, name: 'Anna',age: 55},
    {id: 2, name: 'Ivan',age: 22},
    {id: 3, name: 'Kristi',age: 19},
    {id: 4, name: 'Sofia',age: 43},
    {id: 5, name: 'Vika',age: 100},
];

let usersMassive = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} - ${user.name}, age: ${user.age}</div>`)
    }
}
usersMassive(users);
