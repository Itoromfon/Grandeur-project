import React from 'react'
import styles from './Partner.module.css';
import EmblaCarousel3 from '../emblacarousel3/EmblaCarousel3'

function Partner() {
  return (
    <div>
    <div className={styles.text}>
        <h2 className={styles.sectionhead}>Our Partners.</h2>
        <p className={styles.sectiontext}>
            At Smart Grandeur, we are proud to partner with industry-leading 
           sponsors who share our vision of innovation, excellence, and progress.
        </p>
    </div>
        <EmblaCarousel3 />
    </div>
  )
}

export default Partner