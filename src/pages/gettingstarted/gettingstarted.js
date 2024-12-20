// import { useAutoAnimate } from "@formkit/auto-animate/react";
// import Image from "next/image";
// import { useEffect, useState, useRef, useCallback, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaHandPointUp, FaWifi, FaHome } from "react-icons/fa";
// import { GiLockedDoor } from "react-icons/gi";
// import { GoDotFill } from "react-icons/go";
// import DoorAnimation from "@/components/animations/door/Door";
// import styles from "./gettingstarted.module.css";
// import SmartAppliance from "@/components/animations/smart-appliances/smart-appliance";
// import SmartLightSwitches from "@/components/animations/smart-light-switch/smart-light-switch";

// export default function SmartAppWithHandAnimation() {
//   const [isDoorOpen, setIsDoorOpen] = useState(false); // Door state (open/close)
//   const [animationId, setAnimationId] = useState(null); // Currently active device
//   const [handPosition, setHandPosition] = useState({ top: 0, left: 0 }); // Hand position
//   const [isHandAnimating, setIsHandAnimating] = useState(false); // Hand animation state
//   const [currentIndex, setCurrentIndex] = useState(0); // Index to track linear device animation
//   const [parent] = useAutoAnimate();
//   const handRef = useRef(null);

  
//   const devices = useMemo(
//     () => [
//       {
//         id: 1,
//         name: "Smart Appliances",
//         icon: <FaWifi className={styles.wifi} />,
//         text: "Smart Appliances",
//         animation: <SmartAppliance className={styles.deviceImageVisible} />,
//       },
//       {
//         id: 2,
//         name: "Door Locks",
//         icon: <GiLockedDoor className={styles.door} />,
//         text: "Door Lock",
//         animation: <DoorAnimation className={`${styles.deviceImageVisible}`} />,
//       },
//       {
//         id: 3,
//         name: "Smart Light Switches",
//         icon: <FaHome className={styles.home} />,
//         text: "Smart Light",
//         animation: <SmartLightSwitches />,
//       },
//     ],
//     [isDoorOpen]
//   );

  
//   const triggerHandAnimation = useCallback(
//     (deviceId) => {
//       const deviceElement = document.querySelectorAll(`.${styles.icon}`)[
//         currentIndex
//       ];

//       console.log("trigger", { deviceElement });
//       if (deviceElement) {
        
//         const rect = deviceElement.getBoundingClientRect();

        
//         setHandPosition({
//           top: rect.top + rect.height / 2,
//           left: rect.left + rect.width / 2,
//         });
//       }

//       setAnimationId(deviceId);   
//       setIsHandAnimating(true);

      
//       setTimeout(() => {
//         setIsHandAnimating(false);
//       }, 1500);
//     },
//     [currentIndex]
//   );

//   useEffect(() => {
   
//     const handAnimationInterval = setInterval(() => {
//       const nextIndex = (currentIndex + 1) % devices.length;
  
      
//       triggerHandAnimation(devices[nextIndex].id, nextIndex);
  
//       setCurrentIndex(nextIndex); 
//     }, 6000); 
  
//     return () => clearInterval(handAnimationInterval); 
//   }, [currentIndex, devices, triggerHandAnimation]);

//   return (
//     <section className="w-full flex items-center justify-center">
//       <AnimatePresence mode="wait"> 
//         <div
//           className={`${styles.container} ${!isHandAnimating && "hidden opacity-0"}`}
//         >
//           <div className={styles.smartappimgdiv}> 
//           <Image
//             src="/smartapphone.jpg" 
//             width={50}
//             height={20}
//             alt="SmartApp Mobile"
//             className={` -z-[3] ${styles.smartappimg} ${!isHandAnimating ? "hidden" : ""}`}
//           />
//           </div>
//           <div className={`${styles.smallPhone}`}>
//             {devices.map((device, index) => (
//               <div
//                 key={device.id}
//                 className={`${styles.icon} ${
//                   currentIndex === index ? styles.active : ""
//                 }`}
//                 onClick={() => {
//                   setAnimationId(device.id);
//                   setCurrentIndex(index);
//                 }}
//               >
               
