/*
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
*/

let wrap = document.createElement('div');
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/posts').
then(response => response.json()).
then(posts => {
    console.log(posts);

    for (const post of posts) {
        let postDiv = document.createElement('div');


        let postIdDiv = document.createElement('div');
        postIdDiv.innerHTML = `<p>post id: ${post.id}</p>`;
        let userIdDiv = document.createElement('div');
        userIdDiv.innerHTML = `<p>user id: ${post.userId}</p>`;
        let titleDiv = document.createElement('div');
        titleDiv.innerHTML = `<h4>post title: ${post.title}</h4>`;
        let bodyDiv = document.createElement('div');
        bodyDiv.innerHTML = `<p>post text: ${post.body}</p>`;

        let btn = document.createElement('button');
        btn.innerText = 'Comments';


        btn.onclick = (e) => {
           fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments').
           then(response => response.json()).
           then(comments => {
               console.log(comments);

               for (const comment of comments) {
                   let commentDiv = document.createElement('div');

                   commentDiv.innerHTML = `
                   <h6>post id: ${comment.postId},</h6>
                   <h6>comment id: ${comment.id},</h6>
                   <h5>comment name: ${comment.name},</h5>  
                   <p>comment body: ${comment.body}</p>  
                   `

                   postDiv.appendChild(commentDiv);
               }

           })

        }

        postDiv.append(postIdDiv, userIdDiv, titleDiv, bodyDiv, btn);
        wrap.appendChild(postDiv);
    }

})