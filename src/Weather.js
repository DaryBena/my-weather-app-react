import React, {useState} from 'react';
import axios from "axios";
import './Weather.css';

import WeatherInfo from './WeatherInfo';

export default function Weather(props){
 const [city, setCity]=useState(props.defaultCity)
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
      date: new Date(response.data.time*1000),
    });
    
  }
  function search() {
    const apiKey = "88c56380f8t7a0673b2c0e04b7453o5a";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
    // search for a city
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready){
return (
  <div className="Weather">
    <div className="container">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Tape a city "
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityChange}
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
      <WeatherInfo data={weatherData}/>
      
    </div>
  </div>
);
  } else {
  search();
    return "Loading....";
  }
}