import React from 'react'
import styles from './MultipleAI.module.css'
import MultiAISlides from '../multiAISlides/MultiAISlides'
import EmblaCarousel4 from '../emblacarousel4/EmblaCarousel4'
// import EmblaCarousel5 from '../emblacarousel15/EmblaCarousel15'
import MyCarousel1 from '../ui/MyCarousel1'

function MultipleAI() {
  return (
    <div className={styles.main}>
        <div className={styles.hdiv}>
            <h1 className={styles.htext}>Multiple Integrations Suggested By AI</h1>
        </div>
        <div className={styles.pdiv}>
            <p className={styles.ptext}>
                Discover the power of Smart AI, your intelligent companion
                designed to streamline processes, enhance productivity, and 
                enable innovative solutions across platforms. With a focus 
                on seamless integration, Smart AI connects with your favorite 
                tools to create a unified experience tailored to your needs.
            </p>
        </div>
        <div>
            {/* <EmblaCarousel4 /> */}
            {/* <EmblaCarousel5 /> */}
            <MyCarousel1 />
        </div>
    </div>
  )
}

export default MultipleAI