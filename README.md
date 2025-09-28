<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5448e57b-7355-438e-bef8-909c8890f13f" />[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)]([https://peayu.github.io/Snugglesky/])


☁️ SnuggleSky – Your Cute Weather Companion 🌸

SnuggleSky is a cozy, web-based weather app that shows real-time weather forecasts for your city or any city in the world. Think of it as your snuggly little cloud buddy that keeps you updated with the sunshine, rain, and wind, all in one adorable interface!

🌟 Features

Search Your City – Type a city or postal code to see its 3-day weather forecast.

Auto Location Weather – SnuggleSky can detect your current location and fetch the weather automatically.

Popular Cities Quick View – Weather info for Hokkaido, New Delhi, London, New York, Paris, and Sydney.

Dark Mode – Toggle a soft night theme to save your eyes and look aesthetic.

Responsive & Mobile-Friendly – Works beautifully on phones, tablets, and desktops.

Forecast Cards – Cute little cards for each day’s forecast.

🎨 Tech Stack

Frontend: HTML5, CSS3, JavaScript (ES6)

API: WeatherAPI
 via RapidAPI

Geolocation: Browser’s Geolocation API

📂 Project Structure
SnuggleSky/
│── index.html        # Main webpage
│── style.css         # Styling & themes
│── work.js           # JavaScript logic + API calls
│── shots.pdf         # screenshots
│── README.md         # Project documentation

⚡ How it Works
1️⃣ Weather Fetching

Manual Search: Enter a city → hits WeatherAPI → updates the forecast cards.

Auto Location: Detects your coordinates → fetches weather automatically.

Popular Cities Table: Fetches min/max temp, wind, and conditions for six pre-defined cities.

2️⃣ JavaScript Functions

getWeather(city) – Fetches 3-day forecast & populates forecast cards.

autoGetWeather() – Fetches weather automatically using geolocation if no search is done.

fillcityforecast(city, prefix) – Populates the table with 1-day weather for fixed cities.

Event Listeners:

Dark mode toggle (#dark-toggle)

Search form submit

Hamburger menu toggle

🎨 Styling Highlights

Light blue aesthetic with soft pastel vibes 🌈

Rounded forecast cards & table rows for a cute look 💕

Dark mode with #1e1e2f background & soft text

Responsive layout – works on any screen

🔑 API Configuration

Replace the API key in work.js with your own from RapidAPI:

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'YOUR_API_KEY_HERE',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};



🧩 Future Improvements

Add hourly forecasts for more detailed info.

Show humidity, feels-like temperature, and sunrise/sunset times.

Enable favorite cities storage using localStorage.

Deploy online using GitHub Pages or Vercel.

🚀 How to Run

Clone the repository:

git clone https://github.com/Peayu/Snugglesky


Open index.html in your browser.

Search a city, or allow location access for auto weather updates.
