import React, { useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Use loadFull for full feature set

const ParticlesBackground = (props) => {
  const [init, setInit] = useState(false);

  // Initialize particles engine only once when the component mounts
  useEffect(() => {
    const initParticles = async () => {
      try {
        await loadFull(); // Initialize full particles library
        setInit(true); // Update state once initialization is complete
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    };

    initParticles(); // Initialize particles
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Optionally log the container when particles are loaded
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#1E2F97" },
      },
      particles: {
        number: { value: 100 }, // Start with a smaller number of particles
        move: { enable: true, speed: 1 },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div>
      {init && (
        <Particles
          id={props.id} // Use unique ID passed via props
          init={particlesLoaded} // Optionally log when particles are loaded
          options={options} // Pass the particle configuration
        />
      )}
    </div>
  );
};

export default ParticlesBackground;
