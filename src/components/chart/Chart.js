import React from 'react'
import EnergySmart from '../energysmart/EnergySmart'
import EnergyChart from '../energychart/EnergyChart'
import styles from './Chart.module.css';
// import Weather from '../weather/Weather';
import EmblaCarousel from '../emblacarousel/EmblaCarousel';
import WeatherCarousel from '../weathercarousel/WeatherCarousel';

function Chart() {
  return (
    <div>
        <div className={styles.main}>
            <EnergySmart />
            <EnergyChart />
            {/* <Weather /> */}
            <WeatherCarousel />
        </div>
    </div>
  )
}

export default Chart