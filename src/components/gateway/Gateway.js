import React from 'react'
import styles from './Gateway.module.css'
import Image from 'next/image'

function Gateway() {
  return (
    <div className={styles.main}>
    <div>
        <div className={styles.h1}>
            <h1 className={styles.h1text}>GrandeurSmart Gateway</h1>
        </div>
        <div className={styles.p1}>
            <p className={styles.ptext}>Take control of your smart home with cutting-edge technology that keeps your data private and your system secure</p>
        </div>
        <div className={styles.div1}>
            <div className={styles.dataprotectiondiv}>
                <Image 
                    src='/dataprotection.svg'
                    alt='Data Protection'
                    width={40}
                    height={40}
                    className={styles.dataprotectionimg}
                />
            </div>
            <div className={styles.privacyfirstdiv}>
                <h2 className={styles.h2text}>Privacy-First</h2>
                <p className={styles.p2text}>Local data control with zero multi-cloud sharing.</p>
            </div>
        </div>
        <div className={styles.div2}>
            <div className={styles.dataprotectiondiv2}>
                <Image 
                    src='/batteryprivacy.svg'
                    alt='Battery'
                    width={40}
                    height={40}
                    className={styles.dataprotectionimg2}
                />
            </div>
            <div className={styles.privacyfirstdiv2}>
                <h2 className={styles.h3text}>Backup Power</h2>
                <p className={styles.p3text}>Ensures continuity with power and emergency notifications.</p>
            </div>
        </div>
        <div className={styles.div3}>
            <div className={styles.dataprotectiondiv3}>
                <Image 
                    src='/Securityprivacys.svg'
                    alt='Security Privacy'
                    width={40}
                    height={40}
                    className={styles.dataprotectionimg3}
                />
            </div>
            <div className={styles.privacyfirstdiv3}>
                <h2 className={styles.h4text}>Security Enhancements</h2>
                <p className={styles.p4text}>Regular penetration testing and bug bounty programs..</p>
            </div>
        </div>
        <div className={styles.div4}>
            <div className={styles.dataprotectiondiv4}>
                <Image 
                    src='/messageprivacy.svg'
                    alt='Message Privacy'
                    width={40}
                    height={40}
                    className={styles.dataprotectionimg4}
                />
            </div>
            <div className={styles.privacyfirstdiv4}>
                <h2 className={styles.h5text}>Messaging</h2>
                <p className={styles.p5text}>Emphasize GrandeurSmart’s commitment to privacy, highlighting how Sandboxed Apps and no-cloud data reinforce secure home management.</p>
            </div>
        </div>
        </div>
        
        {/* <div className={styles.imagediv4}>
        <div className={styles.imagediv3}>
        <div className={styles.imagediv2}>
        <div className={styles.imagediv}>
        <div className={styles.privacyimages}>
            <div className={styles.wavediv}>
                <Image 
                    src='/waveprivacy.png'
                    width={92}
                    height={92}
                    alt='Wave'
                    className={styles.waveimg}
                />
            </div>
            <div className={styles.zigbeediv}>
                <Image 
                    src='/zigbeeprivacy.png'
                    width={92}
                    height={92}
                    alt='Zigbee'
                />
            </div>
            <div className={styles.lorawandiv}>
                <Image 
                    src='/lorawanprivacy.png'
                    width={92}
                    height={92}
                    alt='Wi-Fi'
                />
            </div>
            <div className={styles.parliadiv}>
                <Image 
                    src='/parliaprivacy.png'
                    width={92}
                    height={92}
                    alt='Wi-Fi'
                />
            </div>
            </div>
            <div>
                <div className={styles.privacyimages2}>
                <div className={styles.wifidiv}>
                    <Image 
                        src='/wifiprivacy.png'
                        alt='WiFi'
                        width={92}
                        height={92}
                    />
                </div>
                <div className={styles.diskdiv}>
                    <Image 
                        src='/diskprivacy.png'
                        alt='WiFi'
                        width={402}
                        height={237}
                        className={styles.diskimg}
                    />
                </div>
                <div className={styles.batterydiv}> 
                    <Image 
                        src='/batteryprivate.png'
                        alt='Battery'
                        width={92}
                        height={92}
                    />
                </div>
                </div>
                <div>
                <div className={styles.privacyimages3}>
                <div className={styles.bluetoothdiv}> 
                    <Image 
                        src='/bluetoothprivacy.png'
                        alt='Bluetooth'
                        width={92}
                        height={92}
                    />
                </div>
                <div className={styles.matterdiv}> 
                    <Image 
                        src='/matterprivacy.png'
                        alt='Matter'
                        width={92}
                        height={92}
                    />
                </div>
                <div className={styles.simdiv}> 
                    <Image 
                        src='/simprivacy.png'
                        alt='Sim'
                        width={92}
                        height={92}
                    />
                </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div> */}
        {/* <div>
        <div className={styles.imagediv}>
            <div className={styles.wadiv}>
                <Image 
                    src='/waveprivacy.png'
                    width={220}
                    height={220}
                    alt='wave'
                />
            </div>
            <div className={styles.zigdiv}>
                <Image 
                    src='/zigbeeprivacy.png'
                    width={220}
                    height={220}
                    alt='zigbee'
                />
            </div>
            <div className={styles.loradiv}>
                <Image 
                    src='/lorawanprivacy.png'
                    width={220}
                    height={220}
                    alt='lorawan'
                />
            </div>
            <div className={styles.parldiv}>
                <Image 
                    src='/parliaprivacy.png'
                    width={220}
                    height={220}
                    alt='parlia'
                />
            </div>
        </div>
            <div className={styles.diskimagediv5}>
            <div className={styles.diskimagediv4}>
            <div className={styles.diskimagediv3}>
            <div className={styles.diskimagediv2}>
                <Image 
                    src='/diskprivacy.png'
                    width={402}
                    height={237}
                    alt='Disk Privacy'
                    className={styles.diskimg}
                />
            </div>
            </div>
            </div>
        </div>
        <div className={styles.imagedivs}>
            <div className={styles.bludiv}>
                <Image 
                    src='/bluetoothprivacy.png'
                    alt='Bluetooth'
                    width={110}
                    height={110}
                />
            </div>
            <div className={styles.madiv}>
                <Image 
                    src='/matterprivacy.png'
                    alt='Matter'
                    width={110}
                    height={110}
                />
            </div>
            <div className={styles.simdiv}>
                <Image 
                    src='/simprivacy.png'
                    alt='Sim'
                    width={110}
                    height={110}
                />
            </div>
        </div>
        </div> */}
        <div className={styles.main2}>
            <div className={styles.mybackground6}>
            <div className={styles.mybackground5}>
            <div className={styles.mybackground4}>
            <div className={styles.mybackground3}>
            <div className={styles.mybackground2}>
            <div className={styles.mybackground1}>
            <div className={styles.mybackground}>
            <div className={styles.myimagesdiv}>
                <div className={styles.mywifidiv}>
                    <Image 
                        src='/mywifi.svg'
                        width={150}
                        height={92}
                        alt='wifi'
                    />
                </div>
                <div className={styles.mywavediv}>
                    <Image 
                        src='/mywave.svg'
                        width={150}
                        height={92}
                        alt='wifi'
                    />
                </div>
                <div className={styles.myzigbeediv}>
                    <Image 
                        src='/myzigbee.svg'
                        width={150}
                        height={92}
                        alt='wifi'
                    />
                </div>
                <div className={styles.mylorawandiv}>
                    <Image 
                        src='/mylorawan.svg'
                        width={150}
                        height={92}
                        alt='wifi'
                    />
                </div>
                <div className={styles.myparliadiv}>
                    <Image 
                        src='/myparlia.svg'
                        width={150}
                        height={92}
                        alt='wifi'
                    />
                </div>
                <div className={styles.mybatterydiv}>
                    <Image 
                        src='/mybattery.svg'
                        width={150}
                        height={92}
                        alt='wifi'
                        className={styles.mybatteryimg}
                    />
                </div>
                </div>
                <div className={styles.myimagesdiv2}>
                    <div className={styles.mybluetoothdiv}>
                        <Image 
                            src='/mybluetooth.svg'
                            width={150}
                            height={92}
                            alt='wifi'
                        />
                    </div>
                    <div className={styles.mymatterdiv}>
                        <Image 
                            src='/mymatter.svg'
                            width={150}
                            height={92}
                            alt='wifi'
                        />
                    </div>
                    <div className={styles.mysimdiv}>
                        <Image 
                            src='/mysim.svg'
                            width={150}
                            height={92}
                            alt='wifi'
                        />
                    </div>
                </div>
                <div className={styles.mydiskdiv}>
                    <Image 
                        src='/diskprivacy.svg'
                        width={402}
                        height={237}
                        alt='Disk'
                    />
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Gateway