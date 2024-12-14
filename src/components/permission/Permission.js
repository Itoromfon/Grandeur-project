import React from 'react'
import Image from 'next/image'
import styles from './Permission.module.css'

function Permission() {
  return (
    <div className={styles.main}>
        <div className={styles.imagecontainer}>
            <Image 
                src='/people.svg'
                width={626}
                height={486}
                alt='people'
            />
        </div>
        <div className={styles.textdiv}>
            <div className={styles.htextdiv}>
                <h1 className={styles.htext}>Under Permission</h1>
            </div>
            <div className={styles.htext2div}>
                <h1 className={styles.htext2}>Management</h1>
            </div>
            <div className={styles.ptextdiv}>
                <p className={styles.ptext}>Customizable access levels for family members, guests, or Airbnb renters.
                Different permissions can be set for children (limited access) vs. Airbnb guests 
                (temporary access).</p>
            </div>
            <div className={styles.ptext2div}>
                <p className={styles.ptext2}>Customizable access levels for family members, guests, or Airbnb renters.
                Different permissions can be set for children (limited access) vs. Airbnb guests 
                (temporary access).</p>
            </div>
        </div>
    </div>
  )
}

export default Permission