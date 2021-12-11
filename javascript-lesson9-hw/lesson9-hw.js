/*Все робити за допомоги js.
- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.
*/
let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aspernatur commodi consequatur doloremque doloribus dolorum eum fugit ipsam iusto maiores nobis possimus provident, ratione similique suscipit totam ullam vitae?';
div.style.background = 'pink';
div.style.color = 'green';
div.style.fontSize = '14px';
document.body.appendChild(div);
let newDiv = div.cloneNode(true);
document.body.appendChild(newDiv);

/*
- Є масив:
    ['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.
*/
let arr = ['Main','Products','About us','Contacts'];
for (const string of arr) {
    let liEl = document.createElement('li');
    liEl.innerHTML = string;
    let menu = document.getElementsByClassName('menu');
    menu[0].append(liEl);
}

/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.
*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divCourses = document.createElement('div');
    document.body.appendChild(divCourses);
    divCourses.innerText = (` title - ${coursesAndDurationArrayElement.title}, duration: ${coursesAndDurationArrayElement.monthDuration} months`);
}

/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.
*/
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divCourses2 = document.createElement('div');
    divCourses2.classList.add('item');
    document.body.appendChild(divCourses2);
    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = (`title: ${coursesAndDurationArrayElement.title}`);
    let description = document.createElement('p');
    description.classList.add('description');
    description.innerText = (`courses duration: ${coursesAndDurationArrayElement.monthDuration} months`);
    divCourses2.append(heading, description);

}