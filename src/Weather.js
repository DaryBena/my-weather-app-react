import React from 'react';
import './Weather.css';

export default function Weather(){
    return (
      <div className="Weather">
        <div className="container">
          <form className="mb-3">
            <div className="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Tape a city "
                  className='form-control'                                    
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
                <strong>6</strong>
                <span className="units">
                  <a href="#" className="active">
                    °C
                  </a>{" "}
                  |<a href="#">°F</a>
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
}