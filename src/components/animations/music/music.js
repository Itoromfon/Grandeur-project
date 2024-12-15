import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SmartMusicAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioWaves, setAudioWaves] = useState([]);

  useEffect(() => {
    // Simulate audio waves
    const generateWaves = () => {
      const waves = [];
      for (let i = 0; i < 5; i++) {
        waves.push({
          id: i,
          height: Math.random() * 40 + 10, // Random height between 10-50
          delay: Math.random() * 0.5, // Random delay
          duration: Math.random() * 0.5 + 0.5, // Random duration
        });
      }
      return waves;
    };

    const interval = setInterval(() => {
      if (isPlaying) {
        setAudioWaves(generateWaves());
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-auto h-full flex items-center justify-center p-3 px-4 -mt-[40px] -ml-[54px]">
      <div className="absolute inset-0 bg-[#2c3e50] rounded-lg opacity-"></div>
      
      <div className="relative z-10 flex flex-col-reverse items-center justify-center space-x-4">
        {/* Audio Waves */}
        <div className="flex items-end space-x-1 h-20">
          {audioWaves.map((wave) => (
            <motion.div
              key={wave.id}
              className="w-2 bg-[#3498db] rounded-full"
              initial={{ height: 10 }}
              animate={{ 
                height: isPlaying ? wave.height : 10,
                opacity: isPlaying ? [0.5, 1, 0.5] : 1
              }}
              transition={{
                duration: wave.duration,
                delay: wave.delay,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button 
          onClick={handleTogglePlay}
          className="bg-[#3498db] text-white p-3 rounded-full hover:bg-[#2980b9] mx-auto transition-colors"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>

        {/* Song Info */}
        <div className="text-white mx-auto">
          <h3 className="text-sm w-full font-semibold">Sonos Playback</h3>
          <p className="text-xs text-gray-300">
            {isPlaying ? 'Now Playing' : 'Paused'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartMusicAnimation;