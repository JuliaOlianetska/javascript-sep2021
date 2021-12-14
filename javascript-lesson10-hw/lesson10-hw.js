/*
- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

    - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
*/
let btn = document.getElementById('btn');
let text = document.getElementById('text');
btn.onclick = function (e) {
    text.style.display = 'none';
};

let btn1 = document.createElement('button');
btn1.innerText = 'Disappear'
text.appendChild(btn1);
btn1.onclick = function (e) {
    btn1.style.display = 'none';
};
/*
- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
*/
let form = document.getElementById('f1');
form.onsubmit = function (e) {
    e.preventDefault();
    let age = this.age.value;
    console.log({age:age})
    if (age < 18) {
        console.log('Your age less than 18')
        let answer = document.createElement('p');
        answer.innerText = 'Your age is less than 18';
        form.appendChild(answer);
    } else {
        console.log('OK')
    }
}

/*
- Создайте меню, которое раскрывается/сворачивается при клике
*/
let menu = document.querySelector('.menu');
let menuTitle = menu.querySelector('.title');

menuTitle.onclick = function () {
    console.log(menu)
    menu.classList.toggle('hidden')
}

/*
- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    Вывести список комментариев в документ, каждый в своем блоке.
    Добавьте каждому комментарию по кнопке для сворачивания его body.
*/

let commentsArr = [
    {title:' comment 1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptate.'},
    {title:' comment 2', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptate.'},
    {title:' comment 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptate.'},
    {title:' comment 4', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptate.'},
    {title:' comment 5', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptate.'},
];

let comments = document.createElement('div');

for (const comment of commentsArr) {
    let commentEl = document.createElement('div');
    let commentTitle = document.createElement('h4');
    let commentBtn = document.createElement('button');
    let commentBody = document.createElement('p');
    commentTitle.innerText = comment.title;
    commentBtn.innerText = 'details';
    commentBody.innerText = comment.body;
    commentEl.append(commentTitle, commentBtn, commentBody);
    comments.appendChild(commentEl);
    commentBtn.onclick = function (e) {
        commentBody.style.display = 'none';
    }
}
document.body.appendChild(comments);