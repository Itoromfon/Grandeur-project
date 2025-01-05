import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Section1b.module.css'
import { motion } from 'framer-motion'
import { FaHouse } from "react-icons/fa6";
import SmartAppWithHandAnimation from '../gettingstarted/gettingstarted'

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
          className={styles.textdiv}
        >
          <motion.h1 
            className={styles.h1main}
            variants={images}
          >
            Smart Security and Safety Kit
          </motion.h1>
          <motion.p 
            className={styles.p1main}
            variants={images}
          >
            Security and Safety: Advanced security systems to protect life and property such as smart locks, survelliance, camera, motion, sensor and more. providing peace of mind to home owners.
          </motion.p>
          <div className={styles.p1adiv}>
          <div className='mr-2 mt-[3px]'>
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
          <div className='mr-2 mt-[3px]'>
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
          <div className='mr-2 mt-[3px]'>
              <Image 
                src='/smallhouse.svg'
                width={22}
                height={20}
                alt='Smart Home'
              />
            </div>
            <p className={styles.p1cmain}>Switch to eco-mode in the early afternoon to save energy.</p>
          </div>
          <motion.a 
            href="/product"
            variants={images}
          >
            <div className={styles.buttoncontainer}>
            <button 
              className={styles.button}
            >
                <div className={styles.buttontext}>
                    Learn More
                </div>
            </button>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
      <div className='ml-5 hidden xl:block'> 
        <Image 
          src="/smallbannerside.svg"
          alt="Grandeur-smart phone"
          className='w-[434px] h-[419px] ml-10 mt-[-50px]'
          width={500}
          height={288}
        />
      </div>
      </div>
    </div>
  )
}

export default Section1