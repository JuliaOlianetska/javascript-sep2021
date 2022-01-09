/* 1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts
*/
let wrap = document.createElement('div');
wrap.classList.add('wrap');

document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts => {
    console.log(posts)
    for (const post of posts) {
        let div = document.createElement('div');
        div.classList.add('post');
        let divId = document.createElement('div');
        divId.innerHTML = `<h4>post id: ${post.id}</h4>`;
        let divUserId = document.createElement('div');
        divUserId.innerHTML = `<p>user id: ${post.userId}</p>`;
        let divTitle = document.createElement('div');
        divTitle.innerHTML = `<p>post title: ${post.title}</p>`;
        let divBody = document.createElement('div');
        divBody.innerHTML = `<p>post text: ${post.body}</p>`;

        div.append(divId, divUserId, divTitle, divBody);
        wrap.appendChild(div);
    }
});


/*    2.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
    Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments
*/

let wrapComments = document.createElement('div');
wrapComments.classList.add('comments');

document.body.appendChild(wrapComments);

fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(comments => {
    console.log(comments)
    for (const comment of comments) {
        let divComment = document.createElement('div');
        divComment.classList.add('comment');
        let postId = document.createElement('div');
        postId.innerHTML = `<h4>post id: ${comment.postId}</h4>`;
        let commentId = document.createElement('div');
        commentId.innerHTML = `<p>comment id: ${comment.id}</p>`;
        let nameDiv = document.createElement('div');
        nameDiv.innerHTML = `<p>comment name: ${comment.name}</p>`;
        let emailDiv = document.createElement('div');
        emailDiv.innerHTML = `<p>email: ${comment.email}</p>`;

        divComment.append(postId, commentId, nameDiv, emailDiv);
        wrapComments.appendChild(divComment);
    }
});