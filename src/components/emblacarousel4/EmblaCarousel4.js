'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './EmblaCarousel4.module.css';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import Image from 'next/image';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

export default function EmblaCarousel4() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    '/grouplorawanethenet.png',
    '/groupcurtainblind.png',
    '/groupdoorwindow.png',
    '/groupsos.png',
    '/groupsmartbulb.png',
  ];

  return (
    <div className={styles.embla}>
      <div className={styles.emblaviewport} ref={emblaRef}>
        <div className={styles.emblacontainer}>
          {images.map((src, index) => (
            <div className={styles.emblaslide} key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                className={styles.image}
              />
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                className={styles.image}
              />
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                className={styles.image}
              />
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.control} onClick={scrollPrev}>
          <GrLinkPrevious className={styles.icon} />
        </button>
        <button className={styles.control} onClick={scrollNext}>
          <GrLinkNext className={styles.icon2} />
        </button>
      </div>
    </div>
  );
}
