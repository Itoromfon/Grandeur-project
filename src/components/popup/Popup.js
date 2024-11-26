import React from 'react'
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { PiMouseScroll } from 'react-icons/pi';
import styles from './Popup.module.css';
import Link from 'next/link';
import Chat from "../chat/Chat";

function Popup() {
  return (
    <div className={styles.popup}>
        <div className={styles.popdiv}>
        <div>
            <div className={styles.htextdiv}>
                <h1 className={styles.h1text}>Experience The Power of AI-Assisted Living</h1>
            </div>
            <div className={styles.ptextdiv}>
                <p className={styles.ptext}>See how AI-driven automations transform home energy management, security,
                    and comfort.
                </p>
            </div>
        </div>
        <video 
            className={styles.video} 
            controls // Adds playback controls (play, pause, volume, etc.)
            width="100%" // Makes the video responsive
            height="auto"
        >
            <source src="/video/smarthome.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
        {/* <div className={styles.videoContainer}>
            <video
                src="/video/smarthome.mp4"
                controls
                autoPlay
                loop
                muted
                className={styles.video}
            >
            </video>
        </div> */}
        {/* <div className={styles.line}></div> */}
        <div className={styles.chat}>
            <Chat />
        </div>
    </div>
  )
}

export default Popup