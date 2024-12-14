import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ProductsData from '../simultaneous/SimultaneousData';
import styles from './Simultaneous.module.css';
import { setActiveIndex, setIsHovered } from '../../../store/activeIndexSlice';
import { useCart } from '../contexts/CartsContext';
import AnotherComponent from './Simultaneous2';
import Footer from '../footer/Footer';
import Navbar2 from '../navbar2/Navbar2';
import { WindowsLogo } from 'phosphor-react';

const ProductKitCarousel = () => {
    const activeIndex = useSelector((state) => state.activeIndex.value);
    const dispatch = useDispatch();
    // const [isHovered, setIsHovered] = useState(false);
    // const { addToCart } = useCart();
    // const router = useRouter();
    const [selectedText, setSelectedText] = useState({});
    //const [activeIndex, setActiveIndex] = useState(0)

    // const handleAddToCart = (productKit, selectedPackage) => {
    //     const productToCart = {
    //         ...productKit,
    //         selectedPackage,
    //         amount: productKit[selectedPackage].amount,
    //         image: productKit[selectedPackage].images[0],
    //         quantity: 1,
    //     };
    //     // addToCart(productToCart);
    //     showAlert(productToCart);
    //     // router.push('/cart');
    // };

    // function showAlert(product) {
    //     toast.success(`${product.name} (${product.selectedPackage} Package) has been added to your cart!`);
    // }

    const handleMouseEnter = () => dispatch(setIsHovered(true));
    const handleMouseLeave = () => dispatch(setIsHovered(false));

    // useEffect(() => {
    //     // const handleMouseEnter = () => {setIsHovered(true); console.log('mouseenter')};
    //     // const handleMouseLeave = () => setIsHovered(false);
    //     window.addEventListener('mouseenter', handleMouseEnter)
    //     window.addEventListener('mouseleave', handleMouseLeave)
    //     return () => {
    //         window.removeEventListener('mouseenter', handleMouseEnter)
    //         window.removeEventListener('mouseleave', handleMouseLeave)
    //     }
    // }, []);

    const handleButtonClick = (productKit, selectedPackage, index) => {
        // const nestedCarousels = productKit.nestedCarousels || [];
        // setSelectedNestedCarousels(nestedCarousels);
        setSelectedText((prev) => ({
          ...prev,
          [productKit.id]: productKit.availablePackages[index],
        }));
        dispatch(setActiveIndex(index)); 
    };

    // const handleButtonClick = (productKit, selectedPackage, index) => {
    //     setSelectedText(prev => ({
    //         ...prev,
    //         [productKit.id]: productKit[selectedPackage].content // Set full content for the selected package
    //     }));
    //     setActiveIndex(index); // Set the carousel to the clicked button's index
    // };

    return (
        <>
            <div className={styles.carouselVideoContainer}>
                <video 
                    autoPlay 
                    muted 
                    loop
                    playsInline 
                    className={styles.backgroundVideo}>
                    <source src="/video/smarthome.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Navbar2 />
                <Carousel
                    // key={isHovered ? 'hovered' : 'unhovered'}
                    activeIndex={activeIndex}
                    onSelect={(index) => dispatch(setActiveIndex(index))}
                    fade 
                    interval={5000}
                    pause='hover'
                    autoPlay={false}
                    className={styles.carouselContent}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    wrap={true}
                >
                    {ProductsData.map((productKit) => {
                        // const availablePackages = ['Basic', 'Advance', 'Premium', 'Ultimate'].filter(
                        //     selectedPackage => productKit[selectedPackage]
                        // );

                        return (
                            <Carousel.Item key={productKit.id}>
                                {/* <div className={styles.carouselItemContent}> */}
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <div className={styles.carouselCaptionContainer}>
                                        <h2 className={styles.h2text}>
                                            {productKit.name}
                                        </h2>
                                    </div>
                                </Carousel.Caption>
                                <div className={styles.carouselButtons}>
                                    {productKit?.availablePackages?.map((selectedPackage, index) => (
                                        <Button
                                            key={selectedPackage.alias}
                                            variant="secondary"
                                            className={`${styles.carouselButton} ${styles.customizeButton}`}
                                            style={{ animationDelay: `${index * 0.25}s` }}
                                            onClick={() => { 
                                                console.log('Clicked Package:', selectedPackage);
                                                console.log('Index:', index);
                                                handleButtonClick(productKit, selectedPackage.alias, index)
                                            }}
                                        >
                                            {selectedPackage.alias}
                                        </Button>
                                    ))}
                                </div>
                                {/* </div> */}
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
            <AnotherComponent />
            <Footer />
        </>
    );
};

export default ProductKitCarousel;