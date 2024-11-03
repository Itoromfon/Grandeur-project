import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "@/styles/Home.module.css"
import { Roboto } from 'next/font/google';
import SearchBar from '../searchbar/SearchBar';
import { AiFillCaretDown } from "react-icons/ai"
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

function Navbar() {
  return (
      <div className={roboto.className}>
        <div className='nav'>
        <div className="navbar">
          <div className='navbar-logo'>
            <Image
              src="/grandeursmart.png" 
              alt="Grandeur Smart Logo"
              width={100}
              height={32}
            />
          </div>
          <div className='links'>
            <Link className='nav-link' href="/">Home</Link>
            <Link className='nav-link' href="./product">Product</Link>
            <Link className='nav-link' href="./documentation">Documentation</Link>
            {/* <AiFillCaretDown className='drops' /> */}
            <Link className='nav-link' href="./integration">Integration</Link>
          </div>
          <div className='icons'>
            <div>
              <SearchBar />
            </div>
            <Link href="#">
            <Image 
                src="/Group3.png"
                alt='sign-in'
                width={18.94}
                height={21.31}
                className='signin'
              />
            </Link>
            <Link href="#">
              <Image 
                src="/usa.png"
                alt="group3"
                width={28}
                height={28}
                className='usa'
              />
            </Link>
            <Link href="#">
              <Image 
                src="/cart.png"
                alt="group3"
                width={28}
                height={28}
                className='cart'
              />
            </Link>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar