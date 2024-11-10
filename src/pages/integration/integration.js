import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import styles from './integration.module.css'
import Chat from '@/components/chat/Chat';
// import ChatBox from '@/components/chatbox/ChatBox';
// import WeatherCarousel from '@/components/weathercarousel/WeatherCarousel';
import Footer from '@/components/footer/Footer';

function integration() {
  return (
    <>
        <Navbar />
        {/* <div className={styles.main}>
          <WeatherCarousel />
        </div> */}
        {/* <ChatBox /> */}
        <Chat />
        <Footer />
    </>
  )
}

export default integration