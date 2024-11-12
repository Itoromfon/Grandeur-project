import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Footer from '@/components/footer/Footer'
// import SecurityKit from '@/components/securitykit/SecurityKit'
import Tab1 from '@/components/tab/Tab';
import ParticlesBackground from '@/components/particlesbackground/ParticlesBackground'
import styles from './energynav.module.css'

function energynav() {
  return (
    <>
    <div className={styles.main}>
        <ParticlesBackground />
        <Carousel />
         <Tab1 />
        <Footer />
      </div>
    </>
  )
}

export default energynav