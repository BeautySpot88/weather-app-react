import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleForecastResponse(response) {
    console.log(response.data);
  }
  let apiKey = "4964201fe38c8af7f212aad270301c64";
  let url = `https:api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleForecastResponse);
  return props.city;
}
