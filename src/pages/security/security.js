import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Footer from '@/components/footer/Footer'
// import SecurityKit from '@/components/securitykit/SecurityKit'
import Tab from '@/components/tab/Tab';
import ParticlesBackground from '@/components/particlesbackground/ParticlesBackground'
import styles from './security.module.css'

function security() {
  return (
    <>
    <div className={styles.main}>
        <ParticlesBackground />
        <Carousel />
         <Tab />
        <Footer />
      </div>
    </>
  )
}

export default security