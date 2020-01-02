// SORT METHODS
// ANCHOR Example #1 - Sorting Strings
const names = ['ringo', 'pingo', 'flingo', 'gringo', 'dingo'];

names.sort();
names.reverse();

console.log('1. ', names);

// ANCHOR Example #2 - Sorting Numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// if a number is a positive, it is greater than, and therefore moves up in rank
scores.sort((a,b) => a - b);

scores.reverse();

console.log('2. ', scores);

// ANCHOR Example #3 - Sorting Objects
const players = [
    {name: 'ringo', score: 20},
    {name: 'pingo', score: 10},
    {name: 'flingo', score: 50},
    {name: 'gringo', score: 30},
    {name: 'dingo', score: 70}
];

// players.sort((a,b) => {
//     if (a.score > b.score) {
//         return 1;
//     } else if (a.score < b.score) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// 
players.sort((a,b) => a.score - b.score);

console.log('3. ', players);
