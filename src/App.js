import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherData } from './components/WeatherData';


function App() {
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState([])

  // Handle form change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  // Set city to value of form on click
  const handleClick = (city) => {
    setCity(city);

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(response => setWeather(response.data))
      .finally(setSearch(''));
  };

  const headingStyle = {
    padding: '3rem',
    color: '#fff'
  };

  return (
    <div className="App">
      <h1 style={headingStyle}>Weather App</h1>
      <SearchBar search={search} 
                 handleSearchChange={handleSearchChange}
                 handleClick={handleClick}
                 city={city}/>
      <WeatherData weather={weather}/>
    </div>
    
  );
}

export default App;
