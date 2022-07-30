const weatherBlock = document.querySelector('.weather')
const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.temperature');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
let country;


async function getWheter() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.value}&lang=en&appid=ef4b203b5c247d84f19012a3a078402b&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`)
        weatherTemp.innerHTML = `${Math.round(data.main.temp)}°C`;
        weatherWind.innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        weatherHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        weatherDescription.innerHTML = data.weather[0].description;
        window.addEventListener('beforeunload', setLocaleStorage);
    } catch {
        country.value = 'Минск';
        alert("city doesn't exist")
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=ef4b203b5c247d84f19012a3a078402b&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`)
        weatherTemp.innerHTML = `${Math.round(data.main.temp)}°C`;
        weatherWind.innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        weatherHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        weatherDescription.innerHTML = data.weather[0].description;
        window.removeEventListener('beforeunload', setLocaleStorage);
    }
    
}

function createCity() {
    const city = document.createElement('input');
    city.type = "text";
    city.classList.add('city');
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.value = "Минск";
    }
    weatherBlock.prepend(city);
    country = document.querySelector('.city');
}

function setLocaleStorage() {
    localStorage.setItem('city', country.value)
}

function getLocaleStorage() {
    if (localStorage.getItem('city')) {
        country.value = localStorage.getItem('city');
    }
}

export default function initWeather() {
    createCity();
    country.addEventListener('change', getWheter);
    getWheter();
    window.addEventListener('load', getLocaleStorage);
}

