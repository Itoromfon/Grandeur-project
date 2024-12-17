import React, { useState, useEffect } from 'react';

const SmartPlugAnimation = ({ className }) => {
  const [plugState, setPlugState] = useState('initial');

  useEffect(() => {
    const animationCycle = setInterval(() => {
      setPlugState('plugging');
      
      setTimeout(() => {
        setPlugState('plugged');
        
        setTimeout(() => {
          setPlugState('initial');
        }, 2000);
      }, 1000);
    }, 4000);

    return () => clearInterval(animationCycle);
  }, []);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 300 300" 
      className={`${className} w-[350px] mb-[-60px] ml-[-170px] -mt-[60px]`}
    >
      {/* Wall Outlet */}
      <rect 
        x="125" 
        y="60" 
        width="50" 
        height="80" 
        fill="#e0e0e0" 
        stroke="#333" 
        strokeWidth="3"
      />
      
      {/* Outlet Holes */}
      <circle 
        cx="145" 
        cy="85" 
        r="5" 
        fill="#666" 
      />
      <circle 
        cx="155" 
        cy="85" 
        r="5" 
        fill="#666" 
      />
      
      {/* Plug */}
      <g 
        transform={
          plugState === 'initial' ? 'translate(150, 170)' :
          plugState === 'plugging' ? 'translate(150, 130)' :
          'translate(150, 80)'
        }
        style={{ 
          transition: 'transform 1s ease-in-out',
          transformOrigin: 'center'
        }}
      >
        <rect 
          x="-20" 
          y="0" 
          width="40" 
          height="60" 
          fill="#4a4a4a" 
          stroke="#222" 
          strokeWidth="2"
        />
        
        {/* Prongs */}
        <rect 
          x="-25" 
          y="50" 
          width="10" 
          height="20" 
          fill="#silver" 
          stroke="#333" 
          strokeWidth="1"
        />
        <rect 
          x="15" 
          y="50" 
          width="10" 
          height="20" 
          fill="#silver" 
          stroke="#333" 
          strokeWidth="1"
        />
        
        {/* Smart Device Indicator */}
        <circle 
          cx="0" 
          cy="30" 
          r="5" 
          fill={plugState === 'plugged' ? '#00ff00' : '#ff0000'} 
          style={{ transition: 'fill 0.5s ease' }}
        />
      </g>
    </svg>
  );
};

export default SmartPlugAnimation;