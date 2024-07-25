import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Montreal');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/weather?city=${city}`);
        setWeather(response.data);
      } catch (error) {
        setError('Error fetching weather data.');
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Weather</h1>
      <div>
        {loading && <p>Loading weather data...</p>}
        {error && <p>{error}</p>}
        {weather && (
          <div className="mb-8 flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">City: {weather.name}</p>
              <p className="mb-2 text-sm text-neutral-400">Temperature: {weather.main.temp}°C</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">Condition - <span className="text-sm text-purple-100">{weather.weather[0].description}</span></h6>
              <p className="mb-4 text-neutral-400">Humidity: {weather.main.humidity}%</p>
              <p className="mb-4 text-neutral-400">Pressure: {weather.main.pressure} hPa</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
