// Load posts from localStorage
window.onload = function() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => displayPost(post));
}

function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if(title === "" || content === "") {
        alert("Please fill in both fields!");
        return;
    }

    const post = {title, content};

    // Save to localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.unshift(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    displayPost(post, true);

    document.getElementById('title').value = "";
    document.getElementById('content').value = "";
}

function displayPost(post, prepend=false) {
    const postsContainer = document.getElementById('posts-container');

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.innerText = post.title;

    const postContent = document.createElement('p');
    postContent.innerText = post.content;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);

    if(prepend) {
        postsContainer.prepend(postDiv);
    } else {
        postsContainer.appendChild(postDiv);
    }
}
