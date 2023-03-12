import React, {useState} from 'react';
import axios from "axios";
import './Weather.css';

export default function Weather(props){
 
  const [weatherData, setWeatherData]=useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      time: "Monday 8:00",
    });
    
  }
  if (weatherData.ready){
return (
  <div className="Weather">
    <div className="container">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Tape a city "
              className="form-control"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>Last updated: {weatherData.time}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
          <span className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="units">
              
                °C
              {" "}
              |°F
            </span>
          </span>
        </div>

        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
  } else {
  const apiKey="88c56380f8t7a0673b2c0e04b7453o5a";

  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  }
}