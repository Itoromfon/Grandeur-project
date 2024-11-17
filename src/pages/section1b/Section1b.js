import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Section1b.module.css'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
}

const images = {
  hidden: { 
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    }
  }
}

function Section1b() {
  return (
    <div>
    <div className={styles.section1}>
      <motion.div 
        className={styles.section1x}
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          variants={variants}
          initial="hidden"
          animate="show"
          className={styles.textdiv}
        >
          <motion.h1 
            className={styles.h1main}
            variants={images}
          >
            Smart Security and Safety
          </motion.h1>
          <motion.p 
            className={styles.p1main}
            variants={images}
          >
            Security and Safety: Advanced security systems to protect life and property such as 
            smart locks, survelliance, camera, motion, sensor and more. providing peace of mind to 
            home owners.
          </motion.p>
          <motion.a 
            href="/product"
            variants={images}
          >
            <div className={styles.buttoncontainer}>
            <button 
              className={styles.button}
            >
                <div className={styles.buttontext}>
                    Explore Product
                </div>
            </button>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
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

export default Section1b