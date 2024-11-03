import React from 'react'
import Image from 'next/image'
import styles from './SectionThree.module.css';

function SectionThree() {
  return (
    <div className={styles.power}>
        <div className={styles.powerdiv}>
            <h2 className={styles.h2}>Stay fully powered & Alert always.</h2>
            <p className={styles.powertext}>
                The Smart Grandeur app shows all your battery-operated devices along<br /> 
                with their live battery levels and models. Get notified when a battery 
                is<br /> running low, so you always know which ones to replace
            </p>
        </div>
        <div className={styles.dimmerknob}>
        <div className={styles.dimmerdiv}>
            <div className={styles.dimmer}>
                <div className={styles.knob}>
                <Image 
                    src="/knob.png"
                    alt="knob"
                    width={35}
                    height={33}
                />
                </div>
                <p className={styles.dimmertext}>Dimmer Knob</p>
                <div className={styles.battery}>
                    <p>100%</p>
                    <Image 
                        src="/barrel.png"
                        alt='battery'
                        width={30}
                        height={18}
                    />
                </div>
            </div>
        </div>
        <div className={styles.dimmerdiv}>
            <div className={styles.dimmer}>
                <div className={styles.knob}>
                <Image 
                    src="/camera.png"
                    alt="sensor"
                    width={35}
                    height={0}
                />
                </div>
                <p className={styles.dimmertext}>Fall detector Sensor</p>
                <div className={styles.battery}>
                    <p>100%</p>
                    <Image 
                        src="/red.png"
                        alt='redlight'
                        width={30}
                        height={18}
                    />
                </div>
            </div>
        </div>
        <div className={styles.dimmerdiv}>
            <div className={styles.dimmer}>
                <div className={styles.knob}>
                <Image 
                    src="/camera.png"
                    alt="camera"
                    width={35}
                    height={33}
                />
                </div>
                <p className={styles.dimmertext}>Intelligent Camera</p>
                <div className={styles.battery}>
                    <p>100%</p>
                    <Image 
                        src="/barrel.png"
                        alt='carbon'
                        width={30}
                        height={18}
                    />
                </div>
            </div>
        </div>
        <div className={styles.dimmerdiv}>
            <div className={styles.dimmer}>
                <div className={styles.knob}>
                <Image 
                    src="/knob.png"
                    alt="knob"
                    width={35}
                    height={33}
                />
                </div>
                <p className={styles.dimmertext}>Carbon Monoxide (CO)</p>
                <div className={styles.battery}>
                    <p>100%</p>
                    <Image 
                        src="/barrel.png"
                        alt='battery'
                        width={30}
                        height={18}
                    />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SectionThree