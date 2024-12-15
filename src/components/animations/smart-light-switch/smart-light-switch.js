import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SmartLightSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOn(!isOn);
    }, 1500); // Change state every 3 seconds

    return () => clearTimeout(timer);
  }, [isOn]);

  const switchAnimation = {
    on: {
      background: "#FFD700",
      boxShadow: "0 0 20px #FFD700",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    off: {
      background: "#707070",
      boxShadow: "0 0 0 transparent",
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const switchHandleAnimation = {
    on: { y: -50 },
    off: { y: 40 }
  };

  return (
    <motion.div 
      className="w-[100px] h-[200px] bg-gray-300 rounded-lg flex items-center justify-center mb-2 -ml-[50px]"
      animate={isOn ? "on" : "off"}
      variants={switchAnimation}
    >
      <motion.div 
        className="w-12 h-12 bg-white rounded-full"
        animate={isOn ? "on" : "off"}
        variants={switchHandleAnimation}
      />
    </motion.div>
  );
};

export default SmartLightSwitch;