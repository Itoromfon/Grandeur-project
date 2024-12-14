import React from 'react'
import Image from 'next/image'
import styles from "./SectionFour.module.css"

function SectionFour() {
  return (
    <div className={styles.security}>
        <div className={styles.imagecontainer}>
            <Image 
                src="/house.png"
                alt='house'
                width={521}
                height={472}
            />
        </div>
        <div className={styles.redimage}>
        <Image 
            src="/red.png"
            alt='warning-sign'
            width={35}
            height={31}
        />
        </div>
        <div className={styles.text}>
            <h2 className={styles.texth2}>Security and Safety</h2>
            <p className={styles.textp}>GrandeurSmart provides advanced security with 24/7 AI-powered<br /> 
                cameras that monitor your home in real-time, alerting you only in<br /> emergencies. 
                This eliminates false alarms while ensuring your home is<br /> protected whether you`re
                 at work or away.<br />

                Example: If an unauthorized person enters, you`ll receive an immediate<br /> alert while routine
                movements are ignored.
            </p>
        </div>
    </div>
  )
}

export default SectionFour