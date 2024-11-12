'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './integration.module.css'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import TabCarousel from '@/components/tabcarousel/TabCarousel'
import Carousel from '@/components/carousel/Carousel'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla}>
        {/* <Navbar /> */}
        <Carousel />
        <TabCarousel />
    </div>
  )
}
