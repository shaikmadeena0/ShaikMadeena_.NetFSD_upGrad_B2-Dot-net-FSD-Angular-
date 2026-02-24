
const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const buildUrl = (latitude, longitude) =>
  `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

export const fetchWeatherWithPromises = (lat, lon) => {
  return fetch(buildUrl(lat, lon))
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then(data => data.current_weather)
    .catch(error => {
      console.error("Error (Promises):", error.message);
      throw error;
    });
};
export const fetchWeatherAsync = async (lat, lon) => {
  try {
    const response = await fetch(buildUrl(lat, lon));

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    return data.current_weather;

  } catch (error) {
    console.error("Error (Async/Await):", error.message);
    throw error;
  }
};
