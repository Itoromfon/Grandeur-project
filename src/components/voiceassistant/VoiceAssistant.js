import React from 'react'
import styles from './VoiceAssistant.module.css'
import Image from 'next/image'

function VoiceAssistant() {
  return (
    <div className={styles.main}>
        <div className={styles.textdiv}>
        <div className={styles.htextdiv}>
            <h1 className={styles.htext}>Voice Assistant</h1>
            <h1 className={styles.h2text}>Integration</h1>
        </div>
        <div>
            <p className={styles.ptext}>Integration with Alexa, Google, and Siri for 
            voice-activated control of settings and routines.
            </p>
        </div>
        <div>
            <p className={styles.ptext2}>
            Voice Command Shortcuts: Enable easy activation of 
            custom routines, like saying “Activate Traveler Mode”
             to put the home into a secure, low-power state.</p>
        </div>
        </div>
        <div>
        <div className={styles.imagespeaker}>
            <div className={styles.googlespeakerdiv}>
                <Image 
                    src='/googlespeaker.png'
                    width={226}
                    height={234}
                    alt='google speaker'
                />
            </div>
            <div className={styles.alexasdiv}>
                <Image 
                    src='/alexaspeaker.png'
                    width={270}
                    height={210}
                    alt='alexa speaker'
                />
            </div>
            <div className={styles.alexasdiv2}>
                <Image 
                    src='/alexaspeaker.png'
                    width={270}
                    height={210}
                    alt='alexa speaker'
                />
            </div>
        </div>
        <div className={styles.imagediv4}>
        <div className={styles.imagediv3}>
        <div className={styles.imagediv2}>
        <div className={styles.imagediv}>
            <div className={styles.smalldiskdiv}>
                <Image 
                    src='/smalldisk.svg'
                    width={92}
                    height={92}
                    alt='disk'
                />
            </div>
            <div className={styles.logo}>
                <Image 
                    src='/grandeurlogos.svg'
                    width={127}
                    height={48}
                    alt='logo'
                />
            </div>
        </div>
        </div>
        </div>
        </div>
        <div>
            <div className={styles.mainlogixdiv}>
                <Image 
                    src='/mainlogixspeaker.png'
                    alt='mainlogix speaker'
                    width={300}
                    height={270}
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default VoiceAssistant