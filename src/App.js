import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const fetchWeather = async () => {
    try {
      // Use a geocoding API or predefined coordinates for dynamic weather fetching
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true`
      );
      // Navigate to the WeatherPage and pass the weather data
      navigate('/weather', { state: { weather: response.data.current_weather } });
    } catch (error) {
      console.error(error);
      setError('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <div className="app-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-700 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">Weather Now</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full mb-4 text-black"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition"
        >
          Get Weather
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default App;
