// import React, { useState, useRef } from "react";
// import {
//   Lightbulb,
//   Thermometer,
//   Camera,
//   Power,
//   DoorClosed,
//   Plug,
//   AlarmClock,
//   KeyIcon,
//   Gauge,
//   VideoIcon,
//   HousePlug,
// } from "lucide-react";
// import styles from './JoinImages.module.css'

// const JoinImages = () => {
//   const [currentScene, setCurrentScene] = useState(1);
//   const [selectedApp, setSelectedApp] = useState(null); // Track the selected app
//   const svgRef = useRef();

//   const devices = [
//     { icon: Lightbulb, name: "SmartBulb", color: "#FFD700" },
//     { icon: Thermometer, name: "ThermoStat", color: "#FF6B6B" },
//     { icon: Camera, name: "SecureCam", color: "#4ECDC4" },
//     { icon: DoorClosed, name: "DoorLock", color: "#FFD700" },
//     { icon: Plug, name: "SmartPlug", color: "#FF6B6B" },
//     { icon: AlarmClock, name: "SmartAlarm", color: "#4ECDC4" },
//   ];

//   const apps = [
//     { icon: Power, name: "BulbControl", color: "#FFD700", deviceName: "SmartBulb" },
//     { icon: Gauge, name: "TempControl", color: "#FF6B6B", deviceName: "ThermoStat" },
//     { icon: VideoIcon, name: "CamControl", color: "#4ECDC4", deviceName: "SecureCam" },
//     { icon: KeyIcon, name: "DoorControl", color: "#FFD700", deviceName: "SmartBulb" },
//     { icon: HousePlug, name: "PlugControl", color: "#FF6B6B", deviceName: "ThermoStat" },
//     { icon: AlarmClock, name: "AlarmControl", color: "#4ECDC4", deviceName: "SecureCam" },
//   ];

//   const handleAppClick = (app) => {
//     setSelectedApp(app.name === "BulbControl" ? app : null);
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-red-100 relative">
//       {/* Animated SVG Line */}
//       <svg
//         ref={svgRef}
//         style={{ zIndex: 120, paddingLeft: '170px' }}
//         className="absolute w-full h-full pointer-events-none"
//       >
//         {selectedApp && (
//           <line
//             x1="25%"
//             y1="40%"
//             x2="47%"
//             y2="27%"
//             stroke={selectedApp.color}
//             strokeWidth="2"
//             strokeDashoffset="100"
//             strokeDasharray="10" 
//             className={styles.lineanimation}
//           />
//         )}
//       </svg>

//       {/* Apps Section */}
//       <div className="relative mr-2 w-56 h-[370px] bg-white rounded-[3rem] shadow-xl border-8 border-gray-800 overflow-hidden">
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl" />
//         <div className="p-4 pt-12 mt-[5px] h-full bg-gray-50">
//           <h3 className="text-[16px] font-semibold mb-[24px] mt-[10px] text-center text-gray-800">
//             GrandeurSmart Apps
//           </h3>
//           <div className="grid grid-cols-2 gap-2">
//             {apps.map((app, index) => (
//               <div
//                 key={index}
//                 className="p-[16px] bg-white rounded-xl shadow-md flex flex-col items-center cursor-pointer"
//                 onClick={() => handleAppClick(app)}
//               >
//                 <app.icon size={18} color={app.color} />
//                 <span className="mt-2 text-[12px] text-gray-600">{app.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Devices Section */}
//       <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-xl border-8 border-gray-800 overflow-hidden">
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl" />
//         <div className="p-8 pt-12 h-full bg-gray-50">
//           <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
//             GrandeurSmart Devices
//           </h3>
//           <div className="grid grid-cols-2 gap-4">
//             {devices.map((device, index) => (
//               <div
//                 key={index}
//                 className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center"
//               >
//                 <device.icon size={32} color={device.color} />
//                 <span className="mt-2 text-sm text-gray-600">{device.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinImages;






























































































