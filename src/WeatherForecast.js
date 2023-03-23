import React, { useState, useEffect } from 'react';
import "./WeatherFocast.css";
import WeatherForecastDay from './WeatherForecastDay';
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded]=useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  function handleResponse(response){
      setForecast(response.data.daily);
   setLoaded(true);
     }
 
  if (loaded){
        
     return (
       <div className="WeatherForecast">
         <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
          
         </div>
       </div>
     );
  } else {
 
  let apiKey = "88c56380f8t7a0673b2c0e04b7453o5a";
  let longitude = props.coord.longitude;
  let latitude = props.coord.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return null;}
}