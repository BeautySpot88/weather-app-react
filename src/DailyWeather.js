import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeather.css";

export default function DailyWeather(props) {
  return (
    <div className="DailyWeather">
      <div className="row">
        <div className="col">
          <div className="DailyWeather-day">Thursday</div>
          <WeatherIcon code="01d" />
          <div className="DailyWeather-temperature">
            <span className="DailyWeather-max">19°C</span>
            <span className="DailyWeather-min">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
