/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
     Вивести кожну змінну за допомогою: console.log , alert, document.write
     */
let a = 'hello';
console.log(a);
document.write('<h3>' + a + '</h3>');
/*alert(a);*/

let b = 'owu';
console.log(b);
document.write('<h3>' + b + '</h3>');
/*alert(b);*/

let c = 'com';
console.log(c);
document.write('<h3>' + c + '</h3>');
/*alert(c);*/

let d = 'ua';
console.log(d);
document.write('<h3>' + d + '</h3>');
/*alert(d);*/

let e = 1;
console.log(e);
document.write('<h3>' + e + '</h3>');
/*alert(e);*/

let f = 10;
console.log(f);
document.write('<h3>' + f + '</h3>');
/*alert(f);*/

let g = -999;
console.log(g);
document.write('<h3>' + g + '</h3>');
/*alert(g);*/

let h = 123;
console.log(h);
document.write('<h3>' + h + '</h3>');
/*alert(h);*/

let i = 3.14;
console.log(i);
document.write('<h3>' + i + '</h3>');
/*alert(i);*/

let j = 2.7;
console.log(j);
document.write('<h3>' + j + '</h3>');
/*alert(j);*/

let k = 16;
console.log(k);
document.write('<h3>' + k + '</h3>');
/*alert(k);*/

let l = true;
console.log(l);
document.write('<h3>' + l + '</h3>');
/*alert(l);*/

let m = false;
console.log(m);
document.write('<h3>' + m + '</h3>');
/*alert(m);*/
/*
- Переприсвоїти кожній змінній з завдання значення на довільне.
    Вивести кожну змінну за допомогою: console.log , alert, document.write
*/
a = 'first';
console.log(a);
document.write('<h3>' + a + '</h3>');
/*alert(a);*/

b = 'second';
console.log(b);
document.write('<h3>' + b + '</h3>');
/*alert(b);*/

c = 'third';
console.log(c);
document.write('<h3>' + c + '</h3>');
/*alert(c);*/

d = 'forth';
console.log(d);
document.write('<h3>' + d + '</h3>');
/*alert(d);*/

e = 111111;
console.log(e);
document.write('<h3>' + e + '</h3>');
/*alert(e);*/

f = 10000000;
console.log(f);
document.write('<h3>' + f + '</h3>');
/*alert(f);*/

g = -999999999;
console.log(g);
document.write('<h3>' + g + '</h3>');
/*alert(g);*/

h = 1234567890;
console.log(h);
document.write('<h3>' + h + '</h3>');
/*alert(h);*/

i = 3.144444444;
console.log(i);
document.write('<h3>' + i + '</h3>');
/*alert(i);*/

j = 2.755555555;
console.log(j);
document.write('<h3>' + j + '</h3>');
/*alert(j);*/

k = 162222222;
console.log(k);
document.write('<h3>' + k + '</h3>');
/*alert(k);*/

l = false;
console.log(l);
document.write('<h3>' + l + '</h3>');
/*alert(l);*/

m = true;
console.log(m);
document.write('<h3>' + m + '</h3>');
alert(m);


/*
- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
*/
let firstName = 'Julia';
let middleName = 'Volodymyrivna';
let lastName = 'Olianetska';
let person = firstName + ' ' + middleName + ' ' + lastName;
document.write(person);
/*
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
   */
let name = prompt('enter name');
let fatherName = prompt('enter father name');
let age = prompt('enter age');
document.write('<h5> Вітаю ' + name + ' ' + fatherName + '. Тобі ' + age + ' років. </h5>')

/*
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
  */
let a1 = 100;
console.log(typeof a1);
let b1 = '100';
console.log(typeof b1);
let c1 = true;
console.log(typeof c1);
/*
- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
В однакових виразах не використовувати однакові оператори!!!
  5 ? 6 -> true
  5 ? 6 -> false
  5 ? 6 -> false
  5 ? 6 -> false
  10 ? 10 -> true
  10 ? 10 -> true
  10 ? 10 -> false
  10 ? 10 -> false
  10 ? 10 -> false
  123 ? '123' -> false
  123 ? '123' -> true
  */
console.log(5<6)
console.log(5>6)
console.log(5>=6)
console.log(5===6)
console.log(10===10)
console.log(10<=10)
console.log(10!=10)
console.log(10<10)
console.log(10>10)
console.log(123==='123')
console.log(123!=='123')
 /*
- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
     let a = 5;
     document.write(str + a + "<br/>"); // 205, просто объединится строка и цифра
     document.write(str - a + "<br/>"); // 15, произойдет отнимание
     document.write(str * "2" + "<br/>"); // 40, умножится
     document.write(str / 2 + "<br/>"); // 10б поделится
*/

