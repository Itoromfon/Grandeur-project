import React from 'react'
import styles from './Footer.module.css'
import { GrLocation } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className={styles.mains}>
    <div className={styles.main}>
    <div className={styles.main1}>
      <div>
        <img 
          src='/grandeurfooter.png'
          alt='Grandeur smart Image'
          className={styles.grandeur}
        />
      </div>
       <div className={styles.quicklinkdiv}>
        <h1 className={styles.quicklink}>QUICKLINKS</h1>
        <p className={styles.quicklinktext1}>Blogs</p>
        <p className={styles.quicklinktext2}>Documentation</p>
        <p className={styles.quicklinktext3}>Integration</p>
        <p className={styles.quicklinktext4}>Product</p>
       </div>
      </div>
      <div className={styles.storediv}>
        <h1 className={styles.store}>STORE</h1>
        <p className={styles.storetext1}>Buy grandeur Smart</p>
        <p className={styles.storetext2}>Where to buy</p>
      </div>
      <div className={styles.main2}>
      <div className={styles.developerdiv}>
        <h1 className={styles.developer}>DEVELOPERS</h1>
        <p className={styles.developertext1}>Get Started</p>
        <p className={styles.developertext2}>Server Status</p>
      </div>
      <div className={styles.partnerdiv}>
        <h1 className={styles.partner}>PARTNERS</h1>
        <p className={styles.partnertext1}>For Installers</p>
        <p className={styles.partnertext2}>For Manufacturers</p>
        <p className={styles.partnertext3}>For Retailers</p>
      </div>
      </div>
        <div className={styles.companydiv}>
          <h1 className={styles.company}>Company</h1>
          <p className={styles.companytext1}>Careers</p>
          <p className={styles.companytext2}>Our Story</p>
          <p className={styles.companytext3}>Support</p>
          <p className={styles.companytext4}>Press</p>
          <p className={styles.companytext5}>Contact</p>
        </div>
        <div className={styles.contactdiv}>
          <h1 className={styles.contact}>
            Contact
          </h1>
          <p 
            className={styles.contacttext1}
          >
          <GrLocation className={styles.location} />
            315 Herbert Macaulay Way, Yaba,<br /> Lagos 100001, Nigeria.
          </p>
          <p 
            className={styles.contacttext2}
          >
            <FaPhone className={styles.phone} />
            +234 813 997 2473
          </p>
        <p 
          className={styles.contacttext3}
        >
        <MdOutlineEmail className={styles.mail} />
          info@grandeursmart.com
        </p>
        </div>
        <div className={styles.socials}>
          <h1 className={styles.sociallinks}>SOCIAL LINKS</h1>
          <div className={styles.socialdiv}>
            <div className={styles.facebookdiv}>
              <p><FaFacebookF className={styles.facebook} /></p>
            </div>
            <div className={styles.linkedindiv}>
              <p><FaLinkedinIn className={styles.linkedin} /></p>
            </div>
            <div className={styles.instagramdiv}>
              <p><FaSquareInstagram className={styles.instagram} /></p>
            </div>
            <div className={styles.twitterdiv}>
              <p><FaSquareXTwitter className={styles.twitter} /></p>
            </div>
          </div>
          <div className={styles.play}>
            <img 
              src='/appstore.png'
              alt='App Store'
              className={styles.appstore}
            />
            <img 
              src='/googlestore.png'
              alt='Google Play'
              className={styles.googlestore}
            />
          </div>
        </div>
      </div>
      <div className={styles.hr}></div>
      <div>
        <p className={styles.copyright}>© Website 2024 All Right Reserved.</p>
      </div>
      </div>
  )
}

export default Footer