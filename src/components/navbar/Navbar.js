import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "@/styles/Home.module.css";
import { Roboto } from 'next/font/google';
import SearchBar from '../searchbar/SearchBar';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function Navbar() {
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
          <div className={styles.link} style={{ display: "flex", gap: "20px" }}>
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link className={styles.navlink} href="/">Home</Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link className={styles.navlink} href="/product">Product</Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link className={styles.navlink} href="/documentation">Documentation</Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link className={styles.navlink} href="./integration/integration">Integration</Link>
            </motion.div>
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