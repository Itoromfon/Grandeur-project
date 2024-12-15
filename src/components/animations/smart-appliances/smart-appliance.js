// SmartAppliance.js

import React from 'react';
import styles from './smart-appliance.module.css';

const SmartAppliance = () => {
  return (
    <svg 
      className={styles.smartAppliance} 
      width="200" 
      height="200" 
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fridge */}
      <g className={styles.fridge}>
        <rect x="10" y="10" width="80" height="120" fill="#55aaff" />
        <rect x="20" y="20" width="60" height="100" fill="#ffffff" />
        <rect x="70" y="20" width="10" height="100" fill="#000000" />
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 45 70" 
          to="30 45 70" 
          dur="3s" 
          repeatCount="indefinite"
        />
      </g>

      {/* Oven */}
      <g className={styles.oven}>
        <rect x="110" y="10" width="80" height="120" fill="#ff7f50" />
        <rect x="120" y="20" width="60" height="100" fill="#333333" />
        <circle cx="150" cy="70" r="10" fill="#ff0000">
          <animate 
            attributeName="r" 
            from="10" 
            to="15" 
            dur="1s" 
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Dishwasher */}
      <g className={styles.dishwasher}>
        <rect x="10" y="140" width="80" height="50" fill="#008000" />
        <rect x="20" y="150" width="60" height="30" fill="#ffffff" />
        <circle cx="45" cy="165" r="5" fill="#0000ff">
          <animate 
            attributeName="cx" 
            from="40" 
            to="50" 
            dur="1s" 
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Washing Machine */}
      <g className={styles.washingMachine}>
        <rect x="110" y="140" width="80" height="50" fill="#800080" />
        <rect x="120" y="150" width="60" height="30" fill="#ffffff" />
        <path d="M140,165 A15,15 0 1,0 160,165 A15,15 0 1,0 140,165" fill="none" stroke="#000000" strokeWidth="2">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 150 165" 
            to="360 150 165" 
            dur="5s" 
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};

export default SmartAppliance;