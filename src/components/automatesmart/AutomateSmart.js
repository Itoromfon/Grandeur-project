import React from 'react'
import styles from './AutomateSmart.module.css'
import Image from 'next/image'

function AutomateSmart() {
  return (
    <div className={styles.main}>
    <div className={styles.htextdiv}>
    <h1 className={styles.htext}>Automate & Let <Image src='/smartai.png' className={styles.smartaiimg} alt='smart ai' width={90} height={74}/> AI Make Decisions</h1>
    </div>
    <div className={styles.ptextdiv}>
        <p className={styles.ptext}>
            Experience proactive, AI-driven control that adapts to your needs—even 
            when you’re not around.
        </p>
    </div>
    </div>
  )
}

export default AutomateSmart