const beforeDate = 'December 1 2019 7:30:59';

// timestamps
const before = new Date(beforeDate);
const now = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);

// 1000 ms in a second. 60 seconds in a minute
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const weeks = Math.round(days / 7);

console.log(mins, hours, days, weeks);

console.log(`The blog was posted ${days} days ago.`)

// converting timestamps into date objects
const timestamp = 3740598939;
console.log(new Date(timestamp));