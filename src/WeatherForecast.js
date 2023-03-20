import React from 'react';
import "./WeatherFocast.css";
export default function Weatherforecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <div>WeatherIcon</div>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">19°</span>
              <span className="WeatherForecast-temp-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}