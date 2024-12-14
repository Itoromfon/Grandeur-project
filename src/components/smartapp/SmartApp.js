import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
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
import { FaDroplet } from "react-icons/fa6";
import { IoFingerPrint } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import DoorAnimation from '../door/Door';


const devices = [
  { id: 1, name: 'Smart Appliances', icon: <FaWifi className={styles.wifi} />, image: '/smartappliances.gif', text:'HomeCo', texts: 'Smart Appliances', lineClass: styles.line1 },
  { id: 2, name: 'Door Locks', icon: <GiLockedDoor className={styles.door} />, image: '/dooropening.gif', text:'August', texts: 'Door Locks', lineClass: styles.line2 },
  { id: 3, name: 'Smart Light Switches', icon: <FaHome className={styles.home} />, image: '/onoffswitch.gif', text:'Insteon', texts: 'Smart Light Switches', lineClass: styles.line3 },  
];

const devices2 = [
  { id: 1, name2: 'Smart Light', icon2: <SiPhilipshue className={styles.hue} />, image: '/smartlight.gif', text:'Hue', texts: 'Music', lineClass: styles.line4 },
  { id: 2, name2: 'Music', icon2: <SiSonos className={styles.sonos} />, image: '/smartmusic.gif', text:'Sonos', texts: 'Sensors,', lineClass: styles.line5 },
  { id: 3, name2: 'Sensors', icon2: <SiWemo className={styles.wemo} />, image: '/smartsensor.gif', text:'Wemo', texts: 'Doorbell', lineClass: styles.line6 }, 
];

const devices3 = [
  { id: 1, name: 'Smart Plug', icon3: <FaAtom className={styles.atom} />, image: '/smartplug.gif', text:'SmartThi', texts: 'Climate Control/Cameras', lineClass: styles.line7 },
  { id: 2, name: 'Climate Control/Cameras', icon3: <IoIosHome className={styles.iohome} />, image: '/livevideo.gif', text:'Nest', texts: 'Smart Plug', lineClass: styles.line8 },
  { id: 3, name: 'Doorbell', icon3: <MdDoorbell className={styles.doorbell} />, image: '/smartdoorbell.gif', text:'Ring', texts: 'Smart Plug', lineClass: styles.line9 }, 
];

