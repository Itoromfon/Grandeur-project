import React from 'react'
import { HiOutlineShieldCheck } from "react-icons/hi";
import Image from 'next/image';
import styles from './FlowSection1.module.css'
import { GiSelfLove } from "react-icons/gi";

function FlowSection1() {
  return (
    <div className={styles.maindiv}>
        <div 
            className='
                flex 
                justify-center 
                items-center
                mobile-320-400:flex-col
                mobile-401-480:flex-col
                mobile-481-600:flex-col
                mobile-601-768:flex-col
                mobile-769-900:flex-col
                mobile-901-1200:flex-col
            '>
            <div 
                className='
                    z-10 
                    ml-[-150px]
                    mobile-320-400:ml-0
                    mobile-401-480:ml-0
                    mobile-481-600:ml-0
                    mobile-601-768:ml-0
                    mobile-769-900:ml-0
                    mobile-901-1200:ml-0
                    '>
                <Image 
                    src='/mysecuremode.svg'
                    width={573}
                    height={239}
                    alt='Security'
                />
            </div>
            <div 
                className='
                    ml-[-50px]
                    mobile-320-400:ml-0
                    mobile-401-480:ml-0
                    mobile-481-600:ml-0
                    mobile-601-768:ml-0
                    mobile-769-900:ml-0
                    mobile-901-1200:ml-0
                '>
                <Image 
                    src='/mysecurearrow.svg'
                    width={399}
                    height={87}
                    alt='Security'
                    className='
                    ml-0
                    mobile-320-400:hidden
                    mobile-401-480:hidden
                    mobile-481-600:hidden
                    mobile-601-768:hidden
                    mobile-769-900:hidden
                    mobile-901-1200:hidden'
                />
            </div>
        </div>
    <div 
        className='
            flex 
            justify-center 
            ml-[500px] 
            mt-[-147px]
            mobile-320-400:flex-col 
            mobile-320-400:ml-0 
            mobile-320-400:mt-[-55px] 
            mobile-401-480:flex-col
            mobile-401-480:ml-0 
            mobile-401-480:mt-[-55px] 
            mobile-481-600:flex-col
            mobile-481-600:ml-0 
            mobile-481-600:mt-[-55px] 
            mobile-601-768:flex-col
            mobile-601-768:ml-0
            mobile-601-768:mt-[-55px] 
            mobile-769-900:flex-col
            mobile-769-900:ml-0 
            mobile-769-900:mt-[-55px] 
            mobile-901-1200:flex-col
            mobile-901-1200:ml-0
            mobile-901-1200:mt-[-55px] 
        '>
        <div 
            className='
                ml-[20px] 
                mt-1 
                mobile-320-400:flex
                mobile-320-400:justify-center
                mobile-401-480:flex
                mobile-401-480:justify-center
                mobile-481-600:flex
                mobile-481-600:justify-center
                mobile-601-768:flex
                mobile-601-768:justify-center
                mobile-769-900:flex
                mobile-769-900:justify-center
                mobile-901-1200:flex
                mobile-901-1200:justify-center
                '>
            <Image 
                src='/healthair.svg'
                alt='Flow'
                width={135}
                height={174}
                className='
                    mt-5   
                '
                // className={styles.seenflowimg2}
            />
        </div>
        <div>
            <Image 
                src='/myhealthqq.svg'
                alt='Flow'
                width={543}
                height={217}
                // className={styles.seenflowimg2}
            />
        </div>
    </div>
    <div 
        className='
            flex 
            justify-center 
            mt-[-50px] 
            ml-[130px]
            mobile-320-400:hidden
            mobile-401-480:hidden
            mobile-481-600:hidden
            mobile-601-768:hidden
            mobile-769-900:hidden
            mobile-901-1200:hidden
        '>
        <Image 
            src='/smallflowarrow2.svg'
            width={648}
            height={131}
            alt='Arrow two'
        />
    </div>
    <div 
        className='
            flex 
            justify-center 
            items-center 
            mt-[-43px]
            mobile-320-400:flex-col
            mobile-401-480:flex-col
            mobile-481-600:flex-col
            mobile-601-768:flex-col
            mobile-769-900:flex-col
            mobile-901-1200:flex-col
        '>
        <div 
            className='
                z-10 
                ml-[-470px]
                mobile-320-400:flex-col
                mobile-320-400:ml-0
                mobile-401-480:flex-col
                mobile-401-480:ml-0
                mobile-481-600:flex-col
                mobile-481-600:ml-0
                mobile-601-768:flex-col
                mobile-601-768:ml-0
                mobile-769-900:flex-col
                mobile-769-900:ml-0
                mobile-901-1200:flex-col
                mobile-901-1200:ml-0
                '>
            <Image 
                src='/myairbnbqq.svg'
                width={543}
                height={217}
                alt='Airbnb Smart'
            />
        </div>
        <div className='z-10'>
            <Image 
                src='/doormart.svg'
                alt='Flow'
                width={178}
                height={210}
                className='
                    ml-[-50px]
                    mobile-320-400:ml-0
                    mobile-401-480:ml-0
                    mobile-481-600:ml-0
                    mobile-601-768:ml-0
                    mobile-769-900:ml-0
                    mobile-901-1200:ml-0
                '
                // className={styles.seenflowimg3}
            />
        </div>
    </div>
    </div>
  )
}

