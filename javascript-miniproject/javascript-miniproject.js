/* В index.html
1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

На странице user-details.html:
4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(respond => respond.json())
    .then(users => {

        let usersInfo = document.getElementsByClassName('users-info')[0];

        for (const user of users) {
            let userInfo = document.createElement('div');
            userInfo.innerHTML = `${user.id} - ${user.name}`;

            usersInfo.append(userInfo);
            let form = document.createElement('form');
            form.innerHTML = '<button>button</button>'
            form.action = "user-details.html";
            userInfo.append(form)

            form.onclick = function () {
                console.log(`${user.email}`)
                let jsonUser = JSON.stringify(user);
                console.log(jsonUser)
                localStorage.setItem('user', jsonUser)
            }


        }
    });


let userDetails = localStorage.getItem('user');
console.log(userDetails)
let userDetailsParse = JSON.parse(userDetails)
console.log(userDetailsParse);

let userDetailedInfo = document.getElementsByClassName('detailed-info')[0];
userDetailedInfo.innerHTML = `<div>
<h3>User's id: ${userDetailsParse.id}</h3>
<p>Name: ${userDetailsParse.name}</p>
 <p>Username: ${userDetailsParse.username}</p>
<p>Email: ${userDetailsParse.email}</p>
<p>Address: </p>
</div>`

let btnPostsDet = document.createElement('button');
btnPostsDet.innerHTML = '<h4>Posts of current user</h4>';
userDetailedInfo.append(btnPostsDet)

btnPostsDet.onclick = function () {
    console.log('button', userDetailsParse.id);

    fetch(`https://jsonplaceholder.typicode.com/users/${userDetailsParse.id}/posts`)
        .then(posts => posts.json())
        .then(poststitles => {

            let postsTitle = document.getElementsByClassName('titles')[0];
            postsTitle.innerHTML = '';

            for (const posttitle of poststitles) {

                let liTitle = document.createElement('li');
                liTitle.innerText = posttitle.title;
                postsTitle.append(liTitle)

                let formBtn = document.createElement('form');
                formBtn.action = "post-details.html";
                liTitle.append(formBtn);

                let postDetBtn = document.createElement('button');
                postDetBtn.innerHTML = 'post details'
                formBtn.append(postDetBtn)

                postDetBtn.onclick = function () {
                    console.log('button', posttitle.title);
                    let jsonPost = JSON.stringify(posttitle);
                    console.log(jsonPost)
                    localStorage.setItem('post', jsonPost)
                };
            }
        });
}


