import React, { useState } from 'react';
import './SearchBar.css'; // Import CSS for styling

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState(''); // Store the search query
  const [suggestions, setSuggestions] = useState([]); // Store suggestions
  const [selectedCountry, setSelectedCountry] = useState(null); // Store the selected country

  // Handle search input changes
  const handleChange = (e) => {
    const value = e.target.value.trim(); // Trim spaces from the input
    setQuery(value);

    // Filter data based on query (ensure case-insensitivity)
    if (value.length > 0) {
      const filteredSuggestions = data.filter(country =>
        country.country.toLowerCase().includes(value.toLowerCase()) ||
        country.capital.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (country) => {
    setSelectedCountry(country); // Set the selected country
    setQuery(country.country); // Display selected country in the search bar
    setSuggestions([]); // Clear the suggestions
  };

  return (
    <div className="search-bar-container">
      {/* Search Input */}
      <input 
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by country or capital"
        className="search-input"
      />

      {/* Suggestions List */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSuggestionClick(item)}>
              {item.country} - {item.capital}
            </li>
          ))}
        </ul>
      )}

      {/* Selected Country Details */}
      {selectedCountry && (
        <div className="selected-country-details">
          <h2>{selectedCountry.country}</h2>
          <p><strong>Capital:</strong> {selectedCountry.capital}</p>
          <p><strong>Region:</strong> {selectedCountry.region}</p>
          <p><strong>Population:</strong> {selectedCountry.population}</p>
          <p><strong>Currency:</strong> {selectedCountry.currency}</p>
          <p><strong>Languages:</strong> {selectedCountry.languages}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
