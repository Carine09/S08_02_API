/* Cette fois-ci, on va utiliser les paramètres de requête pour créer une page web. Tu peux par exemple implémenter une recherche ou une pagination. N’hésite pas à demander des idées aux encadrant·es ou autres apprenant·es de ta promotion. */

const postContainer = document.querySelector("#postContainer");

async function fetchPosts() {
    const response = await fetch("https://www.dummyjson.com/posts/search?q=mystery");
    const dataSearch = await response.json();
    console.log(dataSearch);

    postContainer.innerText = "";
    postContainer.innerHTML = `<div> Il y a ${dataSearch.posts.length} posts</div>`;

    dataSearch.posts.forEach(post => {
        let titleContainer = document.createElement("h1");
        titleContainer.innerText = post.title;
        postContainer.appendChild(titleContainer);
     
        let bodyContainer = document.createElement("div");
        bodyContainer.innerText = post.body;
        postContainer.appendChild(bodyContainer)
    });
}

postContainer.innerText = `Chargement des posts...`
fetchPosts();