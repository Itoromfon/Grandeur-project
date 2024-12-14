import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Footer from '@/components/footer/Footer'
// import Tab1 from '@/components/Tab1/Tab1';
import styles from './energynav.module.css'
import dynamic from 'next/dynamic';
import ParticlesBackground from '@/components/particlesbackground/ParticlesBackground';

// const ParticlesBackground = dynamic(() => import('@/components/particlesbackground/ParticlesBackground'), { ssr: false });
// const Carousel = dynamic(() => import('@/components/carousel/Carousel'), { ssr: false });
// const Tab1 = dynamic(() => import('@/components/Tab1/Tab1'), { ssr: false });

const Energynav = () => {
  return (
    <>
    <div className={styles.main}>
        <ParticlesBackground />
        <Carousel />
         {/* <Tab1 />  */}
        <Footer />
      </div>
    </>
  )
}

export default Energynav