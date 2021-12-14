/*
-створити форму з інпутами для name та age.
    При відправці форми записати об'єкт в localstorage
*/

let div = document.createElement('div');
let form1 = document.createElement('form');
let input1 = document.createElement('input');
input1.setAttribute('name', 'name')
let input2 = document.createElement('input');
input2.setAttribute('name', 'age');
let btn = document.createElement('button');
btn.innerText = 'SAVE';
document.body.appendChild(div);
div.appendChild(form1);
form1.append(input1, input2, btn);

let userSave = (name, age) => {
    let user = {
        name: input1.value,
        age: input2.value
    };
    localStorage.setItem('user', JSON.stringify(user));
};
btn.onclick = function (e) {
    e.preventDefault();
    userSave(input1.value, input2.value)
}
/*
-створити форму з інпутами для model,type та volume автівки.
    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
 */

let div2 = document.createElement('div');
div2.style.marginTop = '50px';
let form2 = document.createElement('form');
let input3 = document.createElement('input');
input3.setAttribute('name', 'model')
let input4 = document.createElement('input');
input4.setAttribute('name', 'type');
let input5 = document.createElement('input');
input5.setAttribute('name', 'volume');
let btn2 = document.createElement('button');
btn2.innerText = 'CONFIRM';
document.body.appendChild(div2);
div2.appendChild(form2);
form2.append(input3, input4, input5, btn2);


let carSave = (model, type, volume) => {
    let car = {
        model: input3.value,
        type: input4.value,
        volume: input5.value
    };
    localStorage.setItem('car', JSON.stringify(car));
};

btn2.onclick = function (e) {
    e.preventDefault();
    carSave(input3.value, input4.value, input5.value);

}

console.log(localStorage.getItem('car'));
