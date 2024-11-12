'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './TabCarousel.module.css'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function TabCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla}>
        <div className={styles.emblaviewport} ref={emblaRef}>
        <div className={styles.emblacontainer}>
            <div className={styles.emblaslide}>
                <div>
                <img 
                    src='/basic.png'
                    alt='basics'
                    className={styles.basic}
                />
                </div>
            </div>
            <div className={styles.emblaslide}>
                <div>
                <img 
                    src='/securitysafety.png'
                    alt='safety security'
                    className={styles.safety}
                />
                </div>
            </div>
            <div className={styles.emblaslide}>
                <div>
                <img 
                    src='/advanced.png'
                    alt='Advanced'
                    className={styles.advance}
                />
                </div>
            </div>
            <div className={styles.emblaslide}>
                <div>
                <img 
                    src='/premium.png'
                    alt='premium'
                    className={styles.premium}
                />
                </div>
            </div>
        </div>

        <div>
            <button className={styles.emblaprev} onClick={scrollPrev}>
            <GrPrevious />
            </button>
            <button className={styles.emblanext} onClick={scrollNext}>
            <GrNext />
            </button>
        </div>
        </div>
    </div>
  )
}
