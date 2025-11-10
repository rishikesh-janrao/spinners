import React from 'react';
import { spinnerExamples } from '../data/spinnerExamples';
import { spinnerNames } from '../data/spinnerNames';
import './UsageExample.css';

const UsageExample = ({ selectedSpinner }) => {
  if (!selectedSpinner) {
    return (
      <div className="usage-example">
        <h3>Usage</h3>
        <p className="hint">Click any spinner to see usage example</p>
      </div>
    );
  }

  // Convert kebab-case to Title Case
  const formatName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="usage-example">
      <h3>Example of {formatName(spinnerNames[selectedSpinner])} (#{selectedSpinner})</h3>
      <pre>
        <code>{spinnerExamples[selectedSpinner]}</code>
      </pre>
    </div>
  );
};

export default UsageExample;
