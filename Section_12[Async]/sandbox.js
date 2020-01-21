// Async & Await
    // async always returns a promise

const getTodos = async () => {

    const response = await fetch('todos/luigi.json');

    if (response.status !== 200) {
        throw new Error('failed to load data. check url.');
    };

    const data = response.json();
    
    return data;
};

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));