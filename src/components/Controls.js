import React from 'react';
import './Controls.css';

const Controls = ({ config, setConfig }) => {
  return (
    <div className="controls">
      <h2>Customize</h2>
      <div className="control-group">
        <div className="control-row">
          <label>
            Size
            <input
              type="number"
              value={config.size}
              onChange={(e) => setConfig({...config, size: parseFloat(e.target.value)})}
              min="1"
              max="10"
              step="0.5"
            />
          </label>
          
          <label>
            Speed
            <input
              type="number"
              value={config.speed}
              onChange={(e) => setConfig({...config, speed: parseFloat(e.target.value)})}
              min="0.1"
              max="5"
              step="0.1"
            />
          </label>
          
          <label>
            Border
            <input
              type="number"
              value={config.borderWidth}
              onChange={(e) => setConfig({...config, borderWidth: parseInt(e.target.value)})}
              min="1"
              max="20"
            />
          </label>
        </div>
        
        <div className="color-row">
          <label>
            <span className="color-label">Primary</span>
            <input
              type="color"
              value={config.color}
              onChange={(e) => setConfig({...config, color: e.target.value})}
            />
          </label>
          
          <label>
            <span className="color-label">Secondary</span>
            <input
              type="color"
              value={config.secondaryColor}
              onChange={(e) => setConfig({...config, secondaryColor: e.target.value})}
            />
          </label>
          
          <label>
            <span className="color-label">Background</span>
            <input
              type="color"
              value={config.backgroundColor}
              onChange={(e) => setConfig({...config, backgroundColor: e.target.value})}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Controls;
