const todos = [
    {text: 'play mariokart', author: 'pierce'},
    {text: 'buy milk', author: 'mario'},
    {text: 'buy bread', author: 'luigi'}
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));
