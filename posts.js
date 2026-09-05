const posts = [
{
title: "Inteligência Artificial",
category: "IA",
description:
"A inteligência artificial está transformando empresas, escolas e diversos setores da sociedade.",
icon: "🤖"
},

{
    title: "O futuro dos computadores",
    category: "Computadores",
    description:
        "Novas tecnologias estão tornando computadores cada vez mais rápidos, eficientes e inteligentes.",
    icon: "💻"
},

{
    title: "Segurança Digital",
    category: "Segurança",
    description:
        "A proteção de dados é cada vez mais importante em um mundo conectado.",
    icon: "🔐"
},

{
    title: "Smartphones do futuro",
    category: "Celulares",
    description:
        "Os smartphones continuam evoluindo com novos recursos, telas e tecnologias.",
    icon: "📱"
},

{
    title: "Desenvolvimento Web",
    category: "Programação",
    description:
        "HTML, CSS e JavaScript são algumas das tecnologias fundamentais para criar sites modernos.",
    icon: "🌐"
},

{
    title: "Tecnologia sustentável",
    category: "Inovação",
    description:
        "Novas soluções tecnológicas estão ajudando a reduzir impactos ambientais e economizar recursos.",
    icon: "🌱"
}

];

const postsContainer = document.getElementById("posts");

posts.forEach((post) => {

const article = document.createElement("article");

article.className = "post";

article.innerHTML = `
    <div class="post-icon">${post.icon}</div>

    <span class="category">${post.category}</span>

    <h3>${post.title}</h3>

    <p>${post.description}</p>

    <a href="#" class="read-more">
        Ler mais →
    </a>
`;

postsContainer.appendChild(article);

});
