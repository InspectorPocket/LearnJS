// Fetch API
// (1) fetch data url
// (2) take response and return as json
// (3) .then data, log or do with data what you will
// (4) add .catch to spit out any errors

fetch('todos/luigi.json').then(response => {
    console.log('resolved:', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('rejected:', err);
});