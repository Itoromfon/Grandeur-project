import React from "react";
import Slider from "react-slick";
import styles from './Carousel2.module.css'; // Assuming you create a CSS module for custom styling

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
];

const Carousel2 = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0",     // Set padding to control space around the centered item
    slidesToShow: 3,        // Number of slides to show at once
    focusOnSelect: true,    // Allows slide to be selected
    speed: 500,
    infinite: true,
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      {images.map((src, index) => (
        <div key={index} className={styles.slide}>
          <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel2;
