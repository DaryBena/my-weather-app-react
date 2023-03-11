import React, {useState} from 'react';
import axios from "axios";
import './Weather.css';

export default function Weather(){
  const [ready, setReady]=useState(false);
  const [temperature, setTemperature]=useState(null);
  function handleResponse(response){
    console.log(response.data);
    setTemperature(response.data.temperature.current);
    setReady(true);
  }
  if (ready){
return (
  <div className="Weather">
    <div className="container">
      <form className="mb-3">
        <div className="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Tape a city "
              className="form-control"
              autoFocus="on"
              autocomplete="off"
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
      <h1>New York</h1>
      <ul>
        <li>Last updated: Monday 8:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="Mostly cloudy" className="float-left" />
          <span className="float-left">
            <span className="temperature">{Math.round(temperature)}</span>
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
              Humidity: <span>83</span>%
            </li>
            <li>
              Wind: <span>4</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
  } else {
  const apiKey="88c56380f8t7a0673b2c0e04b7453o5a";
  let city = "New York";
  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  }
}