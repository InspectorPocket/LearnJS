// store data in local storage
// localStorage.setItem('name', 'mario');
//     // setting an item will convert integers into strings
// localStorage.setItem('age', 50);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// updating data
// localStorage.setItem('name', 'luigi');
// localStorage.age = '40';

// name = localStorage.getItem('name');
// age = localStorage.getItem('age');

// console.log(name, age);

// sets the variables permanently until the user clears the cache
// even when you comment it out, it will still display the last known variable name