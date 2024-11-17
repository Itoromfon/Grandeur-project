const ProductsData = [
  {
      id: 1,
      name: 'Energy Management Kit',
      button: 'Customize Kit',
      texts: 'Items Included',
      image: '/comfortkit.png',
      tabs: 'Description',
      descriptions: [
        "Adaptive Lighting Control: Automatically adjusts lighting based on natural light availability and occupancy, reducing energy consumption.",
        "Effortless Voice Command: Control lights, appliances, and other devices with simple voice commands for enhanced convenience.",
        "Energy Efficiency: Monitor and manage energy usage through smart sockets and switches, significantly reducing electricity bills.",
        "Enhanced Security: Receive real-time alerts from motion sensors, door and window sensors, and alarms for improved home security.",
        "5Remote Access: Manage and monitor your home devices from anywhere using a smartphone or tablet, providing peace of mind.",
        "Customizable Automation: Set schedules and automation rules to turn off devices when not in use, enhancing energy savings.",
        "Automated Appliance Control: - Smart sockets can turn off devices automatically when not in use, preventing energy wastage.",
        "Integrated IR Control: Control traditional IR devices like TVs and air conditioners through your smart system.",
        "Presence Simulation: Simulate occupancy with automated lighting schedules to deter potential intruders.",
        "Smart Alerts: Get notifications for unusual activities or energy consumption spikes, allowing proactive management.",
        "Provides your guests Access, with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience.",
      ],
      checktext: [
        { label1: "Gateway" },
        { label1: "Light Sensor" },
        { label3: "Motion Sensor" },
        { label4: "Smart Socket" },
        { label5: "Smart Bulb" },
        { label6: "Smart Switch" },
        { label7: "IR Sensor" },
        { label8: "Mainlogix Smart Voice Control" },
      ],
      availablePackages: [
         {
          alias: "Energy",
          images: [
            'comfortkit.png'
          ],
          items: [14, 17, 18, 25, 26, 18, 29, 30 ], // referencing items by ID
          description: [
            "Adaptive Lighting Control: Automatically adjusts lighting based on natural light availability and occupancy, reducing energy consumption.",
            "Effortless Voice Command: Control lights, appliances, and other devices with simple voice commands for enhanced convenience.",
            "Energy Efficiency: Monitor and manage energy usage through smart sockets and switches, significantly reducing electricity bills.",
            "Enhanced Security: Receive real-time alerts from motion sensors, door and window sensors, and alarms for improved home security.",
            "Remote Access: Manage and monitor your home devices from anywhere using a smartphone or tablet, providing peace of mind.",
            "Customizable Automation: Set schedules and automation rules to turn off devices when not in use, enhancing energy savings.",
            "Automated Appliance Control: - Smart sockets can turn off devices automatically when not in use, preventing energy wastage.", 
            "Integrated IR Control: Control traditional IR devices like TVs and air conditioners through your smart system.",
            "Presence Simulation: Simulate occupancy with automated lighting schedules to deter potential intruders.",
            "Smart Alerts: Get notifications for unusual activities or energy consumption spikes, allowing proactive management.",
            "Provides your guests Access, with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
          ],
          amount: '$402.00',
          line: "________________________________________________________________________________________________________________________________",
          // item: 'Items Included',
        },
         {
          alias: "Security",
          images: [
            'assets/img/New-Kits-2/Grandeur smart Advanced Home Automation mgt kit a.png',
            'assets/img/New-Kits-2/Grandeur smart Advanced Home Automation mgt kit b.png',
          ],
          items: [14, 17, 18, 25, 26, 18, 16, 23, 26, 7, 31, 4, 30, ], // referencing items by ID
          description: [
            "Advanced Climate Control: Smart thermostats and water heater switches optimize heating and cooling based on occupancy and schedules, improving comfort and efficiency.",
            "Enhanced Security Integration: Additional PIR sensors and indoor cameras provide comprehensive monitoring and security.",
            "Natural Light Management: Automate curtains and blinds to optimize natural lighting, enhancing energy savings and privacy.",
            "Voice-Activated Control: Use voice commands to control an expanded range of devices, including curtains and HVAC systems.",
            "Comprehensive Energy Monitoring: Detailed insights into energy consumption patterns help identify savings opportunities and reduce waste.",
            "Customizable Scenes: Create personalized scenes for different activities, such as relaxing, entertaining, or working.",
            "Enhanced Appliance Control: Smart sockets can turn off devices automatically when not in use, preventing energy wastage.",
            "Integrated IR Control: Control traditional IR devices like TVs and air conditioners through your smart system.",
            "Presence Simulation: Simulate occupancy with automated lighting schedules to deter potential intruders.",
            "Smart Alerts: Get notifications for unusual activities or energy consumption spikes, allowing proactive management.",
            "Multi-Sensor Integration: Use multi-sensors to measure temperature, humidity, light, motion, and vibration for optimized energy settings.",
            "Automated HVAC: Automate heating, ventilation, and air conditioning to maintain optimal home temperatures.",
            "Smart Water Management: Water leak sensors and automated water pumping systems prevent damage and manage resources efficiently.",
            "Proactive Maintenance Alerts: Receive alerts for maintenance needs based on sensor data, preventing potential issues."
          ],
          //amount: 981.00
        },
         {
          alias: "Health",
          images: [
            '/assets/img/New-Kits-2/Grandeur smart Premium Home Automation mgt kit a.png',
            '/assets/img/New-Kits-2/Grandeur smart Premium Home Automation mgt kit b.png',
          ],
          items: [14, 17, 18, 25, 26, 18, 16, 23, 15, 26, 7, 31, 4, 27, 16, 23, 11, 30, ], // referencing items by ID
          description: [
            "Seamless integration of all devices, providing centralized control over lighting, climate, security, and appliances.",
            "Automated vacuum robots ensure a clean home with minimal effort, operating during off-peak hours for energy efficiency.",
            "Automatically illuminates stairs based on movement for safety and enhanced ambiance.",
            "Integrated fire alarms, gas sensors, and water leak sensors provide early warnings, preventing major damage.",
            "Timely alerts and notifications for potential security breaches and environmental hazards.",
            "Full HD motion cameras, smart locks, and entry sensors offer robust security and peace of mind.",
            "Temperature and humidity sensors maintain optimal living conditions for comfort and health.",
            "Control home entertainment systems with voice commands and automation for a seamless media experience.",
            "Automate kitchen appliances like microwave, fridge, extractor, freezer, and stove for energy efficiency.",
            "Tailor the system to your specific needs and preferences with customizable scenes and automation rules.",
            "Automate curtain and blind movements based on light and time, improving privacy and energy efficiency.",
            "Full lighting automation that adapts to occupancy and time of day.",
            "Smart security system with integrated sensors, cameras, and alarms for comprehensive protection.",
            "Artificial Intelligence Control for optimizing energy usage and automating routines.",
            "Use voice commands to control TV and streaming services, enhancing your entertainment experience.",
            "Detects unusual vibrations and sends alerts.",
            "Monitors for gas leaks and triggers alerts.",
            "Real-time alerts and notifications for security breaches.",
            "Ensures safe and reliable power distribution.",
            "Provides early detection and notification.",
            "Automate water flow and temperature control.",
            "Create and control multiple device scenes.",
            "Monitors for unusual temperature rises.",
            "Adjust settings based on actual room use.",
            "Energy-efficient lighting with dimming and scheduling features.",
            "Provides your guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
          ],
          //amount: 2043.00,
          nestedCarousel: {
            id: 2,
            title: "Health Carousel",
            buttons: [
              { label: "Basic", content: "Content for Energy Option 1" },
              { label: "Advance", content: "Content for Energy Option 2" },
              { label: "Premium", content: "Content for Energy Option 3" },
              { label: "Ultimate", content: "Content for Energy Option 3" },
            ],
          },
        },
        ],
  },
  {
      id: 2,
      name: 'Smart Security and Safety Kit',
      button: 'Customize Kit',
      texts: 'Items Included',
      image: '/comfortkit.png',
      tabs: 'Description',
      descriptions: [
        "Energy Efficiency: Monitor and manage energy usage through smart sockets and switches, significantly reducing electricity bills.",
        "Enhanced Security: Receive real-time alerts from motion sensors, door and window sensors, and alarms for improved home security.",
        "Remote Access: Manage and monitor your home devices from anywhere using a smartphone or tablet, providing peace of mind.",
        "Customizable Automation: Set schedules and automation rules to turn off devices when not in use, enhancing energy savings.",
        "Automated Appliance Control: - Smart sockets can turn off devices automatically when not in use, preventing energy wastage.",
        "Integrated IR Control: Control traditional IR devices like TVs and air conditioners through your smart system.",
        "Adaptive Lighting Control: Automatically adjusts lighting based on natural light availability and occupancy, reducing energy consumption.",
        "Effortless Voice Command: Control lights, appliances, and other devices with simple voice commands for enhanced convenience.",
        "Presence Simulation: Simulate occupancy with automated lighting schedules to deter potential intruders.",
        "Smart Alerts: Get notifications for unusual activities or energy consumption spikes, allowing proactive management.",
        "Provides your guests Access, with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience.",
      ],
      checktext: [
        { label1: "Adaptor Socket" },
        { label2: "SOS/Emergency Call Button" },
        { label3: "Motion Sensor" },
        { label4: "Smart Lock" },
        { label5: "Mainlogix Smart Voice Control" },
        { label6: "Temperature and Humidity Sensor" },
        { label7: "Fall Detection Sensor" },
        { label8: "Heart Rate and BP Monitor" },
        { label9: "Intelligent Camera" },
      ],
      availablePackages: [
        {
          alias: "Energy",
          images: [
            '/assets/img/New-Kits-2/Grandeur smart Basic Energy Mgt a.png',
            '/assets/img/New-Kits-2/Grandeur smart Basic Energy Mgt b.png',
          ],
          items: [14, 17, 18, 25, 26, 18, 30, 1, ], // referencing items by ID
          description: [
            "Energy Monitoring: Real-time tracking of energy consumption to identify and reduce waste.",
            "Automated Lighting Management: Light sensors work with motion sensors to ensure lights are on only when necessary, reducing energy usage.",
            "Remote Appliance Management: Control and monitor appliance energy use via smart sockets, preventing energy drain from idle devices.",
            "Convenient Control: Use voice commands for hands-free control of lights and appliances, enhancing convenience and efficiency.",
            "Security Enhancements: Motion sensors provide added security by detecting unexpected movements and triggering alarms."
          ],
          amount: '$623.00',
          line: "________________________________________________________________________________________________________________________________",
        },
        {
          alias: "Security",
          images: [
            '/assets/img/New-Kits-2/Grandeur smart Advanced Energy Mgt a.png',
            '/assets/img/New-Kits-2/Grandeur smart Advanced Energy Mgt b.png',
          ],
          items: [14, 17, 18, 25, 26, 18, 30, 1, 18, 23, 26, 10, ], // referencing items by ID
          description: [
            "Enhanced Energy Savings: Advanced scheduling and sensor integration reduce unnecessary energy consumption.",
            "Climate Control Automation: The smart thermostat adjusts settings based on real-time occupancy and weather, optimizing energy use.",
            "Intelligent Water Heating: Automatically adjusts water heating schedules based on usage patterns, minimizing electricity use.",
            "Expanded Device Integration: Broader control over home appliances and systems, including IR devices, for comprehensive management.",
            "Detailed Energy Insights: Provides detailed insights into energy consumption patterns to help identify further savings opportunities.",
            "Provides your guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
          ],
          //amount: 750.00
        },
        {
          alias: "Health",
          images: [
            '/assets/img/New-Kits-2/Grandeur smart Premium Energy Mgt a.png',
            '/assets/img/New-Kits-2/Grandeur smart Premium Energy Mgt b.png',
          ],
          items: [14, 17, 18, 25, 26, 18, 30, 4, 24, 16, 15, 18, 19, 1, 28, 7, 27,  23, 26, 10 ], // referencing items by ID
          description: [
            "Comprehensive Automation: Fully integrated systems streamline energy use across all devices and rooms.",
            "Personalized Environment Settings: Adjusts heating, cooling, and lighting based on real-time data from occupancy and environmental sensors.",
            "Automated Cleaning: Vacuum robot operates during off-peak hours to reduce energy costs.",
            "Enhanced Security and Safety: Smart cameras and fire alarms provide real-time monitoring and emergency response.",
            "Continuous Operation: Backup battery system ensures essential systems remain operational during power outages.",
            "Efficient Natural Light Management: Curtain/blind control optimizes natural light use, reducing the need for artificial lighting.",
            "Advanced Energy Insights: Detailed analytics on energy consumption help in identifying areas for further savings.",
            "Provides your guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
          ],
          // amount: 1840.00,
          nestedCarousel: {
            id: 2,
            title: "Health Carousel",
            buttons: [
              { label: "Basic", content: "Content for Energy Option 1" },
              { label: "Advance", content: "Content for Energy Option 2" },
              { label: "Premium", content: "Content for Energy Option 3" },
              { label: "Ultimate", content: "Content for Energy Option 3" },
            ],
          },
        },
        // {
        //   alias: "Automation",
        //   images: [
        //     'assets/img/New-Kits-2/Grandeur smart Ultimate Home Automation mgt kit a.png',
        //     'assets/img/New-Kits-2/Grandeur smart Ultimate Home Automation mgt kit b.png',
        //   ],
        //   items: [14, 17, 18, 25, 26, 18, 16, 23, 15, 26, 7, 31, 4, 27, 16, 23, 13, 11, 30,], // referencing items by ID
        //   description: [
        //     "Al Optimization: Advanced AI algorithms optimize energy usage and automate routines, providing a smarter and more efficient home.",
        //     "Vehicle Automation: Car link automation for garage doors and lights, enhancing convenience and security.",
        //     "Seamless Integration: Comprehensive integration of smart gate controllers, sound systems, and media automation for a fully connected home.",
        //     "Personalized Settings: Adapt environment conditions based on real-time data from occupancy and environmental sensors.",
        //     "Enhanced Cleaning and Maintenance: Vacuum robot and automated water pumping systems ensure a clean and well-maintained home.",
        //     "Ultimate Security and Safety: Full range of security sensors, cameras, and intercom systems provide maximum protection.",
        //     "Automated Lighting for Any Mood: Set the perfect ambiance with intelligent lighting for any mood or activity.",
        //     "Integrated Ceiling Speakers: High-quality sound for music, announcements, and home theater experiences.",
        //     "Motorized Window Shades: Adjust natural light with a tap for convenience and energy savings.",
        //     "Automated Gates: Secure and easy entry with smart gate controls, providing enhanced security and convenience.",
        //     "Full Media Automation: Complete control over home entertainment systems, including TVs and streaming devices.",
        //     "Advanced Temperature Control: Smart thermostat adjusts cooling based on occupancy and weather, ensuring comfort and energy efficiency.",
        //     "Proactive Maintenance Alerts: Receive alerts for maintenance needs based on sensor data, preventing potential issues.",
        //     "Enhanced Environmental Monitoring: Comprehensive monitoring of temperature, humidity, and air quality for a healthier living environment.",
        //     "Holistic Ecosystem: Your home becomes a harmonious ecosystem of innovation and luxury, meeting your every need with elegance and precision.",
        //     "Smart Gate Controller: Automated gate opening and closing based on authorized vehicle recognition.",
        //     "Smart IP Motion Detection P2P: High-definition motion detection with peer-to-peer connectivity for enhanced security.",
        //     "Sound Automation: Integrated ceiling speakers provide high-quality sound for music and announcements.",  // Duplicate of feature 18, consider removing
        //     "Full Water Heater Automation: Manages water heating schedules to reduce energy consumption.",
        //     "Kitchen Appliance Control: Smart management of kitchen appliances like microwave, fridge, extractor, freezer, and stove.",
        //     "Intercom Systems via Google Mini Setup: Streamlined communication with visitors and family members.",
        //     "Smart Motion P2P Camera: Full HD motion cameras with real-time monitoring and alerts.",
        //     "DSTV/TV Voice Control: Voice commands to control TV and streaming services.",
        //     "Integrated Ceiling Speakers: Immersive sound quality for music and home announcements.",  // Duplicate of feature 18 and 17, consider removing
        //     "Ultimate Home Cinema Experience: Automated controls for a seamless media room experience.",
        //     "Dynamic Staircase Lighting: Automatically illuminates stairs based on movement for safety and ambiance.",
        //     "Car Link Automation: Vehicle detection and automation for garage doors and lights.",  // Duplicate of feature 2, consider removing
        //     "Artificial Intelligence Control: Advanced AI algorithms optimize energy usage and automate routines.",  // Duplicate of feature 1, consider removing
        //     "Full Lighting Automation: Intelligent lighting control that adapts to occupancy and time of day.",  // Duplicate of feature 29, consider removing
        //     "Visitor Dashboard for Home Control: Provides guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
        //   ],
        //   amount: 4740.00
        // },
      ],
      // Basic: {
      //   images: [
      //     'assets/img/New-Kits-2/Grandeur smart Basic Energy Mgt a.png',
      //     'assets/img/New-Kits-2/Grandeur smart Basic Energy Mgt b.png',
      //   ],
      //   items: [14, 17, 18, 25, 26, 18, 30, 1, ], // referencing items by ID
      //   description: [
      //     "Energy Monitoring: Real-time tracking of energy consumption to identify and reduce waste.",
      //     "Automated Lighting Management: Light sensors work with motion sensors to ensure lights are on only when necessary, reducing energy usage.",
      //     "Remote Appliance Management: Control and monitor appliance energy use via smart sockets, preventing energy drain from idle devices.",
      //     "Convenient Control: Use voice commands for hands-free control of lights and appliances, enhancing convenience and efficiency.",
      //     "Security Enhancements: Motion sensors provide added security by detecting unexpected movements and triggering alarms."
      //   ],
      //   amount: 403.00
      // },
      // Advance: {
      //   images: [
      //     'assets/img/New-Kits-2/Grandeur smart Advanced Energy Mgt a.png',
      //     'assets/img/New-Kits-2/Grandeur smart Advanced Energy Mgt b.png',
      //   ],
      //   items: [14, 17, 18, 25, 26, 18, 30, 1, 18, 23, 26, 10, ], // referencing items by ID
      //   description: [
      //     "Enhanced Energy Savings: Advanced scheduling and sensor integration reduce unnecessary energy consumption.",
      //     "Climate Control Automation: The smart thermostat adjusts settings based on real-time occupancy and weather, optimizing energy use.",
      //     "Intelligent Water Heating: Automatically adjusts water heating schedules based on usage patterns, minimizing electricity use.",
      //     "Expanded Device Integration: Broader control over home appliances and systems, including IR devices, for comprehensive management.",
      //     "Detailed Energy Insights: Provides detailed insights into energy consumption patterns to help identify further savings opportunities.",
      //     "Provides your guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
      //   ],
      //   amount: 750.00
      // },
      // Premium: {
      //   images: [
      //     'assets/img/New-Kits-2/Grandeur smart Premium Energy Mgt a.png',
      //     'assets/img/New-Kits-2/Grandeur smart Premium Energy Mgt b.png',
      //   ],
      //   items: [14, 17, 18, 25, 26, 18, 30, 4, 24, 16, 15, 18, 19, 1, 28, 7, 27,  23, 26, 10 ], // referencing items by ID
      //   description: [
      //     "Comprehensive Automation: Fully integrated systems streamline energy use across all devices and rooms.",
      //     "Personalized Environment Settings: Adjusts heating, cooling, and lighting based on real-time data from occupancy and environmental sensors.",
      //     "Automated Cleaning: Vacuum robot operates during off-peak hours to reduce energy costs.",
      //     "Enhanced Security and Safety: Smart cameras and fire alarms provide real-time monitoring and emergency response.",
      //     "Continuous Operation: Backup battery system ensures essential systems remain operational during power outages.",
      //     "Efficient Natural Light Management: Curtain/blind control optimizes natural light use, reducing the need for artificial lighting.",
      //     "Advanced Energy Insights: Detailed analytics on energy consumption help in identifying areas for further savings.",
      //     "Provides your guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
      //   ],
      //   amount: 1840.00
      // },
      // Ultimate: {
      //   images: [
      //     'assets/img/New-Kits-2/Grandeur smart Ultimate Home Automation mgt kit a.png',
      //     'assets/img/New-Kits-2/Grandeur smart Ultimate Home Automation mgt kit b.png',
      //   ],
      //   items: [14, 17, 18, 25, 26, 18, 16, 23, 15, 26, 7, 31, 4, 27, 16, 23, 13, 11, 30,], // referencing items by ID
      //   description: [
      //     "Al Optimization: Advanced AI algorithms optimize energy usage and automate routines, providing a smarter and more efficient home.",
      //     "Vehicle Automation: Car link automation for garage doors and lights, enhancing convenience and security.",
      //     "Seamless Integration: Comprehensive integration of smart gate controllers, sound systems, and media automation for a fully connected home.",
      //     "Personalized Settings: Adapt environment conditions based on real-time data from occupancy and environmental sensors.",
      //     "Enhanced Cleaning and Maintenance: Vacuum robot and automated water pumping systems ensure a clean and well-maintained home.",
      //     "Ultimate Security and Safety: Full range of security sensors, cameras, and intercom systems provide maximum protection.",
      //     "Automated Lighting for Any Mood: Set the perfect ambiance with intelligent lighting for any mood or activity.",
      //     "Integrated Ceiling Speakers: High-quality sound for music, announcements, and home theater experiences.",
      //     "Motorized Window Shades: Adjust natural light with a tap for convenience and energy savings.",
      //     "Automated Gates: Secure and easy entry with smart gate controls, providing enhanced security and convenience.",
      //     "Full Media Automation: Complete control over home entertainment systems, including TVs and streaming devices.",
      //     "Advanced Temperature Control: Smart thermostat adjusts cooling based on occupancy and weather, ensuring comfort and energy efficiency.",
      //     "Proactive Maintenance Alerts: Receive alerts for maintenance needs based on sensor data, preventing potential issues.",
      //     "Enhanced Environmental Monitoring: Comprehensive monitoring of temperature, humidity, and air quality for a healthier living environment.",
      //     "Holistic Ecosystem: Your home becomes a harmonious ecosystem of innovation and luxury, meeting your every need with elegance and precision.",
      //     "Smart Gate Controller: Automated gate opening and closing based on authorized vehicle recognition.",
      //     "Smart IP Motion Detection P2P: High-definition motion detection with peer-to-peer connectivity for enhanced security.",
      //     "Sound Automation: Integrated ceiling speakers provide high-quality sound for music and announcements.",  // Duplicate of feature 18, consider removing
      //     "Full Water Heater Automation: Manages water heating schedules to reduce energy consumption.",
      //     "Kitchen Appliance Control: Smart management of kitchen appliances like microwave, fridge, extractor, freezer, and stove.",
      //     "Intercom Systems via Google Mini Setup: Streamlined communication with visitors and family members.",
      //     "Smart Motion P2P Camera: Full HD motion cameras with real-time monitoring and alerts.",
      //     "DSTV/TV Voice Control: Voice commands to control TV and streaming services.",
      //     "Integrated Ceiling Speakers: Immersive sound quality for music and home announcements.",  // Duplicate of feature 18 and 17, consider removing
      //     "Ultimate Home Cinema Experience: Automated controls for a seamless media room experience.",
      //     "Dynamic Staircase Lighting: Automatically illuminates stairs based on movement for safety and ambiance.",
      //     "Car Link Automation: Vehicle detection and automation for garage doors and lights.",  // Duplicate of feature 2, consider removing
      //     "Artificial Intelligence Control: Advanced AI algorithms optimize energy usage and automate routines.",  // Duplicate of feature 1, consider removing
      //     "Full Lighting Automation: Intelligent lighting control that adapts to occupancy and time of day.",  // Duplicate of feature 29, consider removing
      //     "Visitor Dashboard for Home Control: Provides guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
      //   ],
      //   amount: 4740.00
      // },
  },
  {
      id: 3,
      name: 'Smart Elderly Care Kit/Sensor',
      button: 'Customize Kit',
      texts: 'Items Included',
      image: '/comfortkit.png',
      tabs: 'Description',
      descriptions: [
        "Integrated IR Control: Control traditional IR devices like TVs and air conditioners through your smart system.",
        "Presence Simulation: Simulate occupancy with automated lighting schedules to deter potential intruders.",
        "Smart Alerts: Get notifications for unusual activities or energy consumption spikes, allowing proactive management.",
        "Provides your guests Access, with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience.",
        "Adaptive Lighting Control: Automatically adjusts lighting based on natural light availability and occupancy, reducing energy consumption.",
        "Effortless Voice Command: Control lights, appliances, and other devices with simple voice commands for enhanced convenience.",
        "Energy Efficiency: Monitor and manage energy usage through smart sockets and switches, significantly reducing electricity bills.",
        "Enhanced Security: Receive real-time alerts from motion sensors, door and window sensors, and alarms for improved home security.",
        "Remote Access: Manage and monitor your home devices from anywhere using a smartphone or tablet, providing peace of mind.",
        "Customizable Automation: Set schedules and automation rules to turn off devices when not in use, enhancing energy savings.",
        "Automated Appliance Control: - Smart sockets can turn off devices automatically when not in use, preventing energy wastage.",
      ],
      checktext: [
        { label1: "Gateway" },
        { label2: "Door & Window Sensor" },
        { label3: "Motion Sensor" },
        { label4: "Intelligent Camera" },
        { label5: "SOS" },
        { label6: "Smoke Sensor" },
        { label7: "Gas Sensor" },
        { label8: "Mainlogix Smart Voice Control" },
        { label9: "Heart Rate and BP Monitor" },
      ],
      availablePackages: [
        {
          alias: "Energy",
          images: [
            '/assets/img/New-Kits-2/Grandeur smart Basic Security & Safety kit a.png',
            '/assets/img/New-Kits-2/Grandeur smart Basic Security & Safety kit b.png',
          ],
          items: [14, 10, 18, 4, 2, 24, 11, 30, 32, ], // referencing items by ID
          description: [
            "Energy Efficiency: Motion sensors combined with lighting control reduce unnecessary energy use.",
            "Enhanced Security: Immediate alerts for unauthorized access keep your home secure.",
            "Fire and Gas Safety: Smoke and gas sensors provide early warnings to prevent disasters.",
            "Convenience: Voice control allows for hands-free management of security features.",
            "Deterrence: Loud sirens and real-time alerts help prevent intrusions.",
            "Remote Monitoring: Access real-time camera feeds from anywhere.",
            "Automated Alerts: Instant notifications on your smartphone for any security breaches.",
            "Provides your guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
          ],
          amount: '$523.00',
          line: "________________________________________________________________________________________________________________________________",
        },
        {
          alias: "Security",
          images: [
            '/assets/img/New-Kits-2/Grandeur smart Advanced Security & Safety kit a.png',
            '/assets/img/New-Kits-2/Grandeur smart Advanced Security & Safety kit b.png',
          ],
          items: [14, 10, 18, 4, 2, 24, 11, 15, 28, 20, 7, 18, 30, 32,], // referencing items by ID
          description: [
            "Comprehensive Surveillance: Indoor and outdoor cameras provide full coverage of your property.",
            "Automated Access Control: Smart door locks and window sensors ensure secure entry points.",
            "Advanced Fire Safety: Smoke, gas, and heat detectors provide comprehensive fire safety.",
            "Water Damage Prevention: Water leak sensors alert you to potential leaks, preventing significant damage.",
            "Privacy and Security: Automated curtain control enhances privacy and security.",
            "Environmental Monitoring: Sensors help maintain optimal temperature and humidity levels.",
            "Voice-Controlled Automation: Use voice commands to manage all connected devices.",
            "Energy Savings: Automatically turn off lights and devices when rooms are unoccupied.",
            "Customizable Alerts: Receive specific alerts for different types of security breaches.",
            "Provides your guests with a user-friendly interface to control essential home features, ensuring convenience and enhancing the guest experience."
          ],
          // amount: 1081.00
        },
        {
          alias: "Health",
          images: [
            'assets/img/New-Kits-2/Grandeur smart Premium Security & Safety kit a.png',
            'assets/img/New-Kits-2/Grandeur smart Premium Security & Safety kit b.png',
          ],
          items: [14, 10, 18, 4, 2, 24, 11, 15, 28, 20, 7, 18, 27, 23, 25, 16, 26, 33, 30, 32,], // referencing items by ID
          description: [
            "Full Coverage Surveillance: Multiple indoor and outdoor cameras eliminate blind spots.",
            "Maximum Fire Safety: Comprehensive fire alarm system integrated with smoke, gas, and heat detectors.",
            "Leak and Flood Prevention: Water leak sensors provide early warnings to prevent major damage.",
            "Secure Access: Advanced smart locks and entry sensors ensure secure access.",
            "Proactive Alerts: Provides timely alerts and notifications for potential security breaches.",
            "Energy Efficiency: Smart sockets and switches automate energy savings.",
            "Privacy Control: Automated curtains enhance privacy and security.",
            "Cleaning Automation: Robot vacuum keeps your home clean with minimal effort.",
            "Environmental Control: Temperature and humidity sensors maintain optimal living conditions.",
            "Comprehensive Automation: Centralized control through a smart tablet for seamless management.",
            "Advanced Monitoring: Occupancy sensors adjust lighting and temperature based on room usage.",
            "Remote Access: Monitor and control your home from anywhere using a smartphone or tablet.",
            "Smart Integration: Seamlessly integrates with other smart home devices and systems.",
            "Cost Savings: Reduces energy consumption and potential damage costs through automation and early detection.",
            "Customizable Settings: Tailor the system to your specific needs and preferences.",
            "User-Friendly Interface: Easy-to-use interface for managing all smart home features."
          ],
          // amount: 2362.00,
          nestedCarousel: {
            id: 2,
            title: "Health Carousel",
            buttons: [
              { label: "Basic", content: "Content for Energy Option 1" },
              { label: "Advance", content: "Content for Energy Option 2" },
              { label: "Premium", content: "Content for Energy Option 3" },
              { label: "Ultimate", content: "Content for Energy Option 3" },
            ],
          },
        },
      ],
  },
];






































