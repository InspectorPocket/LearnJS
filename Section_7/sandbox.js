const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,10}$/;

form.addEventListener('submit', e => {
    // stops browser refreshing the page
    e.preventDefault();

    // validation
    const username = form.username.value;

    if(usernamePattern.test(username)) {
        feedback.textContent = 'Valid username.'
        feedback.classList.remove('invalid');
        feedback.classList.add('valid');
    } else {
        feedback.textContent = 'Invalid username. It should be between 6 - 12 characters long.'
        feedback.classList.remove('valid');
        feedback.classList.add('invalid');
    }
});

// live feedback
form.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)) {
        form.username.classList.remove('fail');
        form.username.classList.add('success');
    } else {
        form.username.classList.remove('success');
        form.username.classList.add('fail');
    }
});






// RegEx TESTING
// const username = 'pierce';
// const pattern = /^[a-z]{6,}$/;
// 
// let result = pattern.test(username);
// 
// if(result) {
//     console.log('pass');
// } else {
//     console.log('fail');
// }
// 
// let result = username.search(pattern);
// console.log(result);
