/*
є масив -
створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
 */
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];




for (const user of users) {
    let userInfo = document.createElement('div');
    userInfo.innerText = (`${user.name}, age: ${user.age}, status: ${user.status}`);
    let btn = document.createElement('button');
    btn.innerText = 'Add to favorite';

    userInfo.appendChild(btn)
    document.body.appendChild(userInfo);

    localStorage.setItem('favorite users', JSON.stringify([]));

    btn.onclick = (e) => {
        let favoriteUsers = JSON.parse(localStorage.getItem('favorite users'));
        favoriteUsers.push(user);
        console.log(favoriteUsers);
        localStorage.setItem('favorite users', JSON.stringify(favoriteUsers));
    }
}

let toFavoriteDiv = document.createElement('div');
let toFavoritePage = document.createElement('a');
toFavoritePage.innerHTML = '<a href="./lesson11-сw-favorite-page.html">My favorite users</a>'

toFavoriteDiv.appendChild(toFavoritePage);
document.body.appendChild(toFavoriteDiv);