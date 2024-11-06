import React from 'react'
import styles from './Energy.module.css'
import { SolarText } from '../solartext/SolarText'

function Energy() {
  return (
  <div className={styles.main}>
  <h1 className={styles.energyh1}>Effortless comfort and energy efficiency at your fingertips.</h1>
  <div className={styles.energy}>
    <div className={styles.imgcontainer}>
    <img
         src='./energyphone.png' 
         alt='Energy Device'
         className={styles.energyimg}
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