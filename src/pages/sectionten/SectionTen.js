import React from 'react'
import styles from './Sectionten.module.css'
import Image from 'next/image'

function SectionTen() {
  return (
    <div className={styles.home}>
        <h1 className={styles.homeh1}>Track your home’s status with Smart Grandeur</h1>
        <div className={styles.homediv}>
            <div className={styles.hometext}>
                <h2 className={styles.homeh2}>Your home At One Dashboard</h2>
                <p className={styles.homep}>Your devices gather a lot of valuable information. Smart Grandeur collects this 
                    data and beautifully presents it in one place.
                </p>
            </div>
            <div className={styles.imagediv}>
            <div className={styles.tempimage}>
                <Image 
                    src="/temp.png"
                    alt='temp'
                    width={211}
                    height={211}
                />
            </div>
            <div>
                <Image 
                    src="/light.png"
                    alt='light'
                    width={529}
                    height={318}
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTen