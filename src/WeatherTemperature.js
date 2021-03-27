import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celcius}</span>
        <span className="unit">°C</span>
      </div>
    );
  } else {
    return "F";
  }
}
