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


const devices = [
  { id: 1, name: 'Door Locks', icon: <FaWifi className={styles.wifi} />, image: '/healthair.svg', text:'HomeCo', texts: 'Smart Appliances', lineClass: styles.line1 },
  { id: 2, name: 'Smart Light Switches', icon: <GiLockedDoor className={styles.door} />, image: '/doormart.svg', text:'August', texts: 'Door Locks', lineClass: styles.line2 },
  { id: 3, name: 'Smart Appliance', icon: <FaHome className={styles.home} />, image: '/insteon.svg', text:'Insteon', texts: 'Smart Light Switches', lineClass: styles.line3 },  
];

const devices2 = [
  { id: 1, name2: 'Smart Light', icon2: <SiPhilipshue className={styles.hue} />, image: '/smartbulb.svg', text:'Hue', texts: 'Music', lineClass: styles.line4 },
  { id: 2, name2: 'Music', icon2: <SiSonos className={styles.sonos} />, image: '/sonosmusic.svg', text:'Sonos', texts: 'Sensors,', lineClass: styles.line5 },
  { id: 3, name2: 'Sensors', icon2: <SiWemo className={styles.wemo} />, image: '/mylorawan.svg', text:'Wemo', texts: 'Doorbell', lineClass: styles.line6 }, 
];

const devices3 = [
  { id: 1, name: 'Smart Plug', icon3: <FaAtom className={styles.atom} />, image: '/sonosmusic.svg', text:'SmartThi', texts: 'Climate Control/Cameras', lineClass: styles.line7 },
  { id: 2, name: 'Climate Control/Cameras', icon3: <IoIosHome className={styles.iohome} />, image: '/smartbulb.svg', text:'Nest', texts: 'Smart Plug', lineClass: styles.line8 },
  { id: 3, name: 'Doorbell', icon3: <MdDoorbell className={styles.doorbell} />, image: '/insteon.svg', text:'Ring', texts: 'Smart Plug', lineClass: styles.line9 }, 
];

export default function SmartApp() {
  const [activeDevice, setActiveDevice] = useState(null);
  const [activeArray, setActiveArray] = useState('devices');
  const [parent] = useAutoAnimate();

  const handleDeviceClick = (deviceId, arrayName) => {
    setActiveDevice(deviceId);
    setActiveArray(arrayName);
    // if (deviceId === 1 && arrayName === 'devices') {
    //   setTimeout(() => setIsDoorOpening(false), 6000); 
    // }
  };

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
        onClick={() => handleDeviceClick(device.id, 'devices')}
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
        onClick={() => handleDeviceClick(device.id, 'devices')}
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
      {activeDevice ? <IoIosClose onClick={() => setActiveDevice(null)} className='text-[31px] cursor-pointer' /> : <FaEquals className='text-[31px]' />}

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
                <img
                  src={selectedDevice.image || selectedDevice.image2}
                  alt={selectedDevice.name || selectedDevice.name2}
                  className={`${styles.deviceImage} ${activeDevice === selectedDevice.id ? styles.deviceImageVisible : ''}`}
                />
                <h2 className={styles.deviceName}>
                  {selectedDevice.name || selectedDevice.name2}
                </h2>
              </>
            );
          })()}
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
            <div className='flex justify-center gap-8 mt-[10px]'>
              <div className='ml-[24px] mt-[10px]'>
                <p>69m&sup2;</p>
                <p className='text-[8px] text-[grey] mt-[-15px] tracking-wide'>First flor</p>
              </div>
              <div className='bg-customWhite cursor-pointer rounded-[5px] py-2 w-[40px] h-[25px]'>
                <h1 className='font-bold text-[white] mt-[-4px] text-[14px] flex justify-center'>Auto</h1>
              </div>
              <div className='mt-[10px]'>
                <p>46m</p>
                <p className='text-[8px] text-[grey] mt-[-15px] tracking-wide'>Time</p>
              </div>
            </div>
            <div className='flex justify-around mt-[5px] ml-[12px]'>
              <div className='mt-[5px]'>
                <FaDroplet className='text-[17px] cursor-pointer text-customBlue' />
              </div>
              <div className='mt-[-5px]'>
                <IoFingerPrint className='text-[17px] cursor-pointer text-yellow-500' />
              </div>
              <div className='mt-[5px]'>
                <FaRegLightbulb className='text-[17px] cursor-pointer' />
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
