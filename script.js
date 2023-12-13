    async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
    
    if(cityName.trim() == '') {
        alert('Please enter the city name');
        return;
    }

    const apiKey = '3a6eba847529db9f4bd205730136277c'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if(data.cod === '404') {
            alert('City not found. Please enter the valid city name.');
            return;
        }

        displayWeather(data);
    } catch(error) {
        console.log('Error fetching weather data :', error);
    }

    function displayWeather(data) {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
        <h2>${data.name},${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} &deg;c</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    }

}