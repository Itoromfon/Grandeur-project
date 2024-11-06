// components/Carousel.js
import Slider from 'react-slick';
import Image from 'next/image';
import Section1 from '@/pages/section1/Section1';
import styles from './Carousel.module.css'
import Navbar from '../navbar/Navbar';
import Section1b from '@/pages/section1b/Section1b';
import Section1c from '@/pages/section1c/Section1c';
import Section1d from '@/pages/section1d/Section1d';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className={styles.section1}>
        <Navbar />
        <Section1 />
      </div>
      <div className={styles.section2}>
        <Navbar />
        <Section1b />
      </div>
      <div className={styles.section3}>
        <Navbar />
        <Section1c />
      </div>
      <div className={styles.section4}>
        <Navbar />
        <Section1d />
      </div>
    </Slider>
  );
};

export default Carousel;