//                 {device.icon}

                
//                 {currentIndex === index && (
//                   <div className='z-[200]'>
//                     <FaHandPointUp className={`${styles.handIcon}`} size={30} />
//                   </div>
//                 )}

                
//                 <p className="flex text-[9px] text-[#FFFFFF]">
//                   <GoDotFill className={styles.dotfill} />
//                   {device.text}
//                 </p>
//               </div>
//             ))}
//           </div>


          


//           <AnimatePresence>
//             {isHandAnimating && (
//               <motion.div
//                 ref={handRef}
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,
//                   top: handPosition.top,
//                   left: handPosition.left,
//                   transition: { duration: 1, ease: "linear" },
//                 }}
//                 exit={{ opacity: 0 }}
//                 style={{
//                   position: "fixed",
//                   transform: "translate(-500%, -190%) rotate(45deg)",
//                   zIndex: 100,
//                 }}
//               >
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </AnimatePresence>

//       <AnimatePresence>
//         {animationId && !isHandAnimating && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {devices.find((device) => device.id === animationId)?.animation}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import styles from "./gettingstart.module.css";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { MdEdgesensorHigh } from "react-icons/md";
import { FaHandPointUp } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import gsap from "gsap";

const apps = [
  {
    id: 1,
    name: "Light Bulb",
    icon: (
      <FaLightbulb
        className="
        bg-[#000000] 
        text-[#FFFFFF]
        text-[20px]
        px-[10px]
        w-[40px]
        h-[40px]
        rounded-sm
        "
      />
    ),
    images: "/stocklightbulb.gif",
    lineClass: styles.line1,
  },
  {
    id: 2,
    name: "Security Camera",
    icon: (
      <FaCamera
        className="
        bg-[#000000] 
        text-[#FFFFFF]
        text-[20px]
        px-[10px]
        w-[40px]
        h-[40px]
        rounded-sm
        "
      />
    ),
    images: "/pixabaycamera.gif",
    lineClass: styles.line2,
  },
  {
    id: 3,
    name: "Door-Lock",
    icon: (
      <FaDoorOpen
        className="
        bg-[#000000] 
        text-[#FFFFFF]
        text-[20px]
        px-[10px]
        w-[40px]
        h-[40px]
        rounded-sm
        "
      />
    ),
    images: "/fotoropeningdoor.gif",
    lineClass: styles.line3,
  },
  {
    id: 4,
    name: "Smart Sensor",
    icon: (
      <MdEdgesensorHigh
        className="
        bg-[#000000] 
        text-[#FFFFFF]
        text-[20px]
        px-[10px]
        w-[40px]
        h-[40px]
        rounded-sm
        "
      />
    ),
    images: "/fotorsensor.gif",
    lineClass: styles.line4,
  },
];

const SmartAppAnimation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeId, setActiveId] = useState(apps[0].id); 
  const [clickedIcons, setClickedIcons] = useState([]); // Tracks clicked icons
  const [showSingleIcon, setShowSingleIcon] = useState(false); 

  useEffect(() => {
    let currentIndex = 0;

    const autoCycle = setInterval(() => {
      currentIndex = (currentIndex + 1) % apps.length; // Loop through the apps array
      setActiveId(apps[currentIndex].id);
      setSelectedImage(apps[currentIndex].images);
    }, 4000);

    return () => clearInterval(autoCycle);
  }, []);

  const handleIconClick = (id, images) => {
    if (!clickedIcons.includes(id)) {
      setClickedIcons((prev) => [...prev, id]);
    }
    setActiveId(id);
    setSelectedImage(images);

    if (clickedIcons.length === apps.length - 1) {
      setShowSingleIcon(true)
    }
  }; 

  const handleSingleIconClick = () => {
    const nextId = activeId === apps.length ? 1 : activeId + 1;
    const nextApp = apps.find((app) => app.id === nextId);
    if (nextApp) {
      setActiveId(nextApp.id);
      setSelectedImage(nextApp.images);
    }
  }; 

  return (
    <div className={styles.container}>
      {/* Application Links */}
      <div className={styles.Apps}>
        {!showSingleIcon &&
         apps.map((item) => (
          <div
            key={item.id}
            className={styles.lightbulb}
            onClick={() => handleIconClick(item.id, item.images)}
          >
            <a href="#" className={styles.lightlink}>
              {item.icon}
              {activeId === item.id && (
                <FaHandPointUp className={`${styles.handIcon}`} />
              )}
              <p className={styles.name}>{item.name}</p>
            </a>
            {/* Hide line if active */}
            {activeId !== item.id && <div className={item.lineClass}></div>}
          </div>
        ))}
        {showSingleIcon && (
          <div
            className={`${styles.lightbulb} ${styles.singleIcon}`}
            onClick={handleSingleIconClick}
          >
            <a href="#" className={styles.lightlink}>
              {/* <FaCog className="icon" /> */}
              <div className={styles.controller}>
                <p className={styles.controllertext}>GrandeurSmart App</p>
              </div>
            </a>
          </div>
        )}
      </div>

      {/* Smartphone with Dynamic Image */}
      <div>
        <div className={styles.smartphone}>
          <Image
            src="/smartapphone.jpg"
            width={260}
            height={410}
            alt="SmartApp Mobile"
            className={styles.smartappimg}
          />
          <div className='ml-[15px] mt-[-280px]'>
          <div className='flex ml-[10px] gap-2'>
            <div className='z-40 cursor-pointer'>
              <Image 
                src='/fotordoor.png' 
                alt='Light'
                width={100}
                height={100}
              />
            </div>
            <div className='z-40 cursor-pointer'>
              <Image 
                src='/fotorsensor.png' 
                alt='Light'
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex ml-[-10px] mt-[30px] gap-14">
            <div className='z-40 cursor-pointer'>
              <Image 
                src='/fotorcamera.png' 
                alt='Light'
                width={100}
                height={100}
              />
            </div>
            <div className='z-40 cursor-pointer'>
              <Image 
                src='/fotorlight.png' 
                alt='Light'
                width={70}
                height={50}
              />
            </div>
            </div>
          </div>
          {selectedImage && (
            <Image
              src={selectedImage}
              width={150}
              height={150}
              alt="Selected Display"
              className={styles.overlayImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartAppAnimation;




































































// <div className='ml-[15px] mt-[130px]'>
//         <div className='flex ml-[10px] gap-2'>
//           <div className='z-40 cursor-pointer'>
//             <Image 
//               src='/fotordoor.png' 
//               alt='Light'
//               width={100}
//               height={100}
//             />
//           </div>
//           <div className='z-40 cursor-pointer'>
//             <Image 
//               src='/fotorsensor.png' 
//               alt='Light'
//               width={100}
//               height={100}
//             />
//           </div>
//         </div>
//         <div className="flex ml-[-10px] mt-[30px] gap-14">
//           <div className='z-40 cursor-pointer'>
//             <Image 
//               src='/fotorcamera.png' 
//               alt='Light'
//               width={100}
//               height={100}
//             />
//           </div>
//           <div className='z-40 cursor-pointer'>
//             <Image 
//               src='/fotorlight.png' 
//               alt='Light'
//               width={70}
//               height={50}
//             />
//           </div>
//           </div>
//         </div>





{/* <div className={styles.lightbulb}>
        <a 
          href='#'
          className={styles.lightlink}
        >
          Light Bulb
        </a> 
      </div>
      <div className={styles.camera}>
        <a
          href='#'
          className={styles.cameralink}
        >
          Security Camera
        </a>
      </div>
      <div className={styles.camera}>
        <a
          href='#'
          className={styles.cameralink}
        >
          Security Camera
        </a>
      </div>
      <div className={styles.camera}>
        <a
          href='#'
          className={styles.cameralink}
        >
          Security Camera
        </a>
      </div> */}