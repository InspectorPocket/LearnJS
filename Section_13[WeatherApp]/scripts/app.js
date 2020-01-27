const cityForm = document.querySelector('form');

const updateCity = async city =>  {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // Unshorthand
    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // }
    
    // Shorthand (only if property name is same as value)
    return { cityDets, weather }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update UI with data
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
});