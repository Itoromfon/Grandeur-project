import React from 'react'
import styles from './EnergyDevice.module.css'
import Image from 'next/image'

export const EnergyDevice = () => {
  return (
    <div>
      <Image
         src='./energyphone.png' 
         alt='Energy Device'
         width={50}
         height={50}
         className={styles.energyimg}
      />
    </div>
  )
}
