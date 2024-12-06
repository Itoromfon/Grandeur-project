import React from 'react'
import styles from './Footer.module.css'
import { GrLocation } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
      <Image 
          src='/grandeurfooter.svg'
          alt='Grandeur smart Image'
          width={145}
          height={63}
          className={styles.grandeur}
        />
      </div>
    <div className={styles.mains}>
      <div>
        <div>
          <h1 className='text-white text-[14px] font-bold tracking-widest'>QUICKLINKS</h1>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'>Blog</p>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'>Documentation</p>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'>Integration</p>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'>Product</p>
        </div>
      </div>
      <div>
        <div>
        <h1 className='text-white text-[14px] font-bold tracking-widest'>STORE</h1>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'>Buy Grandeur Smart</p>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'>Where to buy</p>
        </div>
      </div>
      <div>
        <div>
        <h1 className='text-white text-[14px] font-bold tracking-widest'>DEVELOPERS</h1>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>Get Started</p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>Server Status</p>
        </div>
        <div>
        <p className='text-white text-[14px] mt-4 font-bold tracking-widest'>PARTNERS</p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>For Installers</p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>For Manufacturers</p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>For retailers</p>
        </div>
      </div>
      <div>
        <div>
        <h1 className='text-white text-[14px] font-bold tracking-widest'>COMPANY</h1>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>Careers</p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>Our Story</p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>Support</p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>Press</p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'>Contact</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-white text-[14px] font-bold tracking-widest'>CONTACT</h1>
        </div>
        <div className='flex'>
          <Image 
            src='/grlocate.svg'
            width={24}
            height={24}
            alt='Location'
            className='mt-[-25px] mr-2'
          />
        <p className='flex tracking-wide text-white w-[241px] text-[14px]'>315 Herbert Macaulay Way, Yaba, Lagos 100001 Nigeria.</p>
        </div>
        <div className='flex'>
          <Image 
            src='/footercall.svg'
            width={22}
            height={22}
            alt='Footer call'
            className='mt-[-18px] mr-2'
          />
          <p className='flex tracking-widest text-white w-[241px] text-[14px]'>+234 813 997 2473</p>
        </div>
        <div className='flex'>
          <Image 
            src='/footermail.svg'
            width={20}
            height={16}
            alt='Mail'
            className='mt-[-15px] mr-2'
          />
          <p className='flex tracking-widest text-white w-[241px] text-[14px]'>info@grandeursmart.com</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-white text-[14px] font-bold tracking-widest'>SOCIAL LINKS</h1>
        </div>
        <div className='flex gap-2 mt-2'>
          <div className='bg-white w-[31px] h-[31px] rounded-full'>
            <Image 
              src='/footerfacebook.svg'
              width={19}
              height={10}
              alt='Facebook'
              className='mx-auto pt-[5px]'
            />
          </div>
          <div className='bg-white w-[31px] h-[31px] rounded-full'>
            <Image 
              src='/footerlinkedin.svg'
              width={15}
              height={15}
              alt='Facebook'
              className='mx-auto pt-[5px]'
            />
          </div>
          <div className='bg-white w-[31px] h-[31px] rounded-full'>
            <Image 
              src='/footerinstagram.svg'
              width={20}
              height={22}
              alt='Facebook'
              className='mx-auto pt-[5px]'
            />
          </div>
          <div className='bg-white w-[31px] h-[31px] rounded-full'>
            <Image 
              src='/footertwitter.svg'
              width={20}
              height={20}
              alt='Facebook'
              className='mx-auto pt-[5px]'
            />
          </div>
        </div>
        <div className='flex gap-2 mt-[17px]'>
          <div>
            <Image 
              src='/appstorefooter.svg.svg'
              width={119}
              height={35}
              alt='AppStore'
            />
          </div>
          <div>
            <Image 
              src='/googlestorefooter.svg'
              width={119}
              height={35}
              alt='AppStore'
            />
          </div>
        </div>
      </div>
    </div>
    <div className='mx-auto w-[90%] h-[1px] bg-white'></div>
    <div className='flex justify-center mt-4 tracking-widest'>
      <p className='text-white text-[13px]'>© Website 2024 All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer