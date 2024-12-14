import React from 'react'
import Image from 'next/image'
import styles from './Innovative.module.css'

function Innovative() {
  return (
    <div className={styles.main}>
        <div className={styles.h1div}>
            <h1 className={styles.htext}>Innovative Automation Suggestions Embedded Throughout</h1>
        </div>
        <div className={styles.pdiv}>
            <p className={styles.ptext}>Explore practicals scenarios where SMART automation shines.</p>
        </div>
        <div className={styles.imagediv}>
            <Image 
                src='/smartgadgetdevice.svg'
                width={1126}
                height={557}
                alt='Smart Devices'
                className={styles.smartgadgetimg}
            />
        </div>
    </div>
  )
}

export default Innovative