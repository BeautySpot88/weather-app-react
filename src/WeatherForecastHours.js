import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastHours(props) {
  console.log(props);
  function temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}˚`;
  }

  function time() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();

    return `${hours}:00`;
  }

  return (
    <div className="HourlyWeather">
      <h3>{temperature()}</h3>
      <WeatherIcon code={props.data.weather[0].icon} />
      <h3>{time()}</h3>
    </div>
  );
}
