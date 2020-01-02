// SORT METHODS
const products = [
    {name: 'ringo', price: 30},
    {name: 'pingo', price: 10},
    {name: 'flingo', price: 40},
    {name: 'gringo', price: 5},
    {name: 'dingo', price: 50}
];

// // filter products greater than 20
// const filtered = products.filter(product => product.price > 20);

// // put filtered values into a map
// const promos = products.map(product => {
//     // return name and half price of selected products
//     return `${product.name[0].toUpperCase()}${product.name.slice(1)} costs ${product.price} coins. Pay up.`;
// });

const promos = products
    .filter(product => product.price > 20)
    .map(product => `${product.name[0].toUpperCase()}${product.name.slice(1)} costs ${product.price} coins. Pay up.`);

console.log(promos);
