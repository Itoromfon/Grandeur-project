import Slider from 'react-slick';
import styles from './EnergyManagementKit2.module.css';
// import FlowDiagram from '../flowdiagram/FlowDiagram';
// import FlowDiagram2 from '../flowdiagram2/FlowDiagram2';
import HomeAutomation from '../homeautomation/HomeAutomation';
// import EnergyManagementKit from '../energymanagement/EnergyManagement';

// Custom Arrow Components
const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} ${styles.customArrow}`}
    style={{
      ...style,
      display: 'block',
      left: '10px', // Adjust positioning
      zIndex: 1,
    }}
    onClick={onClick}
  >
    {/* Custom content (e.g., an icon or character) */}
    <span className={styles.arrowText}>&lt;</span>
  </div>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} ${styles.customArrow}`}
    style={{
      ...style,
      display: 'block',
      right: '10px', // Adjust positioning
      zIndex: 1,
    }}
    onClick={onClick}
  >
    {/* Custom content (e.g., an icon or character) */}
    <span className={styles.arrowText}>&gt;</span>
  </div>
);

const EnergyManagementKit2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={styles.main}>
      <Slider {...settings}>
        <div className={styles.section1}>
          <HomeAutomation />
        </div>
        <div className={styles.section1}>
          <HomeAutomation />
        </div>
      </Slider>
    </div>
  );
};

export default EnergyManagementKit2;

