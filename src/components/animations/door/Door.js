import styles from "./Door.module.css";

const DoorAnimation = ({ className = '' }) => {
  return (
    <div className={`${styles.backDoor} ${className}`}>
      <div className={`${styles.door} ${className.includes('doorOpen') ? styles.doorOpen : ''}`}>
        {/* Optional Door Handle */}
        <div className={styles.doorHandle}></div>
        {/* Optional Inner details */}
        <div className={styles.doorDetails}></div>
      </div>
    </div>
  );
};

export default DoorAnimation;
