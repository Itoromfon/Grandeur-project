'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './EmblaCarousel.module.css'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import Image from 'next/image'

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
        <div className={styles.emblaviewport} ref={emblaRef}>
        <div className={styles.emblacontainer}>
            <div className={styles.emblaslide}>
                <div>
                <img 
                    src='/smartadapter.png'
                    alt='smart device'
                    className={styles.smartadapter}
                    />
                    <p className={styles.text}>Smart Adapter</p>
                </div>
                <div>
                <img 
                    src='/motionsensor.png'
                    alt='smart device'
                    className={styles.motionsensor}
                />
                <p className={styles.text}>Motion Sensor</p>
                </div>
                <div>
                <img 
                    src='/smartmotor.png'
                    alt='smart device'
                    className={styles.smartmotor}
                />
                <p className={styles.text}>Smart Motor</p>
                </div>
                <div>
                <img
                    src='/smartdoorbell.png'
                    alt='smart device'
                    className={styles.smartdoorbell}
                />
                <p className={styles.text}>Smart Doorbell</p>
                </div>
                <div>
                <img 
                    src='/smartlock.png'
                    alt='smart device'
                    className={styles.smartdevice}
                />
                <p className={styles.text}>Smart Device</p>
                </div>
            </div>
            <div className={styles.emblaslide}>
                <div>
                <img 
                    src='/smartadapter.png'
                    alt='smart device'
                    className={styles.smartadapter}
                    />
                    <p className={styles.text}>Smart Adapter</p>
                </div>
                <div>
                <img 
                    src='/motionsensor.png'
                    alt='smart device'
                    className={styles.motionsensor}
                />
                <p className={styles.text}>Motion Sensor</p>
                </div>
                <div>
                <img 
                    src='/smartmotor.png'
                    alt='smart device'
                    className={styles.smartmotor}
                />
                <p className={styles.text}>Smart Motor</p>
                </div>
                <div>
                <img
                    src='/smartdoorbell.png'
                    alt='smart device'
                    className={styles.smartdoorbell}
                />
                <p className={styles.text}>Smart Doorbell</p>
                </div>
                <div>
                <img 
                    src='/smartlock.png'
                    alt='smart device'
                    className={styles.smartdevice}
                />
                <p className={styles.text}>Smart Device</p>
                </div>
            </div>
            <div className={styles.emblaslide}>
                <div>
                <img 
                    src='/smartadapter.png'
                    alt='smart device'
                    className={styles.smartadapter}
                    />
                    <p className={styles.text}>Smart Adapter</p>
                </div>
                <div>
                <img 
                    src='/motionsensor.png'
                    alt='smart device'
                    className={styles.motionsensor}
                />
                <p className={styles.text}>Motion Sensor</p>
                </div>
                <div>
                <img 
                    src='/smartmotor.png'
                    alt='smart device'
                    className={styles.smartmotor}
                />
                <p className={styles.text}>Smart Motor</p>
                </div>
                <div>
                <img
                    src='/smartdoorbell.png'
                    alt='smart device'
                    className={styles.smartdoorbell}
                />
                <p className={styles.text}>Smart Doorbell</p>
                </div>
                <div>
                <img 
                    src='/smartlock.png'
                    alt='smart device'
                    className={styles.smartdevice}
                />
                <p className={styles.text}>Smart Device</p>
                </div>
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
