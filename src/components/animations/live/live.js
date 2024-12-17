import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const ClimateControlAnimation = () => {
  return (
 <Image  
    src='/livevideo.gif'
    alt='Live Video'
    width={300}
    height={100}
    className='
      max-w-[170px] 
      h-[150px] 
      rounded-[10px]
      ml-[-80px]
      mt-[3
      0px]
    '
 />
  );
};

export default ClimateControlAnimation;