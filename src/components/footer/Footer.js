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
    <div>
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
          <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>QUICKLINKS</a></h1>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Blog</a></p>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Documentation</a></p>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Integration</a></p>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Product</a></p>
        </div>
      </div>
      <div>
        <div>
        <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>STORE</a></h1>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Buy Grandeur Smart</a></p>
        </div>
        <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Where To Buy</a></p>
        </div>
      </div>
      <div>
        <div>
        <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>Developers</a></h1>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>Get Started</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>Server Status</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] mt-4 font-bold tracking-widest'><a href='#'>PARTNERS</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>For Installers</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>For Manaufacturers</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>For Retailers</a></p>
        </div>
      </div>
      <div>
        <div>
        <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>COMPANY</a></h1>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>Career</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>Our Story</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>Support</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>Press</a></p>
        </div>
        <div>
        <p className='text-white text-[14px] tracking-widest'><a href='#'>Contact</a></p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>CONTACT</a></h1>
        </div>
        <div className='flex'>
          <Image 
            src='/grlocate.svg'
            width={24}
            height={24}
            alt='Location'
            className='mt-[-25px] mr-2'
          />
        <p className='flex tracking-wide text-white w-[241px] text-[14px]'><a href='#'>315 Herbert Macaulay Way, Yaba, Lagos 100001 Nigeria.</a></p>
        </div>
        <div className='flex'>
          <Image 
            src='/footercall.svg'
            width={22}
            height={22}
            alt='Footer call'
            className='mt-[-18px] mr-2'
          />
          <p className='flex tracking-widest text-white w-[241px] text-[14px]'><a href='#'>+234 813 997 2473</a></p>
        </div>
        <div className='flex'>
          <Image 
            src='/footermail.svg'
            width={20}
            height={16}
            alt='Mail'
            className='mt-[-15px] mr-2'
          />
          <p className='flex tracking-widest text-white w-[241px] text-[14px]'><a href='#'>info@grandeursmart.com</a></p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>SOCIAL LINKS</a></h1>
        </div>
        <div className='flex gap-2 mt-2'>
          <div className='bg-white w-[31px] h-[31px] rounded-full'>
          <a href='#'>
            <Image 
              src='/footerfacebook.svg'
              width={19}
              height={10}
              alt='Facebook'
              className='mx-auto pt-[5px]'
            />
            </a>
          </div>
          <div className='bg-white w-[31px] h-[31px] rounded-full'>
          <a href='#'>
            <Image 
              src='/footerlinkedin.svg'
              width={15}
              height={15}
              alt='Facebook'
              className='mx-auto pt-[5px]'
            />
            </a>
          </div>
          <div className='bg-white w-[31px] h-[31px] rounded-full'>
          <a href='#'>
            <Image 
              src='/footerinstagram.svg'
              width={20}
              height={22}
              alt='Facebook'
              className='mx-auto pt-[5px]'
            />
            </a>
          </div>
          <div className='bg-white w-[31px] h-[31px] rounded-full'>
          <a href='#'>
            <Image 
              src='/footertwitter.svg'
              width={20}
              height={20}
              alt='Facebook'
              className='mx-auto pt-[5px]'
            />
            </a>
          </div>
        </div>
        <div className='flex gap-2 mt-[17px]'>
          <div>
          <a href='#'>
            <Image 
              src='/appstorefooter.svg.svg'
              width={119}
              height={35}
              alt='AppStore'
            />
          </a>
          </div>
          <div>
          <a href='#'>
            <Image 
              src='/googlestorefooter.svg'
              width={119}
              height={35}
              alt='AppStore'
            />
          </a>
          </div>
        </div>
      </div>
    </div>
    <div className='mx-auto w-[90%] h-[1px] bg-white'></div>
    <div className='flex justify-center mt-4 tracking-widest'>
      <p className='text-white text-[13px]'>© Website 2024 All Right Reserved.</p>
    </div>
    </div>
    <div className={styles.mainmobile}>
      <div className={styles.mainmobile2}>
      <div>
        <div>
          <h1 className='text-white text-[16px] font-bold tracking-widest'>QUICKLINKS</h1>
        </div>
        <div>
          <p className='text-white text-[16px] mt-3 tracking-widest'>Blog</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Documentation</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Integration</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Product</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-white text-[16px] font-bold tracking-widest'>STORE</h1>
        </div>
        <div>
          <p className='text-white text-[16px] mt-3 tracking-widest'>Buy Grandeur Smart</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Where to buy</p>
        </div>
      </div>
    </div>
    <div className={styles.mainmobile3}>
      <div>
        <div>
          <h1 className='text-white text-[16px] font-bold tracking-widest'>DEVELOPERS</h1>
        </div>
        <div>
          <p className='text-white text-[16px] mt-3 tracking-widest'>Get Started</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Server Status</p>
        </div>
        <div>
          <p className='text-white font-bold text-[16px] tracking-widest'>PARTNERS</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>For installers</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>For Manufacturers</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>For retailers</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-white text-[16px] font-bold tracking-widest'>COMPANY</h1>
        </div>
        <div>
          <p className='text-white text-[16px] mt-3 tracking-widest'>Careers</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Our story</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Support</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Press</p>
        </div>
        <div>
          <p className='text-white text-[16px] tracking-widest'>Contact</p>
        </div>
      </div>
    </div>
    <div className={styles.mainmobile4}>
      <div>
        <div>
          <h1 className='text-white text-[16px] font-bold tracking-widest'>CONTACT</h1>
        </div>
        <div className='flex'>
          <Image 
            src='/grlocate.svg'
            width={24}
            height={24}
            alt='Location'
            className='mt-[-33px] mr-[-5px]'
          />
        <p className='flex tracking-wide leading-normal text-white w-[241px] text-[16px]'>315 Herbert Macaulay Way, Yaba, Lagos 100001 Nigeria.</p>
        </div>
        <div className='flex'>
          <Image 
            src='/footercall.svg'
            width={22}
            height={22}
            alt='Footer call'
            className='mt-[-18px] mr-2'
          />
          <p className='flex tracking-widest text-white w-[241px] text-[16px]'>+234 813 997 2473</p>
        </div>
        <div className='flex'>
          <Image 
            src='/footermail.svg'
            width={20}
            height={16}
            alt='Mail'
            className='mt-[-15px] mr-2'
          />
          <p className='flex tracking-widest text-white w-[241px] text-[16px]'>info@grandeursmart.com</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-white text-[16px] font-bold tracking-widest'>SOCIAL LINKS</h1>
        </div>
        <div className='flex justify-center gap-2 mt-2'>
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
        <div className='flex justify-center gap-2 mt-[17px]'>
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
    <div className='mx-auto mt-5 w-[90%] h-[1px] bg-white'></div>
    <div className='flex justify-center mt-4 tracking-widest'>
      <p className='text-white text-center flex justify-center item-center text-[14px]'>© Website 2024 All Right Reserved.</p>
    </div>
    </div>
    </div>
  )
}

export default Footer