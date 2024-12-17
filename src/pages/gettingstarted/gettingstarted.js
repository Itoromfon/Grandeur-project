import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandPointUp, FaWifi, FaHome } from "react-icons/fa";
import { GiLockedDoor } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import DoorAnimation from "@/components/animations/door/Door";
import styles from "./gettingstarted.module.css";
import SmartAppliance from "@/components/animations/smart-appliances/smart-appliance";
import SmartLightSwitches from "@/components/animations/smart-light-switch/smart-light-switch";

export default function SmartAppWithHandAnimation() {
  const [isDoorOpen, setIsDoorOpen] = useState(false); // Door state (open/close)
  const [animationId, setAnimationId] = useState(null); // Currently active device
  const [handPosition, setHandPosition] = useState({ top: 0, left: 0 }); // Hand position
  const [isHandAnimating, setIsHandAnimating] = useState(false); // Hand animation state
  const [currentIndex, setCurrentIndex] = useState(0); // Index to track linear device animation
  const [parent] = useAutoAnimate();
  const handRef = useRef(null);

  // Device list
  const devices = useMemo(
    () => [
      {
        id: 1,
        name: "Smart Appliances",
        icon: <FaWifi className={styles.wifi} />,
        text: "Smart Appliances",
        animation: <SmartAppliance className={styles.deviceImageVisible} />,
      },
      {
        id: 2,
        name: "Door Locks",
        icon: <GiLockedDoor className={styles.door} />,
        text: "Door Lock",
        animation: <DoorAnimation className={`${styles.deviceImageVisible}`} />,
      },
      {
        id: 3,
        name: "Smart Light Switches",
        icon: <FaHome className={styles.home} />,
        text: "Smart Light",
        animation: <SmartLightSwitches />,
      },
    ],
    [isDoorOpen]
  );

  // Trigger hand animation to target device
  const triggerHandAnimation = useCallback(
    (deviceId) => {
      const deviceElement = document.querySelectorAll(`.${styles.icon}`)[
        currentIndex
      ];

      console.log("trigger", { deviceElement });
      if (deviceElement) {
        // Adjust calculation for the hand's position based on the device icon
        const rect = deviceElement.getBoundingClientRect();

        // Set target position for hand animation
        setHandPosition({
          top: rect.top + rect.height / 2,
          left: rect.left + rect.width / 2,
        });
      }

      setAnimationId(deviceId); // Trigger device animation
      setIsHandAnimating(true);

      // Reset hand animation after it "clicks"
      setTimeout(() => {
        setIsHandAnimating(false);
      }, 1500);
    },
    [currentIndex]
  );

  useEffect(() => {
    // Cycle through devices in a linear sequence
    const handAnimationInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % devices.length;
      setCurrentIndex(nextIndex);

      // Trigger hand animation for the next device
      triggerHandAnimation(devices[nextIndex].id);
    }, 6000); // 2 seconds for each click

    return () => clearInterval(handAnimationInterval); // Cleanup interval on unmount
  }, [currentIndex, devices, triggerHandAnimation]);

  return (
    <section className="w-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <div
          className={`${styles.container} ${!isHandAnimating && "hidden opacity-0"}`}
        >
          <Image
            src="/smartapphone.jpg"
            width={50}
            height={20}
            alt="SmartApp Mobile"
            className={` -z-[3] ${styles.smartappimg} ${!isHandAnimating ? "hidden" : ""}`}
          />

          <div className={`${styles.smallphonediv} -z-[2]`}>
            <div
              className={`${styles.smallPhone}  ${!isHandAnimating ? "hidden" : ""}`}
            >
              {devices.map((device, index) => (
                <div
                  key={device.id}
                  className={`${styles.icon} -z-[1] ${currentIndex === index ? styles.active : ""}`}
                >
                  {device.icon}
                  <p className="flex text-[9px] text-[#FFFFFF]">
                    <GoDotFill className={styles.dotfill} />
                    {device.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Device Animation */}

          {/* Hand Animation */}
          <AnimatePresence>
            {isHandAnimating && (
              <motion.div
                ref={handRef}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  top: handPosition.top,
                  left: handPosition.left,
                  transition: { duration: 1, ease: "linear" },
                }}
                exit={{ opacity: 0 }}
                style={{
                  position: "fixed",
                  transform: "translate(-250%, -50%) rotate(45deg)",
                  zIndex: 100,
                }}
              >
                <FaHandPointUp class="z-[40]" size={50} className="text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AnimatePresence>

      <AnimatePresence>
        {animationId && !isHandAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {devices.find((device) => device.id === animationId)?.animation}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
