import React from 'react'
import styles from './Section1d.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Section1d() {
  return (
    <div>
    <div className={styles.section1}>
      <div className={styles.section1x}>
        <div>
          <h1 className={styles.h1main}>Grandeur Smart</h1>
          <p className={styles.p1main}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy euismod
            tincidunt ut laoreet dolore magna aliquam arat volutpat.
          </p>
          <Link href="/product">
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
        />
        <Image 
          src="/laptop.png"
          alt="Grandeur-smart phone"
          width={480}
          height={288}
        />
      </div>
      </div>
    </div>
  )
}

export default Section1d