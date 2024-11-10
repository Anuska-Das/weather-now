import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from 'react-icons/wi'; // Import weather icons

function WeatherPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { weather } = location.state || {}; // Get weather data passed via state

  // Map weather codes to corresponding icons (using Open-Meteo weather codes)
  const getWeatherIcon = (code) => {
    switch (code) {
      case 0: // Clear sky
        return <WiDaySunny size={100} />;
      case 1: // Mainly clear
      case 2: // Partly cloudy
      case 3: // Overcast
        return <WiCloudy size={100} />;
      case 61: // Rainy
      case 63: // Showers
        return <WiRain size={100} />;
      case 71: // Snowfall
      case 73: // Snow showers
        return <WiSnow size={100} />;
      case 95: // Thunderstorm
        return <WiThunderstorm size={100} />;
      default:
        return <WiCloudy size={100} />; // Default icon if no match
    }
  };

  return (
    <div className="weather-page-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-700 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">Current Weather</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center text-black">
        {weather ? (
          <div>
            {/* Display weather icon based on weather code */}
            <div className="weather-icon">{getWeatherIcon(weather.weathercode)}</div>
            <p className="text-2xl">Temperature: {weather.temperature}°C</p>
            <p className="text-lg">Windspeed: {weather.windspeed} km/h</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-6 hover:bg-blue-700 transition"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <p>No weather data available.</p>
        )}
      </div>
    </div>
  );
}

export default WeatherPage;
