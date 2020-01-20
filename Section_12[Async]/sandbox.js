const getTodos = callback => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // parses JSON strings into JS objects
            const data = JSON.parse(request.responseText);
            // triggers the getTodos function
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', 'todos.json');
    request.send();
};

console.log(1);
console.log(2);

//  this will chase for the information whilst the other functions are being applied
// always error first
getTodos((err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);