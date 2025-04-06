async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
    const apiKey = '6614716def7e71d5821946f1cae6337c';

    if (city) {
        weatherInfo.innerHTML = `<p>Fetching weather for <strong>${city}</strong>...</p>`;
        
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } catch (error) {
            weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    } else {
        weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
    }
}

//event listeners
document.getElementById('cityInput').addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        getWeather();
    }
})

document.getElementById('cityInput').addEventListener('input', ()=>{
    const city = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
    if(!city){
        weatherInfo.innerHTML = '';
    }
})