import Slider from 'react-slick';
import styles from './EnergyManagementKit.module.css';
// import FlowDiagram from '../flowdiagram/FlowDiagram';
// import FlowDiagram2 from '../flowdiagram2/FlowDiagram2';
import Energy1 from './Energy1';
import Energy2 from './Energy2';
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

const EnergyManagementKit = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow  />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={styles.main}>
      <Slider {...settings}>
        <div className={styles.section1}>
          <Energy1 />
        </div>
        <div className={styles.section1}>
          <Energy2 />
        </div>
      </Slider>
    </div>
  );
};

export default EnergyManagementKit;

