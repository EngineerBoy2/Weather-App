// script.js - Weather App logic
// IMPORTANT: Get an API key from https://openweathermap.org/ and replace the placeholder below
const API_KEY = '0755a6b676df9511bcfc6fcf13cf2c49';

const form = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const result = document.getElementById('result');
const errorBox = document.getElementById('error');

const locationEl = document.getElementById('location');
const tempEl = document.getElementById('temperature');
const descEl = document.getElementById('description');
const iconEl = document.getElementById('icon');
const extraEl = document.getElementById('extra');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return showError('Please enter a city name.');
  fetchWeather(city);
});

function showError(msg) {
  errorBox.textContent = msg;
  errorBox.classList.remove('hidden');
  result.classList.add('hidden');
}

function clearError() {
  errorBox.textContent = '';
  errorBox.classList.add('hidden');
}

async function fetchWeather(city) {
  clearError();
  try {
    // Build URL for OpenWeatherMap current weather (metric = Celsius)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 404) throw new Error('Location not found. Please check the city name.');
      throw new Error('Failed to fetch weather. Please try again later.');
    }
    const data = await res.json();
    renderWeather(data);
  } catch (err) {
    showError(err.message);
    console.error(err);
  }
}

function renderWeather(data) {
  const name = data.name + (data.sys && data.sys.country ? ', ' + data.sys.country : '');
  const temp = Math.round(data.main.temp);
  const desc = data.weather && data.weather[0] ? data.weather[0].description : '';
  const icon = data.weather && data.weather[0] ? data.weather[0].icon : null;
  locationEl.textContent = name;
  tempEl.textContent = `${temp}°C`;
  descEl.textContent = desc;
  extraEl.textContent = `Feels like ${Math.round(data.main.feels_like)}°C · Humidity ${data.main.humidity}% · Wind ${Math.round(data.wind.speed)} m/s`;
  if (icon) {
    iconEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    iconEl.alt = desc;
    iconEl.classList.remove('hidden');
  } else {
    iconEl.classList.add('hidden');
  }
  result.classList.remove('hidden');
}
