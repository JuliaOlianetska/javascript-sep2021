/*
зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
    1. перебрати його циклом while
    2. перебрати його циклом for
    3. перебрати циклом while та вивести  числа тільки з непарним індексом
*/

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

for (const number of arr) {
    console.log(number)
}

let a = 0;
while (a < arr.length) {
    if (a%2 !==0)
    console.log(arr[a]);
    a++;
}

/*
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
*/

for (let i = 0; i < arr.length; i++) {
    if (i%2 !==0)
        console.log(`index num - ${i}, number - ${arr[i]}`)
}

let ind = 0;
while (ind < arr.length) {
    if (ind%2 ===0)
        console.log(arr[ind]);
    ind++;
}

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        console.log(`index num - ${i}, number - ${arr[i]}`)
    }
}

/*
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
*/
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
} console.log(arr);


for (let j = arr.length - 1; j >= 0; j--) {
    const arrElement = arr[j];
    console.log(arr[j])
}

/*
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
*/

let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = arr2.length - 1; i >= 0; i--) {
    const arr2Element = arr2[i];
    console.log(arr2Element)
}
for (let i = arr2.length - 1; i>=0; i--) {
    if (i % 2 !== 0) {
        console.log(`index num - ${i}, number - ${arr2[i]}`)
    }
}
for (let i = arr2.length - 1; i>=0; i--) {
    if (i % 2 === 0) {
        console.log(`index num - ${i}, number - ${arr2[i]}`)
    }
}

for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr2[i] % 3 === 0) {
        arr2[i] = 'okten';
    }
    console.log(arr2[i])
}