// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "../styles/Home.module.css"
// import HomePage from "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";
import React from 'react'
import styles from "../styles/Main.module.css"
// import Link from 'next/link'
// import Image from 'next/image'
// import SectionTwo from './sectiontwo/SectionTwo'
// import SectionThree from "./sectionthree/SectionThree";
// import SectionFour from "./sectionfour/SectionFour";
// import SectionFive from "./sectionfive/SectionFive";
// import SectionSix from "./sectionsix/SectionSix";
// import SectionSeven from "./sectionseven/SectionSeven";
// import SectionNine from "./sectionnine/SectionNine";
// import SectionTen from "./sectionten/SectionTen";
// import SectionEleven from "./sectioneleven/SectionEleven";
import SectionTwelve from "./sectiontwelve/SectionTwelve";
import Footer from "@/components/footer/Footer";
// import Section1 from "./section1/Section1";
import Carousel from "@/components/carousel/Carousel";
import Popup from "@/components/popup/Popup";
import SmartHome from "./smarthome/SmartHome";
import EmblaCarousel2 from "@/components/emblacarousel2/EmblaCarousel2";
// import Automation from "../components/automation/Automation";
// import AutomateHome from "@/pages/automatehome/AutomateHome";
// import FramerMotion from "@/components/framermotion/FramerMotion";
// import { motion, AnimatePresence } from "framer-motion";
// import Energy from "../components/energy/Energy";
// import Chart from "@/components/chart/Chart";
import MultipleAI from "@/components/multipleAI/MultipleAI";
import Heading from "@/components/heading/Heading";
// import FlowDiagram from "@/components/flowdiagram/FlowDiagram";
import { ReactFlowProvider } from "reactflow";
import Carousel3 from "@/components/carousel3/Carousel3";
import FlowCreation from "@/components/flowcreation/FlowCreation";
import Recommendation from "@/components/recommendation/Recommendation";
import AdvanceFlow from "@/components/advanceflow/AdvanceFlow";
import EnergyManagementKit from "@/components/energymanagementkit/EnergyManagementKit";
import Gateway from "@/components/gateway/Gateway";
import Permission from "@/components/permission/Permission";
import VoiceAssistant from "@/components/voiceassistant/VoiceAssistant";
import Innovative from "@/components/innovative/Innovative";
// import ParticleBackground from "@/components/particlesbackground/ParticlesBackground";

export default function Home() {
  const slides = [0, 1, 2, 3, 4, 5]

  return (
    <>
      <div className={styles.main}>
      {/* <ParticleBackground className={styles.particles} /> */}
      <div className={styles.mainsection}>
        <Carousel />
      </div>
      <Popup />
      <SmartHome />
      <MultipleAI />
      <Heading />
      <ReactFlowProvider>
      {/* <FlowDiagram /> */}
      <Carousel3 />
      </ReactFlowProvider>
      <EmblaCarousel2 slides={slides} />
      <FlowCreation />
      <Recommendation />
      <AdvanceFlow />
      <EnergyManagementKit />
      <Gateway />
      <Permission />
      <VoiceAssistant />
      <Innovative />
      {/* <Automation />
      <AutomateHome />
      <Energy />
      <Chart />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionNine />
      <SectionTen /> */}
      {/* <SectionEleven /> */}
      {/* <SectionTwelve /> */}
      <Footer />
      </div>
      {/* </motion.div>
      </AnimatePresence> */}
    </>
  )
}
