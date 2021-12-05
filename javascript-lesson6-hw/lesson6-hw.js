/*
- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
 */
let str = 'hello word';
let str1 = 'lorem ipsum';
let str2 = 'javascript is cool';
console.log(str.length);
console.log(str1.length);
console.log(str2.length);

let toUpCase = str.toUpperCase();
console.log(toUpCase);
let toUpCase1 = str1.toUpperCase();
console.log(toUpCase1);
let toUpCase2 = str2.toUpperCase();
console.log(toUpCase2);

let toLowCase = toUpCase.toLowerCase();
console.log(toLowCase);
let toLowCase1 = toUpCase1.toLowerCase();
console.log(toLowCase1);
let toLowCase2 = toUpCase2.toLowerCase();
console.log(toLowCase2);

/*
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
*/
let str3 = ' dirty string   ';
console.log('довжина спочатку - ', str.length);
let trim = str3.trim();
console.log(trim);
console.log('довжина після очиження - ',trim.length);

/*
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
    let arr = stringToarray(str);
    document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
*/
let str4 = 'Каждый охотник желает знать';
let stringToArray = (str4) => {
    console.log(str4.split(' '));
    return str4.split(' ');
}
let arr = stringToArray(str4);
document.writeln(arr);

/*
- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
    document.writeln(delete_characters(str, 7)); // Каждый
    */
let delete_characters = (str4, length) => {
    console.log(str4.substring(0, length));
     return str4.substring(0, length);

    }

document.writeln(`<p>${delete_characters(str4, 7)}</p>`)


/*
- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
   let str = "HTML JavaScript PHP";
   document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
*/

let str5 = "HTML JavaScript PHP";
let insert_dash = (str5) => {
let replaceUpperCase = str5.replaceAll(' ', '-').toUpperCase();
    console.log(replaceUpperCase);
    return replaceUpperCase;
}
document.writeln(insert_dash(str5)); // 'HTML-JAVASCRIPT-PHP'

/*
- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
*/
let str6 = 'каждый охотник желает знать';
let toUppCaseFirst = (str6) => {
    let firstUpCase = str6.replace(str6[0], str6[0].toUpperCase());
    console.log(firstUpCase);
    return (firstUpCase);
}
document.writeln(`<p>${toUppCaseFirst(str6)}</p>`);

/*
- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
 */
let toUppCaseFirstLetter = (str6) => {
    let firstLetterUpCase = str6.split(' ').map(value => value.replace(value[0], value[0].toUpperCase())).join(' ');
    console.log(firstLetterUpCase);
    return (firstLetterUpCase);
}
document.writeln(`<p>${toUppCaseFirstLetter(str6)}</p>`);
