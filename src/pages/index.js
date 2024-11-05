// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "../styles/Home.module.css"
// import HomePage from "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";
import React from 'react'
import styles from "../styles/Main.module.css"
import Link from 'next/link'
import Image from 'next/image'
import SectionTwo from './sectiontwo/SectionTwo'
import SectionThree from "./sectionthree/SectionThree";
import SectionFour from "./sectionfour/SectionFour";
import SectionFive from "./sectionfive/SectionFive";
import SectionSix from "./sectionsix/SectionSix";
import SectionSeven from "./sectionseven/SectionSeven";
import SectionEight from "./sectioneight/SectionEight";
import SectionNine from "./sectionnine/SectionNine";
import SectionTen from "./sectionten/SectionTen";
import SectionEleven from "./sectioneleven/SectionEleven";
import SectionTwelve from "./sectiontwelve/SectionTwelve";
import Footer from "@/components/footer/Footer";
import Section1 from "./section1/Section1";
import Carousel from "@/components/carousel/Carousel";
import Video from "./video/Video";
import Popup from "@/components/popup/Popup";
import SmartHome from "./smarthome/SmartHome";
import EmblaCarousel2 from "@/components/emblacarousel2/EmblaCarousel2";
import Automation from "../components/automation/Automation";
import AutomateHome from "@/pages/automatehome/AutomateHome";

export default function Home() {
  const slides = [0, 1, 2, 3, 4, 5]

  return (
    <div className={styles.main}>
    <div className={styles.mainsection}>
      <Carousel />
    </div>
    <Popup />
    <Video />
    <SmartHome />
    <EmblaCarousel2 slides={slides} />
    <Automation />
    <AutomateHome />
    <div className={styles.devices}>
      <Image 
        src="/devices.png"
        alt="Gadgets"
        width={1024}
        height={920}
      />
    </div>
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
    <SectionNine />
    <SectionTen />
    <SectionEleven />
    <SectionTwelve />
    <Footer />
    </div>
  )
}
