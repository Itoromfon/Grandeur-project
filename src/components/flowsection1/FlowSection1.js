import React from 'react'
import { HiOutlineShieldCheck } from "react-icons/hi";
import Image from 'next/image';
import styles from './FlowSection1.module.css'
import { GiSelfLove } from "react-icons/gi";

function FlowSection1() {
  return (
    <div className={styles.maindiv}>
    <div className={styles.main}>
        <div className={styles.checkdiv}>
            {/* <HiOutlineShieldCheck className={styles.check} /> */}
            <Image 
                src='/smallcheck.svg'
                width={30}
                height={30}
                alt='Check'
                className={styles.checkimg}
            />
        </div>
        <div>
        <div className={styles.hpdiv}>
        <div>
            <h1 className={styles.htext}>Security (Theft Prevention Mode)</h1>
            <p className={styles.ptext}>If door opens unexpectedly and no one is home, locks
               all doors, activate an alarm, and notify the owner.
            </p>
        </div>
        </div>
        </div>
    </div>
    <div className={styles.seenarrow}>
    <div className={styles.seenflowdiv}>
        <Image 
            src='/smallseenflow.svg'
            alt='Flow'
            width={220}
            height={220}
            className={styles.seenflowimg}
        />
    </div>
    <div className={styles.smallflowarrow1}>
        <Image 
            src='/smallflowarrow1.svg'
            width={399}
            height={87}
            alt='Arrow One'
        />
    </div>
    </div>
        <div className={styles.main2}>
        <div className={styles.checkdiv2}>
            {/* <GiSelfLove className={styles.check2} /> */}
            <Image 
                src='/smallhealth.svg' 
                width={32} height={32} 
                alt='Health'
                className={styles.smallhealthimg} 
            />
        </div>
        <div>
        <div className={styles.hpdiv2}>
        <div>
            <h1 className={styles.htext2}>Health</h1>
            <p className={styles.ptext2}>If air quality drops, turn on air purifier, send alert, and adjust ventilation
            </p>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.seenflowdiv2}>
        <Image 
            src='/healthair.svg'
            alt='Flow'
            width={135}
            height={174}
            className={styles.seenflowimg2}
        />
        </div>
        <div className={styles.smallflowarrow2}>
            <Image 
                src='/smallflowarrow2.svg'
                width={648}
                height={131}
                alt='Arrow two'
            />
        </div>
        <div className={styles.main3}>
        <div className={styles.checkdiv3}>
            {/* <HiOutlineShieldCheck className={styles.check3} /> */}
            <Image 
                src='/smallhotel.svg' 
                width={34} 
                height={34} 
                alt='Hotel'
                className={styles.smallhotelimg3}
            />
        </div>
        <div>
        <div className={styles.hpdiv3}>
        <div>
            <h1 className={styles.htext3}>Airbnb (Property Management)</h1>
            <p className={styles.ptext3}>Set lights, temperature, and security to a 
                ‘guest-ready’ mode upon guest check-in.
            </p>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.seenflowdiv3}>
        <Image 
            src='/doormart.svg'
            alt='Flow'
            width={138}
            height={210}
            className={styles.seenflowimg3}
        />
        </div>
        </div>
  )
}

export default FlowSection1