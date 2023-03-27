import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const searchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase())));
      } catch (error) {
        console.error(error);
      }
    };

    searchCountries();
  }, [query]);

  useEffect(() => {
    setSelectedCountry(null);
    setWeather(null);
  }, [query]);

  useEffect(() => {
    
    const getWeather = async () => {
      try {
        if (selectedCountry) {
          const response = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${selectedCountry.capital}`);
          setWeather(response.data.current);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getWeather();
  }, [selectedCountry]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} />
      {countries.length > 10 && <p>Too many matches, specify another filter</p>}
      {countries.length <= 10 && countries.length > 1 && (
        <ul>
          {countries.map(country => (
            <li key={country.cca3}>
              {country.name.common}
              <button onClick={() => handleCountrySelect(country)}>show</button>
            </li>
          ))}
        </ul>
      )}
      {(selectedCountry || (countries.length === 1 && setSelectedCountry(countries[0]))) && (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Population: {selectedCountry.population}</p>
          <img src={selectedCountry.flags.png} alt={`Flag of ${selectedCountry.name.common}`} width="100" />
          <h3>Languages</h3>
          <ul>
            {Object.values(selectedCountry.languages).map(language => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          {weather && (
            <div>
              <h3>Weather in {selectedCountry.capital}</h3>
              <p>Temperature: {weather.temperature} Celsius</p>
              <img src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]} />
              <p>Wind: {weather.wind_speed} km/h direction {weather.wind_dir}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;