export const EstatePackageData = [
  {
    id: 1,
    
    name: 'Versatile Smart Home Plan',
    images: [
      'assets/img/Estate-Plan-Banner2/MainLogix Versatile a.png',
      'assets/img/Estate-Plan-Banner2/MainLogix Versatile c.png',
    ],
    items: [14, 26, 17, 24, 28, 18, 38, 30, 10, 31, 1, 2, 25, ], 
    description: ["Smart Door Locks: Modern security with automated access control",
      "Smart Cameras: 24/7 surveillance, keeping your property secure",
      "Motion Sensors: Alerts for unexpected movements, enhancing safety",
      " Integrated Ceiling Speakers: Immersive sound for a high-quality audio experience.", 
      "Media Rooms: Ultimate home cinema experience with smart controls",
      "Automated Lighting: Set the perfect ambiance for any mood or time",
      "Motorized Window Shades: Convenient control of natural light",
      "Automated Gates: Secure and easy entry with smart gate controls",
      "Smart Fire Alarm Systems: Alerts you via phone and house notifications for early fire detection.",
      "Intercom Systems via Google Mini Setup: Streamline visitor communication.", 
      "Smart Humidifiers: Maintain optimal air quality and humidity levels.", 
      "Smart Doorbells: Enhanced visitor management with intercom features.", 
      "Dynamic Staircase Lighting: Adds safety and elegance to your home",
      " Smart Fans and Humidifiers: Provides comfort and maintains air quality.",
  ],
  features: [
      "Gateway",
      "Switch",
      "Light Sensor",
      "Smoke Sensors",
      "Water Leak Sensor",
      "PIR Sensors",
      "Smart-Mainlogix Al Voice Assistant (free)",
      "Alexa Echo Dot 3rd Gen",
      "Door & Window Sensors",
      "Repeater with Adaptor Plug",
      "Alarm",
      "IR Sensors",
      "Smart Socket & AC Switch.",
  ],
    
    amount: 500.00 
  },
  
  {
    id: 2,
    name: 'Deluxe Smart Home Plan',
    images: [
      'assets/img/Estate-Plan-Banner2/MainLogix Advcd a.png',
      'assets/img/Estate-Plan-Banner2/MainLogix Advcd c.png',
    ],
    items: [14, 26, 17, 4, 9, 29, 5, 20, 24, 28, 18, 38, 30, 10, 31, 1, 2, 25,],
    description: [
      "Smart Door Locks: Modern security with automated access control.", 
      "Smart Cameras: 24/7 surveillance, keeping your property secure.",
      "Motion Sensors: Alert you of any unexpected movements, enhancing safety.",
      "Integrated Ceiling Speakers: Immerse yourself in high-quality sound.",
      "Media Rooms: Experience the ultimate home cinema with automated controls.",
      "Automated Lighting: Set the perfect ambiance for any mood or time.", 
      " Motorized Window Shades: Adjust natural light with a simple tap.",
      "Automated Gates: Make every entry a breeze with secure and easy access.",
      "Smart Fire Alarm Systems: Alerts you via phone and house notifications for early fire detection.",
      "Intercom Systems via Google Mini Setup: Streamline visitor communication.",
      "Smart Doorbells: Enhanced visitor management with intercom features.", 
      "Dynamic Staircase Lighting: Adds safety and elegance to your home.",
      "Smart Fans: Provides comfort and maintains optimal air quality.",
    ],
    features: [
      "Gateway",
      "Light Sensors",
      "Switch",
      "Indoor Cameras",
      "Al Voice Assistant Control",
      "Curtain/Blind Control",
      "Scene Control",
      "Air Conditioning Control",
      "TV Control with IR Sensor",
      "Smart Sockets",
      "Smoke Sensor",
      "Gas Sensor",
      "Faucets",
      "Water Leak Sensor",
      "Heat Detector",
      "Door & Window Sensors",
      "Smart Door Lock & Door Bell/Intercom"
    ],
  
    amount: 1500.00
  },

  
  {
    id: 3,
    name: 'Comprehensive Smart Home Plan',
    images: [
      'assets/img/Estate-Plan-Banner2/MainLogix comprehen a.png',
      'assets/img/Estate-Plan-Banner2/MainLogix comprehen c.png',
    ],
    items: [14, 26, 17, 4, 9, 29, 5, 20, 24, 28, 18, 38, 30, 10, 31, 1, 2, 25,],
    description: [
      "Smart Door Locks: Modern security with automated access control.", 
      "Smart Cameras: 24/7 surveillance, keeping your property secure.",
      "Motion Sensors: Alert you of any unexpected movements, enhancing safety.",
      "Integrated Ceiling Speakers: Immerse yourself in high-quality sound.", 
      "Media Rooms: Experience the ultimate home cinema with automated controls.",
      "Automated Lighting: Set the perfect ambiance for any mood or time.", 
      "Motorized Window Shades: Adjust natural light with a simple tap.",
      "Automated Gates: Make every entry a breeze with secure and easy access.",
      "Smart Fire Alarm Systems: Alerts you via phone and house notifications for early fire detection.",
      "Intercom Systems via Google Mini Setup: Streamline visitor communication.",
      "Smart Humidifiers: Maintain optimal air quality and humidity levels.",
      "Smart Doorbells: Enhanced visitor management with intercom features.",
      "Dynamic Staircase Lighting: Adds safety and elegance to your home.",
      "Smart Fans and Humidifiers: Provides comfort and maintains optimal air quality.",
    ],
    features: [
      "Gateway",
      "Light Sensors",
      "Switches",  
      "Indoor Cameras",
      "Al Voice Assistant Control",
      "Curtain/Blind Control",
      "Scene Control",
      "Smoke Sensor",
      "Gas Sensor",
      "Faucets",
      "Water Leak Sensor",
      "Heat Detector",
      "Door & Window Sensors",
      "Smart Door Lock & Door Bell/Intercom",
    ],
    
    amount: 3000.00
  },

  {
    id: 4,
    name: 'Superior Smart Home Plan',
    images: [
      'assets/img/Estate-Plan-Banner2/MainLogix superior a.png',
      'assets/img/Estate-Plan-Banner2/MainLogix superior c.png',
    ],
    items: [14, 26, 17, 4, 9, 29, 5, 20, 24, 28, 18, 23, 27, 13, 38, 30, 10, 31, 1, 2, 25,],
    description: [
      "Automated Home Theatre System: Experience cinema-quality sound and visuals with automated settings to enhance movie nights.",
      "Smart Kitchen Appliances Integration: Connect and automate operations of appliances like refrigerators, ovens, and dishwashers for efficiency and convenience.",
      "Automated Pet Care Solutions: Schedule feeding times and manage pet-related chores with smart devices.",
      "Garden and Lawn Irrigation Control: Automate watering schedules based on weather predictions to maintain a healthy garden while conserving water.",
      "Voice-Controlled Shopping Assistant: Use voice commands to add items to your shopping list or order directly online via connected platforms.",
      "Health and Wellness Monitoring: Integrate health devices to monitor vital signs and suggest lifestyle adjustments based on collected data.",
      "Solar Panel Integration: Monitor and manage energy production from solar panels, integrating it with your home's energy system for optimal usage.",
      "Intelligent Waste Management: Receive alerts when garbage bins are full and schedule pickups with local services automatically.",
      "Water Quality Monitoring: Keep track of water purity and safety in your home with sensors and receive recommendations for filtration adjustments.",
      "Automated Window Cleaning: Schedule and control automated window cleaning systems to maintain clear and clean windows without manual effort.",
      "Personalized Lighting Atmospheres: Create and save custom lighting atmospheres for different activities or moods, easily activated by voice or app.",
      "Advanced Home Networking Setup: Ensure optimal performance and security of your home network with automated traffic management and threat detection.",
      "Sleep Environment Optimization: Adjust bedroom conditions such as temperature, lighting, and sound to promote a healthy sleep cycle.",
      "Guest Management and Comfort Customization: Provide guests with customizable comfort settings in guest rooms, controllable via their own smartphones.",
      "Smart Mirror Displays: Use smart mirrors to display news, weather, health metrics, or personal schedules while preparing for your day."
    ],
    features: [
      "Gateway",
      "Light Sensors",
      "Switch",
      "Outdoor & Indoor Cameras",
      "Al Voice Assistant Control",
      "Curtain/Blind Control",
      "Scene Control",
      "Tap Control",
      "Air Conditioning Control",
      "TV Control with IR Sensor",
      "Smart Sockets",
      "Smoke Sensor",
      "Gas Sensor",
      "Faucets",
      "Water Leak Sensor",
      "Heat Detector",
      "Door & Window Sensors",
      "Smart Door Lock & Door Bell/Intercom",
      "PIR Sensors",
      "Temperature Sensors",
      "Fire Alarm",
      "Smart Doorbell with Camera",
      "Robot Vacuum",
      "Automatic Gate Opener",
      "Staircase Lighting",
      "Speaker and Sound System",
      "Motion Sensors",
      "Tablet Control Dashboard"
    ],
  
    amount: 3000.00
  },

  {
    id: 5,
    name: 'Luxury Smart Home Plan',
    images: [
      'assets/img/Estate-Plan-Banner2/MainLogix Utimate a.png',
      'assets/img/Estate-Plan-Banner2/MainLogix Utimate c.png',
    ],
    items: [14, 26, 33, 17, 4, 9, 29, 5, 20, 24, 28, 18, 23, 27, 13, 38, 30, 10, 31, 1, 2, 25,],
    description: [
      "Automated Home Entry: Secure access for residents and recognized visitors without physical keys.",
      "Energy Management: Optimize the use of lighting, heating, and appliances to reduce utility bills.",
      "Personalized Comfort Settings: Automatically adjust temperature and lighting to match individual preferences.",
      "Enhanced Security: Real-time surveillance and alerts for any unusual activity.",
      "Convenience: Manage all aspects of your home environment from anywhere, anytime.",
      "Safety: Immediate notifications and actions in response to smoke, gas, or unauthorized entry.",
      "Efficiency: Reduce energy consumption with intelligent device management.",
      "Remote Access: Control and monitor your home remotely via smartphone or tablet.",
      "Voice Control Integration: Simplify tasks with voice-activated commands across devices.",
      "Scene Customization: Create and activate scenarios for activities such as waking up, leaving home, or going to bed.",
      "Automated Alerts: Stay informed about the status of security, appliances, and energy use.",
      "Maintenance Alerts: Automated notifications for device maintenance or failures.",
      "Entertainment Control: Seamlessly manage media across different rooms.",
      "Visitor Management: Screen and communicate with visitors remotely for added security.",
      "Cleaning Automation: Schedule and manage cleaning tasks with minimal manual input.",
      "Lifestyle Integration: Enhance daily routines with intuitive technology that adapts to your lifestyle needs."
    ],
    features: [
      "Gateway",
      "Light Sensors",
      "Switch",
      "Outdoor & Indoor Cameras",
      "Al Voice Assistant Control",
      "Curtain/Blind Control",
      "Scene Control",
      "Tap Control",
      "Air Conditioning Control",
      "TV Control with IR Sensor",
      "Smart Sockets",
      "Smoke Sensor",
      "Gas Sensor",
      "Faucets",
      "Water Leak Sensor",
      "Heat Detector",
      "Door & Window Sensors",
      "Smart Door Lock & Door Bell/Intercom",
      "PIR Sensors",
      "Temperature Sensors",
      "Fire Alarm",
      "Smart Doorbell with Camera",
      "Robot Vacuum",
      "Automatic Gate with Plate Number Recognition",
      "Staircase Lighting",
      "Speaker and Sound System",
      "Motion Sensors",
      "Alexa Echo Dot 4th Gen",
      "Repeater with Adaptor Plug",
      "Tablet Control Dashboard"
    ],
    
    amount: 4500.00
  },
  
];

