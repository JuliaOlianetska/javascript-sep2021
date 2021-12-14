let favoriteDiv = document.createElement('div');
let favoritePage = document.createElement('a');
favoritePage.innerHTML = '<a href="./lesson11-сw.html">HOME</a>'

favoriteDiv.appendChild(favoritePage);
document.body.appendChild(favoriteDiv);



let data = localStorage.getItem('favorite users');
let favoriteUsers = JSON.parse(data);
console.log(favoriteUsers);

for (const favoriteUser of favoriteUsers) {
    let usersDiv = document.createElement('div');
usersDiv.innerText = (`${favoriteUser.name}, age: ${favoriteUser.age}, status: ${favoriteUser.status}`);
    document.body.appendChild(usersDiv)
}




