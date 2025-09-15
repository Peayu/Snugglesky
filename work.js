document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const toggle = document.getElementById('dark-toggle');

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

    // Dark mode toggle
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '49669f4bd2msheb08b7b846aa190p186b32jsn406f8c3cf592',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};

//Elements
const cityInput = document.getElementById("cityInput");
const cityname = document.getElementById("cityname");
const submitBtn = document.getElementById("submit");



// main work

let userHasSearched = false;

const forecastContainer = document.getElementById("forecastContainer");

async function getWeather(city) {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '49669f4bd2msheb08b7b846aa190p186b32jsn406f8c3cf592',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
      options
    );
    const data = await response.json();
    console.log(data);

    cityname.textContent = data.location.name;
    
    // Clear previous forecast cards

    forecastContainer.innerHTML = "";
    
    // Loop through 3-day forecast
    data.forecast.forecastday.forEach(day => {
      const card = document.createElement("div");
      card.classList.add("day-card");
      
      card.innerHTML = `
      <h3>${day.date}</h3>
        <p>🌡️ Max: ${day.day.maxtemp_c}°C</p>
        <p>🌡️ Min: ${day.day.mintemp_c}°C</p>
        <p>💨 Wind: ${day.day.maxwind_kph} km/h</p>
        <p>🌥️ ${day.day.condition.text}</p>
      `;

      forecastContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Forecast fetch error:", error);
  }
}

// geolocation
function autoGetWeather() {
  if (!userHasSearched) {   // only run if no search yet
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          console.log("Auto location:", lat, lon);
          getWeather(`${lat},${lon}`);
        },
        (err) => {
          console.error("Geolocation failed:", err);
        }
      );
    }
  }
}

// manual search
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const city =cityInput.value;
  if (city) {
    userHasSearched = true;   // mark as searched
    getWeather(city);

    cityname.textContent = city.charAt(0).toUpperCase() + city.slice(1);
  }
});

// ✅ Call auto only once at page load
autoGetWeather();

//filling up the table

async function fillcityforecast(city, prefix) {
  try{
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1` , options
    );
    const data = await response.json();
    const day = data.forecast.forecastday[0].day;

    document.getElementById(`${prefix}min`).textContent = day.mintemp_c + "°C";
    document.getElementById(`${prefix}max`).textContent = day.maxtemp_c + "°C";
    document.getElementById(`${prefix}wind`).textContent = day.maxwind_kph + " km/h";
    document.getElementById(`${prefix}cond`).textContent = day.condition.text;

  } catch (err) {
    console.error("Error filling city forecast:", city, err);

  }
}

fillcityforecast("hokkaido","hokkaido");
fillcityforecast("New delhi","delhi");
fillcityforecast("london","london");
fillcityforecast("New york city","nyc");
fillcityforecast("paris","paris");
fillcityforecast("sydney","sydney");
