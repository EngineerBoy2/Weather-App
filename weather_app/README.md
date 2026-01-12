# Weather App

A simple responsive web-based Weather App built with HTML, CSS, and JavaScript.
This project fetches current weather data using the OpenWeatherMap API (metric/Celsius).

## Files included
- `index.html` — main page
- `style.css` — styles
- `script.js` — JavaScript logic (replace YOUR_API_KEY_HERE)
- `README.md` — this file

## How to get an API key (OpenWeatherMap)
1. Go to https://openweathermap.org/.
2. Sign up / sign in.
3. Open the API keys section in your account.
4. Copy the generated key.

## How to run (step-by-step)
### Option A — Quick (open locally)
1. Unzip the downloaded `weather_app.zip` or navigate to the `weather_app` folder.
2. Open `index.html` in your browser (double-click or right-click → Open with).
3. In `script.js`, replace `YOUR_API_KEY_HERE` with your OpenWeatherMap API key and refresh the page.
4. Enter a city name and click Submit. The current weather will appear.

> Note: Opening `index.html` directly works in most browsers. If you encounter CORS issues, try Option B.

### Option B — Local development server (recommended)
If you have Python installed:
1. Open a terminal/command prompt in the `weather_app` folder.
2. For Python 3: `python -m http.server 8000`
3. Open browser and visit `http://localhost:8000`
4. Replace the API key in `script.js`, then use the app.

Or using Node.js `npx serve` or any static server.

## Troubleshooting
- If you see "Location not found", check spelling and try a nearby city.
- If fetch fails with CORS or network error, run a local server (Option B).
- Make sure your API key is active and not exceeded quota.

## Extra ideas (not required)
- Add a forecast (5-day) using OpenWeatherMap One Call API.
- Add unit toggle (Celsius/Fahrenheit).
- Save recent searches to localStorage.

Good luck! Built to match the project requirements in the provided brief.
