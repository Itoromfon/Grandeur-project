import React, { useEffect, useState } from "react";
import styles from "./JoinImages.module.css";
import Image from "next/image";
import { LuDoorOpen } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";

const JoinImages = () => {
  const [isColliding, setIsColliding] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [showCheck, setShowCheck] = useState(true);

  // States to control visibility of elements
  const [showLudoormain, setShowLudoormain] = useState(false);
  const [showLudatemain, setShowLudatemain] = useState(false);
  const [showLulightmain, setShowLulightmain] = useState(false);

  // State for light visibility
  const [isLightOn, setIsLightOn] = useState(true);
  const [lightAnimationClass, setLightAnimationClass] = useState("");

  useEffect(() => {
    setIsColliding(true);
    setShowCheck(false);
    setTimeout(() => {
      setIsColliding(false);
      setIsReset(true);
      setShowCheck(true);

      // Sequentially show elements after collision
      setTimeout(() => setShowLudoormain(true), 1000); // Delay for ludoormain
      setTimeout(() => setShowLudatemain(true), 2000); // Delay for ludatemain
      setTimeout(() => setShowLulightmain(true), 3000); // Delay for lulightmain
    }, 4000); 
  }, []);

  const handleReplayClick = () => {
    setIsColliding(true);
    setIsReset(false);
    setShowCheck(false);

    // Turn the light off momentarily
    setIsLightOn(false);
    setLightAnimationClass(styles.lightOff);

    setTimeout(() => {
      setIsLightOn(true); 
      setLightAnimationClass(styles.lightOn);
    }, 5000);

    setTimeout(() => {
      setIsColliding(false);
      setIsReset(true);
      setShowCheck(true);

      // Sequentially show elements after collision
      setTimeout(() => setShowLudoormain(true), 1000); // Delay for ludoormain
      setTimeout(() => setShowLudatemain(true), 2000); // Delay for ludatemain
      setTimeout(() => setShowLulightmain(true), 3000); // Delay for lulightmain
    }, 4000); // Duration for the collision animation
  };

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.image1} ${styles.imageLeft} ${
        isColliding ? styles.colliding : ""
        } ${isReset ? styles.reset : ""}`}
      >
        <Image
          src="/homeysensor1.png" 
          alt="Left Image"
          width={120}
          height={150}
          className={styles.homeysensor1}
        />
      </div>

      {/* Right Image */}
      <div className={`${styles.image2} ${styles.imageRight}`}>
        <Image
          src="/homeysensor2.png" 
          alt="Right Image"
          width={145}
          height={150}
          className={styles.homeysensor2}
        />
      </div>
      <div className={styles.sensorsets}>
          <div className={styles.ludoormaindiv}>
          <div>
              <h1 className={styles.when}>When...</h1>
          </div>
          <div className={styles.ludoormain}>
              <div className={styles.ludoordiv}>
                  <Image 
                      src='/doorwindowsensor.svg'
                      width={30}
                      height={24}
                      alt="doorsensor"
                      className={styles.doorsensor}
                  />
              </div>
              <div className={styles.ludoortextdiv}>
                  <p className={styles.ludoortext1}>Xiaomi Door Sensor</p>
                  <p className={styles.ludoortext2}>The door opens</p>
              </div>
          </div>
        </div>
      <div>
        <Image 
            src='/homeysmallarrow.svg'
            width={100}
            height={100}
            alt="arrow"
            className={styles.homeyarrow}
        />
      </div>
      <div className={styles.ludatemaindiv}>
        <div>
            <h1 className={styles.and}>And...</h1>
        </div>
        <div className={styles.ludatemain}>
            <div className={styles.ludatediv}>
                {/* <LuDoorOpen 
                    className={styles.ludoor}
                /> */}
                <Image 
                    src='/homeydatetime.svg'
                    width={27}
                    height={27}
                    alt="doorsensor"
                    className={styles.datesensor}
                />
            </div>
            <div className={styles.ludatetextdiv}>
                <p className={styles.ludatetext1}>Date & Time</p>
                <p className={styles.ludatetext2}>It`s after sunset</p>
            </div>
            {showCheck && 
              <div className={styles.lulightcheckdiv}>
                  <FaCheck className={styles.facheck} />
              </div>
            }
        </div>
      </div>
      <div>
        <Image 
            src='/homeysmallarrow.svg'
            width={100}
            height={100}
            alt="arrow"
            className={styles.homeyarrow2}
        />
      </div>
      <div className={styles.homeybulbdiv}>
            <Image
                src={isLightOn ? "/homeylighton.webp" : "/homeylightoff.webp"}
                alt={isLightOn ? "Light On" : "Light Off"}
                width={500}
                height={100}
                className={`${styles.homeylighton} ${lightAnimationClass}`}
            />
        </div>
      <div className={styles.lulightmaindiv}>
        <div className={styles.lulightindex}>
        <div>
            <h1 className={styles.then}>Then...</h1>
        </div>
        <div className={styles.lulightmain}>
            <div className={styles.lulightdiv}>
                {/* <LuDoorOpen 
                    className={styles.ludoor}
                /> */}
                <Image 
                    src='/homeybulb.svg'
                    width={27}
                    height={27}
                    alt="doorsensor"
                    className={styles.lightsensor}
                />
            </div>
            <div className={styles.lulighttextdiv}>
                <p className={styles.lulighttext1}>Philips Hue Light</p>
                <p className={styles.lulighttext2}>Turn On</p>
            </div>
            {showCheck && 
              <div className={styles.lulightcheckdiv}>
                  <FaCheck className={styles.facheck} />
              </div>
            }
        </div>
        </div>
      </div>
      <div className="flex justify-center ml-[300px] mt-[30px]">
            <div>
                <MdOutlineReplay 
                  className={styles.replay} 
                  onClick={handleReplayClick}
                />
            </div>
            <div>
                <p 
                  className={styles.replaytext}
                  onClick={handleReplayClick}
                >
                  Replay
                </p>
            </div>
      </div>
      </div>
    </div>
  );
};

export default JoinImages;
