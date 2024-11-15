import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ProductsData from '../simultaneous/SimultaneousData';
import styles from './Simultaneous.module.css';
import { useCart } from '../contexts/CartsContext';

const ProductKitCarousel = () => {
    // const { addToCart } = useCart();
    const router = useRouter();
    const [selectedText, setSelectedText] = useState({});
    const [activeIndex, setActiveIndex] = useState(0)

    const handleAddToCart = (productKit, selectedPackage) => {
        const productToCart = {
            ...productKit,
            selectedPackage,
            amount: productKit[selectedPackage].amount,
            image: productKit[selectedPackage].images[0],
            quantity: 1,
        };
        // addToCart(productToCart);
        showAlert(productToCart);
        // router.push('/cart');
    };

    function showAlert(product) {
        toast.success(`${product.name} (${product.selectedPackage} Package) has been added to your cart!`);
    }

    const handleButtonClick = (productKit, selectedPackage, index) => {
        setSelectedText(prev => ({
            ...prev,
            [productKit.id]: productKit[selectedPackage].content // Set full content for the selected package
        }));
        setActiveIndex(index); // Set the carousel to the clicked button's index
    };

    return (
        <div className={styles.carouselVideoContainer}>
            <video 
                autoPlay 
                muted 
                loop
                playsInline 
                className={styles.backgroundVideo}>
                <source src="/assets/product-kits-video/product-estate.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Carousel
                activeIndex={activeIndex}
                onSelect={(index) => setActiveIndex(index)}
                fade 
                className={styles.carouselContent}
            >
                {ProductsData.map((productKit) => {
                    const availablePackages = ['Basic', 'Advance', 'Premium', 'Ultimate'].filter(
                        selectedPackage => productKit[selectedPackage]
                    );

                    return (
                        <Carousel.Item key={productKit.id}>
                            {/* <div className={styles.carouselItemContent}> */}
                            <Carousel.Caption className={styles.carouselCaption}>
                                <div className={styles.carouselCaptionContainer}>
                                    <h2 className={styles.h2text}>
                                        {selectedText[productKit.id] || productKit.name}
                                    </h2>
                                </div>
                            </Carousel.Caption>
                            <div className={styles.carouselButtons}>
                                {availablePackages.map((selectedPackage, index) => (
                                    <Button
                                        key={selectedPackage}
                                        variant="secondary"
                                        className={`${styles.carouselButton} ${styles.customizeButton}`}
                                        style={{ animationDelay: `${index * 0.25}s` }}
                                        onClick={() => handleButtonClick(productKit, selectedPackage, index)}
                                    >
                                        {selectedPackage}
                                    </Button>
                                ))}
                            </div>
                            {/* </div> */}
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ProductKitCarousel;
