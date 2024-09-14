import React from 'react';

const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map(country => (
        <li key={country.name}>
          {country.name} ({country.capital})
        </li>
      ))}
    </ul>
  );
};

export default CountryList;