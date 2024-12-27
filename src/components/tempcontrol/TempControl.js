import React, { useState, useEffect } from 'react';

const TempControl = () => {
  const [temperature, setTemperature] = useState(72);
  const [mode, setMode] = useState('cool'); // 'cool' or 'heat'
  const [isOn, setIsOn] = useState(true);

  // Automatically adjust temperature based on mode every 3 seconds
  useEffect(() => {
    if (!isOn) return;

    const autoAdjust = setInterval(() => {
      if (mode === 'cool' && temperature > 68) {
        setTemperature(prev => prev - 1); // Cool down to a minimum of 68°F
      }
      if (mode === 'heat' && temperature < 76) {
        setTemperature(prev => prev + 1); // Heat up to a maximum of 76°F
      }
    }, 3000); // Adjust every 3 seconds

    return () => clearInterval(autoAdjust); // Cleanup the interval when the component unmounts
  }, [temperature, mode, isOn]); // Dependencies

  const increaseTemp = () => {
    if (isOn && temperature < 90) {
      setTemperature(prev => prev + 1);
    }
  };

  const decreaseTemp = () => {
    if (isOn && temperature > 60) {
      setTemperature(prev => prev - 1);
    }
  };

  const togglePower = () => {
    setIsOn(!isOn);
  };

  const toggleMode = () => {
    setMode(prev => prev === 'cool' ? 'heat' : 'cool');
  };

  // Calculate temperature display color
  const getDisplayColor = () => {
    if (!isOn) return 'bg-gray-200';
    if (mode === 'cool') return 'bg-blue-500';
    return 'bg-orange-500';
  };

  return (
    <div className="min-h-screen mt-[-100px] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80">
      <h1 className="text-[17px] font-bold text-gray-800">Temperature Control</h1>
        {/* Main Display */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto rounded-full border-8 border-gray-200 flex items-center justify-center">
            <div className={`w-32 h-32 rounded-full ${getDisplayColor()} flex items-center justify-center transition-colors duration-300`}>
              <div className="text-white text-center">
                <div className="text-4xl font-bold">
                  {isOn ? temperature : '--'}°
                </div>
                <div className="text-sm mt-2">
                  {isOn ? (mode === 'cool' ? 'COOLING' : 'HEATING') : 'OFF'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Temperature Controls */}
          <div className="flex justify-center space-x-8">
            <button
              onClick={decreaseTemp}
              disabled={!isOn}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl 
                ${isOn ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-100 text-gray-400'} 
                transition-colors duration-200`}
            >
              -
            </button>
            <button
              onClick={increaseTemp}
              disabled={!isOn}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl 
                ${isOn ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-100 text-gray-400'} 
                transition-colors duration-200`}
            >
              +
            </button>
          </div>

          {/* Mode and Power Controls */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleMode}
              disabled={!isOn}
              className={`px-4 py-2 rounded-lg flex items-center justify-center
                ${isOn ? 
                  (mode === 'cool' ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white') :
                  'bg-gray-200 text-gray-400'
                } transition-colors duration-200`}
            >
              {mode === 'cool' ? 'Cool' : 'HEAT'}
            </button>
            <button
              onClick={togglePower}
              className={`px-4 py-2 rounded-lg 
                ${isOn ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}
                transition-colors duration-200`}
            >
              {isOn ? 'Turn Off' : 'Turn On'}
            </button>
          </div>
        </div>

        {/* Current Status */}
        <div className="mt-6 text-center text-gray-500 text-[15px]">
          {isOn ? `System is ${mode === 'cool' ? 'cooling' : 'heating'} to ${temperature}°F` : 'System is off'}
        </div>
      </div>
    </div>
  );
};

export default TempControl;
