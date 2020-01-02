const correctAnswers = ['B', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();


    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    const result = document.querySelector('.result');

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // scroll up on submit
    scrollTo('0','0');

    // show result
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            // incriment the output by 1 every frame until it reaches the correct score
            output++;
            console.log('help');
        }
    }, 20);

    // did you win?
    if(score === 100) {
        console.log('you won');
    } else {
        console.log('better luck next time');
    } 
});


// set a timeout delay for a code block to run
// setTimeout(() => {
//     alert('hello');
// }, 2000);

// timer
// let output = 0;
// const timer = setInterval(() => {
//     console.log(output);
//     output++;
//     if (output === 5) {
//         clearInterval(timer);
//     }
// }, 1000);
