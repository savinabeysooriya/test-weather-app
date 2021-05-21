import axios from "axios";

const apiToken = process.env.REACT_APP_OPEN_WEATHER_TOKEN;

const api = axios.create(
  {
    baseURL: "https://api.openweathermap.org/data/2.5",
    headers: {
      "content-type": "application/json"
    }
  }
);

export function getWeather(cityName: string) {
  return api.get(
    "/weather?q=" +
    cityName +
    "&appid=" +
    apiToken +
    "&units=metric"
  );
}

export function getForecast(lat: number, lon: number) {
  return api.get(
    "/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly,alerts" +
    "&appid=" +
    apiToken +
    "&units=metric"
  );
}
