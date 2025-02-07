const apiKey = `623c4a1104b8ca6c51a05814fa107848`; // Get your API key from OpenWeatherMap

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.cod === '404') {
            alert('City not found. Please try again.');
            return;
        }

        document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Something went wrong. Please try again later.');
    }
}
