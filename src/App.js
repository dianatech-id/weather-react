import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function updateSearch(event) {
    setCity(event.target.value);
  }

  function Start(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(Start);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateSearch}
        />
        <input type="submit" value="Search" />
      </form>
      <br />
      <div id="city"></div>
      <div className="information">
        <div id="temp">{`Temperature: ${Math.round(temperature)}°C`}</div>
        <div id="description">{`Description: ${description}`}</div>
        <div id="humidity">{`Humidity: ${humidity}%`}</div>
        <div id="wind">{`Wind: ${Math.round(wind)} km/h`}</div>
      </div>

      <img
        id="image"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
        width="70"
      />
      <br />
      <a href="https://github.com/dianatech-id"> Open source </a>
    </div>
  );
}
