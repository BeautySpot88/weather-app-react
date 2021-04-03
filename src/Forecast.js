import React, { useState } from "react";
import axios from "axios";
import DailyWeather from "./DailyWeather";
import WeatherInfo from "./WeatherInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

import "./Forecast.css";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const element = <FontAwesomeIcon icon={faSearchLocation} />;

  function showWeatherData(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      coords: response.data.coord,
      //search for a city
    });
  }
  function search() {
    let apiKey = "4964201fe38c8af7f212aad270301c64";
    let units = "metric";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Forecast">
        <div className="Search">
          <div className="row">
            <div className="col text-left">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search a city . . ."
                    onChange={handleCityChange}
                  />

                  <button
                    className="search-btn btn btn-info"
                    type="submit"
                    value="Submit"
                  >
                    {element}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <DailyWeather coord={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return "Loading. . . ";
  }
}
