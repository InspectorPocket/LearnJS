// DOc for interating with APIs
const key = 'AIkjgA3FlkGlwvGQjLIWqHasZ6ACXRKr';
let city = 'Preston';

// Get weather information
const getWeather = async id => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];

}

// Get city information
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