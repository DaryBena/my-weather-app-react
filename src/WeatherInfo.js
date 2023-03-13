import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            Last updated:
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">°C |°F</span>
            </span>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}