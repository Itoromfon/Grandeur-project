import React from 'react'
import Image from 'next/image'
import styles from './SectionEight.module.css'

function SectionEight() {
  return (
    <div className={styles.weather}>
        <h1 className={styles.weatherh1}>Effortless comfort and energy efficiency at your fingertips</h1>
        <div className={styles.wrapdiv1}>
        <div className={styles.wrapdiv}>
            <Image
                src="/weatherset.png"
                alt='Smart device to check weather'
                className={styles.weatherimage}
                width={286}
                height={575}
            />
        <div className={styles.weatherdiv}>
            <h2 className={styles.weatherh2}>Transform Your Home`s Climate with Intelligent Control</h2>
            <p className={styles.weatherp}>A smart thermostat learns your preferences and offers remote control, optimizing
            your home`s temperature for comfort and energy savings.

            A modern device that controls your home`s heating and cooling system intelligently,
            offering convenience, comfort, and energy efficiency. It learns your daily routines
            and preferences to automatically adjust the temperature, ensuring your home is comfortable
            when needed and saving energy when you`re away.</p>
            <div className={styles.maindiv}>
                <div className={styles.remotediv}>
                    <p className={styles.remotep1}>Remote Control</p>
                    <p className={styles.remotep2}>Adjust your home’s temperature from anywhere using a smartphone or voice assistant.</p>
                </div>
                <div className={styles.remotediv}>
                    <p className={styles.remotep1}>Energy Efficiency</p>
                    <p className={styles.remotep2}>Automatically optimizes heating & cooling based on your schedule, reducing energy consumption.</p>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SectionEight