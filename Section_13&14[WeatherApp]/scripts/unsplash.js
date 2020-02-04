// TODO get unsplash image related to what the user inputs in
const unsplashKey = 'd8da6d295ae76c2e65bc441b020b3a92e1ec1e92a59c8f3ed8e87d6a38bc6e5a';
let city = 'Preston';

// Get unsplash information
const getCity = async city => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};