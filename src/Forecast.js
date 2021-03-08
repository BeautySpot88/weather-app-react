import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";


export default function Forecast(){
    let [city, setCity] = useState(" ");
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState({}); 
    let search = (
    <div className="Search">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="search city . . ." onChange={cityValue}></input>
                <input type="submit"></input>
            </form>
            <button>Current Location</button>
            <p>Last updated: Sunday 21:00</p>
        </div>);

    function showWeatherData(response){
        setLoaded(true);
        console.log(response.data.main);
        setForecast({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].description
    });
        
    }
   
    function handleSubmit(event){
        event.preventDefault();
        setLoaded(true);
    let apiKey = "4964201fe38c8af7f212aad270301c64";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeatherData);
   }

   function cityValue(event){
       setCity(event.target.value);
   }

   if (loaded) {
    return (
    <div className="Forecast">
        {search}
        <div className="Weather">
            <h1>{city}</h1>
            <h3>{Math.round(forecast.temperature)}°C</h3>
            <img src={forecast.icon} alt={forecast.description} />
            <h3>{forecast.description}</h3>
            <ul>
                <li>Humidity: {forecast.humidity}%</li>
                <li>Wind: {forecast.wind}</li>
            </ul>
        </div>
    </div>
    );
} else{
    return search;
}
}