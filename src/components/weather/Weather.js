import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';

const Weather = () => {
  const [temperature, setTemperature] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [city, setCity] = useState('New York'); // Default city

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Use Axios to fetch weather data
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`, {
            params: {
              q: city, // City name
              units: 'metric', // Temperature in Celsius
              appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY, // API Key
            },
          }
        );

        // Check if the response is successful
        const data = response.data;

        // Ensure the expected data structure exists
        if (data.main && data.weather && data.weather[0]) {
          setTemperature(data.main.temp);
          setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        } else {
          console.error('Unexpected response structure:', data);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]); // Fetch data whenever the city changes

  return (
    <div>
      {temperature !== null ? (
        <div className={styles.weatherContainer}>
          <p>Temperature: {temperature}°C</p>
          {weatherIcon && <img src={weatherIcon} alt="Weather Icon" />}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
