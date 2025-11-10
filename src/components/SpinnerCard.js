import React from 'react';
import Spinner from '../Spinner';
import './SpinnerCard.css';

const SpinnerCard = ({ number, type, config, onSelect }) => {
  return (
      <div 
        className="spinner-card"
        onClick={() => onSelect(type)}
      >
        <Spinner
          type={type}
          size={config.size}
          color={config.color}
          secondaryColor={config.secondaryColor}
          backgroundColor={config.backgroundColor}
          speed={config.speed}
          borderWidth={config.borderWidth}
        />
      </div>
  );
};

export default SpinnerCard;
