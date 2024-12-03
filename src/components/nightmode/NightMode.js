import React from 'react'
import styles from './NightMode.module.css'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import Image from 'next/image'

function NightMode() {
  return (
    <div className={styles.main}>
        <div className={styles.NightMode}>
            <div>
                <h1 className={styles.text}>Night Mode</h1>
            </div>
            <div className={styles.moondiv}>
                <Image 
                    src='/groupmoon.png'
                    alt='Moon'
                    width={47}
                    height={47}
                />
            </div>
            <div className={styles.bulbdiv}>
            <div>
                <Image 
                    src='/groupbulb.png'
                    alt='bulb'
                    width={48}
                    height={48}
                />
            </div>
            <div>
                <p className={styles.bulbtext}>Adjusts Lights</p>
            </div>
            </div>
            <div className={styles.healthdiv}>
                <div className={styles.secureimg}>
                    <AiOutlineSafetyCertificate className={styles.safetyicon} />
                </div>
                <div>
                    <p className={styles.safetytext}>Health and Safety Alerts</p>
                </div>
            </div>
            <div className={styles.healthdiv2}>
                <div className={styles.secureimg}>
                    <CiLock className={styles.safetyicon2} />
                </div>
                <div>
                    <p className={styles.safetytext2}>Permissions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NightMode