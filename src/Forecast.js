import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Forecast.css";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeatherData(response) {
    console.log(response.data.name);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      //search for a city
    });
  }
  function search() {
    let apiKey = "4964201fe38c8af7f212aad270301c64";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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
                    placeholder="city . . ."
                    onChange={handleCityChange}
                  />
                  <input className="search-btn" type="submit" value="🔍" />
                </div>
              </form>
            </div>
            <div className="col text-right">
              <button type="button" className="btn btn-info">
                Current Location
              </button>
            </div>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading. . . ";
  }
}
