import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DailyWeather.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="DailyWeather-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="DailyWeather-temperature">
        <span className="DailyWeather-max">{maxTemperature()}</span>
        <span className="DailyWeather-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
