import { useState } from 'react';
import styles from './Tab.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import Link from 'next/link';
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
// import Modal from '../modal/Modal';
import Slider from 'react-slick';
import TabCarousel from '../tabcarousel/TabCarousel';
import { Button, Modal } from 'antd';

const Tab = () => {
    // State to hold the active tab index
    const [activeTab, setActiveTab] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openModalId, setOpenModalId] = useState(null);
    
    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const openModal = (content) => {
        setModalContent(content);
      };
    
      const showModal = (id) => {
        setOpenModalId(id);
      };
      
      const handleCancel = () => {
        setOpenModalId(null);
      };

    const tabContent1 = [
        { 
            title: "Basic", 
            content: <div className={styles.text}>
                <h1>$523.00</h1>
            </div>,
        },
        { 
            title: "Advance",
            content: <div className={styles.text}>
                <h1>$1,081.00</h1>
            </div>,
        },
        { 
            title: "Premium", 
            content: <div className={styles.text}>
                <h1>$2,362.00</h1>
            </div>
        },
    ];

    // Tab content data
    const tabContent2 = [
    { 
    title: "Basic", 
    content: <div className={styles.text2}>
    <div>
        <Link 
            href='#' onClick={toggleDropdown}>
            <p className={styles.fiveitem}>5 items remaining</p>
        </Link>
    </div>
    <div className={styles.style}>
      <Link href="#" onClick={toggleDropdown}>
        <IoMdArrowDropdown className={styles.dropdown} />
      </Link>
      {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("sos")}>
       <p className={styles.firstdropdown}>SOS</p>
      </Button>
      <Modal
          title="SOS Modal"
          open={openModalId === "sos"}
          onCancel={handleCancel}
          footer={null}// Remove OK and Cancel buttons
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>SOS</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='/SOS.png' 
                alt='SOS image'
                className={styles.sosimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        The Smart FOB Button is a compact, portable device designed for quick and easy access to a variety of smart home functions.With a single press, it allows you to control multiple devices, trigger automation routines, and send alerts, all from the palm of your hand and can be used by elderly people.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
                One-Touch Control: Instantly control smart home devices such as 
                lights, locks, and alarms with a single button press.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Customizable Actions: Program multiple actions or routines to a single button, such as turning off all lights or locking all doors.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Emergency Alerts: Send emergency notifications to designated contacts with a long press and can be used for the Anti Fall system.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Portable Design: Small and lightweight, easy to carry on a keychain or in a pocket.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Long Battery Life: Designed to last for months on a single battery, ensuring reliability.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Durable Construction: Built to withstand daily wear and tear.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Voice Assistant Integration: Compatible with major voice assistants (Smart by MainLogix) for added convenience.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Automation Integration: Trigger complex automation routines, like setting the perfect movie night ambiance with a single press.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Ideal for elderly individuals who may need quick access to emergency help.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Simplifies daily routines by enabling one-touch control of multiple devices.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Enhances home security by allowing instant activation of security systems.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p className={styles.featurestext}>
            Convenient for anyone needing quick and easy control of their smart home devices on the go.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
      )}
      {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
       <p className={styles.firstdropdown}>Smoke Sensor</p>
      </Button>
      <Modal
        title="Smoke Sensor Modal"
        open={openModalId === "smokeSensor"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>SMOKE SENSOR</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='smokesensor.webp' 
                alt='smoke sensor image'
                className={styles.sosimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
       A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}
    {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("gasSensor")}>
       <p className={styles.firstdropdown}>Gas Sensor</p>
      </Button>
      <Modal
        title="Gas Sensor Modal"
        open={openModalId === "gasSensor"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>GAS SENSOR</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='gassensor.png' 
                alt=' imgas sensorage'
                className={styles.sosimg}
            />
        </div>
        <div className={styles.featurediv}>
            <p  className={styles.featurestext}>
            Enhanced Safety for Your Home
            </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Gas Detection: Detects the presence of hazardous gases such as natural gas (methane), propane, butane, and carbon monoxide (CO). Provides real-time monitoring to ensure early detection of leaks.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Alarm Notifications: Sounds an audible alarm and sends instant notifications to your smartphone upon detecting gas leaks. Alerts you to take immediate action to prevent potential hazards.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Versatile Placement: Suitable for installation in kitchens, utility rooms, basements, and other areas prone to gas leaks. Compact design allows for discreet placement.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Continuous Monitoring: Monitors gas levels continuously, providing ongoing protection day and night. Ensures round-the-clock safety for your household.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
              Smart Home Integration: Integrates with popular smart home platforms such as Alexa, Smart by MainLogix, Google Assistant, and others. Enables voice commands and automation with other smart devices.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Remote Access and Control: Check gas levels and receive alerts remotely via a dedicated mobile app. Take action from anywhere to ensure the safety of your home.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
           Easy Installation: Simple DIY installation with included mounting hardware and instructions. No professional wiring required, operates on battery or mains power.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Low Maintenance: Long lifespan with minimal maintenance required. Low battery notifications ensure continuous operation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Emergency Response Capability: Provides critical information to emergency services in case of a gas leak. Enhances emergency response times for quick mitigation.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Safety Assurance: Early detection of gas leaks to prevent potential hazards and ensure the safety of your family.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Convenience: Receive real-time alerts on your smartphone for prompt action, even when you`re away from home.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration: Seamlessly integrates into your smart home ecosystem for enhanced automation and control.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p className={styles.featurestext}>
            Peace of Mind: Continuous monitoring provides peace of mind knowing your home is protected around the clock.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Kitchen Safety: Monitor gas levels in the kitchen to prevent accidents during cooking or appliance use.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Utility Room Protection: Detect leaks from gas-powered appliances like water heaters or furnaces in utility areas.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Basement Security: Ensure safe gas levels in basement areas prone to gas accumulation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p className={styles.featurestext}>
            Vacation Homes: Monitor gas levels remotely in vacation homes to prevent issues during periods of absence.
            </p>
            </div>
        </div>
      </Modal>
    </>
    )}
    {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("smartVoice")}>
       <p className={styles.firstdropdown}>Mainlogix Smart Voice Control</p>
      </Button>
      <Modal
        title="Smart Voice Modal"
        open={openModalId === "smartVoice"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Mainlogix Smart Voice Control</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='smartvoice.png' 
                alt='smoke sensor image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}
    {isOpen && (
      <>
       <Button  className={styles.button} onClick={() => showModal("smartSiren")}>
       <p className={styles.firstdropdown}>Smart Siren</p>
      </Button>
      <Modal
        title="Smart Siren"
        open={openModalId === "smartSiren"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Mainlogix Smart Voice Control</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='smartsiren.jfif' 
                alt='smoke sensor image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}
    </div>
    </div>,
        },
        { 
            title: "Advance",
            content: <div className={styles.text2}>
            <div>
                <Link 
                    href='#' onClick={toggleDropdown}>
                    <p className={styles.tenitems}>10 items remaining</p>
                </Link>
            </div>
            <div>
              <Link href="#" onClick={toggleDropdown}>
                <IoMdArrowDropdown className={styles.dropdown} />
              </Link>
              <div className={styles.style}>
      {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("sos")}>
       <p className={styles.firstdropdown}>SOS</p>
      </Button>
      <Modal
          title="SOS Modal"
          open={openModalId === "sos"}
          onCancel={handleCancel}
          footer={null}// Remove OK and Cancel buttons
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>SOS</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='/SOS.png' 
                alt='SOS image'
                className={styles.sosimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        The Smart FOB Button is a compact, portable device designed for quick and easy access to a variety of smart home functions.With a single press, it allows you to control multiple devices, trigger automation routines, and send alerts, all from the palm of your hand and can be used by elderly people.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
                One-Touch Control: Instantly control smart home devices such as 
                lights, locks, and alarms with a single button press.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Customizable Actions: Program multiple actions or routines to a single button, such as turning off all lights or locking all doors.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Emergency Alerts: Send emergency notifications to designated contacts with a long press and can be used for the Anti Fall system.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Portable Design: Small and lightweight, easy to carry on a keychain or in a pocket.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Long Battery Life: Designed to last for months on a single battery, ensuring reliability.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Durable Construction: Built to withstand daily wear and tear.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Voice Assistant Integration: Compatible with major voice assistants (Smart by MainLogix) for added convenience.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Automation Integration: Trigger complex automation routines, like setting the perfect movie night ambiance with a single press.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Ideal for elderly individuals who may need quick access to emergency help.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Simplifies daily routines by enabling one-touch control of multiple devices.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Enhances home security by allowing instant activation of security systems.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p className={styles.featurestext}>
            Convenient for anyone needing quick and easy control of their smart home devices on the go.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
      )}
      {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
       <p className={styles.firstdropdown}>Smoke Sensor</p>
      </Button>
      <Modal
        title="Smoke Sensor Modal"
        open={openModalId === "smokeSensor"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>SMOKE SENSOR</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='smokesensor.webp' 
                alt='smoke sensor image'
                className={styles.sosimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
       A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}
    {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("gasSensor")}>
       <p className={styles.firstdropdown}>Gas Sensor</p>
      </Button>
      <Modal
        title="Gas Sensor Modal"
        open={openModalId === "gasSensor"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>GAS SENSOR</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='gassensor.png' 
                alt=' imgas sensorage'
                className={styles.sosimg}
            />
        </div>
        <div className={styles.featurediv}>
            <p  className={styles.featurestext}>
            Enhanced Safety for Your Home
            </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Gas Detection: Detects the presence of hazardous gases such as natural gas (methane), propane, butane, and carbon monoxide (CO). Provides real-time monitoring to ensure early detection of leaks.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Alarm Notifications: Sounds an audible alarm and sends instant notifications to your smartphone upon detecting gas leaks. Alerts you to take immediate action to prevent potential hazards.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Versatile Placement: Suitable for installation in kitchens, utility rooms, basements, and other areas prone to gas leaks. Compact design allows for discreet placement.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Continuous Monitoring: Monitors gas levels continuously, providing ongoing protection day and night. Ensures round-the-clock safety for your household.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
              Smart Home Integration: Integrates with popular smart home platforms such as Alexa, Smart by MainLogix, Google Assistant, and others. Enables voice commands and automation with other smart devices.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Remote Access and Control: Check gas levels and receive alerts remotely via a dedicated mobile app. Take action from anywhere to ensure the safety of your home.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
           Easy Installation: Simple DIY installation with included mounting hardware and instructions. No professional wiring required, operates on battery or mains power.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Low Maintenance: Long lifespan with minimal maintenance required. Low battery notifications ensure continuous operation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Emergency Response Capability: Provides critical information to emergency services in case of a gas leak. Enhances emergency response times for quick mitigation.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Safety Assurance: Early detection of gas leaks to prevent potential hazards and ensure the safety of your family.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Convenience: Receive real-time alerts on your smartphone for prompt action, even when you`re away from home.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration: Seamlessly integrates into your smart home ecosystem for enhanced automation and control.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p className={styles.featurestext}>
            Peace of Mind: Continuous monitoring provides peace of mind knowing your home is protected around the clock.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Kitchen Safety: Monitor gas levels in the kitchen to prevent accidents during cooking or appliance use.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Utility Room Protection: Detect leaks from gas-powered appliances like water heaters or furnaces in utility areas.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Basement Security: Ensure safe gas levels in basement areas prone to gas accumulation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p className={styles.featurestext}>
            Vacation Homes: Monitor gas levels remotely in vacation homes to prevent issues during periods of absence.
            </p>
            </div>
        </div>
      </Modal>
    </>
    )}

{isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("heatDetector")}>
       <p className={styles.firstdropdown}>Heat Detector</p>
      </Button>
      <Modal
        title="Smart Voice Modal"
        open={openModalId === "heatDetector"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Heat Detector</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='heatdetect.png' 
                alt='Heat Detector image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Temperature Sensing: Monitors ambient temperature and detects rapid increases.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compatibility: Integrates with smart home systems for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Ensures continuous operation during power outages.
            Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering and ensure reliable operation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Detection: Provides early warning of fire or overheating conditions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration: Enables integration into smart home systems for remote monitoring and management.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical for detecting overheating in industrial machinery and equipment.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}
    {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("watersSensor")}>
       <p className={styles.firstdropdown}>Water Sensor</p>
      </Button>
      <Modal
        title="Water Sensor"
        open={openModalId === "watersSensor"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Water Sensor</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='waterssensor.jfif' 
                alt='Heat Detector image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Temperature Sensing: Monitors ambient temperature and detects rapid increases.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compatibility: Integrates with smart home systems for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Ensures continuous operation during power outages.
            Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering and ensure reliable operation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Detection: Provides early warning of fire or overheating conditions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration: Enables integration into smart home systems for remote monitoring and management.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical for detecting overheating in industrial machinery and equipment.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}

{isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("smartLock")}>
       <p className={styles.firstdropdown}>Smart Lock</p>
      </Button>
      <Modal
        title="Smart Lock"
        open={openModalId === "smartLock"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Smart Lock</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='lock.png' 
                alt='Heat Detector image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Temperature Sensing: Monitors ambient temperature and detects rapid increases.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compatibility: Integrates with smart home systems for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Ensures continuous operation during power outages.
            Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering and ensure reliable operation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Detection: Provides early warning of fire or overheating conditions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration: Enables integration into smart home systems for remote monitoring and management.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical for detecting overheating in industrial machinery and equipment.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}


{isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("curtainControl")}>
       <p className={styles.firstdropdown}>Curtain and Blind Control</p>
      </Button>
      <Modal
        title="Curtain and Blind Control"
        open={openModalId === "curtainControl"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Curtain and Blind Control</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='curtaincontrol.png' 
                alt='Heat Detector image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Temperature Sensing: Monitors ambient temperature and detects rapid increases.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compatibility: Integrates with smart home systems for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Ensures continuous operation during power outages.
            Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering and ensure reliable operation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Detection: Provides early warning of fire or overheating conditions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration: Enables integration into smart home systems for remote monitoring and management.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical for detecting overheating in industrial machinery and equipment.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}


{isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("motionSensor")}>
       <p className={styles.firstdropdown}>Motion Sensor</p>
      </Button>
      <Modal
        title="Motion Sensor"
        open={openModalId === "motionSensor"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Motion Sensor</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='motionssensor.png' 
                alt='Heat Detector image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Temperature Sensing: Monitors ambient temperature and detects rapid increases.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compatibility: Integrates with smart home systems for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Ensures continuous operation during power outages.
            Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering and ensure reliable operation.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Detection: Provides early warning of fire or overheating conditions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration: Enables integration into smart home systems for remote monitoring and management.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical for detecting overheating in industrial machinery and equipment.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}



    {isOpen && (
      <>
       <Button className={styles.button} onClick={() => showModal("smartVoice")}>
       <p className={styles.firstdropdown}>Mainlogix Smart Voice Control</p>
      </Button>
      <Modal
        title="Smart Voice Modal"
        open={openModalId === "smartVoice"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Mainlogix Smart Voice Control</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='smartvoice.png' 
                alt='smoke sensor image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}
    {isOpen && (
      <>
       <Button  className={styles.button} onClick={() => showModal("smartSiren")}>
       <p className={styles.firstdropdown}>Smart Siren</p>
      </Button>
      <Modal
        title="Smart Siren"
        open={openModalId === "smartSiren"}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true} // Disable closing the modal when clicking outside
        bodyStyle={{
          position: 'relative',
          zIndex: 1060,
        }}
        style={{
          position: 'relative',
          zIndex: 1060,
          maxHeight: '400px',
          overflowY: 'auto',
        }}
        destroyOnClose
      >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcontent}>
            <h1 className={styles.modalContenth1}>Mainlogix Smart Voice Control</h1>
        </div>
        <div className={styles.sosdiv}>
            <img 
                src='smartsiren.jfif' 
                alt='smoke sensor image'
                className={styles.smartvoiceimg}
            />
        </div>
        <div className={styles.featurediv}>
        <p  className={styles.featurestext}>
        A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
        </p>
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
            </p>
            </div>
            <h1 className={styles.h1}>Benefits</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
            </p>
            </div>
            <h1 className={styles.h1}>Applications</h1>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
            </p>
            </div>
            <div className={styles.onetouch}>
            <GoDotFill className={styles.fill} />
            <p  className={styles.featurestext}>
            Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
            </p>
            </div>
        </div>
        </div>
      </Modal>
    </>
    )}
    </div>      
            </div>
            </div>,
        },
        { 
          title: "Advance",
          content: <div className={styles.text2}>
          <div>
              <Link 
                  href='#' onClick={toggleDropdown}>
                  <p className={styles.sixteenitem}>16 items remaining</p>
              </Link>
          </div>
          <div>
            <Link href="#" onClick={toggleDropdown}>
              <IoMdArrowDropdown className={styles.dropdown} />
            </Link>
            <div className={styles.style}>
    {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("sos")}>
     <p className={styles.firstdropdown}>SOS</p>
    </Button>
    <Modal
        title="SOS Modal"
        open={openModalId === "sos"}
        onCancel={handleCancel}
        footer={null}// Remove OK and Cancel buttons
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>SOS</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='/SOS.png' 
              alt='SOS image'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
      The Smart FOB Button is a compact, portable device designed for quick and easy access to a variety of smart home functions.With a single press, it allows you to control multiple devices, trigger automation routines, and send alerts, all from the palm of your hand and can be used by elderly people.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
              One-Touch Control: Instantly control smart home devices such as 
              lights, locks, and alarms with a single button press.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Customizable Actions: Program multiple actions or routines to a single button, such as turning off all lights or locking all doors.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Emergency Alerts: Send emergency notifications to designated contacts with a long press and can be used for the Anti Fall system.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Portable Design: Small and lightweight, easy to carry on a keychain or in a pocket.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Long Battery Life: Designed to last for months on a single battery, ensuring reliability.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Durable Construction: Built to withstand daily wear and tear.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Voice Assistant Integration: Compatible with major voice assistants (Smart by MainLogix) for added convenience.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Automation Integration: Trigger complex automation routines, like setting the perfect movie night ambiance with a single press.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Ideal for elderly individuals who may need quick access to emergency help.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Simplifies daily routines by enabling one-touch control of multiple devices.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhances home security by allowing instant activation of security systems.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p className={styles.featurestext}>
          Convenient for anyone needing quick and easy control of their smart home devices on the go.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
    )}
    {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
     <p className={styles.firstdropdown}>Smart Socket</p>
    </Button>
    <Modal
      title="Smoke Sensor Modal"
      open={openModalId === "smokeSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>SMOKE SENSOR</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smokesensor.webp' 
              alt='smoke sensor image'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
     A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
     <p className={styles.firstdropdown}>Temperature and Humidity Sensor</p>
    </Button>
    <Modal
      title="Smoke Sensor Modal"
      open={openModalId === "smokeSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Smart Tablet</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smokesensor.webp' 
              alt='smoke sensor image'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
     A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
     <p className={styles.firstdropdown}>Smart Switch</p>
    </Button>
    <Modal
      title="Smoke Sensor Modal"
      open={openModalId === "smokeSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Vacuum Robot</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smokesensor.webp' 
              alt='smoke sensor image'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
     A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
     <p className={styles.firstdropdown}>Human Presence Sensor</p>
    </Button>
    <Modal
      title="Smoke Sensor Modal"
      open={openModalId === "smokeSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Temerature and Humidity Sensor</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smokesensor.webp' 
              alt='smoke sensor image'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
     A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
     <p className={styles.firstdropdown}>Smoke Sensor</p>
    </Button>
    <Modal
      title="Smoke Sensor Modal"
      open={openModalId === "smokeSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Temperature and Humidity</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smokesensor.webp' 
              alt='smoke sensor image'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
     A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
     <p className={styles.firstdropdown}>Smart Socket</p>
    </Button>
    <Modal
      title="Smoke Sensor Modal"
      open={openModalId === "smokeSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>SMOKE SENSOR</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smokesensor.webp' 
              alt='smoke sensor image'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
     A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smokeSensor")}>
     <p className={styles.firstdropdown}>Human Presence Sensor</p>
    </Button>
    <Modal
      title="Smoke Sensor Modal"
      open={openModalId === "smokeSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>GAS SENSOR</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smokesensor.webp' 
              alt='smoke sensor image'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
     A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("gasSensor")}>
     <p className={styles.firstdropdown}>Gas Sensor</p>
    </Button>
    <Modal
      title="Gas Sensor Modal"
      open={openModalId === "gasSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>GAS SENSOR</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='gassensor.png' 
              alt=' imgas sensorage'
              className={styles.sosimg}
          />
      </div>
      <div className={styles.featurediv}>
          <p  className={styles.featurestext}>
          Enhanced Safety for Your Home
          </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Gas Detection: Detects the presence of hazardous gases such as natural gas (methane), propane, butane, and carbon monoxide (CO). Provides real-time monitoring to ensure early detection of leaks.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notifications: Sounds an audible alarm and sends instant notifications to your smartphone upon detecting gas leaks. Alerts you to take immediate action to prevent potential hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Versatile Placement: Suitable for installation in kitchens, utility rooms, basements, and other areas prone to gas leaks. Compact design allows for discreet placement.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Continuous Monitoring: Monitors gas levels continuously, providing ongoing protection day and night. Ensures round-the-clock safety for your household.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
            Smart Home Integration: Integrates with popular smart home platforms such as Alexa, Smart by MainLogix, Google Assistant, and others. Enables voice commands and automation with other smart devices.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Access and Control: Check gas levels and receive alerts remotely via a dedicated mobile app. Take action from anywhere to ensure the safety of your home.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
         Easy Installation: Simple DIY installation with included mounting hardware and instructions. No professional wiring required, operates on battery or mains power.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Low Maintenance: Long lifespan with minimal maintenance required. Low battery notifications ensure continuous operation.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Emergency Response Capability: Provides critical information to emergency services in case of a gas leak. Enhances emergency response times for quick mitigation.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Safety Assurance: Early detection of gas leaks to prevent potential hazards and ensure the safety of your family.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Convenience: Receive real-time alerts on your smartphone for prompt action, even when you`re away from home.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration: Seamlessly integrates into your smart home ecosystem for enhanced automation and control.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p className={styles.featurestext}>
          Peace of Mind: Continuous monitoring provides peace of mind knowing your home is protected around the clock.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Kitchen Safety: Monitor gas levels in the kitchen to prevent accidents during cooking or appliance use.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Utility Room Protection: Detect leaks from gas-powered appliances like water heaters or furnaces in utility areas.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Basement Security: Ensure safe gas levels in basement areas prone to gas accumulation.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p className={styles.featurestext}>
          Vacation Homes: Monitor gas levels remotely in vacation homes to prevent issues during periods of absence.
          </p>
          </div>
      </div>
    </Modal>
  </>
  )}

{isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("heatDetector")}>
     <p className={styles.firstdropdown}>Heat Detector</p>
    </Button>
    <Modal
      title="Smart Voice Modal"
      open={openModalId === "heatDetector"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Heat Detector</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='heatdetect.png' 
              alt='Heat Detector image'
              className={styles.smartvoiceimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
      A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Temperature Sensing: Monitors ambient temperature and detects rapid increases.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compatibility: Integrates with smart home systems for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Ensures continuous operation during power outages.
          Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering and ensure reliable operation.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Detection: Provides early warning of fire or overheating conditions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration: Enables integration into smart home systems for remote monitoring and management.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical for detecting overheating in industrial machinery and equipment.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("watersSensor")}>
     <p className={styles.firstdropdown}>Water Sensor</p>
    </Button>
    <Modal
      title="Water Sensor"
      open={openModalId === "watersSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Water Sensor</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='waterssensor.jfif' 
              alt='Heat Detector image'
              className={styles.smartvoiceimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
      A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Temperature Sensing: Monitors ambient temperature and detects rapid increases.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compatibility: Integrates with smart home systems for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Ensures continuous operation during power outages.
          Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering and ensure reliable operation.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Detection: Provides early warning of fire or overheating conditions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration: Enables integration into smart home systems for remote monitoring and management.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical for detecting overheating in industrial machinery and equipment.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}

{isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smartLock")}>
     <p className={styles.firstdropdown}>Smart Lock</p>
    </Button>
    <Modal
      title="Smart Lock"
      open={openModalId === "smartLock"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Smart Lock</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='lock.png' 
              alt='Heat Detector image'
              className={styles.smartvoiceimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
      A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Temperature Sensing: Monitors ambient temperature and detects rapid increases.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compatibility: Integrates with smart home systems for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Ensures continuous operation during power outages.
          Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering and ensure reliable operation.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Detection: Provides early warning of fire or overheating conditions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration: Enables integration into smart home systems for remote monitoring and management.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical for detecting overheating in industrial machinery and equipment.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}


{isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("curtainControl")}>
     <p className={styles.firstdropdown}>Curtain and Blind Control</p>
    </Button>
    <Modal
      title="Curtain and Blind Control"
      open={openModalId === "curtainControl"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Curtain and Blind Control</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='curtaincontrol.png' 
              alt='Heat Detector image'
              className={styles.smartvoiceimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
      A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Temperature Sensing: Monitors ambient temperature and detects rapid increases.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compatibility: Integrates with smart home systems for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Ensures continuous operation during power outages.
          Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering and ensure reliable operation.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Detection: Provides early warning of fire or overheating conditions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration: Enables integration into smart home systems for remote monitoring and management.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical for detecting overheating in industrial machinery and equipment.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}


{isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("motionSensor")}>
     <p className={styles.firstdropdown}>Motion Sensor</p>
    </Button>
    <Modal
      title="Motion Sensor"
      open={openModalId === "motionSensor"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Motion Sensor</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='motionssensor.png' 
              alt='Heat Detector image'
              className={styles.smartvoiceimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
      A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Temperature Sensing: Monitors ambient temperature and detects rapid increases.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compatibility: Integrates with smart home systems for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Reliability: Provides early warning to occupants before smoke or flames are visible.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Ensures continuous operation during power outages.
          Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering and ensure reliable operation.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Detection: Provides early warning of fire or overheating conditions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Safety Enhancement: Helps protect property and occupants by triggering timely alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration: Enables integration into smart home systems for remote monitoring and management.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical for detecting overheating in industrial machinery and equipment.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}



  {isOpen && (
    <>
     <Button className={styles.button} onClick={() => showModal("smartVoice")}>
     <p className={styles.firstdropdown}>Mainlogix Smart Voice Control</p>
    </Button>
    <Modal
      title="Smart Voice Modal"
      open={openModalId === "smartVoice"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Mainlogix Smart Voice Control</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smartvoice.png' 
              alt='smoke sensor image'
              className={styles.smartvoiceimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
      A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  {isOpen && (
    <>
     <Button  className={styles.button} onClick={() => showModal("smartSiren")}>
     <p className={styles.firstdropdown}>Smart Siren</p>
    </Button>
    <Modal
      title="Smart Siren"
      open={openModalId === "smartSiren"}
      onCancel={handleCancel}
      footer={null}
      maskClosable={true} // Disable closing the modal when clicking outside
      bodyStyle={{
        position: 'relative',
        zIndex: 1060,
      }}
      style={{
        position: 'relative',
        zIndex: 1060,
        maxHeight: '400px',
        overflowY: 'auto',
      }}
      destroyOnClose
    >
    <div className={styles.modalcontainer}>
      <div className={styles.modalcontent}>
          <h1 className={styles.modalContenth1}>Mainlogix Smart Voice Control</h1>
      </div>
      <div className={styles.sosdiv}>
          <img 
              src='smartsiren.jfif' 
              alt='smoke sensor image'
              className={styles.smartvoiceimg}
          />
      </div>
      <div className={styles.featurediv}>
      <p  className={styles.featurestext}>
      A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards.
      </p>
          <h1 className={styles.h1}>Features</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Battery Backup: Equipped with battery backup for continuous operation during power outages.</p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Compliance Standards: Conforms to safety and regulatory standards such as UL certifications.
          </p>
          </div>
          <h1 className={styles.h1}>Benefits</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses.
          </p>
          </div>
          <h1 className={styles.h1}>Applications</h1>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.
          </p>
          </div>
          <div className={styles.onetouch}>
          <GoDotFill className={styles.fill} />
          <p  className={styles.featurestext}>
          Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff.
          </p>
          </div>
      </div>
      </div>
    </Modal>
  </>
  )}
  </div>      
          </div>
          </div>,
      },
    ];

    return (
        <div className="tabs-container">
            {/* Display the content of the active tab */}
            <div className="tab-content">
                {/* {tabContent[activeTab].content} */}
              <TabCarousel />
            {/* Tab buttons */}
            <div className="tabs">
                {tabContent1.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className={styles.maindiv}>
                <div>
                    {tabContent1[activeTab].content}
                </div>
                <div className={styles.stardiv}>
                    <div>
                        <h1>5.0 </h1>
                    </div>
                    <div className={styles.star}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className={styles.gateway}>
                    <div className={styles.gatedot}>
                    <GoDotFill className={styles.fill} />
                    <p className={styles.dottext}>Gateway</p>
                    </div>
                    <div className={styles.gatedot}>
                    <GoDotFill className={styles.fill} />
                    <p className={styles.dottext}>Door and Window Sensor</p>
                    </div>
                    <div className={styles.gatedot}>
                    <GoDotFill className={styles.fill} />
                    <p className={styles.dottext}>Motion Sensor</p>
                    </div>
                    <div className={styles.gatedot}>
                    <GoDotFill className={styles.fill} />
                    <p className={styles.dottext}>Intelligent</p>
                    </div>
                </div>
                <div>
                    {tabContent2[activeTab].content}
                </div>
                <div>
                    <div>
                        <h1 className={styles.description}>Description:</h1>
                    </div>
                    <div>
                        <p className={styles.energytext}>1. Energy Efficiency: Motion sensors combine with Lightning control reduce unnecessary energy use...</p>
                    </div>
                    <div className={styles.continuation}>
                        <Link href='#' onClick={(e) => e.preventDefault()}>See Full Details...</Link>
                    </div>
                    <div className={styles.straight}></div>
                </div>
                <div className={styles.customizecart}>
                    <div>
                        <button className={styles.customize}>Customize Kit</button>
                    </div>
                    <div>
                        <button className={styles.cartkit}>Add to Cart</button>
                    </div>
                </div>
               </div>
            </div>


            {/* Basic styling */}
            <style jsx>{`
            .tabs-container {
                    max-width: 100%;
                    margin: 50px auto;
                    padding: 20px;
                    text-align: center;
                }
                .tabs {
                    display: flex;
                    justify-content: left;
                    margin-bottom: 20px;
                    margin-top: 50px;
                }
                 @media only screen and (min-width: 320px) and (max-width: 480px) {
                  .tabs {
                      flex-direction: column;
                      margin-bottom: 20px;
                      margin-top: 50px;
                  }
                  .tab-button {
                      margin-left: 0;
                      margin-bottom: 10px; /* Space between buttons in column layout */
                  }
                }

                @media only screen and (min-width: 481px) and (max-width: 600px) {
                  .tabs {
                      flex-direction: column;
                      margin-bottom: 20px;
                      margin-top: 50px;
                  }
                  .tab-button {
                      margin-left: 0;
                      margin-bottom: 10px; /* Space between buttons in column layout */
                  }
                }

                @media only screen and (min-width: 601px) and (max-width: 768px) {
                  .tabs {
                      flex-direction: column;
                      margin-bottom: 20px;
                      margin-top: 50px;
                  }
                  .tab-button {
                      margin-left: 0;
                      margin-bottom: 10px; /* Space between buttons in column layout */
                  }
                }
                .tab-button {
                    padding: 8px 60px;
                    cursor: pointer;
                    background: #e0e0e0;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    color: rgb(185, 124, 13);
                    border: 1px solid rgb(185, 124, 13);
                    margin-left: 20px;
                    transition: background-color 0.3s ease, transform 0.5s ease;
                }
                .tab-button.active {
                    background: #blue; /* Your preferred active color */
                    color: white;
                }
                .tab-button:hover {
                    background-color: #5C755E;
                    color: #FFFFFF;
                    transform: scale(1.05);
                }
                .tab-content {
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
}

export default Tab
