import React, { useState } from 'react';
import styles from './SecurityContent1Tab.module.css'; // Import the CSS module

const SecurityContent1Tab = () => {
  const [activeTab, setActiveTab] = useState(1); // Track the active tab (initially set to Tab 1)

  // Function to handle tab change
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      {/* Tab Buttons */}
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

      {/* Tab Content */}
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
  );
};

export default SecurityContent1Tab;
