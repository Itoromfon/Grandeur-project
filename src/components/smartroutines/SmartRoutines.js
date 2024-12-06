import React from 'react';
import Image from 'next/image';
import styles from './SmartRoutines.module.css'; // Import the CSS module

function SmartRoutines() {
  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.imageWrapper}>
        <Image
          src="/smartroutine.svg"
          width={579}
          height={432}
          alt="Smart Routine"
          className={styles.image} // Add a class for styling
        />
        <div className={styles.overlayText}>
          <h2 className={styles.h1text}>Smart Routines</h2>
          <p className={styles.p1text}>
            AI-suggested routines like Good Morning or Movie Night that configure lighting, temperature, and security based on time or detected activity.
          </p>
        </div>
      </div>
      <div className={styles.imageWrapper2}>
        <Image
          src="/predictivesuggest.svg"
          width={579}
          height={432}
          alt="Smart Routine"
          className={styles.image2} // Add a class for styling
        />
        <div className={styles.overlayText2}>
          <h2 className={styles.h2text}>Predictive Suggestions</h2>
          <p className={styles.p2text}>
            SMART’s AI offers recommended automations by learning patterns, like suggesting “Would you like to activate Night Mode?” if lights are consistently dimmed at night.
          </p>
        </div>
      </div>
      </div>

      <div className={styles.main2}>
      <div className={styles.imageWrapper3}>
        <Image
          src="/energyinsight.svg"
          width={579}
          height={432}
          alt="Smart Routine"
          className={styles.image3} // Add a class for styling
        />
        <div className={styles.overlayText3}>
          <h2 className={styles.h3text}>Energy Efficiency Insights</h2>
          <p className={styles.p3text}>
            SMART monitors usage trends and offers cost-saving
            insights, like reducing energy during peak rates.
          </p>
        </div>
      </div>
      <div className={styles.imageWrapper4}>
        <Image
          src="/geofencing.svg"
          width={579}
          height={432}
          alt="Smart Routine"
          className={styles.image4} // Add a class for styling
        />
        <div className={styles.overlayText4}>
          <h2 className={styles.h4text}>Geo-Fencing</h2>
          <p className={styles.p4text}>
             Automations trigger based on proximity, like 
             preparing the home as the user arrives.
          </p>
        </div>
      </div>
      </div>


      <div className={styles.main3}>
      <div className={styles.imageWrapper5}>
        <Image
          src="/eventbase.svg"
          width={1188}
          height={432}
          alt="Smart Routine"
          className={styles.image5} // Add a class for styling
        />
        <div className={styles.overlayText5}>
          <h2 className={styles.h5text}>Event-Based Automation</h2>
          <p className={styles.p5text}>
            SMART adapts based on weather or security alerts, such as
            lowering blinds if high temperatures are forecasted.
          </p>
        </div>
      </div>
      </div>
      </div>
  );
}

export default SmartRoutines;
