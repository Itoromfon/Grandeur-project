import React from 'react';
import Link from 'next/link';
import { GrFormNext } from "react-icons/gr";
import styles from './HomeAutomaton.module.css';
import Image from 'next/image';

function HomeAutomation() {
  return (
    <div className={styles.main}>
    <div className={styles.maindiv}>
      <div className={styles.htextdiv}>
        <h1 className={styles.htext}>Home Automation Kit</h1>
      </div>
      <div className={styles.ptextdiv}>
        <p className={styles.ptext}>
        Display automation possibilities for lighting, climate, and appliance scheduling, all optimized for energy and efficiency.
        </p>
        <Link 
            href="/product"
          >
            <div className={styles.buttoncontainer}>
                <div className={styles.buttontext}>
                    See SMARTs Predictive Suggestions <GrFormNext className={styles.next}/>
                </div>
            </div>
          </Link>
      </div>
    </div>
    <div className={styles.variouskitdiv}>
        <Image 
            src='/ultimateH.png'
            alt='Ultimate Grandeur Smart'
            width={494}
            height={273}
            className={styles.variouskitimg}
        />
    </div>
    </div>
  );
}

export default HomeAutomation;
