const key = 'AIkjgA3FlkGlwvGQjLIWqHasZ6ACXRKr';
let city = 'Preston';

const getCity = async city => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    // Manoj solution
    // const response = await fetch(base + query).then(response => response.json());

    // return response[0];

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

getCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err.message));