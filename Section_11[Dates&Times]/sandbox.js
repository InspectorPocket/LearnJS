const clock = document.querySelector('.clock');


const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;
    
    clock.innerHTML = html;

};

setInterval(tick,1000);





const now = new Date();

// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// comparing dates
const before = new Date('Feburary 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));