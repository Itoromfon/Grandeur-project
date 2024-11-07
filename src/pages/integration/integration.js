import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import styles from './integration.module.css'
import WeatherCarousel from '@/components/weathercarousel/WeatherCarousel';

function integration() {
  return (
    <>
        <Navbar />
        <div className={styles.main}>
          <WeatherCarousel />
        </div>
    </>
  )
}

export default integration