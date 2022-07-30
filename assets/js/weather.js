const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.temperature');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');

async function getWheter() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=ef4b203b5c247d84f19012a3a078402b&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    weatherTemp.innerHTML = `${Math.round(data.main.temp)}°C`;
    weatherWind.innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    weatherHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    weatherDescription.innerHTML = data.weather[0].description;
}

function setLocaleStorage() {
    localStorage.setItem('city', city.value)
}

function getLocaleStorage() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}

getWheter();
window.addEventListener('beforeunload', setLocaleStorage);
window.addEventListener('load', getLocaleStorage);
city.addEventListener('change', getWheter);