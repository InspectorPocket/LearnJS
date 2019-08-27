// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
// rounds the number to nearest integer
console.log(Math.round(area));
// floors number to the number below. in this case 7
console.log(Math.floor(area));
// ceiling will round the number up. in this case 8
console.log(Math.ceil(area));
// removes the decimal and leaves the integer. in this case 7
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));
