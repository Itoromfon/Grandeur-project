import React from 'react'
import styles from './SmartHome.module.css'
import PhoneBubble from '@/components/phonebubble/PhoneBubble'

function SmartHome() {
  return (
    <div className={styles.main}>
        <div className={styles.h1div}>
            <h1 className={styles.h1text}>One App, Multiple Integrations</h1>
        </div>
        <div className={styles.pdiv}>
            <p className={styles.ptext}>At Smart Grandeur, we are proud to partner with industry-leading sponsors 
                who share our vision of innovation, excellence, and progress.
            </p>
        </div>
        <PhoneBubble />
    </div>
  )
}

export default SmartHome