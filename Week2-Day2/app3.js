import {
  fetchWeatherWithPromises,
  fetchWeatherAsync,
} from "./weatherService.js";
const latitude = 51.5074;
const longitude = -0.1278;
fetchWeatherWithPromises(latitude, longitude)
  .then((weather) => {
    console.log(`
====== Weather Report (Promises) ======
Temperature : ${weather.temperature}°C
Wind Speed  : ${weather.windspeed} km/h
Wind Dir    : ${weather.winddirection}°
Time        : ${weather.time}
=======================================
`);
  })
  .catch(() => {
    console.log("Could not fetch weather using Promises.");
  });
const displayWeather = async () => {
  try {
    const weather = await fetchWeatherAsync(latitude, longitude);

    console.log(`
====== Weather Report (Async/Await) ======
Temperature : ${weather.temperature}°C
Wind Speed  : ${weather.windspeed} km/h
Wind Dir    : ${weather.winddirection}°
Time        : ${weather.time}
==========================================
`);
  } catch {
    console.log("Could not fetch weather using Async/Await.");
  }
};

displayWeather();
