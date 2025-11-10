import React, { useState, useEffect, useRef, useMemo } from 'react';
import { spinnerNames } from '../data/spinnerNames';
import './SearchBar.css';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);

  // Get all unique spinner names
  const allSpinnerNames = useMemo(() => Object.values(spinnerNames), []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allSpinnerNames.filter(name =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedIndex(-1);
  }, [searchQuery, allSpinnerNames]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[selectedIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (suggestion) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <input
        type="text"
        placeholder="Search spinners by name (e.g., ring, pulse, orbit)..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => searchQuery && suggestions.length > 0 && setShowSuggestions(true)}
        className="search-input"
      />
      {searchQuery && (
        <button 
          className="clear-search"
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={`suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
              onMouseDown={(e) => {
                e.preventDefault();
                selectSuggestion(suggestion);
              }}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
