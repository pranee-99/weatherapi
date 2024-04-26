import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './forecast.css';
import config from'../config'

const Forecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Guntur');

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
          params: {
            q: city, 
            appid: '54a57bc234ad752a4f59e59cd372201d',
            units: 'metric'
          },
        });
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };

    getWeather();
    const intervalId = setInterval(getWeather, 900000);
    return () => clearInterval(intervalId);
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherIcon = (iconCode) => {
    if (!iconCode) return null;
    const iconBaseUrl = 'https://openweathermap.org/img/wn/';
    const iconSize = '@2x.png';
    return <img src={`${iconBaseUrl}${iconCode}${iconSize}`} alt="Weather Icon" />;
  };

  const renderWeatherData = () => {
    if (!weatherData || !weatherData.list) return null;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    const dailyForecast = {};
    weatherData.list.forEach(data => {
      const day = new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
      if (!dailyForecast[day]) {
        dailyForecast[day] = {
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon
        };
      } else {
        dailyForecast[day].minTemp = Math.min(dailyForecast[day].minTemp, data.main.temp_min);
        dailyForecast[day].maxTemp = Math.max(dailyForecast[day].maxTemp, data.main.temp_max);
      }
    });

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const currentWeather = dailyForecast[today];

    return (
      <div className="container">
        <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{formattedDate}</h2>
            <span className="date-day">{new Date().toLocaleDateString('en-US').slice(5)}</span>
            <i className="fa-solid fa-location-dot"></i>
            <span className="location">{weatherData.city.name}</span>
          </div>
          <div className="weather-container">
            {currentWeather && (
              <>
                <span className="weather-icon">{getWeatherIcon(currentWeather.icon)}</span>
                <h1 className="weather-temp">{Math.round(currentWeather.minTemp)}ºC / {Math.round(currentWeather.maxTemp)}ºC</h1>
                <h3 className="weather-desc">{currentWeather.description}</h3>
              </>
            )}
          </div>
        </div>
        <div className='Perception'></div>
        <div className="info-side">
          <div className="today-info-container">
            <div className="today-info">
              <div className="humidity">
                <span className="title"><i className="fa-solid fa-droplet"></i> HUMIDITY</span>
                <span className="value">{currentWeather && currentWeather.humidity}%</span>
                <div className="clear"></div>
              </div>
              <div className="wind">
                <span className="title"><i className="fa-solid fa-wind"></i> WIND</span>
                <span className="value">{currentWeather && currentWeather.windSpeed} m/s</span>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="week-container">
            <ul className="week-list">
              {Object.entries(dailyForecast).map(([day, data]) => (
                <li key={day}>
                  <span className="day-name">{day}</span>
                  <span className="day-temp">{Math.round(data.minTemp)}º / {Math.round(data.maxTemp)}º</span>
                  <span className="day-icon">{getWeatherIcon(data.icon)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="location-container">
            <input className="location-input" type="text" id="city" value={city} onChange={handleCityChange} placeholder="Enter city" />
            <button onClick={() => setCity(city)}>Search</button>
          </div>
        </div>
      </div>
    );
  };

  return renderWeatherData();
};

export default Forecast;