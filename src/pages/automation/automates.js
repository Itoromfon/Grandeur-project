import React from 'react'
//import Carousel from '../../components/carousel/Carousel'
import Footer from '@/components/footer/Footer'
import SecurityKit from '@/components/securitykit/SecurityKit'
//import Tab1 from '@/components/tab/Tab';
import styles from './automates.module.css'
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('@/components/particlesbackground/ParticlesBackground'), { ssr: false });
const Carousel = dynamic(() => import('@/components/carousel/Carousel'), { ssr: false });
const Tab1 = dynamic(() => import('@/components/Tab1/Tab1'), { ssr: false });

const automates = () => {
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

export default automates