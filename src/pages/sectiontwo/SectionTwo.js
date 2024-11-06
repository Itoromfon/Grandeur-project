import React from 'react'
import styles from "../sectiontwo/SectionTwo.module.css";
import Slide from '@/components/Slide';
import Image from 'next/image';
import EmblaCarousel from '@/components/emblacarousel/EmblaCarousel';
import Partner from '@/components/partner/Partner';

function SectionTwo() {
  return (
    <div>
        <div className={styles.text}>
            <h2 className={styles.sectionhead}>Our Product.</h2>
        </div>
        <EmblaCarousel />
        <Partner />
        <div className={styles.ellipse}>
        </div>
        <div className={styles.mpdiv}>
        <div className={styles.mpimagediv}>
          <h1 className={styles.mphead}>Enhance Efficiency nearly in any tasks with flow.</h1>
          <h2 className={styles.mphead2}>Your Space. Your Control.</h2>
          <p className={styles.mptext}>with Flows. you can effortlessly control your home automation.
            simply<br /> pair the perfect flow cards to craft something innovative.
          </p>
        </div>
        <div className={styles.imagemp}>
          <Image 
            src="/mp.png"
            alt='mp-device'
            width={350}
            height={350}
          />
        </div>
        <div className={styles.maindetection}>
          <div className={styles.imagedetectdiv}>
            <div className={styles.imagedetection}>
            <Image 
              src='/detection.png'
              alt='automation'
              width={28}
              height={44}
            />
            </div>
            <p className={styles.detectiontext}>Detection</p>
            <p className={styles.detectiontext2}>The sensor detects when a door or window is opened or closed by sensing 
              when two parts of the sensor move apart or come together.
            </p>
          </div>
          <div className={styles.imagedetectdiv}>
            <div className={styles.imagedetection}>
            <Image 
              src='/detection.png'
              alt='automation'
              width={28}
              height={44}
            />
            </div>
            <p className={styles.detectiontext}>Detection</p>
            <p className={styles.detectiontext2}>The sensor detects when a door or window is opened or closed by sensing 
              when two parts of the sensor move apart or come together.
            </p>
          </div>
          <div className={styles.imagedetectdiv}>
            <div className={styles.imagedetection}>
            <Image 
              src='/detection.png'
              alt='automation'
              width={28}
              height={44}
            />
            </div>
            <p className={styles.detectiontext}>Detection</p>
            <p className={styles.detectiontext2}>The sensor detects when a door or window is opened or closed by sensing 
              when two parts of the sensor move apart or come together.
            </p>
          </div>
        </div>
        </div>
        <div className={styles.bulbdiv}>
        <div className={styles.bulb}>
          <Image 
            src="/bulb.png"
            alt='bulb'
            width={426}
            height={427}
          />
        </div>
        </div>
    </div>
  )
}

export default SectionTwo
