'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './EmblaCarousel3.module.css'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import Image from 'next/image'

export default function EmblaCarousel3() {
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
                <Image 
                    src='/alexas.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/bluetooth.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/cloud.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/ieee.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/matter.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/nfc.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/zigbees.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
            </div>
            <div className={styles.emblaslide}>
            <Image 
                    src='/alexas.png'
                    alt='alexas'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/bluetooth.png'
                    alt='bluetooth'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/cloud.png'
                    alt='cloud'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/ieee.png'
                    alt='ieee'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/matter.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/nfc.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/zigbees.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
            </div>
            <div className={styles.emblaslide}>
            <Image 
                    src='/alexas.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/bluetooth.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/cloud.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/ieee.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/matter.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/nfc.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
                <Image 
                    src='/zigbees.png'
                    alt='smart device'
                    width={270}
                    height={501}
                />
            </div>
        </div>

        <div>
            <button className="embla__prev" onClick={scrollPrev}>
            Prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
            Next
            </button>
        </div>
        </div>
    </div>
  )
}
