import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaAtom, FaEquals, FaHome } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { GiLockedDoor } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { IoIosClose, IoIosHome } from "react-icons/io";
import { MdDoorbell } from "react-icons/md";
import { SiPhilipshue, SiSonos, SiWemo } from "react-icons/si";
import DoorAnimation from "../animations/door/Door";
import styles from "./SmartApp.module.css";
import SmartAppliance from "../animations/smart-appliances/smart-appliance";
import SmartLightSwitches from "../animations/smart-light-switch/smart-light-switch";
import SmartMusicAnimation from "../animations/music/music";
import SmartSensorAnimation from "../animations/smart-sensor/smart-sensor";
import DoorbellAnimation from "../animations/door-bell/door-bell";
import SmartPlugAnimation from "../animations/smart-plug/smart-plug";
import LiveVideoAnimation from "../animations/live/live";

export default function SmartApp() {
  const [activeDevice, setActiveDevice] = useState(null);
  const [activeArray, setActiveArray] = useState("devices");
  const [smartApp, setSmartApp] = useState(true);
  const [isDoorOpening, setIsDoorOpening] = useState(false);
  const doorRef = useRef(null);
  const [parent] = useAutoAnimate();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [showLargePhone, setShowLargePhone] = useState(false);

  useEffect(() => { 
    // Show close icon after 1 second
    const closeIconTimeout = setTimeout(() => {
      document.startViewTransition(() => {
        setShowCloseIcon(true);
      });
    }, 6000);

    // Show large phone after 2 seconds
    const largePhoneTimeout = setTimeout(() => {
      document.startViewTransition(() => {
        setShowLargePhone(true);
      });
    }, 7000);

    return () => {
      clearTimeout(closeIconTimeout);
      clearTimeout(largePhoneTimeout);
    };
  }, []);

  useEffect(() => {
    const doorInterval = setInterval(() => {
      setIsDoorOpening(false);

      setTimeout(() => {
        setIsDoorOpening(true);
      }, 4000);
    }, 5000);

    return () => {
      clearInterval(doorInterval); 
    };
  }, []);

  const handleDeviceClick = (deviceId, arrayName) => {
    setActiveDevice(deviceId);
    setActiveArray(arrayName);

    if (deviceId === 2 && arrayName === "devices") {
      const timeoutId = setTimeout(() => {
        setIsDoorOpening(false);
        if (doorRef.current) {
          doorRef.current.classList.add("doorOpen");
        }
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  };

  const handleSmartClick = () => {
    setSmartApp(false);
  };

  const handleOutsideClick = () => {
    setSmartApp(true);
    setActiveDevice(null);
    setIsDoorOpening(false);

    if (doorRef.current) {
      doorRef.current.classList.remove("doorOpen");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.startViewTransition(() => {
        handleSmartClick();
      });

      clearTimeout(timeout);
    }, 5000);

    return () => {};
  }, [smartApp]); 

  const devices = [
    {
      id: 1,
      name: "Smart Appliances",
      icon: <FaWifi className={styles.wifi} />,
      image: "/smartappliances.gif",
      text: "HomeCo",
      texts: "Smart Appliances",
      lineClass: styles.line1,
      animation: (
        <SmartAppliance
          className={`${styles.deviceImageVisible} ${isDoorOpening ? "doorOpen" : ""}`}
        />
      ),
    },
    {
      id: 2,
      name: "Door Locks",
      icon: <GiLockedDoor className={styles.door} />,
      image: "/dooropening.gif",
      text: "August",
      texts: "Door Locks",
      lineClass: styles.line2,
      animation: (
        <DoorAnimation
          className={`${styles.deviceImageVisible} ${isDoorOpening ? "doorOpen" : ""}`}
        />
      ),
      deviceName: styles.deviceName,
    },
    {
      id: 3,
      name: "Smart Light Switches",
      icon: <FaHome className={styles.home} />,
      image: "/onoffswitch.gif",
      text: "Insteon",
      texts: "Smart Light Switches",
      lineClass: styles.line3,
      animation: <SmartLightSwitches />,
    },
  ];

  const devices2 = [
    {
      id: 1,
      name2: "Smart Light",
      icon2: <SiPhilipshue className={styles.hue} />,
      image: "/smartlight.gif",
      text: "Hue",
      texts: "Music",
      lineClass: styles.line4,
      animation: <SmartLightSwitches />,
    },
    {
      id: 2,
      name2: "Music",
      icon2: <SiSonos className={styles.sonos} />,
      image: "/smartmusic.gif",
      text: "Sonos",
      texts: "Sensors,",
      lineClass: styles.line5,
      animation: <SmartMusicAnimation />,
    },
    {
      id: 3,
      name2: "Sensors",
      icon2: <SiWemo className={styles.wemo} />,
      image: "/smartsensor.gif",
      text: "Wemo",
      texts: "Doorbell",
      lineClass: styles.line6,
      animation: <SmartSensorAnimation />,
    },
  ];
     
  const devices3 = [
    {
      id: 1,
      name: "Smart Plug",
      icon3: <FaAtom className={styles.atom} />,
      image: "/smartplug.gif",
      text: "SmartThi",
      texts: "Climate Control/Cameras",
      lineClass: styles.line7,
      animation: <SmartPlugAnimation />,
    },
    {
      id: 2,
      name: "Climate Control/Cameras",
      icon3: <IoIosHome className={styles.iohome} />,
      image: "/livevideo.gif",
      text: "Nest",
      texts: "Smart Plug",
      lineClass: styles.line8,
      animation: <LiveVideoAnimation />,
    },
    {
      id: 3,
      name: "Doorbell",
      icon3: <MdDoorbell className={styles.doorbell} />,
      image: "/smartdoorbell.gif",
      text: "Ring",
      texts: "Smart Plug",
      lineClass: styles.line9,
      animation: <DoorbellAnimation />,
    },
  ];

  const allDeviceArrays = [
    { name: "devices", devices: devices },
    { name: "devices2", devices: devices2 },
    { name: "devices3", devices: devices3 },
  ];

  useEffect(() => {
    if (smartApp === false) {
      let currentArrayIndex = 0;
      let currentDeviceIndex = 0;

      const cycleDevices = () => {
        const currentArray = allDeviceArrays[currentArrayIndex];
        const currentDevice = currentArray.devices[currentDeviceIndex];

        setActiveDevice(currentDevice.id);
        setActiveArray(currentArray.name); 

        currentDeviceIndex++;

        if (currentDeviceIndex >= currentArray.devices.length) {
          currentDeviceIndex = 0;
          currentArrayIndex = (currentArrayIndex + 1) % allDeviceArrays.length;
        }

        if (currentArrayIndex === 2 && currentDeviceIndex === 3) {
          setSmartApp(true);
          setShowLargePhone(false);
          setShowCloseIcon(false);
        }
      };

      cycleDevices();

      const deviceCycleInterval = setInterval(cycleDevices, 10000);

      return () => clearInterval(deviceCycleInterval);
    }
  }, [smartApp]);

  return (
    <>
      <div className={styles.container}>
        {/* Small Phone */}
        <Image
          src="/smartapphone.jpg"
          width={50}
          height={20}
          alt="SmartApp Mobile"
          className={styles.smartappimg}
        />
        {smartApp === true ? (
          <div
            onClick={handleSmartClick}
            className="
        absolute 
        bg-[#5C755E] 
        cursor-pointer 
        ml-[43px] 
        mt-[170px]
        w-[80px] 
        h-[80px] 
        rounded-full
        animate-popup
      "
          >
            <p
              className="
          text-[white] 
          text-[12px] 
          mt-[32px] 
          flex 
          justify-center
          tracking-widest
          "
            >
              Smart App
            </p>
          </div>
        ) : ( 
          <div className={styles.smallphonediv}>
            <div className={styles.smallPhone}>
              {devices.map((device) => (
                <div
                  key={device.id}
                  className={`${styles.icon} ${activeDevice === device.id && activeArray === "devices" ? styles.active : ""}`}
                  onClick={() => {
                    if (device.onClick) device?.onClick();
                    handleDeviceClick(device.id, "devices");
                  }}
                >
                  {device.icon}
                  <div className="mt-[1px]">
                    <p className="flex text-[7px] text-[#FFFFFF]">
                      <GoDotFill className={styles.dotfill} />
                      {device.text}
                    </p>
                  </div>
                  <div className={device.lineClass}></div>
                </div>
              ))}
            </div>
            <div className={styles.smallPhone2}>
              {devices2.map((device) => (
                <div
                  key={device.id}
                  className={`${styles.icon2} ${activeDevice === device.id && activeArray === "devices" ? styles.active : ""}`}
                  onClick={() => handleDeviceClick(device.id, "devices2")}
                >
                  {device.icon2}
                  <div className="mt-[1px]">
                    <p className="flex text-[7px] text-[#FFFFFF]">
                      <GoDotFill className={styles.dotfill} />
                      {device.text}
                    </p>
                  </div>
                  <div className={device.lineClass}></div>
                </div>
              ))}
            </div>
           






           
            <div className={styles.smallPhone3}>
              {devices3.map((device) => (
                <div
                  key={device.id}
                  className={`${styles.icon} ${activeDevice === device.id && activeArray === "devices" ? styles.active : ""}`}
                  onClick={() => handleDeviceClick(device.id, "devices3")}
                >
                  {device.icon3}
                  <div className="mt-[1px]">
                    <p className="flex text-[7px] text-[#FFFFFF]">
                      <GoDotFill className={styles.dotfill} />
                      {device.text}
                    </p>
                  </div>
                  <div className={device.lineClass}></div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex">
          <div className="mt-[120px]">
            <div>
              <p className="text-[11px] mb-[4px]">Smart Appliances</p>
            </div>
            <div>
              <p className="text-[11px] mb-[7px]">Door Locks</p>
            </div>
            <div>
              <p className="text-[11px] mb-[4px]">Smart Light Switches</p>
            </div>
            <div>
              <p className="text-[11px] mb-[7px]">Smart Lights</p>
            </div>
            <div>
              <p className="text-[11px] mb-[4px]">Music</p>
            </div>
            <div>
              <p className="text-[11px] mb-[7px]">Sensors</p>
            </div>
            <div>
              <p className="text-[11px] mb-[4px]">Doorbell</p>
            </div>
            <div>
              <p className="text-[11px] mb-[7px]">Climate Control/Cameras</p>
            </div> 
            <div>
              <p className="text-[11px] mb-[0]">Smart Plug</p>
            </div>
          </div>
          <div className="mt-[200px]">
            {activeDevice && showCloseIcon ? (
              <IoIosClose
                onClick={handleOutsideClick}
                size={50}
                className="cursor-pointer"
              />
            ) : (
              <FaEquals size={50} />
            )}
          </div>
        </div>

        {/* Large Phone */}
        {
          <div className="mr-auto">
            <Image
              src="/smartapphone.jpg"
              alt="Smart App Image"
              width={50}
              height={50}
              className={styles.smartappimg2}
            />
            <div className={styles.largePhone}>
              {activeDevice !== null && showLargePhone ? (
                <div className={styles.deviceDisplay}>
                  {(() => {
                    const selectedArray =
                      activeArray === "devices"
                        ? devices
                        : activeArray === "devices2"
                          ? devices2
                          : devices3;
                    const selectedDevice = selectedArray.find(
                      (device) => device.id === activeDevice
                    );

                    return (
                      <>
                        <div className={`${styles.image} z-[5]`}>
                          {/* <img
                  src={selectedDevice.image || selectedDevice.image2}
                  alt={selectedDevice.name || selectedDevice.name2}
                  className={`${styles.deviceImage} ${activeDevice === selectedDevice.id ? styles.deviceImageVisible : ''}`}
                /> */}
                          {selectedDevice?.animation}
                          <h2
                            className={`${styles.deviceName} ${selectedDevice.name === "Door Locks" ? "mt-[200px]" : ""} `}
                          >
                            {selectedDevice.name || selectedDevice.name2}
                          </h2>
                        </div>
                        <div className={`${styles.largefeatures} -z-[3]`}>
                          <div>
                            <div className={styles.largeicon}>
                              <div>
                                <Image
                                  src="/smartappliancemobile.jpg"
                                  alt="SmartAppliance"
                                  width={200}
                                  height={100}
                                  className={styles.appliances}
                                />
                              </div>
                              <div>
                                <Image
                                  src="/smartdoormobile.jpg"
                                  alt="SmartAppliance"
                                  width={200}
                                  height={100}
                                  className={styles.doorss}
                                />
                              </div>
                              <div>
                                <Image
                                  src="/smartlightswitches.jpg"
                                  alt="SmartAppliance"
                                  width={200}
                                  height={100}
                                  className={styles.switches}
                                />
                              </div>
                            </div>
                            <div className={styles.largeicon2}>
                              <div>
                                <Image
                                  src="/smartlightmobile.jpg"
                                  alt="SmartLight"
                                  width={200}
                                  height={100}
                                  className={styles.largelighticon}
                                />
                              </div>
                              <div>
                                <Image
                                  src="/smartmusicmobile.jpg"
                                  alt="SmartMusic"
                                  width={200}
                                  height={100}
                                  className={styles.largemusicicon}
                                />
                              </div>
                              <div>
                                <Image
                                  src="/smartsensormobile.jpg"
                                  alt="Smart Sensor"
                                  width={200}
                                  height={100}
                                  className={styles.switches}
                                />
                              </div>
                            </div>
                            <div className={styles.largeicon3}>
                              <div>
                                <Image
                                  src="/smartplugmobile.jpg"
                                  alt="Smart Plug"
                                  width={200}
                                  height={100}
                                  className={styles.appliances}
                                />
                              </div>
                              <div>
                                <Image
                                  src="/smartcameramobile.jpg"
                                  alt="Smart Door"
                                  width={200}
                                  height={100}
                                  className={styles.doors}
                                />
                              </div>
                              <div>
                                <Image
                                  src="/smartbellmobile.jpg"
                                  alt="Smart bell"
                                  width={200}
                                  height={100}
                                  className={styles.switches}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div>
                  <div className={styles.largeicon}>
                    <div>
                      <Image
                        src="/smartappliancemobile.jpg"
                        alt="SmartAppliance"
                        width={200}
                        height={100}
                        className={styles.appliances}
                      />
                    </div>
                    <div>
                      <Image
                        src="/smartdoormobile.jpg"
                        alt="SmartAppliance"
                        width={200}
                        height={100}
                        className={styles.doorss}
                      />
                    </div>
                    <div>
                      <Image
                        src="/smartlightswitches.jpg"
                        alt="SmartAppliance"
                        width={200}
                        height={100}
                        className={styles.switches}
                      />
                    </div>
                  </div>
                  <div className={styles.largeicon2}>
                    <div>
                      <Image
                        src="/smartlightmobile.jpg"
                        alt="SmartLight"
                        width={200}
                        height={100}
                        className={styles.largelighticon}
                      />
                    </div>
                    <div>
                      <Image
                        src="/smartmusicmobile.jpg"
                        alt="SmartMusic"
                        width={200}
                        height={100}
                        className={styles.largemusicicon}
                      />
                    </div>
                    <div>
                      <Image
                        src="/smartsensormobile.jpg"
                        alt="Smart Sensor"
                        width={200}
                        height={100}
                        className={styles.switches}
                      />
                    </div>
                  </div>
                  <div className={styles.largeicon3}>
                    <div>
                      <Image
                        src="/smartplugmobile.jpg"
                        alt="Smart Plug"
                        width={200}
                        height={100}
                        className={styles.appliances}
                      />
                    </div>
                    <div>
                      <Image
                        src="/smartcameramobile.jpg"
                        alt="Smart Door"
                        width={200}
                        height={100}
                        className={styles.doors}
                      />
                    </div>
                    <div>
                      <Image
                        src="/smartbellmobile.jpg"
                        alt="Smart bell"
                        width={200}
                        height={100}
                        className={styles.switches}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        }
      </div>
    </>
  );
}
