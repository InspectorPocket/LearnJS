// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };

// const calcArea = (radius, somethingelse) => 
// the bracket is nedded when there are more than one argument
// otherwise, it can be left off, like shown below

// const calcArea = radius => {
//     return 3.14 * radius**2;    
// };

// to note: if it is empty: = () =>
//          the brackets need to be there alone like shown above

// when returning a simple value, it can be condensed like this:
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log("area is:", area);




// FOR LOOPS AND FUNCTIONS

// const bill = function(products, tax) {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// const bill = (products, tax) => {
//     let total = 0;
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2));




// // Functions VS Methods

// const name = 'Pierce';
// // functions
// const greet = () => 'Hello amigo!';

// const resultOne = greet();
// console.log(resultOne);


// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);




// callbacks & foreach

// const myFunc = callbackFunc => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value) {
//     // do something
//     console.log(value);
// });


// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`);
// };

// people.forEach(logPerson);




// callbacks & foreach IN ACTION

// get a reference to the ul
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="colour: blue;">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