export default FlowSection1













{/* <div className={styles.main}>
        <div className={styles.checkdiv}>
        
            <Image 
                src='/smallcheck.svg'
                width={30}
                height={30}
                alt='Check'
                className={styles.checkimg}
            />
        </div>
        <div>
        <div className={styles.hpdiv}>
        <div>
            <h1 className={styles.htext}>Security (Theft Prevention Mode)</h1>
            <p className={styles.ptext}>If door opens unexpectedly and no one is home, locks
               all doors, activate an alarm, and notify the owner.
            </p>
        </div>
        </div>
        </div>
    </div>
    <div className={styles.seenarrow}>
    <div className={styles.seenflowdiv}>
        <Image 
            src='/smallseenflow.svg'
            alt='Flow'
            width={2220}
            height={220}
            className={styles.seenflowimg}
        />
    </div>
    <div className={styles.smallflowarrow1}>
        <Image 
            src='/smallflowarrow1.svg'
            width={1299}
            height={87}
            alt='Arrow One'
        />
    </div>
    </div>
        <div className={styles.main2}>
        <div className={styles.checkdiv2}>
            
            <Image 
                src='/smallhealth.svg' 
                width={32} height={32} 
                alt='Health'
                className={styles.smallhealthimg} 
            />
        </div>
        <div>
        <div className={styles.hpdiv2}>
        <div>
            <h1 className={styles.htext2}>Health</h1>
            <p className={styles.ptext2}>If air quality drops, turn on air purifier, send alert, and adjust ventilation
            </p>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.seenflowdiv2}>
        <Image 
            src='/healthair.svg'
            alt='Flow'
            width={135}
            height={174}
            className={styles.seenflowimg2}
        />
        </div>
        <div className={styles.smallflowarrow2}>
            <Image 
                src='/smallflowarrow2.svg'
                width={648}
                height={131}
                alt='Arrow two'
            />
        </div>
        <div className={styles.main3}>
        <div className={styles.checkdiv3}>
            
            <Image 
                src='/smallhotel.svg' 
                width={34} 
                height={34} 
                alt='Hotel'
                className={styles.smallhotelimg3}
            />
        </div>
        <div>
        <div className={styles.hpdiv3}>
        <div>
            <h1 className={styles.htext3}>Airbnb (Property Management)</h1>
            <p className={styles.ptext3}>Set lights, temperature, and security to a 
                ‘guest-ready’ mode upon guest check-in.
            </p>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.seenflowdiv3}>
        <Image 
            src='/doormart.svg'
            alt='Flow'
            width={138}
            height={210}
            className={styles.seenflowimg3}
        />
        </div> */}