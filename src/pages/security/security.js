import React from 'react'
//import Carousel from '../../components/carousel/Carousel'
import Footer from '@/components/footer/Footer'
//import SecurityKit from '@/components/securitykit/SecurityKit'
import styles from './security.module.css'
import dynamic from 'next/dynamic';
import SecurityContent1 from '@/components/securitycontent1.js/SecurityContent1';
import SecurityContent2 from '@/components/securitycontent2/SecurityContent2';
import SecurityContent3 from '@/components/securitycontent3/SecurityContent3';

// const ParticlesBackground = dynamic(() => 
//   import('@/components/particlesbackground/ParticlesBackground'), { ssr: false }
// );
const Carousel = dynamic(() => import('@/components/carousel/Carousel'), { ssr: false });

function security() {
  return (
    <>
    <div className={styles.main}>
        {/* <ParticlesBackground /> */}
        <Carousel />
        <SecurityContent1 />
        <SecurityContent2 />
        <SecurityContent3 />
        <Footer />
      </div>
    </>
  )
}

export default security