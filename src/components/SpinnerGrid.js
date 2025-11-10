import React from 'react';
import SpinnerCard from './SpinnerCard';
import { spinnerNames } from '../data/spinnerNames';
import './SpinnerGrid.css';

const SpinnerGrid = ({ config, onSelectSpinner, searchQuery = '' }) => {
  const spinnerTypes = Array.from({ length: 50 }, (_, i) => i + 1);
  
  // Filter spinners based on search query
  const filteredSpinners = spinnerTypes.filter(type => {
    if (!searchQuery) return true;
    const name = spinnerNames[type] || '';
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="spinner-grid">
      {filteredSpinners.length > 0 ? (
        filteredSpinners.map(type => (
          <SpinnerCard
            key={type}
            type={type}
            config={config}
            onSelect={onSelectSpinner}
          />
        ))
      ) : (
        <div className="no-results">
          <p>No spinners found matching "{searchQuery}"</p>
          <p className="suggestion">Try: ring, pulse, orbit, dots, or star</p>
        </div>
      )}
    </div>
  );
};

export default SpinnerGrid;
