const getTodos = resource => {
    const request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('could not load resource');
            }
        });
    
        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/luigi.json').then((data) => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

// Callback solution
// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//         // parses JSON strings into JS objects
//         const data = JSON.parse(request.responseText);
//         // triggers the getTodos function
//         callback(undefined, data);
//     } else if (request.readyState === 4) {
//         callback('could not fetch data', undefined);
//     }
// });

// request.open('GET', resource);
// request.send();


// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve('some data');
//         reject('some error');
//     });
// };

// resolve promise
// // data and err are 2 arguments for .then()
// // if resolved -> data | if rejected -> err
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });