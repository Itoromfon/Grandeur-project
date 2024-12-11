import { useState } from 'react';
import styles from './SmartApp.module.css';
import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { FaWifi } from 'react-icons/fa6';
import { GiLockedDoor } from "react-icons/gi";
import { SiPhilipshue } from "react-icons/si";
import { SiSonos } from "react-icons/si";
import { SiWemo } from "react-icons/si";
import { FaAtom } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdDoorbell } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoIosTennisball } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb";
import { LiaTimesSolid } from "react-icons/lia";
import { FaLightbulb } from "react-icons/fa";
import { AiFillSun } from "react-icons/ai";

const devices = [
  { id: 1, name: 'Door Locks', icon: <FaWifi className={styles.wifi} />, image: '/images/door-lock.png', text:'HomeCo' },
  { id: 2, name: 'Smart Light Switches', icon: <GiLockedDoor className={styles.door} />, image: '/images/light-switch.png', text:'August' },
  { id: 3, name: 'Smart Appliance', icon: <FaHome className={styles.home} />, image: '/images/appliance.png', text:'Insteon' },  
];

const devices2 = [
  { id: 1, name: 'Door Locks', icon: <SiPhilipshue className={styles.hue} />, image: '/images/door-lock.png', text:'Hue' },
  { id: 2, name: 'Smart Light Switches', icon: <SiSonos className={styles.sonos} />, image: '/images/light-switch.png', text:'Sonos' },
  { id: 3, name: 'Smart Appliance', icon: <SiWemo className={styles.wemo} />, image: '/images/appliance.png', text:'Wemo' }, 
];

const devices3 = [
  { id: 1, name: 'Door Locks', icon: <FaAtom className={styles.atom} />, image: '/images/door-lock.png', text:'SmartThi' },
  { id: 2, name: 'Smart Light Switches', icon: <IoIosHome className={styles.iohome} />, image: '/images/light-switch.png', text:'Nest' },
  { id: 3, name: 'Smart Appliance', icon: <MdDoorbell className={styles.doorbell} />, image: '/images/appliance.png', text:'Ring' },
  
];

