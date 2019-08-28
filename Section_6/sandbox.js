const content = document.querySelectorAll('p');
console.log(content)

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


// innerText will only get text that is visible !(display: none;) for eg
// textContent will get all the text within the element regardless

content.forEach(twat => {
    twat.classList.add('message-box');
    if (twat.textContent.includes('error')) {
        twat.classList.add('error');
    } else if (twat.innerText.includes('success')) {
        twat.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test'); // on
title.classList.toggle('test'); // off
title.classList.toggle('test'); // on
