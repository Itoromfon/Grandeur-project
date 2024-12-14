import React from 'react'
import styles from './SolarText.module.css'
import PowerConsumedToggle from '../powerconsumetoggle/PowerConsumeToggle'

export const SolarText = () => {
  return (
    <div className={styles.solar}>
        <div className={styles.solardiv}>
            <h1 className={styles.solarh1}>Transform Your Home`s Climate with Intelligent Control.</h1>
            <p className={styles.solarp}>
            A smart thermostat learns your preferences and offers remote control, optimizing your home`s 
            temperature for comfort and energy savings.

            A modern device that controls your home`s heating and cooling system intelligently, offering 
            convenience, comfort, and energy efficiency. It learns your daily routines and preferences to 
            automatically adjust the temperature, ensuring your home is comfortable when needed and saving
            energy when you`re away.
            </p>
        </div>
        <div className={styles.remotediv}>
            <div className={styles.remote1div}>
                <h1 className={styles.remoteh1}>Remote Control</h1>
                <p className={styles.remotep1}>
                    Adjust your home’s temperature from anywhere using a smartphone or voice assistant.
                </p>
                <PowerConsumedToggle />
            </div>
            <div className={styles.remote2div}>
                <h1 className={styles.remoteh2}>Energy Effiency</h1>
                <p className={styles.remotep2}>
                    Automatically optimizes heating & cooling based on your schedule, reducing energy consumption.
                </p>
                <PowerConsumedToggle />
            </div>
        </div>
    </div>
  )
}
