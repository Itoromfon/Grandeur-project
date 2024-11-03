import React from 'react'
import Image from 'next/image'
import styles from './SectionFive.module.css'

function SectionFive() {
  return (
    <div className={styles.elderlyDiv}>
    <div className={styles.elderly}>
        <div>
            <h2 className={styles.elderlyh2}>Elderly, Adult, and Health<br /> Monitoring</h2>
            <p className={styles.elderlyp1}>Monitor the well-being of elderly family members or independent 
            adults with <br />  GrandeurSmart’s health tracking system. Receive notifications 
            for emergencies<br /> like sudden falls or inactivity, ensuring timely assistance.
            </p>
        </div>
        <div className={styles.elderlymandiv}>
        <div className={styles.elderlyman}>
            <div className={styles.elderlyperson}>
            <p>Elderly Person hasn’t<br /> Moved for a While</p>
            <p className={styles.elderlypercent}>100%</p>
            <Image 
                src="/barrel.png"
                alt='battery'
                width={37}
                height={18}
            />
            </div>
            <div className={styles.elderlyperson}>
                <Image 
                    src="/elderly.png"
                    alt='elderly-man'
                    width={202}
                    height={135}
                />
            </div>
        </div>
        </div>
    </div>
    <div className={styles.gadgetdiv}>
    <div className={styles.gadget}>
        <p className={styles.gadgettext}>Get Alert by Grandeur Smart Assitance</p>
        <Image 
            src="/gadgetset.png"
            alt='some set of gadget'
            width={358}
            height={74}
        />
    </div>
    </div>
    </div>
  )
}

export default SectionFive