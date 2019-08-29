const button = document.querySelector('button');
const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');
let newItem = 'Kill Sheldon Cooper';

button.addEventListener('click', () => {
    button.innerText = 'BAZINGA';
    // ul.innerHTML += `<li>${newItem}</li>`;

    // creates li in JS, but it only exists in the void atm
    const li = document.createElement('li');
    li.textContent = 'KILL Sheldon Cooper';
    // this will apend(at teh bottom) or prepend (at the top) the li to ul
    ul.append(li);
    // ul.prepend(li);
});

// my go
// items.forEach(item => {
//     item.addEventListener('click', () => {
//         item.setAttribute('style', 'display:none;');
//     });
// });

// net ninjas go
// e is a variable. it represents the event. In this case, an event listener.
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         you can console.log(e); to find out what events are available (eg)
//         console.log(e.target);
        
//         e.target.style.textDecoration = 'line-through';
//         e.target.style.color = 'grey';

//         e.target.remove();
//     });
// });

// items.forEach(item => {
//     item becomes an event target
//     item.addEventListener('click', e => {
//         console.log('event in LI');
//         this stops the event from bubbling up to the parent (ul), so only this event will fire
//         e.stopPropagation();
//         e.target.remove();
//     });
// });



// shortened
// e = event parameter
// when this callback function fires, we know it is coming from the ul
ul.addEventListener('click', e => {
    // console.log('event in UL');
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
