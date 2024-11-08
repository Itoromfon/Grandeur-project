import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Section1c.module.css'

function Section1c() {
  return (
    <div>
    <div className={styles.section1}>
      <div className={styles.section1x}>
        <div>
          <h1 className={styles.h1main}>Smart Energy Management</h1>
          <p className={styles.p1main}>
            Tools for energy usage and monitoring. including thermostat, energy efficient lightning
            and real time energy consumption tracking, helping reduce utility bills and enviromental impact.
          </p>
          <Link className={styles.link} href="/product">
          <div className={styles.buttoncontainer}>
            <button 
              className={styles.button}
            >
                <div className={styles.buttontext}>
                    Explore Product
                </div>
            </button>
            </div>
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

export default Section1c