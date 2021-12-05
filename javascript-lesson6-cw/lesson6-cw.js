/*
- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'
*/
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

let normalize = (n) => {
    let newArr = [];
    let spllitedArr = n.replaceAll('.', ' ')
        .replaceAll('-', ' ')
        .replaceAll('_', ' ').split(' ');
    console.log(spllitedArr)
    spllitedArr.forEach((item) => {
        if (item) newArr.push(item);
    })
    console.log(newArr.join(' '))
}

normalize(n1);
normalize(n2);
normalize(n3);

/*
    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]
*/
let randomiser = (diapason, length) => {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.round(Math.random() * diapason))
    }
    return emptyArr;
}
console.log(randomiser(100, 5));


let arrayNew = randomiser(100,5)

let sortedarrayNew = arrayNew.sort((a, b) => {
return a - b;
})
console.log(sortedarrayNew);

let filteredArrayNew = arrayNew.filter(value => {
    if (value % 2 === 0)
        return value;
})
console.log(filteredArrayNew);

let mapArr = arrayNew.map(item => {
return (item.toString());
})
console.log(mapArr);

let nums = [11,21,3];
let sortNums = (arr, direction) => {
        if (direction === 'ascending') {
            return nums.sort((a,b) => a - b);
        } if (direction === 'descending') {
            return nums.sort((a,b) => b - a);
        }
    }
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'ascending'));
/*
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedCoursesArray = coursesAndDurationArray.sort((a,b)=> {
    return a.monthDuration - b.monthDuration;
})
console.log(sortedCoursesArray);


let filteredCoursesArray = coursesAndDurationArray.filter(value => {
        return value.monthDuration > 5;
});
console.log(filteredCoursesArray);