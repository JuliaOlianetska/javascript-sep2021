/*
1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
 */
let numbers = [1, 4, 78, 67, 687, 56, 4, 100, 99, 1000];
let sum = 0;
for (const i in numbers) {
    sum +=numbers[i];
}
console.log(sum);

/*
2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
*/
let book = {
    name: 'Vidmak',
    pageQty: 100,
    genre: 'fantasy',
}
console.log(book);
/*
3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
*/
let book2 = {
    name: 'Something',
    pageQty: 101,
    genre: 'detective',
    authours: ['Henry Ford', 'Andy Clair', 'Mark Feders'],
}
console.log(book2);
/*
4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
*/
let books = [
    {name: 'Code DaVinci', pageQty: 200, genre: 'detective', authour: 'Den Braun'},
    {name: 'One Hundred Years of Solitude', pageQty: 300, genre: 'triller', authour: 'Gabriel Garcia Marquez'},
    {name: 'Moby Dick', pageQty: 100, genre: 'novel', authour: 'Herman Melville'},
];
console.log(books);
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
/*
5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
Значення площі зберігати в змінній s.
*/
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

/*
6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
результат помістіть у змінну v.
*/
let heightC = 10;
let dC = 4;
const Pi = 3.14;
let v = Pi * (Math.pow(dC/2, 2))*heightC;
console.log(v);

/*
7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
*/
let n = 3;
let m = 4;
let k2 = n**2 + m**2;
console.log(Math.sqrt(k2));

