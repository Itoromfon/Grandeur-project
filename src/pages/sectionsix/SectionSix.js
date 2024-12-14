import React from 'react'
import Image from 'next/image'
import styles from './SectionSix.module.css'

function SectionSix() {
  return (
    <div className={styles.airbnb}>
        <div className={styles.airbnbtext}>
            <h2 className={styles.airbnbh2}>Short-Let Kits (Airbnb Monitoring)</h2>
            <p className={styles.airbnbp}>
            Remotely manage short-let properties like Airbnb with GrandeurSmart’s monitoring system. 
            Track guest check-ins and check-outs while ensuring property security, all while maintaining 
            guest privacy.

            Example: Receive notifications when guests check in or out, keeping you informed and your 
            property secure.
            </p>
        </div>
        <div className={styles.airbnbimage}>
            <Image 
                src="/worker.png"
                alt='Man working'
                width={521}
                height={472}
            />
        </div>
    </div>
  )
}

export default SectionSix