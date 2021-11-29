/*
- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.
*/
let number1 = 10;
let number2 = 101;
if (number1 >= number2) {
    document.write(number1);
} else {
    document.write(number2);
};

/*
- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
*/
let apartmentNum = prompt('enter apartment number');
if (apartmentNum >= 1 && apartmentNum <= 20) {
    document.write('<h5>You live at the 1st entrance</h5>')
} else if (apartmentNum > 20 && apartmentNum <= 48) {
    document.write('<h5>You live at the 2nd entrance</h5>')
} else if (apartmentNum > 48 && apartmentNum <= 90) {
    document.write('<h5>You live at the 3rd entrance</h5>')
} else {
    document.write('<h5>There is no such apartment`s number in this building</h5>')
}

/*
- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
*/
let number = 10;
if (number == 10) {
    document.write('<p>RIGHT</p>');
} else {
    document.write('<p>WRONG</p>');
};

/*
- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else
*/
let x = [3, 4, 5];
let x2 = console.log(typeof x);
if (typeof x == 'number') {
    document.write('<p>1</p>');
} else if (typeof x == 'string') {
    document.write('<p>2</p>');
} else if (typeof x == 'boolean') {
    document.write('<p>3</p>');
} else if (typeof x == 'object') {
    document.write('<p>4</p>');
} else {
    document.write('<p>something else</p>');
}

/*
- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
*/
let temperature = prompt('enter temperature');
if (temperature >= +10 && temperature <= +22) {
    document.write('<p>GO to Okten office for studying</p>');
} else {
    document.write('<p>Today you have on-line lesson</p>');
}

/*
- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
    числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
*/

let winNum = prompt('enter your number');
switch (winNum) {
    case '45':
        document.write('<p>You won a CAR</p>');
        break;
    case '12':
        document.write('<p>You won a smartphone</p>');
        break;
    case '33':
        document.write('<p>You won a house</p>');
        break;
    default:
        document.write('<p>Wrong number. Try next time</p>');
};