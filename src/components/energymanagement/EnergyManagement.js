import React from 'react';
import Link from 'next/link';
import { GrFormNext } from "react-icons/gr";
import styles from './EnergyManagement.module.css';
import Image from 'next/image';

function EnergyManagement() {
  return (
    <div className={styles.main}>
    <div className={styles.maindiv}>
      <div className={styles.htextdiv}>
        <h1 className={styles.htext}>Energy Management Kit</h1>
      </div>
      <div className={styles.ptextdiv}>
        <p className={styles.ptext}>
          Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day.
        </p>
        <Link 
            href="/product"
          >
            <div className={styles.buttoncontainer}>
                <div className={styles.buttontext}>
                    View Energy Efficiency Insights <GrFormNext className={styles.next}/>
                </div>
            </div>
          </Link>
      </div>
    </div>
    <div className={styles.variouskitdiv}>
        <Image 
            src='/variouskits.png'
            alt='Various Kits'
            width={494}
            height={273}
            className={styles.variouskitimg}
        />
    </div>
    </div>
  );
}

export default EnergyManagement;
