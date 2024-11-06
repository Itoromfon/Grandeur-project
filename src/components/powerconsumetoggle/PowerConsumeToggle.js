import { useState } from 'react';

const PowerConsumedToggle = () => {
  // State to track the toggle position
  const [isOn, setIsOn] = useState(false);

  // Example power consumed data (this can be dynamic)
  const powerConsumed = 1500; // in watts

  // Handle toggle button click
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Toggle Button */}
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '85px',
          height: '40px',
          backgroundColor: isOn ? 'rgb(185, 124, 13)' : 'gray',
          borderRadius: '20px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          padding: '5px',
        }}
        onClick={handleToggle}
      >
        <div
          style={{
            position: 'absolute',
            top: '5px',
            left: isOn ? '50px' : '5px',
            width: '30px',
            height: '30px',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'left 0.3s ease', // This makes the button slide
          }}
        ></div>
      </div>

      {/* Display power consumed when toggle is ON */}
      {isOn && (
        <div style={{ marginTop: '20px', color: 'black', fontSize: '18px' }}>
          <p>Power Consumed by Room: {powerConsumed} watts</p>
        </div>
      )}
    </div>
  );
};

export default PowerConsumedToggle;
