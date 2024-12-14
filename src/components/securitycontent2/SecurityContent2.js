import React from 'react'
import styles from './SecurityContent2.module.css'
import { FaCheck } from "react-icons/fa";
import SecurityContent1Tab from '../securitycontent1tab/SecurityContent1Tab';
import Image from 'next/image';

function SecurityContent2() {
  return (
    <div className={styles.main}>
        <div className={styles.main1}>
            <div>
                <h1 className={styles.homeh1}>Home Automation Management Comfort Kit</h1>
            </div>
            <div className={styles.custombuttondiv}>
                <button className={styles.custombutton}><a>Customize Kit</a></button>
            </div>
        </div>
        <div>
            <h1 className={styles.homeh2}>$402</h1>
        </div>
        <div className={styles.line}></div>
        <div className={styles.button2main}>
        <div className={styles.button2div}>
            <div>
                <button className={styles.basic}>basic</button>
            </div>
            <div>
                <button className={styles.advance}>Advance</button>
            </div>
            <div>
                <button className={styles.premium}>Premium</button>
            </div>
            <div>
                <button className={styles.ultimate}>Ultimate</button>
            </div>
        </div>
        </div>
        <div>
            <p className={styles.itemtext}>Items Included:</p>
        </div>
        <div className={styles.main2}>
        <div className={styles.set1set2div}>
        <div className={styles.set1}>
            <div className={styles.gatewaydiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.gatewaytext}>Adaptor Socket</p>
                </div>
            </div>
            <div className={styles.motionsensordiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.motionsensortext}>SOS/Emergency Call Button</p>
                </div>
            </div>
            <div className={styles.smartsocketdiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartsockettext}>Motion Sensor</p>
                </div>
            </div>
        </div>
        <div className={styles.set2}>
        <div className={styles.smartswitchdiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartswitchtext}>Smart Bulb</p>
                </div>
        </div>
            <div className={styles.irsensordiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.irsensortext}>Smart Lock</p>
                </div>
            </div>
            <div className={styles.smartvoicediv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartvoicetext}>MainLogix Smart Voice Control</p>
                </div>
            </div>
        </div>
        <div className={styles.set2}>
        <div className={styles.smartswitchdiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartswitchtext}>Temperature and Humidity Sensor</p>
                </div>
            </div>
            <div className={styles.irsensordiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.irsensortext}>Fall Detection Sensor</p>
                </div>
            </div>
        </div>
        <div className={styles.set3}>
        <div className={styles.smartswitchdiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartswitchtext}>Heart Rate and BP Monitor</p>
                </div>
            </div>
            <div className={styles.irsensordiv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.irsensortext}>Intelligent</p>
                </div>
            </div>
            <div className={styles.smartvoicediv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartvoicetext}>Smoke Sensor</p>
                </div>
            </div>
            <div className={styles.smartvoicediv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartvoicetext}>Smart Socket</p>
                </div>
            </div>
            <div className={styles.smartvoicediv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartvoicetext}>Smart Switch</p>
                </div>
            </div>
            <div className={styles.smartvoicediv}>
                <div className={styles.checkdiv}>
                    <FaCheck className={styles.check} />
                </div>
                <div>
                    <p className={styles.smartvoicetext}>Water Sensor</p>
                </div>
            </div>
        </div>
        </div>
        <div className={styles.comfortkitdiv}>
            <Image 
                src='/comfortkit.png'
                className={styles.comfortkitimg} 
                width={562}
                height={126}
                alt='kit'
            />
        </div>
        </div>
        <div className={styles.securitytabdiv}>
        <SecurityContent1Tab />
        </div>
        <div className={styles.buttoncartdiv}>
            <button className={styles.buttoncart}><a>Add To Cart</a></button>
        </div>
    </div>
  )
}

export default SecurityContent2