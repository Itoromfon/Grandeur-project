import React from 'react'
//import Carousel from '../../components/carousel/Carousel'
import Footer from '@/components/footer/Footer'
//import SecurityKit from '@/components/securitykit/SecurityKit'
//import Tab from '@/components/tab/Tab';
import styles from './security.module.css'
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => 
  import('@/components/particlesbackground/ParticlesBackground'), { ssr: false }
);
const Carousel = dynamic(() => import('@/components/carousel/Carousel'), { ssr: false });
const Tab = dynamic(() => import('@/components/tab/Tab'), { ssr: false });

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