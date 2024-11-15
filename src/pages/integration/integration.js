'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './integration.module.css'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import Image from 'next/image'
// import Navbar from '@/components/navbar/Navbar'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Simultaneous from '@/components/simultaneous/Simultaneous'
// import TabCarousel from '@/components/tabcarousel/TabCarousel'
// import Carousel from '@/components/carousel/Carousel'
import dynamic from 'next/dynamic';
import { CartProvider } from '@/components/contexts/CartsContext'

export default function EmblaCarousel() {
  return (
    <div className={styles.embla}>
        {/* <Navbar />
        <Carousel />
        <TabCarousel /> */}
        <CartProvider>
          <Simultaneous />
        </CartProvider>
    </div>
  )
}
