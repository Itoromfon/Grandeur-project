import React from 'react'
import styles from './AutomateSmart.module.css'
import Image from 'next/image'

{/* <Image className='mt-[-7px]' src='/smartai.svg' width={70} height={44} alt='smart ai' /> */}

function AutomateSmart() {
  return (
    <div className={styles.main}>
    <div className={styles.htextdiv}>
    <h1 className={styles.htext}>Automate & Let Smart AI Make Decision</h1>
    {/* <h1 className={styles.h2text}>Make Decisions</h1> */}
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