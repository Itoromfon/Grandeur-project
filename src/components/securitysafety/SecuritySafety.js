import React from 'react';
import Link from 'next/link';
import { GrFormNext } from "react-icons/gr";
import styles from './SecuritySafety.module.css'
import Image from 'next/image';

function SecuritySafety() {
  return (
    <div className={styles.main}>
    <div className={styles.maindiv}>
      <div className={styles.htextdiv}>
        <h1 className={styles.htext}>Security & Safety</h1>
      </div>
      <div className={styles.ptextdiv}>
        <p className={styles.ptext}>
        Showcase features like Geo-Fencing to adjust settings when users leave or 
        enter the home, and Event-Based Automation based on local alerts (e.g., 
        adjusting for extreme weather).
        </p>
        <Link 
            href="/product"
          >
            <div className={styles.buttoncontainer}>
                <div className={styles.buttontext}>
                    View Security & Safety Insighs <GrFormNext className={styles.next}/>
                </div>
            </div>
          </Link>
      </div>
    </div>
    <div className={styles.variouskitdiv}>
        <Image 
            src='/varioussmart.svg'
            alt='Various Kits'
            width={494}
            height={273}
            className={styles.variouskitimg}
        />
    </div>
    </div>
  );
}

export default SecuritySafety;