export default function SmartApp() {
  const [activeDevice, setActiveDevice] = useState(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  const handleDeviceClick = (deviceId) => {
    setActiveDevice(deviceId);
    if (deviceId === 1) {
      setPlayAnimation(true); // Trigger animation for the first button
      setTimeout(() => setPlayAnimation(false), 2000); // Reset animation after it ends
    }
  };

  return (
    <div className={styles.container}>
      {/* Small Phone */}
      <Image 
        src='/smartapphone.jpg' 
        width={50} 
        height={20}
        alt='SmartApp Mobile'
        className={styles.smartappimg}
    />
    <div className={styles.smallphonediv}>
    <div className={styles.smallPhone}>
      {devices.map((device) => (
      <div
      key={device.id}
      className={`${styles.icon} ${activeDevice === device.id ? styles.active : ''}`}
      onClick={() => handleDeviceClick(device.id)}
    >
      {device.icon}
    <div className='mt-[1px]'>
      <p className='flex text-[7px] text-[#FFFFFF]'><GoDotFill className={styles.dotfill} />{device.text}</p>
    </div>
    </div>
    ))}
    </div>
    <div className={styles.smallPhone2}>
        {devices2.map((device) => (
      <div
      key={device.id}
      className={`${styles.icon2} ${activeDevice === device.id ? styles.active : ''}`}
      onClick={() => setActiveDevice(device.id)}
    >
      {device.icon}
      <div className='mt-[1px]'>
      <p className='flex text-[7px] text-[#FFFFFF]'><GoDotFill className={styles.dotfill} />{device.text}</p>
      </div>
    </div>
    ))}
    </div>
    <div className={styles.smallPhone3}>
        {devices3.map((device) => (
      <div
      key={device.id}
      className={`${styles.icon3} ${activeDevice === device.id ? styles.active : ''}`}
      onClick={() => setActiveDevice(device.id)}
    >
      {device.icon}
      <div className='mt-[1px]'>
        <p className='flex text-[7px] text-[#FFFFFF]'><GoDotFill className={styles.dotfill} />{device.text}</p>
      </div>
    </div>
    ))}
    </div>
    </div>
    {/* <div>
        {devices.map((item) => {
            <div
                key={item.id}
                className={`${styles.icon} ${activeDevice === item.id ? styles.active : ''}`}
                onClick={() => setActiveDevice(item.id)}
            >
                {item.icon}
            </div>
        })}
    </div> */}


      {/* Large Phone */}
      <div className='mr-auto'>
      <Image 
            src='/smartapphone.jpg' 
            alt='Smart App Image'
            width={50}
            height={50}
            className={styles.smartappimg2}
      />
      <div className={styles.largePhone}>
        {activeDevice !== null ? (
          <div className={styles.deviceDisplay}>
            <img
              src={devices.find((device) => device.id === activeDevice).image}
              alt={devices.find((device) => device.id === activeDevice).name}
              className={styles.deviceImage}
            />
            <h2 className={styles.deviceName}>
              {devices.find((device) => device.id === activeDevice).name}
            </h2>
          </div>
        ) : (
          // <p className={styles.placeholder}>Select a device to view details</p>
          <div>
            <div className='flex gap-11 mt-[-130px] ml-[26px]'>
              <div>
              <IoMdArrowRoundBack />
              </div>
              <div>
                <p className='w-[75px] text-[12px] mt-[2px] font-bold'>Living Room</p>
              </div>
              <div>
                <IoIosTennisball className='text-[orange]' />
              </div>
            </div>
            <div className='flex'>
              <div className='bg-customBlue ml-[27px] h-[70px] w-[60px] py-[2px] cursor-pointer rounded-[15px]'>
                <TbAirConditioning className='text-[35px] mx-auto mt-[3px] text-[#FFFFFF]  bg-customBlue p-[5px] rounded-full border-2 border-white-500' />
                <div className='mx-auto'>
                <h1 className='text-[10px] text-center mt-[3px] text-[white] font-bold'>AC</h1>
                <p className='flex mt-[-5px] text-[white] ml-[7px] text-[9px]'><LiaTimesSolid /> 4 device</p>
                </div>
              </div>
              <div className='bg-customWhite ml-[6px] h-[70px] w-[60px] py-[2px] cursor-pointer rounded-[15px]'>
                <FaLightbulb className='text-[35px] mx-auto mt-[3px] text-yellow-500  bg-[#FFFFFF] p-[5px] rounded-full border-2 border-yellow-500' />
                <div className='mx-auto'>
                <h1 className='text-[10px] text-center mt-[3px] text-[black] font-bold'>Light</h1>
                <p className='flex mt-[-5px] text-[grey] ml-[7px] text-[9px]'><LiaTimesSolid /> 2 device</p>
                </div>
              </div>
              <div className='bg-customWhite ml-[6px] h-[70px] w-[60px] py-[2px] cursor-pointer rounded-[15px]'>
                <TbAirConditioning className='text-[35px] mx-auto mt-[3px] text-purple-500 bg-white p-[5px] rounded-full border-2 border-purple-500' />
                <div className='mx-auto'>
                <h1 className='text-[10px] text-center mt-[3px] text-[black] font-bold'>Climate</h1>
                <p className='flex mt-[-5px] text-[grey] ml-[7px] text-[9px]'><LiaTimesSolid /> 3 device</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center ml-[25px] mt-[10px]'>
              <p className='text-[10px]'>20&deg;</p>
            </div>
            <div className='flex justify-center ml-[20px]'>
              <div className='mt-[58px]'>
                <p className='text-[10px]'>10&deg;</p>
              </div>
              <div className='cursor-pointer'>
                <p className='text-[10px]'>
                  {/* 20&deg; */}
                  <AiFillSun className='text-[160px] mt-[-16px] text-customSun' />
                  <p className='mt-[-102px] font-bold text-[40px] flex justify-center'>26</p>
                </p>
              </div>
              <div className='mt-[58px]'>
                <p className='text-[10px]'>30&deg;</p>
              </div>
            </div>
            <div className='flex justify-around gap-24'>
              <div className='ml-[20px]'>
                <p>69m&sup2;</p>
              </div>
              <div>
                <p>69m&sup2;</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
