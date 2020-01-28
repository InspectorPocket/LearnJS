const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
    // Stores each value into the two corresponding variables
    const { cityDets, weather } = data;

    // HTML template for the card's content
    // TODO update this with new template once built in HTML
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // Change background image
    
    // let timeSrc = null;
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night/svg';

    time.setAttribute('src', timeSrc);
    
    // Not Ternary
    // if (weather.IsDayTime) {
    //     timeSrc = 'img/day.svg';
    // } else {
    //     timeSrc = 'img/night.svg';
    // }
    

    // Set icon
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    icon.setAttribute('src', iconSrc);

    // Show card
    if (card.classList.contains('hide')) {
        card.classList.remove('hide');
    };

};

const updateCity = async city =>  {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // Unshorthand
    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // }
    
    // Shorthand (only if property name is same as value)
    return { cityDets, weather };
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update UI with data
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});