import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Weather">
        <FormattedDate date={props.data.date} />
        <h3>{props.data.city}</h3>
        <h1>
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
        </h1>
        <WeatherIcon
          code={props.data.icon}
          description={props.data.description}
        />

        <h3 className="text-capitalize">{props.data.description}</h3>

        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
