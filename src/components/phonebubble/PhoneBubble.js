import React from 'react';
import Image from 'next/image';
import styles from './PhoneBubble.module.css'

function PhoneBubble() {
  return (
    <div className={styles.main}>
        <div className={styles.main2}>
        <div className={styles.background4}>
        <div className={styles.background3}>
        <div className={styles.background2}>
        <div className={styles.background1}>
        <div className={styles.divwrapper}>
        <div className={styles.div1}>
        <div className={styles.wavediv}>
                <Image
                    src='/groupwave.png'
                    alt='wave'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.awsdiv}>
                <Image
                    src='/groupaws.png'
                    alt='aws'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.matterdiv}>
                <Image 
                    src='/groupmatter.png'
                    alt='matter'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.zigbeediv}>
                <Image 
                    src='/groupzigbee.png'
                    alt='zigbee'
                    className={styles.zigbeeimg}
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.lorawandiv}>
                <Image 
                    src='/grouplorawan.png'
                    alt='lorawan'
                    className={styles.lorawan}
                    width={86}
                    height={27}
                />
            </div>
        </div>
        <div className={styles.div2}>
            <div className={styles.awsdiv2}>
                <Image
                    src='/groupaws.png'
                    alt='aws'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.matterdiv2}>
                <Image 
                    src='/groupmatter.png'
                    alt='matter'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.zigbeediv2}>
                <Image 
                    src='/groupzigbee.png'
                    alt='zigbee'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.phonediv}>
                <Image 
                    src='/groupphone.png'
                    alt='phone'
                    className={styles.phoneimg}
                    width={166}
                    height={335}
                />
            </div>
            <div className={styles.awsdiv3}>
                <Image 
                    src='/groupaws.png'
                    alt='aws'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.matterdiv3}>
                <Image 
                    src='/groupmatter.png'
                    alt='matter'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.zigbeediv3}>
                <Image 
                    src='/groupzigbee.png'
                    alt='zigbee'
                    width={96}
                    height={96}
                />
            </div>
        </div>
        <div className={styles.div3}>
            <div className={styles.alexadiv}>
                <Image 
                    src='/groupalexa.png'
                    alt='alexa'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.rainbowdiv}>
                <Image 
                    src='/grouprainbow.png'
                    alt='rainbow'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.homekitdiv}>
                <Image 
                    src='/grouphomekit.png'
                    alt='homekit'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.matterdiv4}>
                <Image 
                    src='/groupmatter.png'
                    alt='matter'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.wavediv2}>
                <Image 
                    src='/groupwave.png'
                    alt='wave'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.homekitdiv2}>
                <Image 
                    src='/grouphomekit.png'
                    alt='homekit'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.alexadiv2}>
                <Image 
                    src='/groupalexa.png'
                    alt='alexa'
                    width={96}
                    height={96}
                />
            </div>
            <div className={styles.rainbowdiv2}>
                <Image 
                    src='/grouprainbow.png'
                    alt='rainbow'
                    width={96}
                    height={96}
                />
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className={styles.smartdivimg}>
        <Image 
        src='/grandeursmartapp.png'
        alt='Grandeur Smart App'
        width={538}
        height={517}  
        />
    </div>
    </div>
  )
}

export default PhoneBubble