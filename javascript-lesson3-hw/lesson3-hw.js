/*
--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль
*/
let arr1 = [4, 65, 76, 2525, -3453];
console.log(arr1);
let arr2 = ['watermelon', 'melon', 'apple', 'plum', 'berry'];
console.log(arr2);
let arr3 = ['java', 'node', 'redux', 'php', 'js', -344, true];
console.log(arr3);

/*
-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
*/
let emptyArr = [];
emptyArr[0] = 'beer';
emptyArr[1] = 'vodka';
emptyArr[2] = 'gin';
emptyArr[3] = 'whisky';
emptyArr[4] = 'wine';
emptyArr[5] = 'cognac';
console.log(emptyArr);

/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
*/
for (let i=1; i<=10; i++) {
    document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos.</div>')
}
/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
*/
for (let i=1; i<=10; i++) {
    document.write(`<div>${i}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos.</div>`)
}
/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
*/
let i = 0;
while (i<20) {
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, optio.</h1>`)
    i++;
}
/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
*/
let a = 0;
while (a<20) {
    document.write(`<h1>${a}) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, optio.</h1>`)
    a++;
}
/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
*/
let numArr = [1, 11, 111, 2, 22, 222, 3, 33, 333, 1000];
for (let i = 0; i < numArr.length; i++) {
    console.log(`${numArr[i]}`)
}
let strArr = ['bread', 'butter', 'egg', 'apple', 'mushroom', 'water', 'milk', 'potato','tomato', 'cucumber'];
for (let i = 0; i < strArr.length; i++) {
    console.log(`${strArr[i]}`)
}
let someArr = ['bread', 44, 'butter', -546, true, [1,2,3,4,5], 'egg', 'apple', 343444, false]
for (let arrElement of someArr) {
    console.log(arrElement)
}
/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
*/
let array1 = ['Ann', 44, 'Kristina', -546, true, 3.14, 'Sofia', 'Artem', 343444, false]
for (const array1Element of array1) {
    if (typeof array1Element == 'boolean') {
        console.log(array1Element);
    };
}
for (const array1Element of array1) {
    if (typeof array1Element == 'number') {
        console.log(array1Element);
    };
}
for (const array1Element of array1) {
    if (typeof array1Element == 'string') {
        console.log(array1Element);
    };
}

/*
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
*/

let emptyArray = [];
emptyArray[0] = 3455464;
emptyArray[1] = 'flower';
emptyArray[2] = 1000000;
emptyArray[3] = 'tree';
emptyArray[4] = -1111;
emptyArray[5] = 'cat';
emptyArray[6] = false;
emptyArray[7] = 5.343;
emptyArray[8] = 'dog';
emptyArray[9] = true;

for (const emptyArrayElement of emptyArray) {
    console.log(emptyArrayElement)
};

/*
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
*/

for (let i=0; i < 10; i++) {
    console.log(`step - ${i}`)
    document.write(`<h5>step - ${i}</h5>`)
};
for (let i=0; i < 100; i++) {
    console.log(`step - ${i}`)
    document.write(`<h5>step - ${i}</h5>`)
};
for (let i=0; i < 100; i+=2) {
    console.log(`step - ${i}`)
    document.write(`<h5>step - ${i}</h5>`)
};
for (let i=1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`step - ${i}`)
        document.write(`<h5>step - ${i}</h5>`)
    }
};
for (let i=1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(`step - ${i}`)
        document.write(`<h5>step - ${i}</h5>`)
    }
};
