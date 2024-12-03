import React from 'react'
import styles from './AdvanceFlow.module.css'
import { GrFormNext } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';

function AdvanceFlow() {
  return (
    <div className={styles.main}>
        <div className={styles.hdiv}>
        <h1 className={styles.htext}>Advanced Flow Creation</h1>
        </div>
        <div className={styles.maindiv}>
        <div className={styles.main2}>
        <div>
            <div className={styles.h1textdiv}>
                <h1 className={styles.h1text}>Custom Flow Suggestions</h1>
            </div>
            <div className={styles.ptextarrowdiv}>
                <div>
                    <p className={styles.ptext}>Smart continuously learns from user behavior, suggesting tailored routines for times of day or specific activities.</p>
                </div>
                <div className={styles.arrowstraightdiv}>
                    <Image 
                        src='/arrowstraight.svg'
                        alt='arrow straight'
                        width={390}
                        height={87}
                        className={styles.arrowstraightimg}
                    />
                </div>
            </div>
            <div className={styles.getdiv}>
                <div>
                    <Link className={styles.linkdiv} href="#">Get Started <GrFormNext className={styles.next} /></Link>
                </div>
            </div>
        </div>
        </div>
        <div className={styles.advanceimg}>
            <Image 
                src='/newmp.svg'
                alt='Advance Flow Image'
                width={450}
                height={400}
                className={styles.newmpimg}
            />
        </div>
        </div>
        <div className={styles.arrowcurvediv}>
            <Image 
                src='/arrowcurve.svg'
                width={745}
                height={180}
                alt='Arrow Curve'
                className={styles.arrowcurveimg}
            />
        </div>
        <div className={styles.imagetextdiv}>
        <div className={styles.imagediv}>
            <div className={styles.smartlightdiv}>
                <Image 
                    src='/smartlight.svg'
                    alt='smart light'
                    width={284}
                    height={255}
                />
            </div>
            <div className={styles.bulbdiv}>
                <Image 
                    src='/smartbulb.svg'
                    alt='bulb'
                    width={416}
                    height={417}
                />
            </div>
        </div>
        
        <div className={styles.main3}>
        <div>
            <div className={styles.h2textdiv}>
                <h1 className={styles.h2text}>Complex Conditions</h1>
            </div>
            <div>
                <p className={styles.p2text}>Include conditionals (IF, AND, OR) for unique customizations. For instance, “If it’s past 10 PM and there’s movement detected, send an alert.</p>
            </div>
            <div className={styles.getdiv2}>
                <div>
                    <Link className={styles.linkdiv2} href="#">Get Started <GrFormNext className={styles.next} /></Link>
                </div>
            </div>
        </div>
        </div>
        </div>

        <div className={styles.maindiv3}>
        <div className={styles.main4}>
        <div>
        <div className={styles.arrowcurvediv2}>
            <Image 
                src='/arrowcurves2.svg'
                width={828}
                height={148}
                alt='Arrow Curve'
            />
        </div>
        <div className={styles.sceneriodiv2}>
        <div className={styles.sceneriodiv}>
        <div className={styles.h3textdiv}>
            <h1 className={styles.h3text}>Scenario Creation</h1>
        </div>
            <div>
                <p className={styles.p3text}>Offer pre-built flows for situations like Traveler Mode (automatically lowers heating/cooling to save energy while maintaining humidity levels)</p>
            </div>
            <div className={styles.getdiv2}>
                <div>
                    <Link className={styles.linkdiv2} href="#">Get Started <GrFormNext className={styles.next} /></Link>
                </div>
            </div>
        </div>
        <div className={styles.lightenergyimg}>
            <Image 
                src='/lightenergy.svg'
                alt='Advance Flow Image'
                width={302}
                height={380}
            />
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default AdvanceFlow