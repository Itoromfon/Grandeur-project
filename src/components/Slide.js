import React from 'react'
import Image from 'next/image'

function Slide() {
  return (
    <div className='slide'>
        <Image 
            src='/phone1.png'
            alt='mobile-devices'
            width={300}
            height={500}
        />
        <Image 
            src='/phone2.png'
            alt='mobile-devices'
            width={300}
            height={500}
        />
        <Image 
            src='/phone1.png'
            alt='mobile-devices'
            width={300}
            height={500}
        />
        <Image 
            src='/phone2.png'
            alt='mobile-devices'
            width={300}
            height={500}
        />
    </div>
  )
}

export default Slide