/* Pour cet exercice, on reste sur un format assez libre. Je te propose d’utiliser les paramètres de chemin d’une API de ton choix dans un projet JavaScript. Je te donne quelques exemples, si jamais tu n’es pas inspiré·e (si tu trouves une API toi-même, c’est encore mieux).

// Dummy json
'<https://dummyjson.com/posts>' // tous les posts
'<https://dummyjson.com/posts/1>' // le premier
'<https://dummyjson.com/posts/2>' // le deuxième, etc...

// CodePassport (offers)
'<https://www.codepassport.dev/api/offers>' // même principe
'<https://www.codepassport.dev/api/offers/1>'
'<https://www.codepassport.dev/api/offers/2>'

L’idée, c'est de créer une page web qui affiche les infos d’une donnée en particulier (un post ou une offre par exemple), plutôt qu’afficher la liste entière. */

const postContainer = document.querySelector("#postContainer");
// const titlePost = document.querySelector("#titlePost");
// const bodyPost = document.querySelector("#bodyPost");

async function fetchPosts() {
    const response = await fetch("https://www.dummyjson.com/posts/2");
    const data = await response.json();
    console.log(data);

    postContainer.innerText = "";


    let titleContainer = document.createElement("h1");
    titleContainer.innerText = data.title;
    postContainer.appendChild(titleContainer);
 
    let bodyContainer = document.createElement("div");
    bodyContainer.innerText = data.body;
    postContainer.appendChild(bodyContainer)

}

// Autre méthode si on passe par la liste des posts
// async function fetchPosts() {
//     const response = await fetch("https://www.dummyjson.com/posts");
//     const data = await response.json();
//     console.log(data);
//     console.log(data.posts[0].title);

//     postContainer.innerText = "";
//     // on modifie le HTML pour afficher le 1er post uniquement
//     // titlePost.innerHTML = data.posts[0].title
//     // bodyPost.innerHTML = data.posts[0].body

//     let titleContainer = document.createElement("h1");
//     titleContainer.innerText = data.posts[0].title;
//     postContainer.appendChild(titleContainer);
 
//     let bodyContainer = document.createElement("div");
//     bodyContainer.innerText = data.posts[0].body;
//     postContainer.appendChild(bodyContainer)

// }

postContainer.innerText = `Chargement du post...`
fetchPosts();

