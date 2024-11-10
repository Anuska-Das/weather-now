import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import WeatherPage from './WeatherPage';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/weather" element={<WeatherPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
