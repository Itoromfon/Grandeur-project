import React from 'react'
import styles from './Energy.module.css'
import { SolarText } from '../solartext/SolarText'
import Image from 'next/image';

function Energy() {
  return (
  <div className={styles.main}>
  <h1 className={styles.energyh1}>Effortless comfort and energy efficiency at your fingertips.</h1>
  <div className={styles.energy}>
    <div className={styles.imgcontainer}>
    <Image
         src='/energyphone.png' 
         alt='Energy Device'
         className={styles.energyimg}
         width={1500}
         height={600}
      />
      </div>
    <div className={styles.energydiv}>
      <SolarText />
    </div>
    </div>
  </div>
  )
}

export default Energy