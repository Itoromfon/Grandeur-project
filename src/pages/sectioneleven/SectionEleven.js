import React from 'react'
import Image from 'next/image'
import styles from './SectionEleven.module.css'

function SectionEleven() {
  return (
    <div className={styles.grandeurdiv}>
    <div className={styles.grandeur}>
      <div>
        <h2 className={styles.grandeurh2}>Smart Grandeur Partners</h2>
        <p className={styles.grandeurp}>At Smart Grandeur, we are proud to partner with industry-leading sponsors 
          who share our vision of innovation, excellence, and progress.
        </p>
      </div>
      <div>
      <div className={styles.lorawanimagediv}>
        <Image 
          src='/lorawan.png'
          alt='lorawan'
          width={131}
          height={42}
          className={styles.lorawanimage}
        />
      </div>
      <div className={styles.zwdiv}>
      <div className={styles.zwimagediv}>
        <Image 
          src='/zwave.png'
          alt='zwave'
          width={131}
          height={42}
          className={styles.zwimage}
        />
      </div>
      <div className={styles.matterimagediv}>
        <Image 
          src='/matter.png'
          alt='matter'
          width={131}
          height={42}
          className={styles.matterimage}
        />
      </div>
      </div>
      <div>
      <div className={styles.awsimagediv}>
        <Image 
          src='/aws-partner.png'
          alt='aws-partner'
          width={131}
          height={42}
          className={styles.awsimage}
        />
      </div>
      </div>
      <div className={styles.zigbeediv}>
      <div className={styles.zigbeeimagediv}>
        <Image 
          src='/zigbee.png'
          alt='zigbee'
          width={131}
          height={42}
          className={styles.zigbeeimage}
        />
      </div>
      <div className={styles.alexaimagediv}>
        <Image 
          src='/alexa.png'
          alt='alexa'
          width={131}
          height={42}
          className={styles.aleximage}
        />
      </div>
      </div>
      <div>
      <div className={styles.rainbowimagediv}>
        <Image 
          src='/rainbow.png'
          alt='rainbow'
          width={131}
          height={42}
          className={styles.raindowimage}
        />
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default SectionEleven