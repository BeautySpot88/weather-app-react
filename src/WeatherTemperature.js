import React from "react";

import "./Forecast.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celcius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
