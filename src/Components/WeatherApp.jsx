



import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: 'Dream City',
    humidity: 48,
    pressure: 1016,
    temp: 17.84,
    timezone: 19800,
    visibility: 3500,
    weather: "haze",
  });

  const updateInfo = (result) => {
    setWeatherInfo(result);
  }
  
  return (
    <div style={{textAlign:'center'}}>
        <h1>Weather data by OpenWeatherMap</h1>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>
  )
}

export default WeatherApp;












