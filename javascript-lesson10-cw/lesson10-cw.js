/*
- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
*/
let div1 = document.createElement('div');
let form1 = document.createElement('form');
form1.setAttribute('name', 'f1');
let input1 = document.createElement('input');
input1.setAttribute('name', 'in1');
let input2 = document.createElement('input');
input2.setAttribute('name', 'in2');

let div2 = document.createElement('div');
let form2 = document.createElement('form');
form2.setAttribute('name', 'f2');
let input3 = document.createElement('input');
input3.setAttribute('name', 'in3');
let input4 = document.createElement('input');
input4.setAttribute('name', 'in4');

let btn = document.createElement('button');
btn.innerText = 'submit';

form1.append(input1, input2);
form2.append(input3, input4);
div1.appendChild(form1);
div2.appendChild(form2);
document.body.append(div1, div2, btn);

btn.addEventListener('click', function () {
    console.log(document.forms.f1.in1.value + ' ' + document.forms.f1.in2.value);
    console.log(document.forms.f2.in3.value + ' ' + document.forms.f2.in4.value)
});

/*
- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)
*/
let div3 = document.createElement('div');
let form3 = document.createElement('form');
form3.setAttribute('name', 'f3');
let input5 = document.createElement('input');
input5.setAttribute('type', 'number');
let input6 = document.createElement('input');
input6.setAttribute('type', 'number');
let input7 = document.createElement('input');
input7.setAttribute('type', 'text');

let btn1 = document.createElement('button');
btn1.innerText = 'submit';

form3.append(input5, input6, input7, btn1);
div3.append(form3);
document.body.appendChild(div3);

btn1.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(input5.value + ' ' + input6.value + ' ' + input7.value);
let tableRow = input5.value;
    let tableColumn = input6.value;
    let tableText = input7.value;

    function table(tableRow, tableColumn, tableText) {
        let table1 = document.createElement('table');
        table1.style.border = '5px solid black';

        div3.appendChild(table1);

        for (let i = 0; i < tableRow; i++) {
      let tableRowEl = document.createElement('tr');
       for (let j = 0; j < tableColumn; j++) {
       let tableColumnEl = document.createElement('td');
           tableColumnEl.style.border = '5px solid black';
        tableColumnEl.innerText = `${tableText}`;
        table1.appendChild(tableRowEl);
        tableRowEl.appendChild(tableColumnEl);
                  }
                }
           }
           table(tableRow, tableColumn, tableText);

        })

/*
- Сворити масив не цензцрних слів.
    Сворити інпут текстового типу.
    Якщо людина вводить слово і воно міститься в масиві не цензурних слів
кинути алерт з попередженням.
    Перевірку робити при натисканні на кнопку
*/
let array = ['дурак', 'мудак', 'какашка']

let div4 = document.createElement('div');
div4.style.marginTop = '50px';
let form4 = document.createElement('form');
let input8 = document.createElement('input');

let btn2 = document.createElement('button');
btn2.innerText = 'CHECK';

form4.append(input8, btn2);
div4.appendChild(form4);
document.body.appendChild(div4);

btn2.onclick = function (e) {
    e.preventDefault();
    for (const elementAr of array) {
        if (input8.value === elementAr) {
            console.log('wrong')
            alert('BAD WORD')
        }
    }
}

/*
- Сворити масив не цензцрних слів.
    Сворити інпут текстового типу.
    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    Кинути алерт з попередженням у випадку якщо містить.
    Перевірку робити при натисканні на кнопку
*/

btn2.addEventListener('click', function (e) {
    e.preventDefault();
    for (const elementAr of array) {
        if (input8.value.includes(elementAr)) {
            console.log('wrong')
            alert('BAD WORD')
        }
    }
})
