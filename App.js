import React from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';

const countries = require('./countries.json');

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;