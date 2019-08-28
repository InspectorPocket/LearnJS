const article = document.querySelector('article');

console.log(article.children);
console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

// parentElement.parentElement can be stacked to look up the node tree
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling.previousElementSibling);

// chaining
console.log(Array.from(title.nextElementSibling.parentElement.children));
