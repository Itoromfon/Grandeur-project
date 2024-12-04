import React, { useState } from 'react';
import Link from 'next/link';
import { GrFormNext } from "react-icons/gr";
import styles from './EnergyManagement.module.css';
import Image from 'next/image';

function EnergyManagement() {
  const [activeIndex, setActiveIndex] = useState(0);

  const card = [
    {
      htext: 'Energy Management Kit 1',
      ptext: 'Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day.',
      link: 'View Energy Efficiency Insights',
      img: '/variouskits.svg'
    },
    {
      htext: 'Energy Management Kit 2',
      ptext: 'Provide insights on how to save energy in the household with real-time data.',
      link: 'View Energy Saving Tips',
      img: '/variouskits.svg'
    },
  ];

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <div className={styles.main}>
      <div className={styles.maindiv}>
        <div className={styles.htextdiv}>
          <h1 className={styles.htext}>{card[activeIndex].htext}</h1>
        </div>
        <div className={styles.ptextdiv}>
          <p className={styles.ptext}>{card[activeIndex].ptext}</p>
          <Link href="/product">
            <div className={styles.buttoncontainer}>
              <div className={styles.buttontext}>
                {card[activeIndex].link} <GrFormNext className={styles.next} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.variouskitdiv}>
        <Image
          src={card[activeIndex].img}
          alt="Various Kits"
          width={494}
          height={273}
          className={styles.variouskitimg}
        />
      </div>
    </div>
    {/* Indicator below the content */}
    {/* <div className={styles.indicatorContainer}>
    {card.map((_, index) => (
      <div
        key={index}
        className={`${styles.indicator} ${activeIndex === index ? styles.activeIndicator : ''}`}
        onClick={() => handleIndicatorClick(index)}
      />
    ))}
  </div> */}
  </>
  );
}

export default EnergyManagement;
