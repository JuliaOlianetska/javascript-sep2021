/*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/
let time = 32;
if (time >= 0 && time < 15) {
    document.write('<h5>first part of hour</h5>');
} else if (time >= 15 && time < 30) {
    document.write('<h5>second part of hour</h5>');
} else if (time >= 30 && time < 45) {
    document.write('<h5>third part of hour</h5>');
} else if (time >= 45 && time < 60) {
    document.write('<h5>forth part of hour</h5>');
};

/*
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/
let day = +prompt('enter number from 1 to 31');
if (day > 0 && day <= 10) {
    document.write('<h4>1st part of month</h4>');
} else if (day > 10 && day <= 20) {
    document.write('<h4>2nd part of month</h4>');
} else if (day > 20 && day <= 31) {
    document.write('<h4>3rd part of month</h4>');
}  else if (day > 31) {
    document.write('<h4>WRONG DATE</h4>');
};

/*
- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
*/
let test = false;
if (test !==true) {
    document.write('<div>RIGHT</div>');
} else {
    document.write('<div>WRONG</div>');
};

let testT = test !==true ? '<div>Right</div>' : '<div>Wrong</div>';
document.write(testT);

/*
- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
*/
let a = 1;
if (a !== 0) {
    console.log('<h6>RIGHT</h6>');
} else {
    console.log('<h6>WRONG</h6>');
}

/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
*/
let weekDay = +prompt('enter week day number');
switch (weekDay) {
    case 1:
        document.write('<h5>go to office</h5>');
        break;
    case 2:
        document.write('<h5>go to office earlier morning</h5>');
        break;
    case 3:
        document.write('<h5>go to office earlier morning and go to restrant at the evening</h5>');
        break;
    case 4:
        document.write('<h5>work at home</h5>');
        break;
    case 5:
        document.write('<h5>work at home and meeting with friend at the evening</h5>');
        break;
    case 6:
        document.write('<h5>clean apartments and cook</h5>');
        break;
    case 7:
        document.write('<h5>rest</h5>');
        break;
    default:
        document.write('<h5>wrong day name</h5>')
}

    /*
- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
*/
let yearDaysQty = 366;
if (yearDaysQty % 2 == 0) {
    console.log('Leap year')
} else {
    console.log('NOT Leap year')
}


/*
- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let javaScriptName = prompt('enter official name of JavaScript');
if (javaScriptName == 'ECMAScript') {
    document.write('RIGHT');
} else {
    document.write('DON`T KNOW? ECMAScript!');
}

 */