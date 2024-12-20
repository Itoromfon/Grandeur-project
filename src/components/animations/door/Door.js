import { useEffect, useState } from "react";
import styles from "./Door.module.css";

const DoorAnimation = ({ className = "" }) => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDoorOpen((prevState) => !prevState); // Toggle door state every second
    }, 1000); // 1 second interval

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className={`${styles.backDoor} ${className}`}>
      <div className={`${styles.door} ${isDoorOpen ? styles.doorOpen : ""}`}>
        {/* Optional Door Handle */}
        <div className={styles.doorHandle}></div>
        {/* Optional Inner details */}
        <div className={styles.doorDetails}></div>
      </div>
    </div>
  );
};

export default DoorAnimation; 