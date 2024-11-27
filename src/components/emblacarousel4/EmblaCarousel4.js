'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './EmblaCarousel4.module.css'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import Image from 'next/image'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

export default function EmblaCarousel4() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 2000})])

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
                <div className={styles.lorawandiv}>
                <Image
                    src='/grouplorawanethenet.png'
                    alt='smart device'
                    width={400}
                    height={160}
                    className={styles.smartadapter}
                />
                </div>
                <div className={styles.curtaindiv}>
                <Image
                    src='/groupcurtainblind.png'
                    alt='smart device'
                    width={455}
                    height={200}
                    className={styles.motionsensor}
                />
                </div>
                <div>
                <Image 
                    src='/groupdoorwindow.png'
                    alt='smart device'
                    width={455}
                    height={200}
                    className={styles.smartmotor}
                />
                </div>
                <div>
                <Image
                    src='/groupsos.png'
                    alt='smart device'
                    width={455}
                    height={200}
                    className={styles.smartdoorbell}
                />
                </div>
                <div>
                <Image 
                    src='/groupsmartbulb.png'
                    alt='smart device'
                    width={455}
                    height={200}
                    className={styles.smartdevice}
                />
                </div>
            </div>
            <div className={styles.emblaslide}>
                <div>
                <Image
                    src='/grouplorawanethenet.png'
                    alt='smart device'
                    width={300}
                    height={160}
                    className={styles.smartadapter}
                />
                </div>
                <div>
                <Image
                    src='/groupcurtainblind.png'
                    alt='smart device'
                    width={355}
                    height={200}
                    className={styles.motionsensor}
                />
                </div>
                <div>
                <Image 
                    src='/groupdoorwindow.png'
                    alt='smart device'
                    width={355}
                    height={200}
                    className={styles.smartmotor}
                />
                </div>
                <div>
                <Image
                    src='/groupsos.png'
                    alt='smart device'
                    width={355}
                    height={200}
                    className={styles.smartdoorbell}
                />
                </div>
                <div>
                <Image 
                    src='/groupsmartbulb.png'
                    alt='smart device'
                    width={355}
                    height={200}
                    className={styles.smartdevice}
                />
                </div>
            </div>
            <div className={styles.emblaslide}>
                <div>
                <Image
                    src='/grouplorawanethenet.png'
                    alt='smart device'
                    width={300}
                    height={160}
                    className={styles.smartada}
                />
                </div>
                <div>
                <Image
                    src='/groupcurtainblind.png'
                    alt='smart device'
                    width={355}
                    height={200}
                    className={styles.motionsensor}
                />
                </div>
                <div>
                <Image 
                    src='/groupdoorwindow.png'
                    alt='smart device'
                    width={355}
                    height={200}
                    className={styles.smartmotor}
                />
                </div>
                <div>
                <Image
                    src='/groupsos.png'
                    alt='smart device'
                    width={355}
                    height={200}
                    className={styles.smartdoorbell}
                />
                </div>
                <div>
                <Image 
                    src='/groupsmartbulb.png'
                    alt='smart device'
                    width={355}
                    height={200}
                    className={styles.smartdevice}
                />
                </div>
            </div>
        </div>

        <div className={styles.button}>
            <button className="emblaprev" onClick={scrollPrev}>
                <GrLinkPrevious className={styles.previcon} />
            </button>
            <button className="emblanext" onClick={scrollNext}>
                <GrLinkNext className={styles.nexticon} />
            </button>
        </div>
        </div>
    </div>
  )
}
