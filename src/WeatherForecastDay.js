import React from "react";

export default function WeatherForecastDay(props){
    
    function day(){
        let date = new Date(props.data.time *1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    return(
        <div>
            <div className="WeatherForecast-day">
              {day()}
             </div>
             <div>
              <img src= {props.data.condition.icon_url} alt={props.data.condition.description} />
              </div>
             <div className="WeatherForecast-temp">
               <span className="WeatherForecast-temp-max">
                 {Math.round(props.data.temperature.maximum)}°
               </span>
               <span className="WeatherForecast-temp-min">
                 {Math.round(props.data.temperature.minimum)}°
               </span>
             </div>
        </div>
    );
}