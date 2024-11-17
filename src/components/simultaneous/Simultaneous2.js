import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndex } from '../../../store/activeIndexSlice';
import ProductsData from './SimultaneousData';
import styles from './Simultaneous2.module.css'
import { Carousel } from 'react-bootstrap';
// import Item from 'antd/es/list/Item';
import buttonData from './buttonData'
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const AnotherComponent = () => {
    const dispatch = useDispatch();
    const activeIndex = useSelector((state) => state.activeIndex.value);
    const [activeTab, setActiveTab] = useState(1);

     // Function to handle tab change
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const handleButtonClick = (index) => {
        dispatch(setActiveIndex(index)); // Update the active index in Redux
    };

    return (
        <>
            {/* Carousel Component */}
            <div className={styles.carouselcontainer}>
            <Carousel 
                className={styles.carouseDiv}
                activeIndex={activeIndex}
                onSelector={(selectedIndex) => dispatch(setActiveIndex(selectedIndex))}
            >
                {ProductsData.map((product) => (

                    <Carousel.Item
                        className={styles.carouselitem}
                        key={product.id}
                    >
                        <div className={styles.h2div}>
                            <div className={styles.buttontop}>
                                <div>
                                    <h2 className={styles.h2text}>{product.name}</h2>
                                </div>
                                <div>
                                    <button 
                                        className={styles.custombutton}
                                    >
                                        <div>
                                        <FaPen 
                                            className={styles.custompen}
                                        />
                                        </div>
                                        <div>
                                            {product.button}
                                        </div>
                                    </button>
                                </div>
                            </div>
                            {product.availablePackages.map((pkg, index) => (
                                <div key={index}>
                                    <h2 className={styles.htext}>{pkg.amount}</h2>
                                    <div className={styles.line}>{pkg.line}</div>
                                    <div className={styles.basiccontainer}>
                                        {pkg.nestedCarousel && (
                                            <div>
                                                {pkg.nestedCarousel.buttons.map((button, index) => (
                                                        <button
                                                            key={index}
                                                            className={styles.basic}
                                                        >
                                                            {button.label}
                                                        </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <h2 className={styles.itemtext} key={product.id}>{product.texts}</h2>
                            <div className={styles.contentimg}>
                            <div className={styles.contents}>
                            <div className={styles.content}>
                                {product.checktext.map((item, index) => (
                                    <>
                                        <div className={styles.container}>
                                        <div>
                                        {item.label1 && (
                                            <div className={styles.labelsdiv}>
                                                    <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label1}</p>
                                            </div>
                                        )}
                                        </div>
                                        <div>
                                        {item.label2 && (
                                            <div className={styles.labelsdiv2}>
                                                <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label2}</p>
                                            </div>
                                            
                                        )}
                                        </div>
                                        <div>
                                        {item.label3 && (
                                            <div className={styles.labelsdiv3}>
                                                <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label3}</p>
                                            </div>
                                            
                                        )}
                                    </div>
                                    </div>
                                </>
                                ))}
                            </div>
                            <div className={styles.content2}>
                                {product.checktext.map((item, index) => (
                                    <>
                                        <div className={styles.container}>
                                        <div>
                                        {item.label4 && (
                                            <div className={styles.labelsdiv}>
                                                <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label4}</p>
                                            </div>
                                        )}
                                        </div>
                                        <div>
                                        {item.label5 && (
                                            <div className={styles.labelsdiv2}>
                                                <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label5}</p>
                                            </div>
                                            
                                        )}
                                        </div>
                                        <div>
                                        {item.label6 && (
                                            <div className={styles.labelsdiv3}>
                                                <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label6}</p>
                                            </div>
                                            
                                        )}
                                    </div>
                                    </div>
                                </>
                                ))}
                            </div>
                            <div className={styles.content2}>
                                {product.checktext.map((item, index) => (
                                    <>
                                        <div className={styles.container3}>
                                        <div>
                                        {item.label5 && (
                                            <div className={styles.labelsdiv}>
                                                <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label5}</p>
                                            </div>
                                        )}
                                        </div>
                                        <div>
                                        {item.label6 && (
                                            <div className={styles.labelsdiv2}>
                                                <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label6}</p>
                                            </div>
                                            
                                        )}
                                        </div>
                                        <div>
                                        {item.label7 && (
                                            <div className={styles.labelsdiv3}>
                                                <FaCheck className={styles.facheck} />
                                                <p className={styles.labels}>{item.label7}</p>
                                            </div>
                                            
                                        )}
                                        </div>
                                    </div>
                                </>
                                ))}
                            </div>
                            </div>
                            
                            </div>
                            <div className={styles.imgdiv}>
                                <img 
                                    src={product.image} 
                                    alt='love' 
                                    className={styles.image}
                                />
                            </div>
                        <div>
                        <div className={styles.tabsContainer}>
                        <div
                            onClick={() => handleTabClick(1)}
                            className={`${styles.tabButton1} ${activeTab === 1 ? styles.activeTab : ''}`}
                        >
                            Description
                        </div>
                        <div
                            onClick={() => handleTabClick(2)}
                            className={`${styles.tabButton2} ${activeTab === 2 ? styles.activeTab : ''}`}
                        >
                            Benefits
                        </div>
                        <div
                            onClick={() => handleTabClick(3)}
                            className={`${styles.tabButton3} ${activeTab === 3 ? styles.activeTab : ''}`}
                        >
                            Features
                        </div>
                        </div>
                <div className={styles.tabContent}>
                {activeTab === 1 && (
                <div className={styles.tab1text}>
                    <p>1. Adaptive Lighting Control: Automatically adjusts lighting based on natural light availability and occupancy, reducing energy consumption.</p>
                    <p>2. Effortless Voice Command: Control lights, appliances, and other devices with simple voice commands for enhanced convenience.</p>
                    <p>3. Energy Efficiency: Monitor and manage energy usage through smart sockets and switches, significantly reducing electricity bills.</p>
                    <p>4. Enhanced Security: Receive real-time alerts from motion sensors, door and window sensors, and alarms for improved home security.</p>
                    <p>5. Remote Access: Manage and monitor your home devices from anywhere using a smartphone or tablet, providing peace of mind.</p>
                    <p>6. Customizable Automation: Set schedules and automation rules to turn off devices when not in use, enhancing energy savings.</p>
                    <p>7. Automated Appliance Control: - Smart sockets can turn off devices automatically when not in use, preventing energy wastage.</p>
                    <p>8. Integrated IR Control: Control traditional IR devices like TVs and air conditioners through your smart system.</p>
                    <p>9. Presence Simulation: Simulate occupancy with automated lighting schedules to deter potential intruders.</p>
                    <p>10. Smart Alerts: Get notifications for unusual activities or energy consumption spikes, allowing proactive management.</p>
                    <p>11. Provides your guests Access, with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience.</p>
                </div>
                )}
                {activeTab === 2 && (
                <div className={styles.tab2text}>
                <p>1. Energy Efficiency: Monitor and manage energy usage through smart sockets and switches, significantly reducing electricity bills.</p>
                <p>2. Enhanced Security: Receive real-time alerts from motion sensors, door and window sensors, and alarms for improved home security.</p>
                <p>3. Remote Access: Manage and monitor your home devices from anywhere using a smartphone or tablet, providing peace of mind.</p>
                <p>4. Customizable Automation: Set schedules and automation rules to turn off devices when not in use, enhancing energy savings.</p>
                <p>5. Automated Appliance Control: - Smart sockets can turn off devices automatically when not in use, preventing energy wastage.</p>
                <p>6. Integrated IR Control: Control traditional IR devices like TVs and air conditioners through your smart system.</p>
                <p>7. Adaptive Lighting Control: Automatically adjusts lighting based on natural light availability and occupancy, reducing energy consumption.</p>
                <p>8. Effortless Voice Command: Control lights, appliances, and other devices with simple voice commands for enhanced convenience.</p>
                <p>9. Presence Simulation: Simulate occupancy with automated lighting schedules to deter potential intruders.</p>
                <p>10. Smart Alerts: Get notifications for unusual activities or energy consumption spikes, allowing proactive management.</p>
                <p>11. Provides your guests Access, with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience.</p>
                </div>
                )}
                {activeTab === 3 && (
                <div className={styles.tab3text}>
                <p>1. Integrated IR Control: Control traditional IR devices like TVs and air conditioners through your smart system.</p>
                <p>2. Presence Simulation: Simulate occupancy with automated lighting schedules to deter potential intruders.</p>
                <p>3. Smart Alerts: Get notifications for unusual activities or energy consumption spikes, allowing proactive management.</p>
                <p>4. Provides your guests Access, with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience.</p>
                <p>5. Adaptive Lighting Control: Automatically adjusts lighting based on natural light availability and occupancy, reducing energy consumption.</p>
                <p>6. Effortless Voice Command: Control lights, appliances, and other devices with simple voice commands for enhanced convenience.</p>
                <p>7. Energy Efficiency: Monitor and manage energy usage through smart sockets and switches, significantly reducing electricity bills.</p>
                <p>8. Enhanced Security: Receive real-time alerts from motion sensors, door and window sensors, and alarms for improved home security.</p>
                <p>9. Remote Access: Manage and monitor your home devices from anywhere using a smartphone or tablet, providing peace of mind.</p>
                <p>10. Customizable Automation: Set schedules and automation rules to turn off devices when not in use, enhancing energy savings.</p>
                <p>11. Automated Appliance Control: - Smart sockets can turn off devices automatically when not in use, preventing energy wastage.</p>
                </div>
                )}
            </div>
        </div>
        <div className={styles.buttoncartdiv}>
        <button className={styles.buttoncart}><a>Add To Cart</a></button>
        </div>
        </div>
    </Carousel.Item>
        ))}
        </Carousel>
        </div>
        </>
    );
};

export default AnotherComponent;
