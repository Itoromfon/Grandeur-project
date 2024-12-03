import React, { useState } from 'react'
import NightMode from '../nightmode/NightMode'
import styles from './Heading.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { GrFormNext } from "react-icons/gr";
import Image from 'next/image';

function Heading() {
  // State to track if the button is on or off
  const [isOn, setIsOn] = useState(false);

  // Toggle function to change the state
  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.main}>
        <div>
            <NightMode />
        </div>
        <div className={styles.headdiv}>
        <div>
            <h1 className={styles.h1text}>Heading Title will Go here.</h1>
        </div>
        <div className={styles.p1textdiv}>
            <p className={styles.p1text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
                ut aliquip ex ea commodo consequat. Duis autem
            </p>
        </div>
        <div>
            <div>
                <h1 className={styles.activateh1}>Activate Routine</h1>
            </div>
            <div className={styles.maindiv}>
            <div>
            {/* <button
            onClick={toggleButton}
            className={styles.buttontoggle}
            >
            <FontAwesomeIcon
                icon={isOn ? faToggleOn : faToggleOff} // Show different icons based on state
                color={isOn ? '#4CAF50' : '#c4c4c6'}  // Green for "on", Red for "off"
            />
            </button> */}
            <Image 
                src='/smalltoggle2.svg'
                alt='Small Toggle'
                width={73}
                height={49}
            />
            </div>
            <div className={styles.viewdiv}>
                <div className={styles.viewlinkdiv}>
                    <Link className={styles.viewlink} href='#'>View All Routine</Link>
                </div>
                <div>
                    <GrFormNext className={styles.nextlink} />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Heading