import React from "react";
import "./App.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "https://bmcdn.nl/assets/weather-icons/v1.4.1/clear-day.svg",
    "01n": "https://bmcdn.nl/assets/weather-icons/v1.4.1/clear-night.svg",
    "02d": "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-day.svg",
    "02n":
      "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-night.svg",
    "03d": "https://bmcdn.nl/assets/weather-icons/v1.4.1/cloudy.svg",
    "03n": "https://bmcdn.nl/assets/weather-icons/v1.4.1/cloudy.svg",
    "04d": "https://bmcdn.nl/assets/weather-icons/v1.4.1/overcast-day.svg",
    "04n": "https://bmcdn.nl/assets/weather-icons/v1.4.1/overcast-night.svg",
    "09d":
      "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-day-drizzle.svg",
    "09n":
      "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-night-drizzle.svg",
    "10d":
      "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-day-rain.svg",
    "10n":
      "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-night-rain.svg",
    "11d": "https://bmcdn.nl/assets/weather-icons/v1.4.1/thunderstorms-day.svg",
    "11n":
      "https://bmcdn.nl/assets/weather-icons/v1.4.1/thunderstorms-night-rain.svg",
    "13d":
      "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-day-snow.svg",
    "13n":
      "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-night-snow.svg",
    "50d": "https://bmcdn.nl/assets/weather-icons/v1.4.1/fog-day.svg",
    "50n": "https://bmcdn.nl/assets/weather-icons/v1.4.1/fog-night.svg",
  };
  return (
    <div className="WeatherIcon">
      <img src={codeMapping[props.code]} alt={props.description} />
    </div>
  );
}
