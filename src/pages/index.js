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

export default function Home() {
  return (
    <div>
    <div className={styles.mainsection}>
      <Navbar />
      <div className={styles.section1}>
      <div className={styles.section1x}>
        <div>
          <h1 className={styles.h1main}>Grandeur Smart</h1>
          <p className={styles.p1main}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy euismod
            tincidunt ut laoreet dolore magna aliquam arat volutpat.
          </p>
          <Link href="/product">
            <button 
              className={styles.button}
            >
                <div className={styles.buttontext}>
                    Explore Product
                </div>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.gadget}>
         <Image 
          src="/phone.png"
          alt="Grandeur-smart phone"
          width={100}
          height={215}
        />
        <Image 
          src="/laptop.png"
          alt="Grandeur-smart phone"
          width={480}
          height={288}
        />
      </div>
      </div>
    </div>
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
    </div>
  )
}
