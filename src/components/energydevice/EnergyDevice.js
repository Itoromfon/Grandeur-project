import React from 'react'
import styles from './EnergyDevice.module.css'

export const EnergyDevice = () => {
  return (
    <div>
      <img
         src='./energyphone.png' 
         alt='Energy Device'
         className={styles.energyimg}
      />
    </div>
  )
}
