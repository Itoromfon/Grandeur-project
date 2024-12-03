import React from 'react'
import styles from './Section1d.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaHouse } from "react-icons/fa6";

function Section1d() {
  return (
    <div>
    <div className={styles.section1}>
      <div className={styles.section1x}>
        <div>
          <h1 className={styles.h1main}>Voice Control</h1>
          <p className={styles.p1main}>
            Integration with Google Assistance, Alexa, SMART (Mainlogix), and Siri for seamless voice control
            allowing users to manage their devices hands free.
          </p>
          <div className={styles.p1adiv}>
          <div className={styles.smallhomediv}>
              <Image 
                src='/smallhouse.svg'
                width={22}
                height={20}
                alt='Smart Home'
              />
            </div>
            <p className={styles.p1amain}>Reduce heating during peak hours to save 20% on energy costs.</p>
          </div>
          <div className={styles.p1bdiv}>
          <div className={styles.smallhomediv}>
              <Image 
                src='/smallhouse.svg'
                width={22}
                height={20}
                alt='Smart Home'
              />
            </div>
            <p className={styles.p1bmain}>Run appliances after 9PM for reduced rates & energy efficiency.</p>
          </div>
          <div className={styles.p1cdiv}>
          <div className={styles.smallhomediv}>
              <Image 
                src='/smallhouse.svg'
                width={22}
                height={20}
                alt='Smart Home'
              />
            </div>
            <p className={styles.p1cmain}>Switch to eco-mode in the early afternoon to save energy.</p>
          </div>
          <Link href="/product">
          <div className={styles.buttoncontainer}>
            <button 
              className={styles.button}
            >
                <div className={styles.buttontext}>
                    Learn More
                </div>
            </button>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.gadget}>
        <Image 
          src="/smallbannerside.svg"
          alt="Grandeur-smart phone"
          className={styles.gadgetimg}
          width={500}
          height={288}
        />
      </div>
      </div>
    </div>
  )
}

export default Section1d