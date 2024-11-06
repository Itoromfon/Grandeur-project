import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Section1.module.css'
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

function Section1() {
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
        >
          <motion.h1 
            className={styles.h1main}
            variants={images}
          >
            Smart Home Automation
          </motion.h1>
          <motion.p 
            className={styles.p1main}
            variants={images}
          >
            Solution for controlling and automating home devices via mobile phones. This includes lightning, heating,
            cooling and appliance control enhancing convenience and efficiency
          </motion.p>
          <motion.a 
            href="/product"
            variants={images}
          >
            <button 
              className={styles.button}
            >
                <div className={styles.buttontext}>
                    Explore Product
                </div>
            </button>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div 
        variants={variants}
        initial="hidden"
        animate="show"
        className={styles.gadget}>
         <motion.img 
          src="/phone.png"
          alt="Grandeur-smart phone"
          className={styles.phone}
          variants={images}
        />
        <motion.img 
          src="/laptop.png"
          alt="Grandeur-smart phone"
          className={styles.laptop}
          variants={images}
        />
      </motion.div>
      </div>
    </div>
  )
}

export default Section1