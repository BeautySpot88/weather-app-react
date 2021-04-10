import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import WeatherForecastHours from "./WeatherForecastHours";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setDaily(response.data.daily);
    setHourly(response.data.hourly);
    setLoaded(true);
  }

  function load() {
    let units = "metric";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiKey = "4964201fe38c8af7f212aad270301c64";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="UpcomingForecasts">
        <div className="HourlyWeather">
          <hr />
          <div className="row">
            {hourly.map(function (hourlyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col hourlyForecast" key={index}>
                    <WeatherForecastHours data={hourlyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <hr />
        </div>
        <div className="WeatherForecast">
          <div className="row">
            {daily.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col dailyForecast" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
