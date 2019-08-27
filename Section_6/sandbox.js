// 1. get first paragraph, get the inner text, change the text inside
const para = document.querySelector('p');

// para.innerText = 'help me';
// console.log(para.innerText);

// 2. change text of all p tags
const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' help me';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>mooore content</h2>';

const people = ['bill', 'ben', 'graham'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`; 
});