import React, { useState, useRef, useEffect } from "react";
import {
  Lightbulb,
  Thermometer,
  Camera,
  Power,
  DoorClosed,
  Plug,
  AlarmClock,
  KeyIcon,
  Gauge,
  VideoIcon,
  HousePlug,
} from "lucide-react";
import { FaHandPointUp } from "react-icons/fa";
import styles from "./JoinImages.module.css";
import BulbControl from "../bulbcontrol/BulbControl";
import TempControl from "../tempcontrol/TempControl";
import CamControl from "../camcontrol/CamControl";
import DoorControl from "../doorcontrol/DoorControl";

const JoinImages = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [lineCoords, setLineCoords] = useState(null);
  const [fingerPosition, setFingerPosition] = useState(null);
  const [isLinked, setIsLinked] = useState(false);
  const [areDevicesVisible, setAreDevicesVisible] = useState(true);
  const appRefs = useRef([]);
  const deviceRefs = useRef([]);

  const devices = [
    { icon: Lightbulb, name: "SmartBulb", color: "#FFD700" },
    { icon: Thermometer, name: "ThermoStat", color: "#FF6B6B" },
    { icon: Camera, name: "SecureCam", color: "#4ECDC4" },
    { icon: DoorClosed, name: "DoorLock", color: "#FFD700" },
    { icon: Plug, name: "SmartPlug", color: "#FF6B6B" },
    { icon: AlarmClock, name: "SmartAlarm", color: "#4ECDC4" },
  ];

  const apps = [
    { icon: Power, name: "BulbControl", interface: <BulbControl />, color: "#FFD700", deviceName: "SmartBulb" },
    { icon: Gauge, name: "TempControl", interface: <TempControl />, color: "#FF6B6B", deviceName: "ThermoStat" },
    { icon: VideoIcon, name: "CamControl", interface: <CamControl />, color: "#4ECDC4", deviceName: "SecureCam" },
    { icon: KeyIcon, name: "DoorControl", interface: <DoorControl />, color: "#FFD700", deviceName: "DoorLock" },
    { icon: HousePlug, name: "PlugControl", interface: <BulbControl />, color: "#FF6B6B", deviceName: "SmartPlug" },
    { icon: AlarmClock, name: "AlarmControl", interface: <BulbControl />, color: "#4ECDC4", deviceName: "SmartAlarm" },
  ];

  const handleAppClick = (app, appIndex) => {
    const deviceIndex = devices.findIndex((d) => d.name === app.deviceName);
    if (deviceIndex !== -1) {
      const appRect = appRefs.current[appIndex]?.getBoundingClientRect();
      const deviceRect = deviceRefs.current[deviceIndex]?.getBoundingClientRect();
    
    if (appRect && deviceRect) {
      setLineCoords({
        x1: appRect.x + appRect.width / 2,
        y1: appRect.y + appRect.height / 2,
        x2: deviceRect.x + deviceRect.width / 2,
        y2: deviceRect.y + deviceRect.height / 2,
      });

      setFingerPosition({
        top: appRect.y - 40,
        left: appRect.x + appRect.width / 2 - 15,
      });

      setSelectedApp(app);

      appRefs.current[appIndex].classList.add(styles.activeApp);
      appRefs.current.forEach((ref, i) => {
        if (i !== appIndex) ref.classList.remove(styles.activeApp);
      });

      setAreDevicesVisible(false);
      setIsLinked(false);
      setTimeout(() => {
        setIsLinked(true);
        setAreDevicesVisible(true);
      }, 4000);
    }
    }
  };

  useEffect(() => {
    const interval = 5000;
    let currentIndex = 0;

    const autoActivateApp = () => {
      handleAppClick(apps[currentIndex], currentIndex);
      currentIndex = (currentIndex + 1) % apps.length;
    };

    const autoClickInterval = setInterval(autoActivateApp, interval);
    return () => clearInterval(autoClickInterval);
  }, []);

  const renderAppInterface = () => {
    if (!selectedApp) return <div></div>;

    if (!isLinked) {
      return (
        <div>
          {selectedApp.interface}
        </div>
      );
    }

    // switch (selectedApp.name) {
    //   case "BulbControl":
    //     return <div className="p-4 bg-yellow-100 rounded-xl">Bulb Control Interface</div>;
    //   case "TempControl":
    //     return <div className="p-4 bg-red-100 rounded-xl">Temperature Control Interface</div>;
    //   case "CamControl":
    //     return <div className="p-4 bg-green-100 rounded-xl">Camera Control Interface</div>;
    //   case "DoorControl":
    //     return <div className="p-4 bg-yellow-200 rounded-xl">Door Lock Interface</div>;
    //   case "PlugControl":
    //     return <div className="p-4 bg-red-200 rounded-xl">Plug Control Interface</div>;
    //   case "AlarmControl":
    //     return <div className="p-4 bg-blue-100 rounded-xl">Alarm Control Interface</div>;
    //   default:
    //     return <div className="p-4 bg-gray-200 rounded-xl">Unknown App</div>;
    // }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative">
      {fingerPosition && (
        <div
          className={styles.finger}
          style={{
            top: `${fingerPosition.top}px`,
            left: `${fingerPosition.left}px`,
          }}
        >
          <FaHandPointUp />
        </div>
      )}

      <svg style={{ zIndex: 120 }} className="absolute w-full h-full pointer-events-none">
        {lineCoords && (
          <line
            x1={lineCoords.x1}
            y1={lineCoords.y1}
            x2={lineCoords.x2}
            y2={lineCoords.y2}
            stroke={selectedApp.color}
            strokeWidth="2"
            strokeDashoffset="100"
            strokeDasharray="10"
            className={styles.lineanimation}
          />
        )}
      </svg>

      <div className="relative mr-5 w-56 h-[370px] bg-white rounded-[3rem] shadow-xl border-8 border-gray-800 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl" />
        <div className="p-4 pt-12 mt-[5px] h-full bg-gray-50">
          <h3 className="text-[16px] font-semibold mb-[24px] mt-[10px] text-center text-gray-800">
            GrandeurSmart Apps
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {apps.map((app, index) => (
              <div
                key={index}
                ref={(el) => (appRefs.current[index] = el)}
                className="p-[16px] bg-white rounded-xl shadow-md flex flex-col items-center cursor-pointer"
                onClick={() => handleAppClick(app, index)}
              >
                <app.icon size={18} color={app.color} />
                <span className="mt-2 text-[12px] text-gray-600">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-xl border-8 border-gray-800 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl" />
        <div className="p-8 pt-12 h-full bg-gray-50 flex flex-col">
          <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
            GrandeurSmart Devices
          </h3>
          <div className="grid grid-cols-2 gap-4 flex-grow">
            {areDevicesVisible &&
              devices.map((device, index) => (
                <div
                  key={index}
                  ref={(el) => (deviceRefs.current[index] = el)}
                  className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center"
                >
                  <device.icon size={32} color={device.color} />
                  <span className="mt-2 text-sm text-gray-600">{device.name}</span>
                </div>
              ))}
          </div>
          {renderAppInterface()}
        </div>
      </div>
    </div>
  );
};

export default JoinImages;
































































































































































{/* Scene 2: Multiple Apps */}
{/* <div className={`absolute top-12 left-8 right-8 transition-opacity duration-500 ${currentScene === 2 ? 'opacity-100' : 'opacity-0'}`}>
  <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">Separate Apps Required</h3>
  <div className="grid grid-cols-2 gap-4">
    {devices.map((Device, index) => (
      <div key={index} className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: Device.color }}>
          <Device.icon size={24} color="white" />
        </div>
        <span className="mt-2 text-sm text-gray-600">{Device.name} App</span>
      </div>
    ))}
  </div>
</div> */}

{/* Scene 3: GrandeurSmart App */}
{/* <div className={`absolute top-12 left-8 right-8 transition-opacity duration-500 ${currentScene === 3 ? 'opacity-100' : 'opacity-0'}`}>
  <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">One App for All</h3>
  <div className="flex justify-center">
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
      <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center">
        <Smartphone size={32} color="white" />
      </div>
      <span className="mt-3 font-semibold text-blue-600">GrandeurSmart</span>
    </div>
  </div>
</div> */}

{/* Scene 4: Unified Control */}
{/* <div className={`absolute top-12 left-8 right-8 transition-opacity duration-500 ${currentScene === 4 ? 'opacity-100' : 'opacity-0'}`}>
  <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">Unified Control</h3>
  <div className="relative flex justify-center mb-8">
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
        <Smartphone size={24} color="white" />
      </div>
    </div>
  </div>
  <div className="grid grid-cols-3 gap-4">
    {devices.map((Device, index) => (
      <div key={index} className="relative">
        <div className={`absolute top-1/2 left-1/2 w-px h-12 bg-blue-400 transform -translate-x-1/2 -translate-y-full ${isAnimating ? 'animate-pulse' : ''}`} />
        <div className="p-2 bg-white rounded-xl shadow-md flex flex-col items-center">
          <Device.icon size={24} color={Device.color} />
        </div>
      </div>
    ))}
  </div>
</div> */}








// import React, { useEffect, useState } from "react";
// import styles from "./JoinImages.module.css";
// import Image from "next/image";
// import { LuDoorOpen } from "react-icons/lu";
// import { FaCheck } from "react-icons/fa";
// import { MdOutlineReplay } from "react-icons/md";

// const JoinImages = () => {
//   const [isColliding, setIsColliding] = useState(false);
//   const [isReset, setIsReset] = useState(false);
//   const [showCheck, setShowCheck] = useState(true);

//   const [showLudoormain, setShowLudoormain] = useState(false);
//   const [showLudatemain, setShowLudatemain] = useState(false);
//   const [showLulightmain, setShowLulightmain] = useState(false);

//   const [isLightOn, setIsLightOn] = useState(true);
//   const [lightAnimationClass, setLightAnimationClass] = useState("");

//   useEffect(() => {
//     setIsColliding(true);
//     setShowCheck(false);
//     setTimeout(() => {
//       setIsColliding(false);
//       setIsReset(true);
//       setShowCheck(true);

//       setTimeout(() => setShowLudoormain(true), 1000); 
//       setTimeout(() => setShowLudatemain(true), 2000); 
//       setTimeout(() => setShowLulightmain(true), 3000); 
//     }, 4000); 
//   }, []);

//   const handleReplayClick = () => {
//     setIsColliding(true);
//     setIsReset(false);
//     setShowCheck(false);

//     setIsLightOn(false);
//     setLightAnimationClass(styles.lightOff);

//     setTimeout(() => {
//       setIsLightOn(true); 
//       setLightAnimationClass(styles.lightOn);
//     }, 5000);

//     setTimeout(() => {
//       setIsColliding(false);
//       setIsReset(true);
//       setShowCheck(true);

//       setTimeout(() => setShowLudoormain(true), 1000); 
//       setTimeout(() => setShowLudatemain(true), 2000); 
//       setTimeout(() => setShowLulightmain(true), 3000); 
//     }, 4000); 
//   };

//   return (
//     <div className={styles.container}>
//       <div 
//         className={`${styles.image1} ${styles.imageLeft} ${
//         isColliding ? styles.colliding : ""
//         } ${isReset ? styles.reset : ""}`}
//       >
//         <Image
//           src="/homeysensor1.png" 
//           alt="Left Image"
//           width={120}
//           height={150}
//           className={styles.homeysensor1}
//         />
//       </div>

//       <div className={`${styles.image2} ${styles.imageRight}`}>
//         <Image
//           src="/homeysensor2.png" 
//           alt="Right Image"
//           width={145}
//           height={150}
//           className={styles.homeysensor2}
//         />
//       </div>
//       <div className={styles.sensorsets}>
//           <div className={styles.ludoormaindiv}>
//           <div>
//               <h1 className={styles.when}>When...</h1>
//           </div>
//           <div className={styles.ludoormain}>
//               <div className={styles.ludoordiv}>
//                   <Image 
//                       src='/doorwindowsensor.svg'
//                       width={30}
//                       height={24}
//                       alt="doorsensor"
//                       className={styles.doorsensor}
//                   />
//               </div>
//               <div className={styles.ludoortextdiv}>
//                   <p className={styles.ludoortext1}>Xiaomi Door Sensor</p>
//                   <p className={styles.ludoortext2}>The door opens</p>
//               </div>
//           </div>
//         </div>
//       <div>
//         <Image 
//             src='/homeysmallarrow.svg'
//             width={100}
//             height={100}
//             alt="arrow"
//             className={styles.homeyarrow}
//         />
//       </div>
//       <div className={styles.ludatemaindiv}>
//         <div>
//             <h1 className={styles.and}>And...</h1>
//         </div>
//         <div className={styles.ludatemain}>
//             <div className={styles.ludatediv}>
//                 <Image 
//                     src='/homeydatetime.svg'
//                     width={27}
//                     height={27}
//                     alt="doorsensor"
//                     className={styles.datesensor}
//                 />
//             </div>
//             <div className={styles.ludatetextdiv}>
//                 <p className={styles.ludatetext1}>Date & Time</p>
//                 <p className={styles.ludatetext2}>It`s after sunset</p>
//             </div>
//             {showCheck && 
//               <div className={styles.lulightcheckdiv}>
//                   <FaCheck className={styles.facheck} />
//               </div>
//             }
//         </div>
//       </div>
//       <div>
//         <Image 
//             src='/homeysmallarrow.svg'
//             width={100}
//             height={100}
//             alt="arrow"
//             className={styles.homeyarrow2}
//         />
//       </div>
//       <div className={styles.homeybulbdiv}>
//             <Image
//                 src={isLightOn ? "/homeylighton.webp" : "/homeylightoff.webp"}
//                 alt={isLightOn ? "Light On" : "Light Off"}
//                 width={500}
//                 height={100}
//                 className={`${styles.homeylighton} ${lightAnimationClass}`}
//             />
//         </div>
//       <div className={styles.lulightmaindiv}>
//         <div className={styles.lulightindex}>
//         <div>
//             <h1 className={styles.then}>Then...</h1>
//         </div>
//         <div className={styles.lulightmain}>
//             <div className={styles.lulightdiv}>
//                 <Image 
//                     src='/homeybulb.svg'
//                     width={27}
//                     height={27}
//                     alt="doorsensor"
//                     className={styles.lightsensor}
//                 />
//             </div>
//             <div className={styles.lulighttextdiv}>
//                 <p className={styles.lulighttext1}>Philips Hue Light</p>
//                 <p className={styles.lulighttext2}>Turn On</p>
//             </div>
//             {showCheck && 
//               <div className={styles.lulightcheckdiv}>
//                   <FaCheck className={styles.facheck} />
//               </div>
//             }
//         </div>
//         </div>
//       </div>
//       <div className="flex justify-center ml-[300px] mt-[30px]">
//             <div>
//                 <MdOutlineReplay 
//                   className={styles.replay} 
//                   onClick={handleReplayClick}
//                 />
//             </div>
//             <div>
//                 <p 
//                   className={styles.replaytext}
//                   onClick={handleReplayClick}
//                 >
//                   Replay
//                 </p>
//             </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default JoinImages;
