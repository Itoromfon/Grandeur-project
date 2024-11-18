import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "@/styles/Home.module.css";
import { Roboto } from 'next/font/google';
import SearchBar from '../searchbar/SearchBar';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState)

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className={roboto.className}>
      <div className={styles.nav}>
        <div className={styles.navbar}>
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


          
          <div
            className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}
            // style={{
            //   display: isMobile ? 'none' : 'flex', // Hide on mobile
            //   flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
            //   gap: isMobile ? '10px' : '20px', // Smaller gap on mobile
            // }}
            >
            <div className={styles.navlinkdiv}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.navlink1div}
            >
            <Link className={styles.navlink} href="/" prefetch={true}>Home</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.navlink2div}
            >
              <Link className={styles.navlink2} href="/security/security" prefetch={true}>Getting Started</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.navlink3div}
            >
              <Link className={styles.navlink3} href="/energynav/energynav" prefetch={true}>Product</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.navlink3div}
            >
              <Link className={styles.navlink4} href="/automation/automates" prefetch={true}>Automate</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.navlink3div}
            >
              <Link className={styles.navlink5} href="/documentation" prefetch={true}>Documentation</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.navlink4div}
            >
              <Link className={styles.navlink6} href="/integration/integration" prefetch={true}>Integration</Link>
            </motion.div>
          </div>
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
          </div>
        </div>
      </div>
  );
}

export default Navbar;




// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import "@/styles/Home.module.css"
// import { Roboto } from 'next/font/google';
// import SearchBar from '../searchbar/SearchBar';
// import styles from './Navbar.module.css'
// import { motion, AnimatePresence } from 'framer-motion';
// // import { AiFillCaretDown } from "react-icons/ai"

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

// function Navbar() {
//   return (
//       <div className={roboto.className}>
//         <div className={styles.nav}>
//         <div className={styles.navbar}>
//           <div className={styles.navbarlogo}>
//             <Image
//               src="/grandeursmart.png"
//               alt="Grandeur Smart Logo"
//               width={100}
//               height={32}
//             />
//           </div>
//           <div className={styles.link}>
//             <Link className={styles.navlink} href="/">Home</Link>
//             <Link className={styles.navlink} href="./product">Product</Link>
//             <Link className={styles.navlink} href="./documentation">Documentation</Link>
//             {/* <AiFillCaretDown className='drops' /> */}
//             <Link className={styles.navlink} href="./integration">Integration</Link>
//           </div>
//           <div className={styles.icons}>
//             <div>
//               <SearchBar />
//             </div>
//             <Link href="#">
//             <Image
//                 src="/Group3.png"
//                 alt='sign-in'
//                 width={18.94}
//                 height={21.31}
//                 className={styles.signin}
//               />
//             </Link>
//             <Link href="#">
//               <Image
//                 src="/usa.png"
//                 alt="group3"
//                 width={28}
//                 height={28}
//                 className={styles.usa}
//               />
//             </Link>
//             <Link href="#">
//               <Image
//                 src="/cart.png"
//                 alt="group3"
//                 width={28}
//                 height={28}
//                 className={styles.cart}
//               />
//             </Link>
//           </div>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Navbar