export default function SmartApp() {
  const [activeDevice, setActiveDevice] = useState(null);
  const [activeArray, setActiveArray] = useState('devices');
  const [smartApp, setSmartApp] = useState(true);
  const [parent] = useAutoAnimate();

  const handleDeviceClick = (deviceId, arrayName) => {
    setActiveDevice(deviceId);
    setActiveArray(arrayName);
    // if (deviceId === 1 && arrayName === 'devices') {
    //   setTimeout(() => setIsDoorOpening(false), 6000); 
    // }
  };

  const handleSmartClick = () => {
    setSmartApp(false);
  }

  const handleOutsideClick = () => {
    setSmartApp(true);
    setActiveDevice(null)
  }

  return (
<>
    <div className={styles.container}>
      {/* Small Phone */}
      <Image 
        src='/smartapphone.jpg' 
        width={50} 
        height={20}
        alt='SmartApp Mobile'
        className={styles.smartappimg}
    />
    {smartApp === true ? 
    <div 
      onClick={handleSmartClick}
      className='
        absolute 
        bg-[#5C755E] 
        cursor-pointer 
        ml-[43px] 
        mt-[170px]
        w-[80px] 
        h-[80px] 
        rounded-full
        animate-popup
      '>
        <p className='
          text-[white] 
          text-[12px] 
          mt-[32px] 
          flex 
          justify-center
          tracking-widest
          '>
          Smart App
        </p>
      </div>
      :
    <div className={styles.smallphonediv}>
    <div className={styles.smallPhone}>
      {devices.map((device) => (
      <div
        key={device.id}
        className={`${styles.icon} ${activeDevice === device.id && activeArray === 'devices' ? styles.active : ''}`}
        onClick={() => handleDeviceClick(device.id, 'devices')}
      >
      {device.icon}
    <div className='mt-[1px]'>
      <p className='flex text-[7px] text-[#FFFFFF]'><GoDotFill className={styles.dotfill} />{device.text}</p>
    </div>
    <div className={device.lineClass}></div>
    </div>
    ))}
    </div>
    <div className={styles.smallPhone2}>
      {devices2.map((device) => (
      <div
        key={device.id}
        className={`${styles.icon2} ${activeDevice === device.id && activeArray === 'devices' ? styles.active : ''}`}
        onClick={() => handleDeviceClick(device.id, 'devices2')}
      >
      {device.icon2}
    <div className='mt-[1px]'>
      <p className='flex text-[7px] text-[#FFFFFF]'><GoDotFill className={styles.dotfill} />{device.text}</p>
    </div>
    <div className={device.lineClass}></div>
    </div>
    ))}
    </div>
    {/* <div className={styles.smallPhone2}>
      <>
      {devices2.map((device) => (
      <div
      key={device.id}
      className={`${styles.icon2} ${activeDevice === device.id && activeArray === 'devices2' ? styles.active : ''}`}
      onClick={() => handleDeviceClick(device.id, 'devices2')}
    >
      {device.icon2}
    <div className='mt-[1px]'>
      <p className='flex text-[7px] text-[#FFFFFF]'><GoDotFill className={styles.dotfill} />{device.text}</p>
    </div>
    </div>
    ))}
    </>
    <>
    {devices2.map((item, index) => (
      <div key={index}>
        <div className={item.lineClass2}></div>
      </div>
    ))}
    </>
    </div> */}
    <div className={styles.smallPhone3}>
      {devices3.map((device) => (
      <div
        key={device.id}
        className={`${styles.icon} ${activeDevice === device.id && activeArray === 'devices' ? styles.active : ''}`}
        onClick={() => handleDeviceClick(device.id, 'devices3')}
      >
      {device.icon3}
    <div className='mt-[1px]'>
      <p className='flex text-[7px] text-[#FFFFFF]'><GoDotFill className={styles.dotfill} />{device.text}</p>
    </div>
    <div className={device.lineClass}></div>
    </div>
    ))}
    </div>
    </div>
  }
    <div className='flex'>
    <div className='mt-[120px]'>
      <div><p className='text-[11px] mb-[4px]'>Smart Appliances</p></div>
      <div><p className='text-[11px] mb-[7px]'>Door Locks</p></div>
      <div><p className='text-[11px] mb-[4px]'>Smart Light Switches</p></div>
      <div><p className='text-[11px] mb-[7px]'>Smart Lights</p></div>
      <div><p className='text-[11px] mb-[4px]'>Music</p></div>
      <div><p className='text-[11px] mb-[7px]'>Sensors</p></div>
      <div><p className='text-[11px] mb-[4px]'>Doorbell</p></div>
      <div><p className='text-[11px] mb-[7px]'>Climate Control/Cameras</p></div>
      <div><p className='text-[11px] mb-[0]'>Smart Plug</p></div>
    </div>
    <div className='mt-[200px]'>
      {activeDevice ? <IoIosClose onClick={handleOutsideClick} className='text-[31px] cursor-pointer' /> : <FaEquals className='text-[31px]' />}

    </div>
    </div>









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
          {(() => {
            const selectedArray = activeArray === 'devices' ? devices :
                                  activeArray === 'devices2' ? devices2 : devices3;
            const selectedDevice = selectedArray.find((device) => device.id === activeDevice);

            return (
              <>
              <div className={styles.image}>
                <img
                  src={selectedDevice.image || selectedDevice.image2}
                  alt={selectedDevice.name || selectedDevice.name2}
                  className={`${styles.deviceImage} ${activeDevice === selectedDevice.id ? styles.deviceImageVisible : ''}`}
                />
            {/* <DoorAnimation className={styles.deviceImageVisible} /> */}
                {/* <img
                  src={selectedDevice.image || selectedDevice.image2}
                  alt={selectedDevice.name || selectedDevice.name2}
                  className={`${styles.deviceImage} ${activeDevice === selectedDevice.id ? styles.deviceImageVisible : ''}`}
                /> */}
            <DoorAnimation className={styles.deviceImageVisible} />

                <h2 className={styles.deviceName}>
                  {selectedDevice.name || selectedDevice.name2}
                </h2>
              </div>
                <div className={styles.largefeatures}>
                <div>
          <div className={styles.largeicon}>
            <div>
              <Image 
                src='/smartappliancemobile.jpg'
                alt='SmartAppliance'
                width={200}
                height={100}
                className={styles.appliances}
              />
            </div>
            <div>
               <Image 
                  src='/smartdoormobile.jpg'
                  alt='SmartAppliance'
                  width={200}
                  height={100}
                  className={styles.doorss}
                />
            </div>
            <div>
                <Image 
                  src='/smartlightswitches.jpg'
                  alt='SmartAppliance'
                  width={200}
                  height={100}
                  className={styles.switches}
                />
            </div>
          </div>
          <div className={styles.largeicon2}>
            <div>
              <Image 
                src='/smartlightmobile.jpg'
                alt='SmartLight'
                width={200}
                height={100}
                className={styles.largelighticon}
              />
            </div>
            <div>
               <Image 
                  src='/smartmusicmobile.jpg'
                  alt='SmartMusic'
                  width={200}
                  height={100}
                  className={styles.largemusicicon}
                />
            </div>
            <div>
                <Image 
                  src='/smartsensormobile.jpg'
                  alt='Smart Sensor'
                  width={200}
                  height={100}
                  className={styles.switches}
                />
            </div>
          </div>
          <div className={styles.largeicon3}>
            <div>
              <Image 
                src='/smartplugmobile.jpg'
                alt='Smart Plug'
                width={200}
                height={100}
                className={styles.appliances}
              />
            </div>
            <div>
               <Image 
                  src='/smartcameramobile.jpg'
                  alt='Smart Door'
                  width={200}
                  height={100}
                  className={styles.doors}
                />
            </div>
            <div>
                <Image 
                  src='/smartbellmobile.jpg'
                  alt='Smart bell'
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
                src='/smartappliancemobile.jpg'
                alt='SmartAppliance'
                width={200}
                height={100}
                className={styles.appliances}
              />
            </div>
            <div>
               <Image 
                  src='/smartdoormobile.jpg'
                  alt='SmartAppliance'
                  width={200}
                  height={100}
                  className={styles.doorss}
                />
            </div>
            <div>
                <Image 
                  src='/smartlightswitches.jpg'
                  alt='SmartAppliance'
                  width={200}
                  height={100}
                  className={styles.switches}
                />
            </div>
          </div>
          <div className={styles.largeicon2}>
            <div>
              <Image 
                src='/smartlightmobile.jpg'
                alt='SmartLight'
                width={200}
                height={100}
                className={styles.largelighticon}
              />
            </div>
            <div>
               <Image 
                  src='/smartmusicmobile.jpg'
                  alt='SmartMusic'
                  width={200}
                  height={100}
                  className={styles.largemusicicon}
                />
            </div>
            <div>
                <Image 
                  src='/smartsensormobile.jpg'
                  alt='Smart Sensor'
                  width={200}
                  height={100}
                  className={styles.switches}
                />
            </div>
          </div>
          <div className={styles.largeicon3}>
            <div>
              <Image 
                src='/smartplugmobile.jpg'
                alt='Smart Plug'
                width={200}
                height={100}
                className={styles.appliances}
              />
            </div>
            <div>
               <Image 
                  src='/smartcameramobile.jpg'
                  alt='Smart Door'
                  width={200}
                  height={100}
                  className={styles.doors}
                />
            </div>
            <div>
                <Image 
                  src='/smartbellmobile.jpg'
                  alt='Smart bell'
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
    </div>
    </>
  );
}
