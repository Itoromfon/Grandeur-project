import React from 'react'
import Image from 'next/image'
import styles from './SectionSeven.module.css'

function SectionSeven() {
  return (
    <div className={styles.mainsmart}>
        <div className={styles.smarttext}>
            <h2 className={styles.smarth2}>SMART - Interactive AI Assistant</h2>
            <p className={styles.smartp}>SMART is your AI home assistant, offering personalized automation and intelligent 
                decisions to enhance convenience. It handles voice commands, suggests automations, 
                solves home challenges, and even monitors your home
            Example: `Hey SMART, turn off the lights.` SMART can also recommend energy-saving devices 
            or guide you through integrating a new sensor for enhanced security.
            </p>
        </div>
       <div className={styles.smartwrap}>
        <img 
            src="/smart.png"
            alt='smart-device'
            className={styles.smartwrapimg}
        />
        </div>
    </div>
  )
}

export default SectionSeven