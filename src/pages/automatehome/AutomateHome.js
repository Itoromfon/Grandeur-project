import React from 'react'
import styles from './AutomateHome.module.css'
import Image from 'next/image'
import { AiFillFrown } from 'react-icons/ai';
import { BsArrowDown } from 'react-icons/bs';
// import { motion, AnimatePresence } from 'framer-motion';

function AutomateHome() {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.maintext}>
         <h1 className={styles.mainh1}>Your Home. Your Rules</h1>
         <p className={styles.mainp}>Flows are your superpower to automate your entire home. Simply mix and match the right Flow cards to create something new.</p>
       </div>
       <div>
        <div className={styles.imageContainer}>
          <img 
            src='/mp.png'
            alt='mp3 image'
            className={styles.mainimage}
          />
        </div>
       </div>
       <div className={styles.icondiv}>
       <div className={styles.maintext}>
         <div>
          <p>When...</p>
          <div className={styles.div}>
            <div>
              <AiFillFrown 
                className={styles.icon}
              />
            </div>
            <div className={styles.texts}>
              <p>Date & Time</p>
              <p>The door opens</p>
            </div>
          </div>
         </div>
       </div>
       <div className={styles.downarrowdiv}>
        <BsArrowDown 
          className={styles.downarrow}
        />
       </div>
       <div className={styles.maintext}>
         <div>
          <p>And...</p>
          <div className={styles.div}>
            <div>
              <AiFillFrown 
                className={styles.icon}
              />
            </div>
            <div className={styles.texts}>
              <p>Date & Time</p>
              <p>The door opens</p>
            </div>
          </div>
         </div>
       </div>
       <div className={styles.downarrowdiv}>
        <BsArrowDown 
          className={styles.downarrow}
        />
       </div>
       <div className={styles.maintext}>
         <div>
          <p>Then...</p>
          <div className={styles.div}>
            <div>
              <AiFillFrown 
                className={styles.icon}
              />
            </div>
            <div className={styles.texts}>
              <p>Date & Time</p>
              <p>The door opens</p>
            </div>
          </div>
         </div>
       </div>
       </div>
    </div>
    <div className={styles.bulbdiv}>
      <img 
        src='/bulb.png'
        alt='bulb'
        className={styles.imagebulb}
      />
    </div>
    </>
  )
}

export default AutomateHome