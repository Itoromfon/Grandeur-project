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
            <FaRegCirclePlay 
                className={styles.popupimage} 
                style={{ color: 'black', fontSize: '52px' 
                }} 
            /> 
            <div className={styles.pop}>
                <p className={styles.popuptext}>Got three minutes?</p>
                <Link 
                    className={styles.link} 
                    href='#'>Watch The Video 
                        <IoIosArrowForward className={styles.arrow} />
                </Link>
            </div> 
        </div>
        <div className={styles.line}></div>
        <div className={styles.chat}>
            <Chat />
        </div>
    </div>
  )
}

export default Popup