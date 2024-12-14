'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './WeatherCarousel.module.css'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import Image from 'next/image'
import { AiFillBank } from 'react-icons/ai'
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherDownpour } from "react-icons/ti";
import { TbWashTemperature2 } from "react-icons/tb";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { GiDew } from "react-icons/gi";


export default function WeatherCarousel() {
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
                <div className={styles.main}>
                    <AiFillBank className={styles.icon} />
                    <p className={styles.text}>Weather</p>
                </div>
                <div className={styles.main}>
                <FaTemperatureHigh className={styles.tempicon} />
                <p className={styles.text}>Temperature</p>
                </div>
                <div className={styles.main}>
                <WiHumidity className={styles.humidicon} />
                <p className={styles.text}>Humidity</p>
                </div>
                <div className={styles.main}>
                <TiWeatherDownpour className={styles.weathericon} />
                <p className={styles.text}>Humidity</p>
                </div>
                <div className={styles.main}>
                <TbWashTemperature2 className={styles.tempicon2} />
                <p className={styles.text}>Humidity</p>
                </div>
                <div className={styles.main}>
                <GiDew className={styles.dewicon} />
                <p className={styles.text}>Humidity</p>
                </div>
                <div className={styles.main}>
                <TiWeatherWindyCloudy className={styles.windicon} />
                <p className={styles.text}>Wind</p>
                </div>
                <div className={styles.main}>
                <FaAssistiveListeningSystems className={styles.listenicon} />
                <p className={styles.text}>Voi</p>
                </div>
                
                <AiFillBank className={styles.icon} />
                <FaTemperatureHigh className={styles.tempicon} />
                <WiHumidity className={styles.humidicon} />
                <TiWeatherDownpour className={styles.weathericon} />
                <TbWashTemperature2 className={styles.tempicon2} />
                <GiDew className={styles.dewicon} />
                <TiWeatherWindyCloudy className={styles.windicon} />
                <FaAssistiveListeningSystems className={styles.listenicon} />
            </div>
            <div className={styles.emblaslide}>
                <AiFillBank className={styles.icon} />
                <FaTemperatureHigh className={styles.tempicon} />
                <WiHumidity className={styles.humidicon} />
                <TiWeatherDownpour className={styles.weathericon} />
                <TbWashTemperature2 className={styles.tempicon2} />
                <GiDew className={styles.dewicon} />
                <TiWeatherWindyCloudy className={styles.windicon} />
                <FaAssistiveListeningSystems className={styles.listenicon} />
                <AiFillBank className={styles.icon} />
                <FaTemperatureHigh className={styles.tempicon} />
                <WiHumidity className={styles.humidicon} />
                <TiWeatherDownpour className={styles.weathericon} />
                <TbWashTemperature2 className={styles.tempicon2} />
                <GiDew className={styles.dewicon} />
                <TiWeatherWindyCloudy className={styles.windicon} />
                <FaAssistiveListeningSystems className={styles.listenicon} />
            </div>
            <div className={styles.emblaslide}>
                <AiFillBank className={styles.icon} />
                <FaTemperatureHigh className={styles.tempicon} />
                <WiHumidity className={styles.humidicon} />
                <TiWeatherDownpour className={styles.weathericon} />
                <TbWashTemperature2 className={styles.tempicon2} />
                <GiDew className={styles.dewicon} />
                <TiWeatherWindyCloudy className={styles.windicon} />
                <FaAssistiveListeningSystems className={styles.listenicon} />
                <AiFillBank className={styles.icon} />
                <FaTemperatureHigh className={styles.tempicon} />
                <WiHumidity className={styles.humidicon} />
                <TiWeatherDownpour className={styles.weathericon} />
                <TbWashTemperature2 className={styles.tempicon2} />
                <GiDew className={styles.dewicon} />
                <TiWeatherWindyCloudy className={styles.windicon} />
                <FaAssistiveListeningSystems className={styles.listenicon} />
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
