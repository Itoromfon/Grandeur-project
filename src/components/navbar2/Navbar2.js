import React, { useState } from "react";
import Link from "next/link";
import styles from './Navbar2.module.css';
import navigationLinks from "./navigationData";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import SearchBar from '../searchbar/SearchBar';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar2 = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState)

    const [isMobile, setIsMobile] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    }

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search query:", query);
        // Optionally, you can redirect to a search results page or do something else with the query
        setShowSearch(false);  // Hide the search bar and button after submit
    }

    return (
        <div className={styles.navbar}>
            {/* Logo */}
            <div className={styles.navbarlogo}>
            <Image
              src="/grandeursmart.png"
              alt="Grandeur Smart Logo"
              width={100}
              height={32}
            />
            </div>

            {/* Toggle button for Mobile Menu */}
            <button onClick={toggleMenu} className={styles.menutoggle}>
                {/* Use a suitable icon for toggle */}
                {/* <FiMenu className={styles.toggle} /> */}
                {isMenuOpen ? <FiX className={styles.toggle2} /> : <FiMenu className={styles.toggle} />}
            </button>

            {/* Navigation Links */}
            <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ''}`}>
                <div className={styles.navdiv}>
                {navigationLinks.map((link, index) => (
                    <li 
                        key={index}
                        className={styles.navItem}
                    >
                        <Link href={link.href} className={styles.navLink}>
                            {link.name}
                            {link.dropdown && <span className={styles.dropdownArrow}>▼</span>}
                        </Link>
                        {link.dropdown && (
                        <ul 
                            className={styles.dropdownMenu}
                        >
                            <div className={styles.imageContainer}>
                                {link.images?.map((imageItem, imgIndex) => (
                                    <div key={imgIndex} className={styles.imageWrapper}>
                                        <Link href="#" className={styles.imageText}>{imageItem.text}</Link>
                                        <img
                                            src={imageItem.src}
                                            alt={imageItem.alt}
                                            className={styles.dropdownImage}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.imageContainer2}>
                                {link.images2?.map((imageItem, imgIndex) => (
                                    <div key={imgIndex} className={styles.imageWrapper}>
                                        <Link href="#" className={styles.imageText}>{imageItem.text}</Link>
                                        <img
                                            src={imageItem.src}
                                            alt={imageItem.alt}
                                            className={styles.dropdownImage}
                                        />
                                    </div>
                                ))}
                            </div>
                        </ul>
                    )}
                    </li>
                ))}
                </div>
            <div className={styles.icons}>
            <div>
              <SearchBar />
            </div>
            <Link href="#">
              <Image
                src="/Group3.png"
                alt="sign-in"
                width={18.94}
                height={21.31}
                className={styles.signin}
              />
            </Link>
            <Link href="#">
              <Image
                src="/usa.png"
                alt="USA flag"
                width={28}
                height={28}
                className={styles.usa}
              />
            </Link>
            <Link href="#">
              <Image
                src="/cart.png"
                alt="shopping cart"
                width={28}
                height={28}
                className={styles.cart}
              />
            </Link>
            </div>
            </ul>
        </div>
    );
};

export default Navbar2