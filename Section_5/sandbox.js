// primitive values

// let = scoreOne = 50;
// let = scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);



// reference values

const userOne = { name: 'bill', age: '89' };
const userTwo = userOne;

console.log(userOne, userTwo);

userTwo.age = 40;
console.log(userOne, userTwo);