export const relatedProductsData = [
 
  {
    id: 1,
    image: ["assets/img/items/Adaptor-Socket/Socket/Mainlogix Product soc1.png",
            "assets/img/items/Adaptor-Socket/Socket/Mainlogix Product soc2.png",
            "assets/img/items/Adaptor-Socket/Socket/Mainlogix Product soc3.png",
            "assets/img/items/Adaptor-Socket/Socket/Mainlogix Product soc4.png",
            
            ],
    name: "Adaptor Socket",
    description: [
      "The Smart Adaptor Socket is a versatile device designed to bring smart capabilities to your traditional electrical outlets.",
      "With this adaptor, you can remotely control any connected appliance through a mobile app or voice commands, offering convenience and enhanced energy management.",
    ],
    features: [
        "Remote Control: Turn devices on or off from anywhere using a smartphone app.",
        "Voice Control: Compatible with major voice assistants like Alexa, Smart by MainLogix, Google Assistant, and Siri.",
        "Energy Monitoring: Track energy usage of connected devices to optimize energy consumption.",
        "Scheduling: Set timers and schedules for automatic operation of appliances.",
        "Automation: Create custom automation rules to trigger actions based on specific conditions (e.g., turn on a lamp when motion is detected).",
        "Compact Design: Easily plugs into any standard outlet without blocking adjacent sockets.",
        "Safety Features: Built-in surge protection and overload prevention to safeguard your devices."
    ],
    applications: [
        "Perfect for turning off lights, fans, or heaters after leaving home.",
        "Schedule coffee makers or other appliances to start at specific times.",
        "Monitor energy consumption to reduce electricity bills.",
        "Enhance home security by controlling lights and devices while away.",
        "Automate morning routines by having appliances turn on or off based on your daily schedule."
    ],

    
    amount: 18.00,
    kg: 0.40,
},
  {
      id: 2,
      image: ["assets/img/items/Alarm-Sensor/Alarm-Sensor/Mainlogix Product Alarm2.png",
              "assets/img/items/Alarm-Sensor/Alarm-Sensor/Mainlogix Product Alarm2.png",
            
            ],
      name: "SOS",
      description: [
        "The Smart FOB Button is a compact, portable device designed for quick and easy access to a variety of smart home functions.",
        "With a single press, it allows you to control multiple devices, trigger automation routines, and send alerts, all from the palm of your hand and can be used by elderly people."
      ],
      features: [
        "One-Touch Control: Instantly control smart home devices such as lights, locks, and alarms with a single button press.",
        "Customizable Actions: Program multiple actions or routines to a single button, such as turning off all lights or locking all doors.",
        "Emergency Alerts: Send emergency notifications to designated contacts with a long press and can be used for the Anti Fall system.",
        "Portable Design: Small and lightweight, easy to carry on a keychain or in a pocket.",
        "Long Battery Life: Designed to last for months on a single battery, ensuring reliability.",
        "Durable Construction: Built to withstand daily wear and tear.",
        "Voice Assistant Integration: Compatible with major voice assistants (Smart by MainLogix) for added convenience.",
        "Automation Integration: Trigger complex automation routines, like setting the perfect movie night ambiance with a single press."
      ],
    
      applications: [
        "Ideal for elderly individuals who may need quick access to emergency help.",
        "Simplifies daily routines by enabling one-touch control of multiple devices.",
        "Enhances home security by allowing instant activation of security systems.",
        "Convenient for anyone needing quick and easy control of their smart home devices on the go."
      ],
      amount: 30.00,
      kg: 0.40,
  },
  {
    id: 3,
    image: ["assets/img/items/Attendace-System/Attendance-Sys/Mainlogix Product Attendance sys1.png",
            "assets/img/items/Attendace-System/IMG_6989.PNG",
            "assets/img/items/Attendace-System/IMG_6987.PNG",
            
            
            ],
    name: "Attendace System",
    description: [
      "Efficient and Secure Employee Attendance Management"
    ],
    features: [
      "Employee Data Management: Easily input and edit employee names. Manage and update employee records with minimal effort.",
      "Multi-Mode Verification: Palm Recognition, Facial Recognition, Fingerprint Scanning, Card Access, Password Entry. Use any combination of these methods for enhanced security.",
      "Capacity: Supports up to 1000 face records. Stores 1000 fingerprint records with the most competitive pricing. Accommodates up to 3000 fingerprints, making it suitable for various enterprises and companies.",
      "Connectivity: GPRS, 3G, 4G, WiFi: Flexible connectivity options to suit different environments. Backup Battery: Ensures uninterrupted operation during power outages.",
      "Data Management: USB Pen Drive: Easily download or upload reports, TCP/IP or Wireless WiFi: Convenient network options for data transfer. Reports can be generated in Excel or TXT formats.",
      "Software Integration: Free Software: Provided at no additional cost. Free SDK: Integrate our biometric devices with your existing software applications."
    ],
    benefits: [
      "Enhanced Security: Multiple verification methods ensure only authorized access.",
      "Scalability: Accommodates a large number of employees, suitable for growing businesses.",
      "Flexibility: Various connectivity options and backup battery ensure reliability.",
      "Ease of Use: Simple data management and reporting make administrative tasks easier.",
      "Cost-Effective: Competitive pricing with comprehensive features."
    ],
    applications: [
      "Small to Large Enterprises: Ideal for companies of all sizes needing a reliable attendance management solution.",
      "Secure Facilities: Perfect for locations requiring enhanced security measures.",
      "Remote Workplaces: Flexible connectivity options make it suitable for diverse working environments."
    ],
    amount: 150.00,
    kg: 0.40,
  },
  {
    id: 4,
    image: ["assets/img/items/Camera/Camera/Mainlogix Product cam5.png",
            
            
            ],
    name: "Intelligent Camera",
    description: [
      "Advanced Surveillance for Enhanced Security"
    ],
    features: [
      "High-Definition Video: Captures clear, crisp images and videos in **1080p Full HD. Provides detailed monitoring for better security.",
      "Intelligent Motion Detection: Detects movement with precision. Sends instant alerts to your mobile device for quick response.",
      "Two-Way Audio: Built-in microphone and speaker. Enables real-time communication with visitors or intruders.",
      "Night Vision: Infrared LEDs provide clear video in complete darkness. Ensures 24/7 surveillance.",
      "Remote Access: Access live video feeds from anywhere using a mobile app. Stay connected and monitor your property remotely.",
      "Cloud and Local Storage: Supports cloud storage for secure, off-site backups. Offers local storage options via SD card for easy access to recorded footage.",
      "Smart Integration: Compatible with popular smart home systems like Alexa, Smart by Mainlogix, and Google Assistant. Allows voice control and seamless integration with other smart devices.",
      "Weatherproof Design: Built to withstand various weather conditions. Ideal for both indoor and outdoor use.",
      "Automation Features: Automate recordings based on specific triggers such as motion or sound detection. Customize alerts and actions to suit your security needs."
    ],
    benefits: [
      "Enhanced Security: Provides comprehensive surveillance with high-definition video and intelligent motion detection.",
      "24/7 Monitoring: Night vision and remote access ensure continuous coverage.",
      "Easy Communication: Two-way audio facilitates interaction with anyone on your property.",
      "Flexible Storage: Choose between cloud and local storage options for your recordings.",
      "Smart Home Integration: Integrates seamlessly with other smart home devices for enhanced automation and control.",
      "Durable and Reliable: Weatherproof design ensures long-lasting performance in any environment."
    ],
    applications: [
      "Home Security: Monitor your home and keep your family safe with real-time alerts and remote access.",
      "Business Surveillance: Keep an eye on your business premises, both indoors and outdoors, with robust security features.",
      "Property Management: Ideal for landlords and property managers to ensure the safety and security of multiple properties."
    ],
    amount: 40.00,
    kg: 0.40,
  },
  {
    id: 5,
    image: ["assets/img/items/Camera/Camera/Mainlogix Product cam7.png",
            "assets/img/items/Camera/IMG_7029.JPG",
            
            ],
    name: "Door Bell",
    description: [
      "Enhance Your Home's Security and Convenience"
    ],
    features: [
      "High-Definition Video: Captures clear, detailed video in 1080p Full HD. Provides a clear view of visitors at your doorstep.",
      "Two-Way Audio: Built-in microphone and speaker. Enables real-time communication with visitors from your smartphone or tablet.",
      "Motion Detection: Advanced sensors detect movement near your door. Sends instant alerts to your mobile device for quick response.",
      "Night Vision: Infrared LEDs provide clear video in low-light conditions. Ensures visibility and security around the clock.",
      "Remote Access: Access live video and recordings from anywhere using a mobile app. Stay connected and monitor your entrance remotely.",
      "Smart Integration: Compatible with popular smart home systems like Alexa, Smart by Mainlogix, and Google Assistant. Allows voice control and seamless integration with other smart devices.",
      "Cloud and Local Storage: Supports cloud storage for secure, off-site backups. Offers local storage options via SD card for easy access to recorded footage.",
      "Easy Installation: Wireless setup with simple mounting options. Quick and hassle-free installation process.",
      "Automated Responses: Customize automatic responses and actions when motion is detected or when the doorbell is pressed. Enhance security and convenience with personalized settings."
    ],
    benefits: [
      "Enhanced Security: Provides high-definition video and motion detection to keep your home secure.",
      "24/7 Monitoring: Night vision and remote access ensure continuous surveillance.",
      "Easy Communication: Two-way audio allows you to speak with visitors without opening the door.",
      "Smart Home Integration: Integrates seamlessly with other smart devices for enhanced automation and control.",
      "Flexible Storage: Choose between cloud and local storage options for your recordings.",
      "Convenient Installation: Easy to set up and use, with wireless connectivity and straightforward installation."
    ],
    applications: [
      "Home Security: Monitor your front door and communicate with visitors, delivery personnel, or potential intruders in real-time.",
      "Package Protection: Ensure safe delivery and prevent package theft by monitoring deliveries.",
      "Visitor Management: Know who is at your door even when you are not home, and respond accordingly.",
      "Elderly and Disabled Support: Allow elderly or disabled family members to see and speak with visitors without needing to get up."
    ],
    
    amount: 50.00,
    kg: 0.40,
  },
  {
    id: 6,
    image: ["assets/img/items/CO-sensor/CO-Sensor/Grandeur  Prdt hs 9.png",
            
            ],
    name: "Carbon Monoxide (CO) Sensor",
    description: [
      "Ensure Safety with Reliable CO Detection"
    ],
    features: [
      "Accurate Detection: Uses advanced electrochemical sensors to detect carbon monoxide levels with high precision. Provides reliable monitoring to ensure the safety of your home.",
      "Real-Time Alerts: Sends instant alerts to your smartphone or tablet when CO levels exceed safe thresholds. Audible alarms within the device ensure immediate awareness.",
      "Smart Integration: Compatible with popular smart home systems like Alexa, Smart by Mainlogix and Google Assistant. Allows integration with other smart devices for enhanced automation and control.",
      "LED Indicator: Visual LED indicator provides a clear status of CO levels. Changes color to signify normal, warning, and danger levels.",
      "Battery Backup: Equipped with a long-lasting battery backup to ensure continuous monitoring during power outages. Low battery alerts to ensure timely replacement.",
      "Mobile App Access: Monitor CO levels and receive alerts remotely via a dedicated mobile app. View historical data and trends to assess the safety of your environment.",
      "Easy Installation: Simple mounting options for wall or ceiling installation. Wireless setup for hassle-free installation and relocation.",
      "Self-Testing and Maintenance: Automated self-testing feature ensures the sensor is functioning correctly. Alerts for maintenance or sensor replacement to ensure continued reliability."
    ],
    benefits: [
      "Enhanced Safety: Provides early detection of carbon monoxide to prevent poisoning and ensure a safe living environment.",
      "24/7 Monitoring: Continuous monitoring and real-time alerts ensure constant protection.",
      "Convenient Integration: Seamlessly integrates with other smart devices for automated responses and enhanced safety measures.",
      "User-Friendly: Easy to install and use, with clear visual and audible indicators for immediate awareness.",
      "Reliable Performance: Advanced sensors and battery backup ensure accurate and uninterrupted monitoring."
    ],
    applications: [
      "Home Safety: Detect and alert residents of dangerous carbon monoxide levels, ensuring timely evacuation and response.",
      "Smart Home Automation: Integrate with other smart home devices to trigger actions like turning off gas appliances or activating ventilation systems.",
      "Elderly Care: Provide additional safety for elderly individuals who may be more vulnerable to CO poisoning.",
      "Peace of Mind: Monitor CO levels remotely and receive instant alerts, ensuring peace of mind whether you are at home or away."
    ],
    amount: 29.00,
    kg: 0.40,
  },
  {
    id: 7,
    image: ["assets/img/items/Curtain-and-Blind-control/CurtainBlind-Ctrl/Mainlogix Product blind2.png",
            "assets/img/items/Curtain-and-Blind-control/CurtainBlind-Ctrl/Mainlogix Product blind1.png",
            
            ],
    name: "Curtain & Blind Control",
    description: [
      "Effortless Control for Ultimate Comfort and Convenience"
    ],
    features: [
      "Automated Operation: Automatically open and close curtains and blinds based on your schedule or environmental conditions. Customize settings to control the amount of natural light entering your space.",
      "Voice Control: Compatible with popular voice assistants like Alexa, Smart by Mainlogix, Google Assistant, and Siri. Use simple voice commands to open, close, or adjust curtains and blinds.",
      "Mobile App Control: Control curtains and blinds remotely using a dedicated mobile app. Set schedules, adjust settings, and monitor status from anywhere.",
      "Integration with Smart Home Systems: Seamlessly integrates with other smart home devices for coordinated automation. Create scenes and routines that synchronize with lighting, temperature control, and security systems.",
      "Light and Temperature Sensors: Built-in sensors detect changes in light and temperature to automatically adjust curtains and blinds. Helps regulate indoor temperature and reduce energy consumption.",
      "Customizable Schedules: Set specific times for curtains and blinds to open or close. Adapt schedules to match your daily routine or seasonal changes.",
      "Manual Override: Easily override automated settings with manual controls. Use the remote control or the app to adjust curtains and blinds at any time.",
      "Silent Motor Operation: Equipped with a quiet motor to ensure smooth and noiseless operation. Ideal for bedrooms, living rooms, and offices.",
      "Safety Features: Includes obstacle detection to prevent damage or injury. Child-safe design with no exposed cords or chains.",
      "Easy Installation: Simple DIY installation with step-by-step instructions. Compatible with a wide range of curtain and blind types."
    ],
    benefits: [
      "Convenience: Effortlessly control curtains and blinds with voice commands, mobile app, or automated schedules.",
      "Energy Efficiency: Optimize natural light and regulate indoor temperature to save on energy costs.",
      "Enhanced Privacy: Automatically adjust curtains and blinds to maintain privacy throughout the day.",
      "Improved Comfort: Create a comfortable living environment by managing sunlight and glare.",
      "Seamless Integration: Integrate with other smart home devices for a cohesive and automated home experience."
    ],
    applications: [
      "Morning Wake-Up: Schedule your bedroom curtains to gradually open in the morning, letting in natural light to wake you gently.",
      "Privacy: Ensure your living room blinds close automatically at dusk for privacy and security.",
      "Energy Savings: Adjust blinds based on sunlight and temperature to reduce heating and cooling costs.",
      "Remote Control: Close curtains remotely when you’re away from home to keep your space cool and secure.",
      "Comfort: Use voice commands to adjust blinds without getting up from your couch or bed."
    ],
    amount: 150.00,
    kg: 0.40,
  },
  {
    id: 8,
    image: ["assets/img/items/Dimmer-knob-and-Scene/Dimmer-knob/Mainlogix prdt Dimmer.png",
            
            ],
    name: "Dimmer Knob",
    description: [
      "Seamless Control for Perfect Lighting Ambiance"
    ],
    features: [
      "Smooth Dimming: Adjust lighting levels smoothly to create the perfect ambiance for any occasion. Supports both LED and incandescent bulbs for versatile use.",
      "Touch-Sensitive Control: Intuitive touch control for precise dimming adjustments. Easy-to-use interface suitable for all ages.",
      "Voice Control: Compatible with popular voice assistants like Alexa, Smart by Mainlogix, Google Assistant, and Siri. Control lighting levels with simple voice commands for hands-free convenience.",
      "Mobile App Integration: Adjust lighting remotely using the dedicated mobile app. Set schedules, create lighting scenes, and monitor energy usage from anywhere.",
      "Customizable Schedules: Program lighting schedules to match your daily routine. Automatically dim lights at night or brighten them in the morning.",
      "Scene Settings: Create and save personalized lighting scenes for different activities, such as reading, dining, or relaxing. Easily switch between scenes with a tap or voice command.",
      "Energy Efficiency: Optimize energy consumption by dimming lights when full brightness is not needed. Monitor and reduce energy usage through the mobile app.",
      "Retrofit Friendly: Designed to fit standard light switch plates for easy installation. Compatible with most existing home wiring systems.",
      "Manual Override: Provides a physical knob for manual dimming control in addition to touch and app controls. Ensures usability even if smart features are temporarily unavailable.",
      "Safety Features: Includes surge protection and overheating safeguards. Designed with child safety in mind, featuring no exposed electrical components."
    ],
    benefits: [
      "Ambiance Control: Easily adjust lighting to create the desired mood for any room or occasion.",
      "Convenience: Control lights with a touch, voice command, or remotely via a mobile app.",
      "Energy Savings: Reduce electricity usage by dimming lights to the appropriate level.",
      "Flexibility: Supports a wide range of light bulbs and is easy to install in any home.",
      "Enhanced Comfort: Customize lighting scenes to enhance comfort and functionality in your living space."
    ],
    applications: [
      "Morning Routine: Gradually increase lighting in the bedroom to gently wake up.",
      "Reading Nook: Set the perfect lighting level for reading without straining your eyes.",
      "Movie Night: Dim the lights to create a cozy, cinema-like atmosphere.",
      "Dinner Parties: Adjust lighting to create a warm and inviting dining experience.",
      "Remote Access: Dim or brighten lights remotely to enhance security and save energy while away from home."
    ],
    amount: 45.00,
    kg: 0.40,
    
  },
  {
    id: 9,
    image: ["assets/img/items/Dimmer-knob-and-Scene/IMG_1658.JPG",
            "assets/img/items/Dimmer-knob-and-Scene/IMG_1657.JPG",
            
            ],
    name: "Smart Scenes and Switch",
    description: [
      "Effortless Control for Customized Home Automation"
    ],
    features: [
      "Customizable Scenes: Create personalized scenes to automate multiple devices with a single command. Examples include \"Morning Routine,\" \"Movie Night,\" \"Dinner Party,\" and \"Away Mode.\"",
      "One-Touch Control: Activate pre-set scenes with a single touch on the switch. Simplifies the control of multiple smart devices simultaneously.",
      "Voice Integration: Compatible with Alexa, Smart by MainLogix, Google Assistant, and Siri for voice-activated scene control. Conveniently manage scenes without lifting a finger.",
      "Mobile App Integration: Configure and control scenes from anywhere using the dedicated mobile app. Set schedules, adjust scenes, and monitor device status remotely.",
      "Flexible Scheduling: Automate scenes based on time of day, day of the week, or specific events. Enhances convenience and energy efficiency.",
      "Multi-Device Compatibility: Supports a wide range of smart home devices, including lights, thermostats, blinds, and security systems. Ensures seamless integration with existing smart home ecosystems.",
      "Scene Customization: Tailor scenes to suit your lifestyle, preferences, and routine. Combine lighting, temperature, security, and entertainment settings into one cohesive experience.",
      "Manual Override: Includes a physical switch for manual scene activation and deactivation. Ensures functionality even if smart features are temporarily unavailable.",
      "Energy Efficiency: Optimize energy usage by scheduling scenes that reduce power consumption during low-usage periods. Monitor and adjust energy settings through the mobile app.",
      "Safety Features: Equipped with surge protection and overheating safeguards. Ensures safe and reliable operation."
    ],
    benefits: [
      "Convenience: Simplifies the management of multiple devices with one-touch control and voice commands.",
      "Customization: Personalizes your smart home experience by creating scenes tailored to your needs.",
      "Energy Savings: Enhances energy efficiency by automating device usage according to schedules and scenes.",
      "Flexibility: Easily integrates with a variety of smart home devices and systems.",
      "Enhanced Comfort: Streamlines daily routines and improves overall home comfort."
    ],
    applications: [
      "Morning Routine: Automatically turn on lights, adjust the thermostat, and play your favorite morning playlist with a single touch or voice command.",
      "Movie Night: Dim the lights, close the blinds, and set the perfect temperature for a cozy movie-watching experience.",
      "Dinner Party: Create an inviting atmosphere by adjusting lighting and music to match the occasion.",
      "Away Mode: Activate security features, adjust lighting, and manage energy usage while you're away from home.",
      "Bedtime: Lower the lights, adjust the thermostat, and ensure all doors are locked with a single command before going to bed."
    ],
    amount: 200.00,
    kg: 0.40,
  },
  {
    id: 10,
    image: ["assets/img/items/Door-Window-Sensor/DoorWindow-Snsor/Mainlogix Product door4.png",
            "assets/img/items/Door-Window-Sensor/DoorWindow-Snsor/Mainlogix Product door1.png",
            "assets/img/items/Door-Window-Sensor/DoorWindow-Snsor/Mainlogix Product door2.png",
            "assets/img/items/Door-Window-Sensor/DoorWindow-Snsor/Mainlogix Product door3.png",
            
            ],
    name: "Door and Window Sensor",
    description: [
      "Enhanced Security and Automation for Your Smart Home"
    ],
    features: [
      "Open/Closed Detection: Detects whether doors and windows are open or closed in real-time. Provides instant alerts to your smart device when status changes.",
      "Versatile Application: Suitable for all types of doors and windows in homes, offices, and businesses. Ensures comprehensive security coverage.",
      "Wireless Connectivity: Operates wirelessly, connecting seamlessly to your smart home network. Easy installation without the need for complex wiring.",
      "Battery Powered: Long-lasting battery life ensures continuous operation without frequent replacements. Low battery notifications for timely maintenance.",
      "Compact Design: Sleek and compact sensor design blends seamlessly with your home décor. Discreet placement on doors and windows for minimal visibility.",
      "Smart Home Integration: Works with popular smart home platforms like Alexa, Smart by Mainlogix, Google Assistant, and others. Enables voice control and integration with other smart devices.",
      "Automation Capabilities: Automate connected devices based on door/window status changes. Create scenarios such as automatically turning on lights when a door opens.",
      "Security Alerts: Receive instant notifications on your smartphone for unauthorized access attempts. Enhances home security and peace of mind.",
      "Tamper Detection: Alerts you if someone attempts to tamper with the sensor. Ensures reliable security monitoring.",
      "Remote Monitoring: Check the status of doors and windows remotely through a dedicated mobile app. Monitor your home’s security from anywhere."
    ],
    benefits: [
      "Enhanced Security: Monitor access points and receive alerts for enhanced home protection.",
      "Convenience: Automate smart home devices based on door/window status changes.",
      "Integration: Seamlessly integrates with existing smart home ecosystems.",
      "Energy Efficiency: Improve energy efficiency by automating heating/cooling systems based on door/window status.",
      "Easy Installation: Simple setup with wireless operation and long-lasting battery."
    ],
    applications: [
      "Home Security: Receive alerts when doors or windows are opened unexpectedly, enhancing security.",
      "Energy Management: Automatically adjust thermostat settings when windows are opened to conserve energy.",
      "Presence Simulation: Create the illusion of occupancy by automating lights based on door openings when away from home.",
      "Child Safety: Monitor children’s access to restricted areas by receiving alerts when doors or windows are opened."
    ],
    amount: 9.00,
    kg: 0.40,
  },
  {
    id: 11,
    image: ["assets/img/items/Gas-Sensor/Gas-Sensor/Mainlogix Gas sensor.png",
            "assets/img/items/Gas-Sensor/IMG_3930.JPG",
            
            ],
    name: "Gas Sensor",
    description: [
      "Enhanced Safety for Your Home"
    ],
    features: [
      "Gas Detection: Detects the presence of hazardous gases such as natural gas (methane), propane, butane, and carbon monoxide (CO). Provides real-time monitoring to ensure early detection of leaks.",
      "Alarm Notifications: Sounds an audible alarm and sends instant notifications to your smartphone upon detecting gas leaks. Alerts you to take immediate action to prevent potential hazards.",
      "Versatile Placement: Suitable for installation in kitchens, utility rooms, basements, and other areas prone to gas leaks. Compact design allows for discreet placement.",
      "Continuous Monitoring: Monitors gas levels continuously, providing ongoing protection day and night. Ensures round-the-clock safety for your household.",
      "Smart Home Integration: Integrates with popular smart home platforms such as Alexa, Smart by MainLogix, Google Assistant, and others. Enables voice commands and automation with other smart devices.",
      "Remote Access and Control: Check gas levels and receive alerts remotely via a dedicated mobile app. Take action from anywhere to ensure the safety of your home.",
      "Easy Installation: Simple DIY installation with included mounting hardware and instructions. No professional wiring required, operates on battery or mains power.",
      "Low Maintenance: Long lifespan with minimal maintenance required. Low battery notifications ensure continuous operation.",
      "Emergency Response Capability: Provides critical information to emergency services in case of a gas leak. Enhances emergency response times for quick mitigation."
    ],
    benefits: [
      "Safety Assurance: Early detection of gas leaks to prevent potential hazards and ensure the safety of your family.",
      "Convenience: Receive real-time alerts on your smartphone for prompt action, even when you're away from home.",
      "Integration: Seamlessly integrates into your smart home ecosystem for enhanced automation and control.",
      "Peace of Mind: Continuous monitoring provides peace of mind knowing your home is protected around the clock."
    ],
    applications: [
      "Kitchen Safety: Monitor gas levels in the kitchen to prevent accidents during cooking or appliance use.",
      "Utility Room Protection: Detect leaks from gas-powered appliances like water heaters or furnaces in utility areas.",
      "Basement Security: Ensure safe gas levels in basement areas prone to gas accumulation.",
      "Vacation Homes: Monitor gas levels remotely in vacation homes to prevent issues during periods of absence."
    ],
    amount: 22.00,
    kg: 0.40,
  },
  {
    id: 12,
    image: ["assets/img/items/Smart-Pill-dispenser/dalle-20hsOhoMJY.png",
            "assets/img/items/Smart-Pill-dispenser/dalle-mzFsKDswKv.png",
            
            ],
    name: "Smart Pill Dispenser",
    description: [
      "Efficient Medication Management"
    ],
    features: [
      "Scheduled Dispensing: Automatically dispenses pills according to preset schedules, ensuring medication adherence. Ideal for elderly individuals or patients with complex medication regimens.",
      "Customizable Alerts: Sends notifications and alarms when it's time to take medication. Alerts caregivers or family members if doses are missed.",
      "Secure Storage: Safely stores and dispenses pills in a locked compartment. Prevents unauthorized access to medications.",
      "Easy Refill System: Simplifies refilling with removable pill trays or cartridges. Ensures medications are always stocked and ready.",
      "User-Friendly Interface: Intuitive controls and a clear display for easy programming and operation. Suitable for seniors and individuals with limited dexterity.",
      "Companion Mobile App: Allows remote monitoring of medication adherence and dispenser status. Enables caregivers to manage schedules and receive alerts.",
      "Backup Power Option: Includes battery backup to ensure dispensing schedules are maintained during power outages. Provides continuous functionality without interruption.",
      "Safety Features: Alerts for medication refills to avoid running out of essential medications. Ensures accurate dosage with programmable dispensing settings.",
      "Compact Design: Space-saving design fits neatly on countertops or bedside tables. Blends seamlessly with home decor."
    ],
    benefits: [
      "Promotes Independence: Enables individuals to manage their medications independently.",
      "Enhances Adherence: Reduces the risk of missed doses and improves overall medication compliance.",
      "Peace of Mind: Provides caregivers with reassurance through remote monitoring and alerts.",
      "Safe Storage: Secures medications against tampering and accidental overdose."
    ],
    applications: [
      "Elderly Care: Assists seniors in maintaining their medication schedules without supervision.",
      "Chronic Illness Management: Supports patients with chronic conditions who require frequent medication doses.",
      "Caregiver Support: Helps caregivers monitor and manage medication routines remotely."
    ],
    amount: 60.00,
    kg: 0.40,
  },
  {
    id: 13,
    image: ["assets/img/items/Gate-Opener/Gate-Opener/Mainlogix Product Gate1.png",
            
            ],
    name: "Smart Gate Controller",
    description: [ "Smart Gate Opener by GrandeurSmart" ],
    features: [
      "Remote Access: Open and close gates from anywhere using a smartphone app or remote control. Convenient for homeowners and property managers.",
      "Compatibility: Works with various types of gates including swing gates, sliding gates, and garage doors. Adaptable to different gate mechanisms and sizes.",
      "Voice Control Integration: Compatible with voice assistants like Amazon Alexa, Smart by MainLogix, or Google Assistant for hands-free operation. Adds convenience and accessibility.",
      "Security Features: Secure access control with encrypted communication protocols. Provides peace of mind with tamper-resistant features.",
      "Guest Access Management: Issue temporary access codes or tokens for visitors and service providers. Manage access permissions easily.",
      "Activity Logs: Keeps a record of gate activity including openings and closings. Helps monitor usage and security.",
      "Battery Backup: Includes backup power option to ensure functionality during power outages. Maintains gate operation without interruption.",
      "Integration Capabilities: Interfaces with smart home systems and security platforms for enhanced automation. Enables comprehensive home management solutions.",
      "Easy Installation: Simple setup with wireless connectivity options (Wi-Fi, Bluetooth) or wired connections (Ethernet). DIY-friendly installation process."
    ],
    benefits: [
      "Convenience: Open gates remotely from your smartphone, enhancing accessibility and convenience.",
      "Security: Secure access control with encrypted technology and activity monitoring.",
      "Flexibility: Compatible with different gate types and sizes, offering versatile application.",
      "Integration: Works seamlessly with smart home systems for enhanced automation and control."
    ],
    applications: [
      "Residential: Homeowners can manage gate access for family members and guests remotely.",
      "Commercial: Property managers control access for tenants, deliveries, and service providers efficiently.",
      "Security: Enhances overall property security by managing access and monitoring gate activity."
    ],
    amount: 200.00,
    kg: 0.40,
  },
  {
    id: 14,
    image: ["assets/img/items/Gateway/grdnr_prdt1.png",
            "assets/img/items/Gateway/grdnr prdt 3.png",
            "assets/img/items/Gateway/grdnr prdt 2.png",
            
            ],
    name: "Gateway",
    description:[ "The GrandeurSmart Gateway by Mainlogix offers advanced features for seamless connectivity and intelligent control, transforming your home into a smart environment."
          ],
    features: [
      "Backup Battery: Ensures uninterrupted functionality during power outages.",
      "Alternative Internet with SIM Card Slot: Supports alternative internet sources through a SIM card slot for continuous connectivity.",
      "Hotspot Sharing: Transforms into a hotspot, sharing internet access with devices throughout your home.",
      "Artificial Intelligence Integration: Utilizes advanced AI for intelligent decisions and adaptive smart home automation.",
      "SMART Voice Personal Assistant - Mainlogix: A customizable voice-controlled assistant for effortless smart home device management.",
      "Local Control: Manage smart home devices locally without an internet connection.",
    "Mobile App: Control and monitor devices remotely via the dedicated mobile app.",
    "Interoperability: Supports over 100,000 devices from various manufacturers for flexible smart home customization.",
    "Privacy: Robust privacy features ensure secure management of data and device interactions.",
    "Experience the future of intelligent living with the GrandeurSmart Gateway by Mainlogix, offering innovation, simplicity, connectivity, and personalized control.",

    ],
    amount: 163.00,
    kg: 0.40,
  },
  {
    id: 15,
    image: ["assets/img/items/Heat-Detector/Heat-Detector/Mainlogix Product heat dect1.png",
            "assets/img/items/Heat-Detector/IMG_7006.jpg",
            
            ],
    name: "Heat Detector",
    description:[ "A heat detector is a specialized sensor used in fire alarm systems to detect changes in temperature indicative of fire or overheating. Unlike smoke detectors that sense particles of combustion, heat detectors respond to temperature increases beyond preset thresholds, making them ideal for environments where smoke detectors may not be suitable, such as kitchens or garages."],
    features: [
      "Temperature Sensing: Monitors ambient temperature and detects rapid increases.",
      "Fixed Temperature vs. Rate-of-Rise: Available in two primary types: Fixed Temperature activates when the temperature exceeds a preset level (e.g., 135°F or 57°C). Rate-of-Rise activates if the temperature rises rapidly (e.g., more than 15°F per minute).",
      "Compatibility: Integrates with smart home systems for remote monitoring and alerts.",
      "Reliability: Provides early warning to occupants before smoke or flames are visible.",
      "Battery Backup: Ensures continuous operation during power outages.",
      "Interconnectivity: Can be interconnected with other heat detectors or smoke alarms for comprehensive coverage.",
      "Tamper Resistance: Designed to resist tampering and ensure reliable operation.",
      "Easy Installation: Typically installed on ceilings or high walls for optimal temperature detection."
    ],
    benefits: [
      "Early Detection: Provides early warning of fire or overheating conditions.",
      "Complement to Smoke Detectors: Enhances overall fire detection capabilities alongside smoke alarms.",
      "Safety Enhancement: Helps protect property and occupants by triggering timely alerts.",
      "Integration: Enables integration into smart home systems for remote monitoring and management."
    ],
    applications: [
      "Residential: Installed in kitchens, garages, and utility rooms to detect fires or appliance malfunctions.",
      "Commercial: Used in warehouses, factories, and offices where smoke detectors may be ineffective.",
      "Industrial: Critical for detecting overheating in industrial machinery and equipment."
    ],
  
    amount: 20.00,
    kg: 0.40,
  },
  {
    id: 16,
    image: ["assets/img/items/Human-Presence/Human-Protect/Mainlogix_Product_Human1.png",
            
            ],
    name: "Human Presence Sensor",
    description: ["A human presence sensor is a specialized sensor technology that detects the presence of people using methods such as infrared (IR) radiation, ultrasonic waves, microwave signals, or video analytics. It plays a crucial role in smart home automation, security systems, and energy management by providing real-time information about occupancy."],
    features: [
      "Detection Methods: Includes Passive Infrared (PIR), Ultrasonic, Microwave, and Video Analytics.",
      "Accuracy and Sensitivity: Capable of distinguishing between human presence and other moving objects or animals.",
      "Range and Coverage: Adjustable to suit different room sizes and environments.",
      "Integration: Compatible with smart home systems, security alarms, lighting control, HVAC, and other automated systems.",
      "Energy Efficiency: Enables automated control of lighting, heating, and cooling systems based on occupancy.",
      "Privacy Considerations: Some sensors ensure presence detection without identifying individuals, preserving privacy.",
      "Response Time: Provides quick response to changes in occupancy status, triggering actions or alerts in real-time."
    ],
    benefits: [
      "Enhanced Automation: Automates lighting, heating, and other systems based on occupancy, improving convenience and energy efficiency.",
      "Security Enhancement: Integrates with security systems to monitor and alert on unauthorized presence or intrusions.",
      "Cost Savings: Reduces energy costs by adjusting HVAC and lighting based on occupancy patterns.",
      "Safety: Enhances safety by triggering alerts or actions in emergency situations based on occupancy status."
    ],
    applications: [
      "Residential Applications: Controls smart lighting systems and HVAC based on room occupancy.",
      "Commercial Buildings: Optimizes heating and cooling in offices and public spaces, reducing operational costs.",
      "Security Systems: Alerts security personnel of unauthorized entry or presence in restricted areas.",
      "Healthcare Settings: Monitors patient movement in hospitals to ensure safety and provide timely assistance.",
      "Retail Environments: Analyzes customer traffic patterns to optimize store layouts and staffing."
    ],
    amount: 22.00,
    kg: 0.40,
  },
  {
    id: 17,
    image: ["assets/img/items/Light-Sensor/IMG_3938.JPG",
            
            ],
    name: "Light Sensor",
    description: [
      "A light sensor is a type of electronic component that detects the intensity of light falling on it. It operates on the principle of varying resistance based on the amount of light hitting its surface. Light sensors are commonly used in various applications to automatically control lighting, adjust screen brightness, and in environmental monitoring systems."
    ],
    features: [
      "Operating Principle: Utilizes semiconductor material that changes electrical resistance with light intensity.",
      "Types of Light Sensors: Includes photocells (photoresistors), photodiodes, and phototransistors.",
      "Response Time: Offers fast response to changes in light levels, suitable for real-time applications.",
      "Spectral Response: Some sensors have specific spectral responses, sensitive to certain light wavelengths.",
      "Adjustability: Can be calibrated for sensitivity to suit specific lighting conditions.",
      "Integration: Easily integrates into electronic circuits and microcontroller-based systems.",
      "Applications: Used in ambient light detection, automatic lighting systems, brightness control for displays, solar panels for sun tracking, and more."
    ],
    benefits: [
      "Energy Efficiency: Enables automatic control of lighting systems based on natural light levels, reducing energy consumption.",
      "Comfort and Convenience: Adjusts indoor lighting to maintain optimal brightness levels throughout the day.",
      "Environmental Monitoring: Used in weather stations and environmental systems to measure light intensity.",
      "Security: Integrates with security systems to detect changes in light levels indicating movement or intrusions."
    ],
    applications: [
      "Automatic Lighting Systems: Controls indoor and outdoor lighting based on natural light levels, enhancing energy efficiency.",
      "Display Devices: Adjusts screen brightness on smartphones, tablets, and laptops based on ambient light conditions, improving user comfort.",
      "Photovoltaic Systems: Optimizes solar panel orientation and tracking for maximizing energy capture from sunlight.",
      "Environmental Monitoring: Measures light levels in agricultural settings for crop growth optimization and in weather stations for climate monitoring."
    ],
    amount: 10.00,
    kg: 0.40,
  },
  {
    id: 18,
    image: ["assets/img/items/Motion-Sensor/Motion-snsr/Mainlogix Product motion snsr2.png",
            "asets/img/items/Motion-Sensor/Motion-snsr/Mainlogix Product motion snsr1.png",
            ],
    name: "Motion Sensor",
    description: [
      "A motion sensor detects changes in infrared radiation (heat) or visible light patterns caused by movement of objects or people in its vicinity. It operates based on various technologies such as passive infrared (PIR), microwave, ultrasonic, or a combination of these methods."
    ],
    features: [
      "Detection Technologies: Includes Passive Infrared (PIR), Microwave, Ultrasonic, and Dual Technology.",
      "Field of View (FOV): Determines range and angle of detection, ranging from narrow to wide coverage.",
      "Sensitivity Adjustment: Allows fine-tuning of sensitivity to detect small or large movements.",
      "Response Time: Provides fast detection and response to movement, typically within milliseconds.",
      "Installation Options: Available as standalone units, integrated into security systems, or built into smart devices.",
      "Power Options: Operates on battery power, mains electricity, or a combination depending on installation requirements.",
      "Integration: Interfaces with lighting systems, security alarms, smart home devices, and automation systems."
    ],
    applications: [
      "Home Security: Detects intruders or unauthorized movement, triggering alarms or activating surveillance systems.",
      "Occupancy Sensing: Controls lighting, HVAC systems based on room occupancy to enhance energy efficiency.",
      "Energy Efficiency: Reduces energy consumption by automatically adjusting lighting and HVAC settings in unoccupied rooms.",
      "Smart Home Automation: Integrates with smart home hubs to automate routines and actions based on detected motion.",
      "Retail Analytics: Tracks customer movement in retail environments for marketing and operational insights.",
      "Industrial Safety: Monitors worker presence in hazardous areas to ensure safety protocols are followed."
    ],
    benefits: [
      "Enhanced Security: Provides proactive security measures by detecting intrusions or suspicious activity.",
      "Convenience: Automates lighting and environmental controls, enhancing user comfort and convenience.",
      "Energy Savings: Reduces energy waste by ensuring lights and HVAC systems are only active when needed.",
      "Versatility: Suitable for residential, commercial, and industrial applications, adapting to diverse environments and needs."
    ],
    amount: 18.00,
    kg: 0.40,
  },
  {
    id: 19,
    image: ["assets/img/items/Smart-Bulb/Smart-Bulb/Mainlogix Product smart bulb1.png",
            "assets/img/items/Smart-Bulb/Smart-Bulb/Mainlogix Product smart bulb3.png",
            
            ],
    name: "Smart Bulb",
    description: [
      "A Smart Bulb is an innovative lighting solution designed to bring convenience, efficiency, and customization to home lighting systems. It integrates with smart home automation platforms, allowing users to control the bulb remotely via smartphone apps or voice commands."
    ],
    features: [
      "Remote Control: Turn the bulb on/off and adjust brightness levels remotely using a smartphone or tablet.",
      "Color Changing: Select from a spectrum of colors to create different atmospheres and moods in your home.",
      "Dimmable: Adjust brightness levels to suit different activities, enhancing comfort and energy efficiency.",
      "Scheduling: Set timers to automatically turn lights on or off at specific times, improving security and convenience.",
      "Voice Control: Compatible with voice assistants like Amazon Alexa, Smart by MainLogix, Google Assistant, and Apple HomeKit for hands-free operation.",
      "Energy Efficiency: LED technology ensures low energy consumption compared to traditional bulbs, saving on electricity bills.",
      "Scene Modes: Pre-set or customizable lighting scenes for different occasions, such as movie night or dinner parties.",
      "Integration: Easily integrates with other smart home devices and systems, enhancing overall home automation capabilities."
    ],
    benefits: [
      "Convenience: Control lighting remotely, set schedules, and adjust settings effortlessly.",
      "Ambiance: Create personalized lighting atmospheres to match activities or preferences.",
      "Energy Savings: Efficient LED technology reduces energy consumption without compromising on brightness.",
      "Security: Use scheduling and remote control to simulate occupancy while away from home, enhancing home security."
    ],
    applications: [
      "Home Lighting: Enhance living spaces with dynamic lighting options for different times of day or activities.",
      "Entertainment: Create immersive experiences with synchronized lighting effects for movies or gaming.",
      "Mood Setting: Adjust colors and brightness to suit relaxation, concentration, or socializing.",
      "Health and Well-being: Tunable white bulbs support natural circadian rhythms, promoting better sleep patterns."
    ],
    amount: 20.00,
    kg: 0.40,
  },
  {
    id: 20,
    image: ["assets/img/items/Smart-Lock/SmartLock/Mainlogix Product SmartLock2.png",
            "assets/img/items/Smart-Lock/SmartLock/Mainlogix Product SmartLock1.png",
            "assets/img/items/Smart-Lock/SmartLock/Mainlogix Product SmartLock3.png",
            
            ],
    name: "Smart Lock",
    description: [
      "A Smart Door Lock is a cutting-edge security solution that enhances convenience and control over access to your home or property. It replaces traditional door locks with advanced technology that allows for remote management and monitoring."
    ],
    features: [
      "Keyless Entry: Utilizes digital access methods such as PIN codes, biometric fingerprint scanning, RFID cards, or smartphone apps, eliminating the need for physical keys.",
      "Remote Access: Lock and unlock the door from anywhere using a smartphone, tablet, or computer connected to the internet.",
      "Activity Logs: Keeps detailed logs of who enters and exits, providing timestamps and user identification.",
      "Security Alerts: Receive notifications on your phone for door unlocks or unauthorized access attempts.",
      "Integration: Works with smart home systems like Amazon Alexa, Smart by Mainlogix, Google Assistant, or Apple HomeKit for voice control and integration with other smart devices.",
      "Temporary Access: Grant temporary access codes or e-keys to visitors or service providers, which can be set to expire.",
      "Backup Keys: Includes traditional key access as a backup method in case of power outages or technical issues.",
      "Battery Life: Operates on long-lasting batteries with low-battery alerts for continuous functionality."
    ],
    benefits: [
      "Convenience: Manage access remotely without physical keys, enhancing convenience for users.",
      "Security: Enhanced security features include encrypted communication, tamper alarms, and anti-picking technology.",
      "Monitoring: Keep track of access history and receive alerts for peace of mind.",
      "Integration: Seamlessly integrates with existing smart home systems and devices for enhanced automation and security."
    ],
    applications: [
      "Residential Use: Secure homes and apartments with convenient access control for family members and trusted visitors.",
      "Rental Properties: Manage access for tenants and maintenance personnel remotely, improving operational efficiency.",
      "Commercial Use: Enhance security in offices, warehouses, or businesses by managing employee access and monitoring entry logs."
    ],
    amount: 170.00,
    kg: 0.40,
  },
  {
    id: 21,
    image: ["assets/img/items/Smart-Mirror/IMG_3850.JPG",
            "assets/img/items/Smart-Mirror/IMG_3851.JPG",
            "assets/img/items/Smart-Mirror/IMG_3853.JPG",
            
            ],
    name: "Smart Mirror",
    description: [
      "A Smart Mirror integrates modern technology into a traditional household fixture, transforming it into a multifunctional device with interactive capabilities. Unlike conventional mirrors, Smart Mirrors are equipped with digital displays and connectivity features, offering a range of functionalities beyond reflection."
    ],
    features: [
      "Interactive Display: Combines a mirror surface with an embedded display showing time, date, weather updates, and customizable widgets.",
      "Touchscreen Interface: Allows interaction with apps, information, and controls directly on the mirror's display through touch.",
      "Voice Control: Integrates with voice assistants like Amazon Alexa, Smart by Mainlogix, or Google Assistant for hands-free operation.",
      "Integrated Camera: Enables video calls, selfies, or facial recognition for personalized interactions and security features.",
      "Ambient Lighting: Adjustable LED lighting enhances visibility and ambiance, controlled via touch or voice commands.",
      "Health and Fitness Integration: Displays health metrics like weight, BMI, or workout progress when synced with health monitoring devices.",
      "Smart Home Integration: Connects with smart devices such as thermostats, lighting systems, and security cameras for centralized control.",
      "Customizable Profiles: Allows multiple users to personalize settings for lighting, information display, and voice recognition."
    ],
    benefits: [
      "Information Hub: Provides at-a-glance updates on calendar events, news, and weather while users prepare for their day.",
      "Personalized Experience: Tailors interactions based on individual preferences, ideal for households with multiple users.",
      "Enhanced Functionality: Integrates entertainment, productivity tools, and smart home controls into one cohesive platform.",
      "Aesthetic Appeal: Modern design enhances interior décor while adding technological sophistication."
    ],
    applications: [
      "Home Use: Enhances daily routines with personalized information, entertainment, and smart home controls in bathrooms, bedrooms, or living areas.",
      "Hospitality: Offers guests interactive experiences with local information, hotel services, and entertainment options.",
      "Retail and Advertising: Displays promotional content, product information, and customer engagement features in stores and public venues."
    ],
    
    amount: 580.00,
    kg: 0.40,
},
{
  id: 22,
  image: ["assets/img/items/Smart-Watches/dalle-wTozCAbs6w.png",
         
          
          ],
  name: "Smart Watches",
  description: [
    "Smart watches are wearable devices that combine the functionality of traditional wristwatches with advanced digital features, connectivity options, and health monitoring capabilities. These devices offer convenience, style, and enhanced utility beyond timekeeping."
  ],
  features: [
    "Notifications and Alerts: Receive notifications for calls, messages, emails, and app updates directly on the watch display.",
    "Fitness Tracking: Monitor daily physical activity, steps taken, calories burned, heart rate, sleep patterns, and more with integrated sensors.",
    "Health Monitoring: Track vital signs such as heart rate variability, blood oxygen levels (SpO2), and stress levels throughout the day.",
    "GPS Navigation: Use built-in GPS to track outdoor activities like running, cycling, and hiking, and get real-time location updates.",
    "Smartphone Connectivity: Pair with smartphones via Bluetooth to access music controls, camera remote, and voice assistants like Siri or Google Assistant.",
    "Customizable Watch Faces: Personalize the watch face with various designs and widgets to display weather updates, calendar events, and fitness stats.",
    "Water Resistance: Some models offer water resistance, allowing users to wear them while swimming or in the shower.",
    "Payment Integration: Support for contactless payments using NFC (Near Field Communication) technology, enabling transactions on the go.",
    "App Ecosystem: Access a range of apps directly from the watch, including fitness apps, productivity tools, and games.",
    "Battery Life: Varies by model, with some offering multiple days of battery life on a single charge."
  ],
  benefits: [
    "Convenience: Access important information and perform tasks directly from your wrist without needing to reach for your smartphone.",
    "Health and Fitness: Monitor and improve your health with comprehensive fitness tracking and real-time health metrics.",
    "Productivity: Stay organized with reminders, calendar alerts, and notifications, all easily accessible on your wrist.",
    "Style and Personalization: Choose from a variety of designs, materials, and interchangeable bands to match your personal style.",
    "Integration: Seamlessly connect with other smart devices and services in your smart home ecosystem for enhanced control and automation."
  ],
  applications: [
    "Fitness and Sports: Track workouts, set goals, and analyze performance metrics during exercise.",
    "Healthcare: Monitor health vitals and share data with healthcare providers for remote health monitoring.",
    "Business and Productivity: Stay connected and organized with emails, calls, and calendar reminders while on the go.",
    "Outdoor Activities: Utilize GPS tracking and navigation for hiking, biking, and exploring unfamiliar locations."
  ],
  
  amount: 120.00,
  kg: 0.40,
},
{
  id: 23,
  image: ["assets/img/items/Temperature-and-humidity/IMG_7014.JPG",
          "assets/img/items/Temperature-and-humidity/IMG_7015.JPG",
          
          ],
  name: "Temperature and Humidity Sensor",
  description: [
    "A temperature and humidity sensor is a smart device designed to measure and monitor environmental conditions within a specified area, providing real-time data on temperature levels and relative humidity."
  ],
  features: [
    "Real-Time Monitoring: Continuously measures and displays current temperature and humidity levels in the surrounding area.",
    "Accuracy: Provides accurate readings to within a specific tolerance range, ensuring reliable data for precise monitoring.",
    "Data Logging: Some sensors can log historical data, allowing users to track changes over time and identify trends in temperature and humidity fluctuations.",
    "Alert Notifications: Sends alerts or notifications when preset thresholds for temperature or humidity are exceeded, helping to prevent issues such as mold growth or equipment malfunction.",
    "Integration with Smart Home Systems: Can be integrated with smart home automation systems to trigger actions like adjusting HVAC settings or activating humidifiers/dehumidifiers based on sensor readings.",
    "Wireless Connectivity: Many sensors use wireless protocols such as Wi-Fi, Zigbee, or Z-Wave for seamless integration into smart home networks, enabling remote monitoring and control.",
    "Battery Efficiency: Operates on low power consumption, allowing for extended battery life or use with energy-efficient power sources.",
    "Compact and Easy Installation: Typically small in size and easy to install in various indoor locations, providing versatility in placement.",
    "Weather Resistance: Some models are designed to withstand outdoor conditions, expanding usage options beyond indoor environments.",
    "Smartphone App Compatibility: Companion mobile apps allow users to monitor temperature and humidity remotely, view historical data, and receive alerts on their smartphones or tablets."
  ],
  benefits: [
    "Optimal Comfort: Helps maintain comfortable indoor conditions by adjusting heating, cooling, and humidity levels based on real-time data.",
    "Health and Safety: Monitors humidity levels to prevent mold growth, which can contribute to respiratory issues and allergies.",
    "Energy Efficiency: Supports energy-saving efforts by optimizing HVAC usage and preventing unnecessary heating or cooling.",
    "Early Detection: Alerts users to potential issues such as frozen pipes, high humidity levels, or temperature fluctuations that could damage sensitive equipment.",
    "Remote Monitoring: Enables monitoring from anywhere via smartphone apps, providing peace of mind and convenience."
  ],
  applications: [
    "Residential: Use in homes to maintain comfortable living conditions and prevent issues related to temperature and humidity extremes.",
    "Commercial: Monitor environmental conditions in offices, warehouses, and retail spaces to ensure employee comfort and protect inventory.",
    "Healthcare: Critical for monitoring temperature and humidity in hospitals, laboratories, and pharmaceutical storage areas to maintain optimal conditions for patient care and equipment.",
    "Industrial: Essential in industrial settings to prevent damage to machinery, raw materials, and products sensitive to environmental conditions."
  ],
  
  amount: 29.00,
  kg: 0.40,
},
{
  id: 24,
  image: ["assets/img/items/Smoke-Sensor/53c10b4d1.webp",
          
          ],
  name: "Smoke Sensor",
  description: [
    "A smoke sensor, also known as a smoke detector or smoke alarm, is a vital component of home and building safety systems. It detects the presence of smoke particles in the air, signaling potential fire or smoke-related hazards."
  ],
  features: [
    "Smoke Detection Technology: Utilizes optical or ionization sensors to detect smoke particles and trigger alarms.",
    "Alarm Notification: Emits loud audible alarms and/or visual indicators like flashing lights upon detecting smoke, alerting occupants to evacuate.",
    "Early Warning System: Provides early detection of smoke, enabling prompt action to minimize property damage and ensure occupant safety.",
    "Battery Backup: Equipped with battery backup for continuous operation during power outages.",
    "Interconnectivity: Supports interconnection with other smoke sensors within the premises for synchronized alarm alerts throughout the building.",
    "Remote Monitoring: Advanced models offer connectivity to smart home systems or mobile apps for remote monitoring and alerts.",
    "Self-Testing Functionality: Periodically self-tests to ensure proper operation and alert users to maintenance or battery replacement needs.",
    "Tamper Resistance: Designed to resist tampering or disabling to ensure reliability in critical situations.",
    "Easy Installation: Designed for easy ceiling or wall installation with included mounting hardware.",
    "Compliance Standards: Conforms to safety and regulatory standards such as UL certifications."
  ],
  benefits: [
    "Early Fire Detection: Provides early warning of smoke, enabling quick evacuation and potential fire prevention.",
    "Enhanced Safety: Crucial for protecting lives and property by alerting occupants to smoke-related hazards.",
    "Peace of Mind: Offers assurance that smoke detection is monitored even when occupants are away.",
    "Integration with Smart Systems: Integrates with smart home systems for enhanced functionality like remote monitoring and automated responses."
  ],
  applications: [
    "Residential: Essential for home safety, protecting occupants and property from fire and smoke dangers.",
    "Commercial: Vital in offices, retail spaces, and commercial buildings to comply with fire safety regulations and protect occupants and assets.",
    "Industrial: Critical in industrial facilities, warehouses, and manufacturing plants to detect smoke early and prevent fire incidents.",
    "Institutional: Used in schools, hospitals, and other institutional settings to ensure safety for students, patients, and staff."
  ],
  
  amount: 21.00,
  kg: 0.40,
},
{
  id: 25,
  image: ["assets/img/items/Socket/IMG_3968.JPG",
          
          ],
  name: "Smart Socket",
  description: [
    "A smart socket, also known as a smart plug or smart outlet, is a device that plugs into a traditional electrical outlet, enabling control and automation of connected appliances and devices. It integrates with smart home systems to provide remote access, scheduling capabilities, energy monitoring, and other advanced features for enhanced convenience and efficiency."
  ],
  features: [
    "Remote Control: Allows users to remotely turn connected devices on or off using a smartphone app or voice commands.",
    "Voice Control: Compatible with virtual assistants like Amazon Alexa, Smart by MainLogix, Google Assistant, or Apple Siri for hands-free operation.",
    "Scheduling: Enables creation of schedules to automatically control devices at specified times, optimizing energy usage and enhancing security.",
    "Energy Monitoring: Some models offer energy monitoring features to track and analyze energy consumption of connected devices.",
    "Away Mode: Can simulate occupancy by randomizing on-off patterns of connected devices while users are away, enhancing home security.",
    "Compatibility: Works with various appliances and devices such as lamps, fans, heaters, and coffee makers.",
    "Overload Protection: Equipped with safety features like overload protection to prevent electrical hazards.",
    "Integration: Integrates with other smart home devices and systems, enabling automation and customization of home routines.",
    "Easy Setup: Typically easy to set up with Wi-Fi connectivity and a smartphone app for initial configuration.",
    "Compact Design: Designed to fit discreetly into standard electrical outlets without blocking adjacent outlets."
  ],
  benefits: [
    "Convenience: Control devices remotely, set schedules, and automate routines for convenience and efficiency.",
    "Energy Efficiency: Monitor energy consumption and optimize usage patterns to save energy and reduce utility costs.",
    "Security: Enhance home security with automated lighting schedules and simulated occupancy while away from home.",
    "Versatility: Works with a wide range of devices, offering flexibility in home automation and smart home setup."
  ],
  applications: [
    "Home Automation: Automate lighting, appliances, and electronics to enhance convenience and energy efficiency at home.",
    "Security: Integrate with security systems to improve home security with automated lighting and device control.",
    "Energy Management: Monitor and manage energy usage to promote energy-efficient practices and reduce utility bills.",
    "Accessibility: Assist individuals with mobility issues by enabling remote control and voice command operation of devices."
  ],
  
  amount: 19.00,
  kg: 0.40,
},
{
  id: 26,
  image: ["assets/img/items/Switches/IMG_3861.JPG",
          "assets/img/items/Switches/IMG_3860.JPG",
          "assets/img/items/Switches/IMG_3862.JPG",
          "assets/img/items/Switches/IMG_3867.JPG",
          ],
  name: "Smart Switch",
  description: [ "A smart switch is a device that replaces traditional switches in your home's electrical system, enabling remote control, automation, and integration with other smart home devices and systems." ],
  features: [
    "Remote Control: Enables remote on/off control of connected devices via smartphone apps from anywhere with internet access.",
    "Voice Control: Compatible with voice assistants like Amazon Alexa, Smart by MainLogix, Google Assistant, or Apple Siri for hands-free operation.",
    "Scheduling: Allows creation of schedules to automate device operation based on specific times or triggers, enhancing convenience and energy efficiency.",
    "Automation: Integrates with other smart devices to create automated routines or scenes, such as adjusting lights based on motion detection.",
    "Energy Monitoring: Some models monitor energy consumption of connected devices, promoting energy-efficient practices and reducing utility costs.",
    "Away Mode: Simulates occupancy by randomly turning connected lights on and off while users are away, enhancing home security.",
    "Compatibility: Works with various devices including lamps, fans, heaters, etc., making any device 'smart' with integration.",
    "Safety Features: Includes features like overload protection and scheduling to prevent electrical hazards and optimize device use.",
    "Easy Installation: Designed for easy installation to replace existing traditional switches without additional wiring or professional help.",
    "Integration: Integrates with popular smart home platforms and ecosystems for seamless control across different brands and systems."
  ],
  benefits: [
    "Convenience: Control lighting and appliances remotely, set schedules, and automate routines for convenience and energy efficiency.",
    "Energy Efficiency: Monitor and manage energy usage to reduce costs and promote sustainable practices.",
    "Security: Enhance home security with automated lighting schedules and simulated occupancy while away from home.",
    "Versatility: Works with a wide range of devices, offering flexibility in home automation and smart home setup."
  ],
  applications: [
    "Home Automation: Automate lighting, fans, and appliances for a more comfortable and efficient living environment.",
    "Energy Management: Monitor energy consumption and adjust usage patterns to save energy and reduce utility bills.",
    "Security: Enhance home security with automated lighting and device control integration with security systems.",
    "Accessibility: Provide easy-to-use remote control and voice command capabilities for individuals with mobility issues."
  ],
  amount: 17.00,
  kg: 0.40,
},
{
  id: 27,
  image: ["assets/img/items/vacuum-robot/IMG_6606.JPG",
          "assets/img/items/vacuum-robot/IMG_7021.JPG",
          "assets/img/items/vacuum-robot/IMG_7022.JPG",
          ],
  name: "Vacuum Robot",
  description: [
    "A vacuum robot, also known as a robotic vacuum cleaner or robovac, is an autonomous cleaning device designed to autonomously clean floors and carpets in homes or commercial spaces."
  ],
  features: [
    "Autonomous Navigation: Uses sensors (e.g., infrared, laser, or camera-based) to navigate around obstacles, avoid stairs, and map the cleaning area efficiently.",
    "Cleaning Modes: Offers various cleaning modes such as auto-clean, spot-clean, edge-clean, and scheduled cleaning to adapt to different cleaning needs.",
    "Multi-Surface Cleaning: Designed to clean various floor types including hardwood, tile, carpet, and laminate with adjustable suction power and brush settings.",
    "Smart Mapping: Some models create and update maps of the cleaning area to optimize cleaning paths and avoid missing spots.",
    "Dirt Detection: Automatically detects and focuses on dirtier areas with a higher concentration of dust or debris for thorough cleaning.",
    "Voice Control: Integrates with voice assistants like Amazon Alexa, Smart by MainLogix, or Google Assistant for hands-free operation and control.",
    "App Control: Controlled via a smartphone app, allowing users to start, stop, schedule cleanings, and monitor cleaning progress remotely.",
    "Virtual Walls: Uses virtual barriers or magnetic strips to restrict cleaning areas or prevent access to certain zones.",
    "Self-Charging: Automatically returns to its charging dock when the battery is low and resumes cleaning after recharging.",
    "HEPA Filtration: Some models are equipped with High-Efficiency Particulate Air (HEPA) filters to capture allergens, dust, and pet dander, improving indoor air quality."
  ],
  benefits: [
    "Convenience: Operates autonomously, saving time and effort in routine cleaning tasks.",
    "Efficiency: Efficiently cleans floors with minimal supervision and adjusts to different floor surfaces.",
    "Versatility: Handles a variety of cleaning tasks including sweeping, vacuuming, and mopping.",
    "Accessibility: Assists elderly or individuals with mobility issues by maintaining clean floors independently.",
    "Customization: Offers customizable cleaning schedules and settings via mobile apps for personalized cleaning routines."
  ],
  applications: [
    "Residential Use: Ideal for homes, apartments, and condos to maintain clean floors daily.",
    "Commercial Use: Suitable for offices, retail spaces, and hospitality settings to keep high-traffic areas clean.",
    "Pet Owners: Helps manage pet hair and dander on floors and carpets efficiently.",
    "Health Benefits: Improves indoor air quality by capturing allergens and dust particles."
  ],
  
  amount: 250.00,
  kg: 0.40,
},
{
  id: 28,
  image: ["assets/img/items/Water-Sensor/IMG_6969.JPG",
          "assets/img/items/Water-Sensor/IMG_6970.JPG",
          "assets/img/items/Water-Sensor/IMG_6972.JPG",
          ],
  name: "Water Sensor", 
  description: [
    "A water sensor is a smart device designed to detect the presence of water or moisture in specific areas. It serves as an early warning system to prevent water damage by alerting homeowners or building managers of potential leaks or flooding."
  ],
  features: [
    "Moisture Detection: Detects water or moisture presence on floors, carpets, or surfaces.",
    "Alarm Notification: Sends alerts (via app notifications, alarms, or emails) to notify users of water detection, helping to take immediate action.",
    "Integration: Can integrate with smart home systems, allowing for automation and remote monitoring.",
    "Placement Flexibility: Small and portable, allowing for placement in various locations prone to water leaks.",
    "Battery Operated: Many models operate on batteries, providing continuous monitoring even during power outages.",
    "Multiple Sensors: Some systems support multiple sensors, expanding coverage across larger areas or multiple rooms.",
    "Wi-Fi Connectivity: Offers Wi-Fi connectivity for real-time monitoring and remote access to sensor status and alerts.",
    "Smart Home Integration: Compatible with smart home platforms like Google Home or Amazon Alexa, Smart by Mainlogix for voice control and integration with other smart devices.",
    "Adjustable Sensitivity: Allows users to adjust sensitivity levels to detect small or large amounts of water.",
    "Application Variety: Suitable for use in homes, apartments, basements, laundry rooms, bathrooms, and commercial buildings."
  ],
  benefits: [
    "Early Detection: Alerts users to potential water leaks or flooding early, minimizing damage and repair costs.",
    "Remote Monitoring: Provides peace of mind by allowing users to monitor water presence and receive alerts remotely.",
    "Safety: Helps prevent water damage, mold growth, and structural issues by prompt detection and action.",
    "Convenience: Integrates with smart home systems for seamless automation and control.",
    "Versatility: Can be used in various environments and locations where water leaks may occur."
  ],
  applications: [
    "Residential Use: Protects homes from water damage in areas prone to leaks such as basements, kitchens, and bathrooms.",
    "Commercial Use: Monitors water leaks in commercial buildings, offices, server rooms, and storage facilities.",
    "Property Management: Ideal for landlords and property managers to protect rental properties and minimize maintenance costs.",
    "Vacation Homes: Ensures peace of mind by monitoring water presence in vacation homes or properties left unattended for extended periods."
  ],
  
  amount: 17.00,
  kg: 0.40,
},
{
  id: 29,
  image: ["assets/img/items/new27/IR/IMG_5798.JPG",
          "assets/img/items/new27/IR/IMG_5799.JPG",
          ],
  name: "IR Sensor", 
  description: [
    "A Universal IR Controller is a compact electronic device that emits infrared signals to control various IR-enabled appliances within a home or office environment. It serves as a centralized hub to manage multiple devices using a single remote or through a smartphone app, offering convenience and flexibility in home automation setups."
  ],
  features: [
    "Multi-device Compatibility: Compatible with a wide range of IR-controlled devices including TVs, air conditioners, audio systems, DVD players, and more.",
    "IR Blaster: Emits infrared signals to simulate remote control commands for different appliances.",
    "Learning Capability: Some models can learn IR codes from existing remote controls, allowing users to consolidate multiple remotes into one.",
    "Smartphone Integration: Can be paired with a smartphone app for remote control and scheduling of device operations.",
    "Scene and Macro Programming: Enables users to create custom scenes or macros where multiple devices can be controlled simultaneously with a single command.",
    "Voice Control: Integration with voice assistants like Alexa or Google Assistant for hands-free operation of connected devices.",
    "IR Code Database: Preloaded with a database of IR codes for popular brands and models, simplifying setup and configuration.",
    "RF Connectivity: Some advanced models may support RF (radio frequency) communication for extended range and reliability.",
    "Timer and Scheduler: Allows users to schedule device operations based on time or conditions, enhancing energy efficiency and convenience.",
    "Security Features: Secure pairing and encryption protocols to protect user data and ensure safe operation.",
    "Compatibility with Smart Home Platforms: Integration with popular smart home platforms such as SmartThings, HomeKit, or IFTTT for enhanced automation and interoperability."
  ],
  benefits: [
    "Simplified Control: Eliminates the need for multiple remote controls, reducing clutter and improving user experience.",
    "Convenience: Enables centralized control of various home appliances from a single interface or voice command.",
    "Energy Efficiency: Allows for scheduling and automation of device operations to optimize energy consumption.",
    "Cost Savings: Reduces standby power consumption and extends the lifespan of appliances through efficient management.",
    "Enhanced User Experience: Provides intuitive and user-friendly control options through smartphone apps or voice commands."
  ],
  applications: [
    "Home Entertainment: Control TVs, audio systems, DVD players, and gaming consoles seamlessly.",
    "Climate Control: Adjust air conditioners, heaters, and fans remotely or through automated schedules.",
    "Lighting Control: Integrate with IR-controlled lighting systems for convenient adjustment of brightness and ambiance.",
    "Security Systems: Manage IR-enabled security cameras, sensors, and alarms for enhanced home security.",
    "Office Automation: Control projectors, office equipment, and conference room devices for efficient meetings and operations."
  ],
  
  amount: 8.00,
  kg: 0.40,
},
{
  id: 30,
  image: ["assets/img/G_smart_icon_3ii.png",
          "assets/img/items/woocommerce.png",
          ],
  name: "Mainlogix Smart Voice Control", 
  description: [
    "SMART is the personalized AI voice assistant by Mainlogix, designed to provide seamless control over your home system through simple voice commands.",
    "You can customize SMART with any name of your choice, such as \"Joy,\" allowing for a more personalized interaction."
  ],
  features: [
    "Customizable Wake Word: You can personalize SMART by assigning it any name you prefer, like \"Joy\" or \"Phillip.\" Simply say \"Hey Joy\" or \"Ok Joy\" to activate the assistant.",
    "Voice-Activated Control: Use natural voice commands to manage your smart home devices. For example, say \"Hey Joy, turn on the lights\" or \"Ok Joy, play some music.\"",
    "Intuitive Interaction: SMART responds to a wide range of commands, making it easy to adjust settings, control entertainment systems, or manage home automation tasks effortlessly.",
    "Seamless Integration: Works with various smart devices and systems, ensuring compatibility across your entire smart home ecosystem.",
    "User-Friendly Experience: Enhances convenience by enabling hands-free control of devices and services, enhancing your daily routines and home management."
  ],
  benefits: [
    "Personalization: Choose a name that resonates with you, making interactions with your smart home more engaging and personalized.",
    "Effortless Control: Simplifies home management tasks by allowing you to control multiple devices with intuitive voice commands.",
    "Enhanced Convenience: Enjoy a hands-free experience for adjusting settings, playing media, or automating routines throughout your home.",
    "Adaptable to Your Needs: SMART adapts to your preferences and lifestyle, providing tailored solutions to enhance comfort and efficiency."
  ],
  applications: [
    "Perfect for controlling lighting, climate, entertainment systems, security devices, and more with ease.",
    "Enhances accessibility and convenience for users of all ages and abilities, making smart home technology more inclusive.",
    "Supports a connected ecosystem of devices, ensuring seamless integration and efficient home automation."
  ],
  
  amount: 80.00,
  kg: 0.40,
},
{
  id: 31,
  image: ["assets/img/items/Adaptor-Socket/Socket/Mainlogix Product soc1.png",
      
          ],
  name: "Repeater", 
  description: [
    " ",
  ],
  
  amount: 19.00,
  kg: 0.40,
},

{
  id: 32,
  image: ["assets/img/items/new27/Siren/IMG_5803.JPG",
          "assets/img/items/new27/Siren/IMG_5804.JPG",
          ],
  name: "Smart Siren", 
  description: [
    "A smart siren is a critical element of any home security setup, providing audible alerts and notifications to enhance safety and security.",
    "Designed to integrate seamlessly with smart home systems, it offers versatile functionality and reliability in safeguarding your home."
  ],
  features: [
    "Audible Alerts: Emits loud, attention-grabbing sounds to alert occupants and deter intruders during emergencies or security breaches.",
    "Smart Integration: Connects with smart home platforms for remote control and automation, enabling activation and deactivation via mobile apps or voice commands.",
    "Customizable Alerts: Offers adjustable volume levels and different alarm tones to suit specific preferences and needs.",
    "Compatibility: Works with various smart home devices and security systems, ensuring seamless integration into your existing setup.",
    "Backup Power: Includes backup battery support to maintain functionality during power outages, ensuring continuous protection.",
    "Tamper Resistance: Built-in features to resist tampering and unauthorized access, enhancing overall security effectiveness."
  ],
  benefits: [
    "Enhanced Security: Provides immediate notification of potential threats, enhancing the overall security posture of your home.",
    "Convenience: Enables remote control and monitoring via smart devices, offering peace of mind whether you're at home or away.",
    "Versatility: Integrates with other smart devices to create a comprehensive home security ecosystem tailored to your needs.",
    "Reliability: Offers robust performance and durability, ensuring dependable operation in critical situations."
  ],
  applications: [
    "Ideal for residential homes, apartments, and offices seeking enhanced security measures.",
    "Enhances safety for families, providing peace of mind knowing that potential threats are promptly detected and addressed.",
    "Supports a proactive approach to home security, alerting authorities and homeowners to unauthorized access or emergencies."
  ],
  
  amount: 25.00,
  kg: 0.40,
},
{
  id: 33,
  image: ["assets/img/items/new27/Tablet/tablet 1.png",
          "assets/img/items/new27/Tablet/tablet2.png",
          ],
  name: "Smart Tablet", 
  description: [
    "A smart tablet is a multifunctional device designed to serve as a control center for managing various aspects of a smart home system.",
    "It integrates seamlessly with smart devices and home automation technologies, offering convenience, accessibility, and enhanced functionality in controlling your connected home."
  ],
  features: [
    "Home Control Hub: Acts as a central hub for managing smart home devices such as lights, thermostats, security cameras, and more from a single interface.",
    "Touchscreen Interface: Features a responsive touchscreen display for intuitive navigation and control of connected devices and applications.",
    "Voice Control: Supports voice commands for hands-free operation, enabling users to control devices, play music, check weather updates, and more using integrated virtual assistants like Alexa, SMART by MainLogix, or Google Assistant.",
    "Streaming Capabilities: Allows streaming of multimedia content such as music, videos, and movies from popular streaming services directly on the tablet.",
    "Intercom Functionality: Enables communication between different rooms equipped with compatible intercom systems, facilitating easy communication within the household.",
    "Security Monitoring: Provides real-time monitoring of security cameras and sensors, with alerts and notifications for suspicious activities or emergencies.",
    "Customizable Interfaces: Offers customizable interfaces and widgets to personalize the user experience and display relevant information based on user preferences.",
    "Integration with Smart Appliances: Controls smart appliances such as refrigerators, ovens, and washing machines that are compatible with smart home systems.",
    "Mobile App Compatibility: Can be paired with mobile apps for remote access and control of home devices, allowing management from anywhere with an internet connection.",
    "Battery Life: Long-lasting battery to ensure continuous operation even when unplugged, providing flexibility in placement around the home."
  ],
  benefits: [
    "Convenience: Consolidates control of multiple smart devices into a single, easy-to-use interface, simplifying daily routines and enhancing convenience.",
    "Accessibility: Allows quick access to information, entertainment, and home controls from a portable device, promoting efficiency and connectivity.",
    "Versatility: Functions beyond basic tablet capabilities by integrating with smart home technologies, enhancing its utility and value.",
    "Enhanced Living Experience: Improves the overall living experience by offering seamless integration of entertainment, communication, and home automation functions."
  ],
  applications: [
    "Ideal for homeowners looking to streamline and enhance their smart home experience with a centralized control device.",
    "Suitable for households of all sizes, providing flexible management of home devices and systems.",
    "Enhances accessibility and usability for individuals seeking a modern and integrated approach to home automation and control."
  ],
  
  amount: 150.00,
  kg: 0.40,
},
{
  id: 34,
  image: ["assets/img/items/Alarm-Sensor/Alarm-Sensor/Mainlogix Product Alarm2.png",
          "assets/img/items/Alarm-Sensor/Alarm-Sensor/Mainlogix Product Alarm2.png",
          ],
  name: "SOS/Emergency Call Button", 
  description: [
    "The SOS/Emergency Call Button is a compact and easily accessible device that enables individuals to call for help swiftly during emergencies.",
    "It serves as a crucial tool for ensuring safety and peace of mind, particularly for seniors, individuals with medical conditions, or anyone in need of urgent assistance."
  ],
  features: [
    "Instant Assistance: Allows users to trigger an emergency call instantly with a single press of the button.",
    "Wearable Design: Available as a wearable pendant or wristband for easy access and portability.",
    "Wall-Mounted Option: Can be installed in fixed locations within homes, offices, or public spaces for quick access by multiple individuals.",
    "Wireless Connectivity: Utilizes wireless technology (such as Bluetooth or RF) to transmit distress signals to designated receivers or monitoring stations.",
    "Two-Way Communication: Some advanced models may feature two-way communication capabilities, enabling communication with emergency responders or caregivers.",
    "Integration with Smart Systems: Compatible with smart home systems and medical alert systems for seamless integration and enhanced functionality.",
    "Battery Backup: Includes battery backup to ensure functionality during power outages or when unplugged.",
    "Waterproof and Durable: Designed to withstand various environmental conditions, including water resistance for reliability in all situations.",
    "Easy Installation: Simple setup process, often requiring no professional installation, making it accessible for immediate use."
  ],
  benefits: [
    "Peace of Mind: Provides reassurance to users and caregivers that help can be summoned quickly during emergencies.",
    "Accessibility: Accessible to individuals of all ages and abilities, ensuring everyone can use it effectively.",
    "Enhanced Safety: Enhances overall safety measures at home, workplaces, and public facilities by facilitating rapid emergency responses.",
    "Independence: Promotes independence for seniors and individuals with disabilities, allowing them to live more confidently alone."
  ],
  applications: [
    "Home Use: Ideal for seniors living independently or individuals with medical conditions.",
    "Healthcare Facilities: Used in hospitals, nursing homes, and assisted living facilities to ensure immediate response to patient emergencies.",
    "Workplaces: Deployed in workplaces to safeguard employees and provide a quick response to accidents or medical emergencies.",
    "Public Spaces: Installed in public areas such as parks, campuses, and shopping centers for public safety measures."
  ],
  
  amount: 12.00,
  kg: 0.40,
},
{
  id: 35,
  image: ["assets/img/items/new27/Fall detection/IMG_5805.JPG",
          "assets/img/items/new27/Fall detection/IMG_5806.JPG",
          ],
  name: "Fall Detection Sensor", 
  description: [
    "A Fall Detection Sensor is a specialized device equipped with sensors and algorithms that can detect when an individual falls.",
    "It is typically worn as a pendant, wristband, or integrated into other wearable devices.",
    "The sensor continuously monitors motion patterns and orientation changes, distinguishing between normal activities and falls based on predefined parameters."
  ],
  features: [
    "Automatic Fall Detection: Utilizes accelerometers, gyroscopes, and sometimes barometric sensors to detect sudden changes in motion and orientation associated with falls.",
    "Immediate Alerts: Automatically triggers alerts to caregivers, family members, or monitoring centers when a fall is detected.",
    "Adjustable Sensitivity: Can be adjusted to accommodate different activity levels and minimize false alarms.",
    "Integration Capability: Often integrates with medical alert systems, smart home platforms, or mobile apps for seamless communication and response.",
    "Battery Powered: Typically operates on long-lasting batteries for continuous monitoring without frequent recharging.",
    "Waterproof and Durable: Designed to withstand daily wear and various environmental conditions, ensuring reliability.",
    "Two-Way Communication: Advanced models may include two-way communication features to allow the wearer to communicate with caregivers or emergency responders.",
    "Privacy Protection: Ensures data privacy and secure communication channels to protect sensitive information."
  ],
  benefits: [
    "Rapid Response: Enables prompt assistance following a fall, reducing the time between incident and aid.",
    "Enhanced Safety: Provides peace of mind to seniors, individuals with disabilities, or those prone to falls, knowing help will be alerted automatically.",
    "24/7 Monitoring: Offers continuous monitoring, enhancing safety around the clock without manual intervention.",
    "Supports Independent Living: Promotes independence by allowing individuals to live alone or without constant supervision while still having access to emergency assistance.",
    "Reduced Health Risks: Helps mitigate health risks associated with prolonged immobility after a fall, such as injuries or complications."
  ],
  applications: [
    "Elderly Care: Used extensively in elderly care settings, including homes, nursing facilities, and assisted living communities.",
    "Medical Monitoring: Integrated into medical alert systems for real-time monitoring of individuals with medical conditions.",
    "Home Health Care: Deployed in home healthcare settings to ensure safety and quick response to falls.",
    "Workplace Safety: Implemented in workplaces to enhance employee safety, particularly in hazardous environments or industries."
  ],
  
  amount: 60.00,
  kg: 0.40,
},
{
  id: 36,
  image: ["assets/img/items/new27/Copy of IMG_1976.jpg",
          ],
  name: "Heart Rate and BP Monitor", 
  description: [
    "A Heart Rate and Blood Pressure Monitor is a compact, wearable device designed to measure and monitor two critical cardiovascular parameters: heart rate (HR) and blood pressure (BP).",
    "It typically consists of a monitor unit and a cuff for BP measurement, and may include additional features like data storage, connectivity options, and integration with mobile apps or health monitoring systems."
  ],
  features: [
    "Dual Monitoring: Simultaneously measures both heart rate and blood pressure, providing comprehensive cardiovascular health insights.",
    "Real-time Tracking: Offers continuous monitoring and updates on HR and BP readings, allowing for timely interventions and adjustments.",
    "Accuracy: Utilizes advanced sensor technology and algorithms to ensure accurate and reliable measurements.",
    "User-friendly Interface: Often equipped with a clear display or app interface for easy reading and understanding of metrics.",
    "Memory Storage: Stores historical data, allowing users to track trends and share information with healthcare providers.",
    "Alerts and Notifications: Alerts users to abnormal readings or fluctuations, prompting timely medical attention or adjustments in medication or lifestyle.",
    "Wireless Connectivity: Some models offer Bluetooth or Wi-Fi connectivity for seamless data transfer to smartphones or computers.",
    "Long Battery Life: Designed for extended use without frequent recharging, ensuring continuous monitoring.",
    "Compact and Portable: Lightweight and portable, making it suitable for use at home, work, or while traveling.",
    "Integration Capability: Compatible with health apps or platforms, enabling data sharing and comprehensive health management."
  ],
  benefits: [
    "Early Detection: Facilitates early detection of cardiovascular issues by monitoring HR and BP trends over time.",
    "Personalized Health Management: Helps users and healthcare providers create personalized health plans based on accurate data.",
    "Remote Monitoring: Supports remote patient monitoring, allowing healthcare providers to monitor patients' cardiovascular health from a distance.",
    "Improved Health Awareness: Enhances user awareness of their cardiovascular health status, encouraging proactive health management.",
    "Convenience: Provides convenient access to real-time health data without frequent visits to healthcare facilities."
  ],
  applications: [
    "Home Healthcare: Used by individuals for personal health monitoring and management of chronic conditions such as hypertension or heart disease.",
    "Clinical Settings: Deployed in hospitals, clinics, and healthcare facilities for routine patient monitoring and assessment.",
    "Telemedicine: Integrated into telehealth platforms to enable remote consultations and monitoring.",
    "Fitness and Wellness: Utilized by fitness enthusiasts and athletes to track cardiovascular fitness and performance metrics."
  ],
  
  amount: 45.00,
  kg: 0.40,
},
{
  id: 37,
  image: ["assets/img/items/new27/vibration_sensor.jpg",
          
          ],
  name: "Vibration Sensor", 
  description: [
    "A Vibration Sensor is a compact electronic device that measures vibrations and movement.",
    "It typically consists of a sensitive element that detects vibrations and converts them into electrical signals.",
    "These sensors can detect a wide range of vibration frequencies and intensities, making them versatile for different industrial, commercial, and residential uses."
  ],
  features: [
    "Vibration Detection: Detects and measures vibrations and movement in various directions and frequencies.",
    "Sensitivity: Adjustable sensitivity settings to detect subtle to intense vibrations.",
    "Accuracy: Provides precise measurements of vibration levels.",
    "Compact Size: Small and lightweight design for easy installation and integration into different systems.",
    "Durability: Designed to withstand harsh environmental conditions and operational wear.",
    "Versatility: Suitable for a wide range of applications, including machinery monitoring, security systems, automotive applications, and structural health monitoring.",
    "Integration: Can be integrated with other sensors and systems for enhanced functionality and data analysis.",
    "Real-time Monitoring: Offers real-time monitoring of vibration levels, enabling prompt response to abnormal conditions.",
    "Alarm and Notification: Generates alarms or notifications when vibration levels exceed predefined thresholds, indicating potential issues or security breaches.",
    "Low Power Consumption: Energy-efficient operation for extended use without frequent battery changes.",
    "Wireless Connectivity: Some models offer wireless communication options for remote monitoring and data transmission."
  ],
  benefits: [
    "Early Fault Detection: Helps identify machinery faults or structural issues early, preventing costly repairs and downtime.",
    "Improved Safety and Security: Enhances security by detecting unauthorized access attempts or tampering.",
    "Maintenance Optimization: Facilitates predictive maintenance strategies by monitoring equipment health and performance.",
    "Data-driven Decisions: Provides actionable data for optimizing operational efficiency and equipment performance.",
    "Cost Savings: Reduces maintenance costs, downtime, and operational disruptions associated with unexpected failures."
  ],
  applications: [
    "Industrial Monitoring: Used in industrial settings to monitor the condition of rotating machinery, pumps, motors, and turbines.",
    "Building Management: Deployed in building management systems for monitoring structural integrity and detecting vibrations from construction activities or seismic events.",
    "Security Systems: Integrated into security systems to detect unauthorized entry or tampering with doors, windows, safes, and vaults.",
    "Automotive: Used in vehicles for monitoring engine vibrations and vehicle dynamics.",
    "Consumer Electronics: Integrated into smartphones, wearables, and gaming devices for user interaction and motion detection."
  ],
  
  amount: 26.00,
  kg: 0.40,
},
{
  id: 38,
  image: ["assets/img/G_smart_icon_3ii.png",
          ],
  name: "Mainlogix Voice Assistant", 
  description: [
    "SMART is the personalized AI voice assistant by Mainlogix, designed to provide seamless control over your home system through simple voice commands.",
    "You can customize SMART with any name of your choice, such as \"Joy,\" allowing for a more personalized interaction."
  ],
  features: [
    "Customizable Wake Word: You can personalize SMART by assigning it any name you prefer, like \"Joy\" or \"Phillip.\" Simply say \"Hey Joy\" or \"Ok Joy\" to activate the assistant.",
    "Voice-Activated Control: Use natural voice commands to manage your smart home devices. For example, say \"Hey Joy, turn on the lights\" or \"Ok Joy, play some music.\"",
    "Intuitive Interaction: SMART responds to a wide range of commands, making it easy to adjust settings, control entertainment systems, or manage home automation tasks effortlessly.",
    "Seamless Integration: Works with various smart devices and systems, ensuring compatibility across your entire smart home ecosystem.",
    "User-Friendly Experience: Enhances convenience by enabling hands-free control of devices and services, enhancing your daily routines and home management."
  ],
  benefits: [
    "Personalization: Choose a name that resonates with you, making interactions with your smart home more engaging and personalized.",
    "Effortless Control: Simplifies home management tasks by allowing you to control multiple devices with intuitive voice commands.",
    "Enhanced Convenience: Enjoy a hands-free experience for adjusting settings, playing media, or automating routines throughout your home.",
    "Adaptable to Your Needs: SMART adapts to your preferences and lifestyle, providing tailored solutions to enhance comfort and efficiency."
  ],
  applications: [
    "Perfect for controlling lighting, climate, entertainment systems, security devices, and more with ease.",
    "Enhances accessibility and convenience for users of all ages and abilities, making smart home technology more inclusive.",
    "Supports a connected ecosystem of devices, ensuring seamless integration and efficient home automation."
  ],
  
  amount: 80.00,
  kg: 0.40,
},
{
  id: 39,
  image: ["assets/img/items/new27/fire alarm.jpg",
          ],
  name: "Fire Alarm", 
  description: [
    " ",
    
  ],
  
  amount: 27.00,
  kg: 0.40,
},
{
  id: 40,
  image: ["assets/img/items/new27/occupancy-sensor1.jpg",
          "assets/img/items/new27/OCCUPANCY SENSOR.jpg",
          ],
  name: "Occupancy Sensors", 
  description: [
    " ",
    
  ],
  
  amount: 15.00,
  kg: 0.40,
},
{
  id: 41,
  image: ["assets/img/items/new27/WATER-SENSOR/IMG_6969.JPG",
          "assets/img/items/new27/WATER-SENSOR/IMG_6970.jpg",
          "assets/img/items/new27/WATER-SENSOR/IMG_6972.JPG",
          ],
  name: "Water Leak Sensor", 
  description: [
    " ",
    
  ],
  
  amount: 17.00,
  kg: 0.40,
},
{
  id: 42,
  image: ["assets/img/items/new27/smartAlarm.jpg",
          ],
  name: "Smart Alarm", 
  description: [
    " ",
    
  ],
  
  amount: 40.00,
  kg: 0.40,
},
{
  id: 43,
  image: ["assets/img/items/Motion-Sensor/Motion-snsr/Mainlogix Product motion snsr2.png",
          "assets/img/items/Motion-Sensor/Motion-snsr/Mainlogix Product motion snsr1.png",
          ],
  name: "PIR Sensor", 
  description: [
    " ",
    
  ],
  
  amount: 10.00,
  kg: 0.40,
},
{
  id: 44,
  image: ["assets/img/items/new27/Smart thermostat.jpg",

          ],
  name: "Smart Thermostat", 
  description: [
    " ",
    
  ],
  
  amount: 50.00,
  kg: 0.40,
},
{
  id: 45,
  image: ["assets/img/items/Camera/Camera/Mainlogix Product cam3.png",
          ],
  name: "Smart Motion P2P Camera", 
  description: [
    " ",
    
  ],
  
  amount: 50.00,
  kg: 0.40,
},
{
  id: 46,
  image: ["assets/img/items/new27/echoDot5thGen.jpeg",
        
          ],
  name: "Alexa Echo dot 5th Gen", 
  description: [
    "The Echo Dot 5th Gen is a smart speaker designed to bring Alexa into your home or office space. It offers hands-free voice control for a wide range of tasks, from playing music and controlling smart home devices to providing information, news updates, weather forecasts, and more. Its compact size makes it suitable for various rooms, providing access to Alexa's capabilities wherever you need it."
  ],
  features: [
    "Voice Control: Use your voice to play music, control smart home devices, make calls, set alarms, and more. Simply say \"Alexa\" followed by your command or question.",
    "Compact Design: The Echo Dot is small and portable, making it easy to place on a bedside table, kitchen counter, or desk without taking up much space.",
    "Alexa Skills: Access tens of thousands of Alexa skills to add new capabilities, such as ordering food, requesting a ride, playing games, or checking your calendar.",
    "Streaming Capabilities: Stream music from various services like Amazon Music, Apple Music, Spotify, Pandora, and others through the Echo Dot's speaker.",
    "Smart Home Integration: Control compatible smart home devices like lights, thermostats, locks, and more with your voice or the Alexa app.",
    "Drop-In and Intercom: Use Drop-In to instantly connect to other Echo devices in your home, or use it as an intercom system to communicate between rooms.",
    "Privacy Features: Includes a microphone off button that electronically disconnects the microphones for added privacy when not in use.",
    "Bluetooth Connectivity: Connect your smartphone or other devices via Bluetooth to stream audio wirelessly to the Echo Dot's speaker.",
    "Multi-Room Music: Sync your Echo Dot with other Echo devices to play music throughout your home simultaneously.",
    "Voice Profiles: Alexa can recognize different voices to personalize responses, including recognizing specific users and providing personalized content."
  ],
  benefits: [
    "Hands-Free Convenience: Control your smart home, get information, and manage tasks with just your voice, freeing up your hands for other activities.",
    "Versatile Use: Ideal for various applications, including as a speaker for music, an assistant for daily tasks, and a controller for smart home devices.",
    "Integration with Alexa Ecosystem: Works seamlessly with other Alexa-enabled devices and services, expanding its functionality and usability.",
    "Ease of Setup: Simple to set up and use, with the Alexa app guiding you through the process of connecting to Wi-Fi and configuring settings."
  ],
  applications: [
    "Home Entertainment: Stream music, podcasts, and audiobooks.",
    "Smart Home Control: Control lights, thermostats, cameras, and more.",
    "Information and News: Get weather updates, news briefings, and answers to questions.",
    "Communication: Make hands-free calls and use Drop-In to communicate with other Echo devices.",
    "Productivity: Set reminders, timers, and manage calendars."
  ],
  
  amount: 95.00,
  kg: 0.40,
},

{
  id: 47,
  image: ["assets/img/items/new27/Automatic-Water-Pump/auto-Water-Pump.jpeg",
          "assets/img/items/new27/Automatic-Water-Pump/auto-Water-Pump2.jpeg",
          "public/assets/img/items/new27/Automatic-Water-Pump/auto-Water-Pump3.jpeg",
          ],
  name: "Automatic Water Pumping System", 
  description: [
    "An automatic water pumping system is a setup that controls the pumping of water from a water source (such as a well, tank, or reservoir) to a destination (like a storage tank, irrigation system, or building plumbing) without manual intervention. It integrates sensors, controllers, and pumps to manage water flow based on preset conditions or demand signals, ensuring efficient water management."
  ],
  features: [
    "Automated Operation: Initiates and stops the water pump based on predefined conditions, such as water level in the source or destination tanks, pressure thresholds, or demand signals from connected devices.",
    "Sensor Integration: Uses sensors (like level sensors, pressure sensors, and flow meters) to monitor water levels, pressure, and flow rates in real-time, adjusting pump operations accordingly.",
    "Controller: Centralized control unit manages the system's operation, including pump activation, shutdown, and safety protocols.",
    "Remote Monitoring: Provides capability for remote monitoring and control via a mobile app or web interface, allowing users to check system status, adjust settings, and receive alerts.",
    "Energy Efficiency: Optimizes pump operation to minimize energy consumption by adjusting pump speed or cycling based on demand, saving electricity costs.",
    "Backup Power: Includes provisions for backup power sources (such as batteries or generators) to ensure continuous operation during power outages.",
    "Protection Mechanisms: Built-in safeguards like overcurrent protection, thermal protection, and dry-run protection to prevent pump damage and ensure longevity.",
    "User-Friendly Interface: Intuitive interface for easy setup, configuration, and monitoring of the system parameters and operational logs.",
    "Scalability: Modular design allows for scalability to accommodate varying water demands or expand the system as needed.",
    "Water Quality Management: Optional features for water filtration, disinfection, or treatment integration to maintain water quality before distribution."
  ],
  benefits: [
    "Convenience: Eliminates the need for manual operation, providing automatic water pumping and distribution.",
    "Efficiency: Reduces water wastage and optimizes energy consumption through smart control algorithms.",
    "Reliability: Ensures consistent water supply to meet demand, enhancing operational reliability.",
    "Cost-Effective: Lowers operational costs by minimizing energy use and reducing maintenance needs.",
    "Remote Accessibility: Enables remote monitoring and control for enhanced convenience and peace of mind."
  ],
  applications: [
    "Residential: Supplies water to homes for domestic use, garden irrigation, and swimming pools.",
    "Commercial: Supports water distribution in hotels, schools, hospitals, and office buildings.",
    "Agricultural: Facilitates irrigation systems for farms, orchards, and greenhouse operations.",
    "Industrial: Provides water supply for manufacturing processes, cooling systems, and industrial facilities.",
    "Municipal: Manages water distribution in municipal water supply systems and wastewater treatment plants."
  ],
  
  amount: 140.00,
  kg: 0.40,
},

{
  id: 48,
  image: ["assets/img/items/new27/water Tap1.png",

          ],
  name: "Water/Tap Controller", 
  description: [
    " ",
    
  ],
  
  amount: 25.00,
  kg: 0.40,
},

{
  id: 49,
  image: ["assets/img/items/new27/LedLight.jpg",
        
          ],
  name: "Led Light", 
  description: [
    "LED lights are semiconductor devices that emit light when an electric current passes through them.",
    "They are known for their energy efficiency, durability, and compact size.",
    "LED technology has enabled a wide range of lighting applications from residential to commercial and industrial settings."
  ],
  features: [
    "Energy Efficiency: LEDs consume significantly less energy compared to traditional incandescent and fluorescent lights, making them environmentally friendly and cost-effective.",
    "Long Lifespan: LED lights have a much longer lifespan, typically lasting up to 50,000 hours or more, which reduces maintenance costs and replacement frequency.",
    "Instantaneous Lighting: They provide instant brightness without any warm-up time, unlike some other types of lighting technologies.",
    "Compact Size: LEDs are small in size and can be manufactured into various shapes and designs, offering flexibility in lighting fixture design.",
    "Color Options: Available in a wide range of colors and color temperatures, including warm white, cool white, and daylight, allowing for customized lighting environments.",
    "Dimmable: Many LED lights are dimmable, offering adjustable brightness levels to suit different preferences and needs.",
    "Directional Light Emission: LEDs emit light in specific directions, which improves efficiency and reduces the need for diffusers and reflectors.",
    "Low Heat Emission: They generate very little heat compared to traditional lighting sources, reducing the risk of burns and fire hazards."
  ],
  benefits: [
    "Energy Savings: LED lights consume up to 80-90% less energy than traditional lighting, leading to significant energy cost savings over time.",
    "Longevity: Their extended lifespan reduces the frequency of replacements, minimizing maintenance costs and inconvenience.",
    "Environmental Impact: Lower energy consumption and longer lifespan contribute to reduced carbon footprint and environmental impact.",
    "Durability: LED lights are more resistant to shock, vibrations, and external impacts compared to fragile incandescent and fluorescent bulbs.",
    "Safety: They operate at low voltage and produce minimal heat, making them safer to handle and reducing fire risks.",
    "Versatility: Suitable for a wide range of applications including residential lighting, commercial buildings, outdoor spaces, automotive lighting, and decorative purposes."
  ],
  applications: [
    "Residential Lighting: Used for general lighting, task lighting, accent lighting, and decorative lighting in homes.",
    "Commercial and Office Lighting: Provides efficient and uniform lighting in offices, retail spaces, hotels, and hospitals.",
    "Outdoor Lighting: Street lighting, landscape lighting, parking lots, and security lighting benefit from LED technology due to its durability and energy efficiency.",
    "Industrial Lighting: Warehouses, manufacturing facilities, and industrial complexes utilize LED lights for bright and reliable illumination.",
    "Automotive Lighting: Headlights, taillights, and interior lighting in vehicles benefit from the compact size and durability of LED technology.",
    "Specialty Applications: LEDs are used in signage, displays, traffic lights, stage lighting, and aquarium lighting due to their color options and controllability."
  ],
  
  amount: 15.00,
  kg: 0.40,
},
{
  id: 50,
  image: ["assets/img/items/Switches/IMG_3861.JPG",
          "assets/img/items/Switches/IMG_3860.JPG",
          ],
  name: "Water Heater Smart Switch", 
  description: [
    "An AC socket or water heater switch is a smart home device designed to remotely control and manage the operation of electrical appliances, specifically water heaters, through connectivity with a smart home system or mobile app.",
    "It enables users to turn appliances on or off, set schedules, and monitor energy usage from anywhere, providing convenience, energy efficiency, and safety."
  ],
  features: [
    "Remote Control: Enables users to control connected appliances remotely via a smartphone app or voice commands.",
    "Scheduling: Allows for setting timers and schedules to automate when appliances like water heaters should be turned on or off.",
    "Energy Monitoring: Provides real-time energy consumption data, helping users monitor and optimize electricity usage.",
    "Safety: Incorporates safety features such as overload protection and the ability to remotely turn off appliances in case of emergencies.",
    "Compatibility: Works with existing smart home ecosystems and platforms, allowing integration with other smart devices for enhanced automation.",
    "Voice Control: Supports voice commands when paired with compatible voice assistants like Amazon Alexa or Google Assistant, offering hands-free operation.",
    "Easy Installation: Typically easy to install, often replacing traditional wall sockets or integrating directly into the appliance’s power supply line.",
    "App Notifications: Sends notifications about appliance status, energy consumption, and reminders for maintenance or usage patterns."
  ],
  benefits: [
    "Convenience: Allows users to control appliances remotely, saving time and effort.",
    "Energy Efficiency: Enables optimized usage through scheduling and monitoring, reducing energy bills.",
    "Remote Monitoring: Provides peace of mind by allowing users to check appliance status and usage patterns remotely.",
    "Safety and Security: Enhances home safety by remotely controlling appliances and receiving alerts for unusual activities.",
    "Integration: Enhances overall smart home functionality by integrating with other smart devices and platforms."
  ],
  applications: [
    "Home Automation: Control and manage water heaters and other appliances in residential settings for improved comfort and efficiency.",
    "Energy Management: Monitor and optimize energy usage to reduce utility costs and environmental impact.",
    "Holiday Mode: Set schedules to simulate occupancy and enhance security during vacations.",
    "Commercial Use: Suitable for managing electrical appliances in businesses and rental properties to improve operational efficiency and tenant satisfaction."
  ],
  
  amount: 30.00,
  kg: 0.40,
},

{
  id: 51,
  image: ["assets/img/items/Smart-Bulb/Smart-Bulb/Mainlogix Product smart bulb2.png",
          
          ],
  name: "Smart Lamp", 
  description: [
    "A smart lamp is a modern lighting solution that integrates wireless connectivity and smart technology to provide users with enhanced control and automation options.",
    "It typically connects to a smart home network via Wi-Fi or Bluetooth, allowing users to remotely control the lamp’s brightness, color temperature, and scheduling through a mobile app or voice commands."
  ],
  features: [
    "Remote Control: Allows users to turn the lamp on or off, adjust brightness, and change colors remotely using a smartphone app or voice commands.",
    "Color Customization: Offers the ability to adjust the color temperature and choose from a wide range of colors to suit different moods and settings.",
    "Dimmability: Provides adjustable brightness levels to create ambient lighting suitable for various activities.",
    "Scheduling: Enables users to set timers and schedules for automatic operation, enhancing convenience and energy efficiency.",
    "Voice Control: Supports integration with popular voice assistants such as Amazon Alexa, Google Assistant, or Apple HomeKit, enabling hands-free control.",
    "Scene Setting: Allows users to create customized lighting scenes for different occasions, such as reading, relaxing, or entertaining.",
    "Energy Monitoring: Provides insights into energy consumption, allowing users to track usage and optimize energy efficiency.",
    "Compatibility: Integrates with other smart home devices and platforms, enhancing overall home automation capabilities.",
    "Motion Detection: Some models include motion sensors to automatically turn on the lamp when someone enters a room and turn off when no motion is detected, promoting energy savings."
  ],
  benefits: [
    "Convenience: Easily control lighting settings from anywhere using a smartphone or voice commands.",
    "Personalization: Customize lighting to match preferences, mood, or specific activities.",
    "Energy Efficiency: Optimize energy usage with dimming capabilities and scheduling features.",
    "Enhanced Ambiance: Set the right ambiance for different situations with adjustable colors and brightness levels.",
    "Integration: Seamlessly integrate with smart home ecosystems for enhanced automation and functionality."
  ],
  applications: [
    "Home Lighting: Enhance residential lighting setups in living rooms, bedrooms, and offices for improved comfort and productivity.",
    "Decorative Lighting: Use as decorative pieces to add ambiance and style to home interiors.",
    "Task Lighting: Provide focused illumination for reading, studying, or working.",
    "Smart Home Integration: Combine with other smart devices like smart speakers, thermostats, and security systems to create a cohesive smart home environment."
  ],
  
  amount: 20.00,
  kg: 0.40,
},
{
  id: 52,
  image: ["assets/img/items/new27/Speakers/IMG_5819.JPG",
          "assets/img/items/new27/Speakers/IMG_5820.JPG",
          ],
  name: "Speaker and Sound System", 
  description: [
    "A smart speaker or sound system combines traditional audio functionality with smart technology, allowing users to enjoy high-quality sound while offering additional features such as voice control, wireless connectivity, and integration with smart home platforms.",
    "These devices typically connect to the internet via Wi-Fi or Bluetooth, enabling seamless streaming of music, podcasts, and other audio content from various sources."
  ],
  features: [
    "Voice Control: Built-in voice assistants (e.g., Amazon Alexa, Google Assistant, Apple Siri) enable hands-free control over the speaker. Users can adjust volume, play music, set timers, and control other smart devices using voice commands.",
    "Streaming Capabilities: Supports streaming services such as Spotify, Apple Music, Amazon Music, and more, allowing users to play their favorite playlists and songs directly from the speaker.",
    "Multi-Room Audio: Some models support multi-room audio synchronization, enabling simultaneous playback of music across different speakers or rooms for a cohesive listening experience.",
    "Bluetooth Connectivity: Allows wireless pairing with smartphones, tablets, and other Bluetooth-enabled devices for streaming audio directly from these devices.",
    "Wi-Fi Connectivity: Connects to the home Wi-Fi network for access to internet radio stations, podcasts, and streaming services without needing a smartphone or tablet.",
    "Smart Home Integration: Integrates with other smart home devices and platforms, enabling automation and control through a centralized smart home hub or app.",
    "Sound Quality: Offers high-fidelity audio reproduction with advanced audio processing technologies for immersive listening experiences.",
    "Customizable Settings: Allows users to adjust sound settings, equalizer settings, and audio preferences through a companion app for personalized sound profiles.",
    "Touch Controls: Some models feature touch-sensitive controls on the speaker itself for easy navigation and playback control.",
    "Portable Options: Includes portable models with rechargeable batteries for use indoors or outdoors without needing a constant power source."
  ],
  benefits: [
    "Convenience: Control music playback and smart home devices with simple voice commands.",
    "Versatility: Stream music from multiple sources and enjoy high-quality audio throughout the home.",
    "Integration: Seamlessly integrate with other smart home devices for enhanced automation and functionality.",
    "Expandability: Build a multi-room audio system by adding compatible speakers for synchronized playback.",
    "Enhanced Entertainment: Access a wide range of audio content from various streaming services and sources."
  ],
  applications: [
    "Home Entertainment: Enhance home audio systems in living rooms, home theaters, and entertainment areas.",
    "Smart Home Control: Serve as a central hub for controlling other smart devices and automating routines.",
    "Background Music: Provide ambient music in kitchens, bedrooms, and home offices for a more pleasant atmosphere.",
    "Voice Assistance: Use built-in voice assistants for tasks like setting reminders, checking the weather, or controlling smart home devices hands-free."
  ],
  
  amount: 75.00,
  kg: 0.40,
},
{
  id: 53,
  image: ["assets/img/items/new27/Power circuit Breaker/IMG_5824.jpg",

          "assets/img/items/new27/Power circuit Breaker/IMG_5825.jpg",
          "assets/img/items/new27/Power circuit Breaker/IMG_5826.JPG",
          ],
  name: "Smart Power Circuit Breaker", 
  description: [
    "A power circuit breaker is a switching device designed to protect electrical circuits from damage due to overcurrents. It automatically interrupts the flow of electricity when it detects an overload or short circuit, preventing electrical fires, equipment damage, and hazards to personnel. Circuit breakers are crucial safety devices in both residential and industrial electrical systems."
  ],
  features: [
    "Overcurrent Protection: Automatically trips and interrupts electrical flow in the event of overcurrents, such as short circuits or overloads.",
    "Manual Reset: Can be manually reset after tripping to restore power once the cause of the overcurrent is resolved.",
    "Tripping Mechanism: Uses thermal or magnetic mechanisms (or a combination) to detect and respond to abnormal electrical conditions.",
    "Rating: Available in various current ratings to suit different electrical loads and applications, ranging from low voltage to high voltage systems.",
    "Arc Interruption: Capable of safely extinguishing electric arcs that may occur during circuit interruption.",
    "Diagnostic Features: Some advanced models include diagnostic capabilities to monitor circuit conditions and provide feedback on circuit health.",
    "Safety Standards: Designed and tested to comply with international safety standards and regulations to ensure reliability and safety in operation.",
    "Compact Design: Available in compact sizes suitable for residential use as well as larger configurations for industrial applications.",
    "Trip Indication: Provides visual or audible indicators to signal when the breaker has tripped, helping users quickly identify and address issues."
  ],
  benefits: [
    "Protection: Prevents damage to electrical equipment and wiring by disconnecting power during overcurrent events.",
    "Safety: Reduces the risk of electrical hazards and fire incidents associated with overloaded circuits.",
    "Convenience: Offers a convenient way to reset circuits after tripping without replacing fuses.",
    "Reliability: Provides reliable protection against various electrical faults, ensuring continuous operation of electrical systems."
  ],
  applications: [
    "Residential: Used in homes to protect branch circuits, appliances, and electrical outlets from overloads and short circuits.",
    "Commercial: Installed in commercial buildings to safeguard electrical distribution systems and equipment.",
    "Industrial: Essential for protecting heavy machinery, motors, and complex electrical systems in industrial facilities."
  ],
  
  amount: 42.00,
  kg: 0.40,
},



//////////////////////////////
{
  id: 55,
  image: ["assets/img/items/new27/google smart speaker.jpg",
          "assets/img/items/new27/google smart speaker2.jpg",
          ],
  name: "Google Smart Speaker", 
  description: [
    "The Google Smart Speaker, marketed under the brand Google Home, is a voice-activated speaker powered by Google Assistant, Google's virtual assistant AI. It's designed to integrate seamlessly into your home environment, offering hands-free assistance and smart home control through voice commands."
  ],
  features: [
    "Voice-Activated Assistant: Responds to voice commands to perform tasks such as playing music, answering questions, providing weather updates, setting alarms, and more.",
    "Smart Home Integration: Controls compatible smart home devices like lights, thermostats, plugs, and cameras using voice commands or through the Google Home app.",
    "Multi-Room Audio: Allows synchronization with other Google Home speakers to create a multi-room audio experience, playing the same music throughout different rooms.",
    "Information Services: Provides real-time information on weather, news updates, traffic conditions, sports scores, and general knowledge questions using Google's vast search capabilities.",
    "Personalized Responses: Recognizes different voices and provides personalized responses based on the user's voice profile, including calendar reminders and commute times.",
    "Entertainment Hub: Streams music from popular services like Spotify, YouTube Music, and Pandora, and plays podcasts and audiobooks on command.",
    "Hands-Free Calling: Makes hands-free calls to personal contacts and businesses within supported regions.",
    "Smart Home Routines: Automates tasks with customizable routines, such as adjusting lights, thermostats, and other devices based on time of day or user-defined triggers.",
    "Privacy Features: Includes physical mute buttons for the microphone and visual indicators when active, ensuring user privacy.",
    "Third-Party Integration: Works with a wide range of third-party apps and services, expanding functionality through partnerships and integrations."
  ],
  benefits: [
    "Convenience: Simplifies daily tasks and home management with voice control for various functions and devices.",
    "Accessibility: Enhances accessibility by providing hands-free access to information and services.",
    "Entertainment: Offers a seamless entertainment experience with music, podcasts, and audiobooks on demand.",
    "Home Automation: Facilitates smart home automation with easy setup and control of compatible devices.",
    "Personalization: Tailors responses and routines based on user preferences and voice recognition."
  ],
  applications: [
    "Home Use: Enhances daily life by serving as a central hub for information, entertainment, and home control.",
    "Smart Home Integration: Controls and manages a variety of smart home devices to create a connected living environment.",
    "Workplace: Provides productivity tools such as calendar updates, reminders, and hands-free calling in office settings."
  ],
  
  amount: 45.00,
  kg: 0.40,
},
{
  id: 56,
  image: ["assets/img/items/new27/MULTISENSOR/IMG_5808.JPG",
          "assets/img/items/new27/MULTISENSOR/IMG_5809.JPG",
          ],
  name: "Multi-Sensor", 
  description: [
    "A multi-sensor unit integrates vibration, motion detection, and light sensing technologies into a single device. This compact sensor is designed to monitor and detect changes in its environment, providing valuable data for both security and automation purposes."
  ],
  features: [
    "Vibration Sensor: Detects vibrations or shocks in its vicinity, indicating tampering, machinery movement, or potential intrusion.",
    "Motion Sensor: Detects movement or changes in motion within its range, ideal for security monitoring and automation triggers.",
    "Light Sensor: Measures ambient light levels to automate lighting systems based on natural light conditions or for energy-saving purposes.",
    "Integration Capabilities: Can be integrated with smart home systems to automate actions such as turning on lights when motion is detected or adjusting HVAC systems based on occupancy and light levels.",
    "Compact Design: Small form factor for discreet installation in various indoor and outdoor environments.",
    "Wireless Connectivity: Typically supports wireless protocols like Zigbee, Z-Wave, or Wi-Fi for seamless integration with smart home hubs or security systems.",
    "Battery-Powered: Operates on battery power for flexible placement without wiring, enhancing installation versatility.",
    "Customizable Settings: Adjustable sensitivity settings for motion and vibration detection, allowing customization based on specific monitoring needs."
  ],
  benefits: [
    "Enhanced Security: Provides real-time alerts and notifications for unexpected movements or disturbances, enhancing security measures.",
    "Automation Efficiency: Automates tasks such as lighting control and HVAC adjustments based on environmental changes, improving energy efficiency.",
    "Versatile Use: Suitable for indoor and outdoor environments, offering flexibility in monitoring different areas and conditions.",
    "Cost-Effective: Combines multiple sensing capabilities into one device, reducing the need for separate sensors and simplifying installation and maintenance."
  ],
  applications: [
    "Home Security: Monitor doors, windows, and entry points for unauthorized access or intrusions.",
    "Smart Lighting: Automatically adjust lighting based on occupancy and natural light levels to save energy.",
    "Industrial Monitoring: Detect equipment vibrations and movements to ensure operational efficiency and safety.",
    "Environmental Monitoring: Measure light levels in greenhouses or controlled environments to optimize plant growth conditions."
  ],
  
  amount: 29.00,
  kg: 0.40,
},


];

export default ProductsData;