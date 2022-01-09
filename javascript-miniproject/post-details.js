/*
    На странице post-details.html:
7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
*/


let postsDetails = localStorage.getItem('post');
console.log(postsDetails)
let postDetailsParse = JSON.parse(postsDetails)
console.log(postDetailsParse);

let userPostDetails = document.getElementsByClassName('posts-details')[0];
userPostDetails.innerHTML = `<div>
    <h4>title: ${postDetailsParse.title}</h4>
    <p>User Id: ${postDetailsParse.userId}</p>
    <p>id: ${postDetailsParse.id}</p>
    <p>body: ${postDetailsParse.body}</p>
</div>`

let btnCommentsDet = document.createElement('button');
btnCommentsDet.innerHTML = '<h4>Comments of current post</h4>'
btnCommentsDet.style.margin = '10px';
userPostDetails.append(btnCommentsDet)

btnCommentsDet.onclick = function () {
    console.log('button', postDetailsParse.id);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postDetailsParse.id}/comments`)
        .then(respond => respond.json())
        .then(comments => {

            let commentsUser = document.getElementsByClassName('comments-description')[0];
            comments.innerHTML = '';

            for (const comment of comments) {
                let oneComment = document.createElement('div');
                oneComment.style.width = '20%';
                oneComment.style.background = 'pink';
                oneComment.style.borderRight = '5px solid blue';
                oneComment.style.margin = '10px';
                oneComment.innerHTML = `<div>

<p>post id: ${comment.postId}</p>
<p>id: ${comment.id}</p>
<p>post name: ${comment.name}</p>
<p>user email: ${comment.email}</p>
<p>comment: ${comment.body}</p>
</div>`;
                commentsUser.append(oneComment)


            }
        })
};
