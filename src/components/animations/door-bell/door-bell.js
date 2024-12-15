import React, { useState, useEffect } from 'react';

const DoorbellAnimation = ({ className }) => {
  const [isRinging, setIsRinging] = useState(false);
  const [ringCount, setRingCount] = useState(0);

  useEffect(() => {
    const doorbellCycle = setInterval(() => {
      if (ringCount < 3) {
        setIsRinging(true);
        setRingCount(prev => prev + 1);
        
        setTimeout(() => {
          setIsRinging(false);
        }, 500);
      } else {
        setRingCount(0);
      }
    }, 2000);

    return () => clearInterval(doorbellCycle);
  }, [ringCount]);

  return (
    <div className={`${className} -ml-[60px] relative w-full h-full flex justify-center items-center`}>
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
        >
          {/* Doorbell Body */}
          <rect 
            x="30" 
            y="20" 
            width="40" 
            height="60" 
            rx="10" 
            ry="10" 
            fill="#4A5568" 
            className="transition-colors duration-500"
          />

          {/* Button */}
          <circle 
            cx="50" 
            cy="50" 
            r="10" 
            fill={isRinging ? '#EF4444' : '#CBD5E0'} 
            className="transition-colors duration-300"
          />

          {/* Sound Waves */}
          {isRinging && (
            <>
              <circle 
                cx="50" 
                cy="50" 
                r="20" 
                stroke="#F87171" 
                strokeWidth="2" 
                fill="none" 
                className="animate-ping"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="30" 
                stroke="#FCA5A5" 
                strokeWidth="2" 
                fill="none" 
                className="animate-ping delay-300"
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

export default DoorbellAnimation;