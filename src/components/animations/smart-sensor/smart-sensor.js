import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SmartSensorAnimation = () => {
  const [isActive, setIsActive] = useState(true);
  const [detectedItems, setDetectedItems] = useState([]);

  useEffect(() => {
    const simulateDetection = () => {
      if (isActive) {
        const possibleItems = [];

        const newDetections = [];
        const numDetections = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < numDetections; i++) {
          const randomItem =
            possibleItems[Math.floor(Math.random() * possibleItems.length)];
          newDetections.push(randomItem);
        }

        setDetectedItems(newDetections);
      }
    };

    const interval = setInterval(simulateDetection, 2000);
    return () => clearInterval(interval);
  }, [isActive]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-auto bg-gray-100 rounded-xl shadow-lg p-4 flex flex-col items-center overflow-hidden -mt-[50px] -ml-[75px] justify-center space-y-4">
      <motion.div
        className={`w-28 h-28 rounded-full flex items-center justify-center ${isActive ? "bg-green-500" : "bg-gray-300"}`}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
      >
        <motion.div
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          {isActive ? "🟢" : "🔴"}
        </motion.div>
      </motion.div>

      <div className="text-center">
        <h3 className="font-bold text-lg mb-2">Smart Sensor</h3>
        <div >
          {isActive ? (
            <></>
          ) : (
            <p className="text-gray-500 text-sm">Tap to activate</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartSensorAnimation;
