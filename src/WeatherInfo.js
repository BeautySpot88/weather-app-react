import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import "./Forecast.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Weather">
        <h2>{props.data.city}</h2>
        <FormattedDate date={props.data.date} />
        <h3 className="text-capitalize">{props.data.description}</h3>
        <div className="info row">
          <div className="col-3 text-center icon-col">
            <div className="tempIcon">
              <WeatherIcon
                code={props.data.icon}
                description={props.data.description}
              />
            </div>
          </div>
          <div className="col-3 text-left info-col">
            <div className="temp">
              <h1>
                <WeatherTemperature celcius={props.data.temperature} />
              </h1>
            </div>
          </div>
          <div className="col-6 humidityWind">
            <ul>
              <li>
                <img
                  src="https://bmcdn.nl/assets/weather-icons/v1.5/raindrop.svg"
                  alt="humidity"
                />
                {props.data.humidity}%
              </li>
              <li>
                <img
                  src="https://bmcdn.nl/assets/weather-icons/v1.5/wind.svg"
                  alt="wind"
                />
                {props.data.wind} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
