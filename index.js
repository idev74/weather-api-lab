const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

async function fetchWeather(url) {
    const response = await fetch(url)
    const json = await response.json()
    return {
        temp: json.main.temp,
        desc: json.weather[0].description,
        icon: json.weather[0].icon,
        humidity: json.main.humidity,
        temp_max: json.main.temp_max,
        temp_min: json.main.temp_min,
        city: json.name,
    }
}

async function getWeatherByZip(apiKey, zip, unit = 'imperial') {
    const path = `${apiUrl}zip=${zip}&appid=${apiKey}&units=${unit}`;
    return await fetchWeather(path);
}

async function getWeatherByCity(apiKey, city, unit = 'imperial') {
    const path = `${apiUrl}q=${city}&appid=${apiKey}&units=${unit}`;
    return await fetchWeather(path);
}

async function getWeatherByGeo(apiKey, unit = 'imperial') {
    const { lat, lon } = coords;
    const path = `${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    return await fetchWeather(path);
}

module.exports = {
    getWeatherByZip,
    getWeatherByCity,
    getWeatherByGeo,
}