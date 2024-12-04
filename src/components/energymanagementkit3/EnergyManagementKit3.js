// components/Carousel.js
import Slider from 'react-slick';
import Image from 'next/image';
import Section1 from '@/pages/section1/Section1';
import styles from './EnergyManagementKit3.module.css'
import Navbar from '../navbar/Navbar';
import Navbar2 from '../navbar2/Navbar2';
import Section1b from '@/pages/section1b/Section1b';
import Section1c from '@/pages/section1c/Section1c';
import Section1d from '@/pages/section1d/Section1d';
import EnergyManagement from '../energymanagement/EnergyManagement';
import HomeAutomation from '../homeautomation/HomeAutomation';
import SecuritySafety from '../securitysafety/SecuritySafety';

const EnergyManagementKit3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
  };

  return (
    <div className={styles.main}>
    <Slider {...settings}>
      <div className={styles.section1}>
        <SecuritySafety />
      </div>
      <div className={styles.section1}>
        <SecuritySafety />
      </div>
      {/* <div className={styles.section1}>
        <SecuritySafety />
      </div> */}
    </Slider>
    </div>
  );
};

export default EnergyManagementKit3;
