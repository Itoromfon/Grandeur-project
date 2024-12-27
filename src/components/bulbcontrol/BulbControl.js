import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './BulbControl.module.css';

const BulbControl = () => {
  const [isOn, setIsOn] = useState(true);

  // Automatically toggle the bulb state every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOn((prev) => !prev);
    }, 2000); // Change every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="min-h-screen mt-[-100px] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-8">
        <h1 className="text-2xl font-bold text-gray-800">Bulb Control</h1>

        {/* Bulb */}
        <div className="w-40 h-40 mx-auto">
          <div className="relative">
            {/* Bulb Images */}
            <div className={`relative w-24 h-24 mx-auto ${styles.bulbMargin}`}>
              {isOn ? (
                <Image
                  src="/homeylighton.webp"
                  alt="Light On"
                  className={styles.homeylighton}
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src="/homeylightoff.webp"
                  alt="Light Off"
                  className={styles.homeylightoff}
                  width={100}
                  height={100}
                />
              )}
            </div>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggleBulb}
            className={`relative inline-flex h-12 w-24 items-center rounded-full transition-colors duration-300 ${
              isOn ? 'bg-green-500' : 'bg-gray-400'
            }`}
          >
            <span className="sr-only">Toggle bulb</span>
            <span
              className={`inline-block h-10 w-10 transform rounded-full bg-white transition-transform duration-300 ${
                isOn ? 'translate-x-12' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Status Text */}
        <div className="text-lg font-medium">
          Status:{' '}
          <span className={isOn ? 'text-green-500' : 'text-red-500'}>
            {isOn ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BulbControl;




