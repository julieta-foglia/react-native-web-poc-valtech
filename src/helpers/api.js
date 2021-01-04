const fetch = require('node-fetch');
const API_KEY = 'd6048ea8be8ac8169eadd7eca605dc0f';
const CITIES_DATA = require('./citiesData');

export const getCurrentWeather = async (city) => {
  const [filter] = CITIES_DATA.filter((item) => item.city === city);
  const weatherDataRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${filter.lat}&lon=${filter.lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}&units=metric&lang=es`
  );
  const weatherData = await weatherDataRes.json();
  return { weatherData };
};

export const getCurrentForecast = async (city) => {
  const [filter] = CITIES_DATA.filter((item) => item.city === city);
  const forecastDataRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${filter.lat}&lon=${filter.lon}&exclude=minutely,hourly,current,alerts&appid=${API_KEY}&units=metric&lang=es`
  );
  const forecastData = await forecastDataRes.json();
  return { forecastData };
};
