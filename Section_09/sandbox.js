// ANCHOR Regular Array Example

// const scores = [10, 30, 15, 25, 50, 40, 5];
// const filteredScores = scores.filter(score => {
//     return score > 20;
// });

// console.log(filteredScores);

// const users = [
//     {name: 'dingo', premium: true},
//     {name: 'ringo', premium: false},
//     {name: 'bingo', premium: false},
//     {name: 'pingo', premium: true}
// ];

// const premiumUsers = users.filter(user => user.premium);
// console.log(premiumUsers);

// ANCHOR Map Array
const prices = [ 20, 10, 30, 25, 15, 40, 80, 5];

// Map Intro
// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

// ANCHOR My Attempt
// const blackMarket = [
//     {name: 'dingo', price: 20},
//     {name: 'ringo', price: 40},
//     {name: 'bingo', price: 30},
//     {name: 'pingo', price: 10},
//     {name: 'gringo', price: 50}
// ];

// const saleProducts = blackMarket.map(product => {
//     // half price when price is above 30
//     if (product.price > 30) {
//         return product.price / 2;
//     } else {
//         return product.price;
//     }
// });
// console.log(saleProducts);

// ANCHOR Answer
const blackMarket = [
    {name: 'dingo', price: 20},
    {name: 'ringo', price: 40},
    {name: 'bingo', price: 30},
    {name: 'pingo', price: 10},
    {name: 'gringo', price: 50}
];

const saleProducts = blackMarket.map(product => {
    // half price when price is above 30
    if (product.price > 30) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
});
console.log(saleProducts);
