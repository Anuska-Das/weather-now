
import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-info">
      <h2 className="text-2xl mb-4">Current Weather</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Windspeed: {weather.windspeed} km/h</p>
      <p>Weather Code: {weather.weathercode}</p>
    </div>
  );
}

export default WeatherDisplay;
