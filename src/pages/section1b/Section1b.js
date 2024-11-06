import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Section1b.module.css'

function Section1b() {
  return (
    <div>
    <div className={styles.section1}>
      <div className={styles.section1x}>
        <div>
          <h1 className={styles.h1main}>Smart Security and Safety</h1>
          <p className={styles.p1main}>
            Security and Safety: Advanced security systems to protect life and property such as 
            smart locks, survelliance, camera, motion, sensor and more. providing peace of mind to 
            home owners.
          </p>
          <Link className={styles.link} href="/product">
            <button 
              className={styles.button}
            >
                <div className={styles.buttontext}>
                    Explore Product
                </div>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.gadget}>
         <Image 
          src="/phone.png"
          alt="Grandeur-smart phone"
          width={160}
          height={215}
          className={styles.smartphone}
        />
        <Image 
          src="/laptop.png"
          alt="Grandeur-smart phone"
          width={480}
          height={288}
          className={styles.laptop}
        />
      </div>
      </div>
    </div>
  )
}

export default Section1b