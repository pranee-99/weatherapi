import React, { useState, useRef } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css'


export default function AddWeather() {
  const [formData, setFormData] = useState({
    timestamp: new Date(), // Initialize timestamp with current date/time
    temperature: '',
    humidity: '',
    windSpeed: '', // Optional
    windDirection: '', // Optional
    precipitation: '', // Optional
    uvIndex: '', // Optional
    airQuality: '', // Optional
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/addweather`, formData, { // Replace with your actual route path
        headers: {
          'Content-Type': 'application/json' // Set content type for JSON data
        }
      });

      if (response.status === 201) {
        setFormData({
          timestamp: new Date(),
          temperature: '',
          humidity: '',
          windSpeed: '',
          windDirection: '',
          precipitation: '',
          uvIndex: '',
          airQuality: '',
        });
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div >
      <h3 align="center"><u>Add Weather Data</u></h3>
      {message ? <h4 align="center">{message}</h4> : null}
      {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
  <label style={{ marginRight: '10px', color: 'blue' }}>Timestamp:</label>
  <input 
    type="datetime-local" 
    id="timestamp" 
    value={formData.timestamp.toISOString().slice(0, 16)} 
    onChange={handleChange} 
    disabled
    style={{ border: '2px solid black', borderRadius: '5px', padding: '5px' }} 
  />
</div>
<div style={{ marginBottom: '20px' }}>
  <label style={{ marginRight: '10px', color: 'blue' }}>Temperature (°C)</label>
  <input 
    type="number" 
    id="temperature" 
    value={formData.temperature} 
    onChange={handleChange} 
    required 
    style={{ 
      border: '2px solid black', 
      borderRadius: '5px', 
      padding: '5px' 
    }} 
  />
</div>

<div style={{ marginBottom: '20px' }}>
  <label style={{ marginRight: '10px', color: 'blue' }}>Humidity (%)</label>
  <input 
    type="number" 
    id="humidity" 
    value={formData.humidity} 
    onChange={handleChange} 
    required 
    style={{ 
      border: '2px solid black', 
      borderRadius: '5px', 
      padding: '5px' 
    }} 
  />
</div>

<div style={{ marginBottom: '20px' }}>
  <label style={{ marginRight: '10px', color: 'blue' }}>Wind Speed (kph)</label>
  <input 
    type="number" 
    id="windSpeed" 
    value={formData.windSpeed} 
    onChange={handleChange} 
    style={{ 
      border: '2px solid black', 
      borderRadius: '5px', 
      padding: '5px' 
    }} 
  />
</div>

<div style={{ marginBottom: '20px' }}>
  <label style={{ marginRight: '10px', color: 'blue' }}>Wind Direction (Degrees)</label>
  <input 
    type="number" 
    id="windDirection" 
    value={formData.windDirection} 
    onChange={handleChange} 
    style={{ 
      border: '2px solid black', 
      borderRadius: '5px', 
      padding: '5px' 
    }} 
  />
</div>
<div style={{ marginBottom: '20px' }}>
  <label style={{ marginRight: '10px', color: 'blue' }}>Precipitation (mm)</label>
  <input 
    type="number" 
    id="precipitation" 
    value={formData.precipitation} 
    onChange={handleChange} 
    style={{ 
      border: '2px solid black', 
      borderRadius: '5px', 
      padding: '5px' 
    }} 
  />
</div>
<div style={{ marginBottom: '20px' }}>
  <label style={{ marginRight: '10px', color: 'blue' }}>UV Index</label>
  <input 
    type="number" 
    id="uvIndex" 
    value={formData.uvIndex} 
    onChange={handleChange} 
    style={{ 
      border: '2px solid black', 
      borderRadius: '5px', 
      padding: '5px' 
    }} 
  />
</div>
<div style={{ marginBottom: '20px' }}>
  <label style={{ marginRight: '10px', color: 'blue' }}>Air Quality Index</label>
  <input 
    type="number" 
    id="airQuality" 
    value={formData.airQuality} 
    onChange={handleChange} 
    style={{ 
      border: '2px solid black', 
      borderRadius: '5px', 
      padding: '5px' 
    }} 
  />
</div>
<button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
</form>
    </div>
  );
}
