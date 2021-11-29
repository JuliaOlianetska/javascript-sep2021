/*
- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
*/
function min (arg1, arg2, arg3) {
    if (arg1 <= arg2 && arg1 <= arg3) {
        console.log(arg1);
    } else if (arg2 < arg1 && arg2 <= arg3) {
        console.log(arg2);
    } else {
        console.log(arg3);
    }
}
min(71, 54, 77)

/*
- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
*/
function max (arg1, arg2, arg3) {
    if (arg1 >= arg2 && arg1 >= arg3) {
        console.log(arg1);
    } else if (arg2 > arg1 && arg2 >= arg3) {
        console.log(arg2);
    } else {
        console.log(arg3);
    }
}
max(71, 54, 77)


/*
- створити функцію яка повертає найбільше число з масиву
*/
let arr = [11,2,3,41,5,-5,7,9];
function maxEl (arr){
    let max = arr[0];
    for (const arrEl of arr) {
        console.log(arrEl);
        if (arrEl > max) {
            max = arrEl;

        }
    } return max;
}
console.log(`max number - ${maxEl(arr)}`);


/*
- створити функцію яка повертає найменьше число з масиву
*/

function minEl (arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const minElement = arr[i];
        console.log(minElement);
        if (minElement < min) {
            min = minElement;
        }
    } return min;
}
console.log(`min number - ${minEl(arr)}`);

/*
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
*/
function sum (arr) {
   let sumEl = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        sumEl = sumEl + arrElement;
    } return sumEl
}
console.log(sum(arr));

/*
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
*/
function sumAver (arr) {
    let sumEl = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        sumEl = sumEl + arrElement;
    } return sumEl / arr.length
}
console.log(sumAver(arr));

/*
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
*/
function minmaxEl (arr){
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(`max - ${max}`);
    return min;
}
console.log(`min - ${minmaxEl(arr)}`);


/*
- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
*/
function randomizer (diapason) {
    let randomNum = Math.round(Math.random()*diapason)
    return randomNum;
}
console.log(randomizer(100));

/*
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
*/
function arrRandom (diapason, length) {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.round(Math.random() * diapason))
    }
    return emptyArr;
}
console.log(arrRandom(100, 5));


/*
- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
 */

let array2 = [1, 2, 3, 4, 5]
function reverseArr (array2) {
    let newReverseArr = [];
    for (let i = array2.length - 1; i >= 0; i--) {
        const array2Element = array2[i];
newReverseArr.push(array2Element)
    }
    return newReverseArr;
}
console.log(reverseArr(array2));
