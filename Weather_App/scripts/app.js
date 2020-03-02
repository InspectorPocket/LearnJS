const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.weather img');
const forecast = new Forecast();

const updateUI = data => {
    const { cityDets, weather } = data;

    // Set icon
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    // Card HTML
    details.innerHTML = `
        <h3>${cityDets.EnglishName}</h3>
        <div class="weather">
            <p>${weather.WeatherText}</p>
            <img src="${iconSrc}" alt="">
        </div>
        <div class="temperature">
            <span>${Math.round(weather.Temperature.Metric.Value)}&deg;</span>
        </div>
    `;

    // Change background image
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    card.setAttribute('style', `background-image: url(${timeSrc});`);

    // Show card
    if (card.classList.contains('hide')) {
        card.classList.remove('hide');
    };

};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update UI with data
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

        // set local storage
        localStorage.setItem('city', city);

});

if(localStorage.getItem('city')) {
    // Update UI with data
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}