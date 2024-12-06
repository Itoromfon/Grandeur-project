import React from 'react'
import styles from './AdvanceFlow.module.css'
import { GrFormNext } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';

function AdvanceFlow() {
  return (
    <div className={styles.main}>
        <div className='flex justify-center items-center space-y-0'>
            <div>
                <div>
                    <h1 className='font-bold text-[25px] tracking-widest mb-[20px]'>Custom Flow Suggestions</h1>
                </div>
                <div>
                    <p className='w-[500px] text-base tracking-wide'>continuously learns from user behavior, suggesting tailored routines for times of day or specific activities.</p>
                </div>
                <div>
                    <Link className='flex font-bold text-base text-[#5C755E]' href='#'>Get Started <GrFormNext className='mt-[5px]' /></Link>
                </div>
            </div>
            
            <div className='flex ml-[-107px] '>
            <div className='z-10'>
                <Image 
                    src='/arrowstraight.svg'
                    alt='arrow straight'
                    width={350}
                    height={87}
                    className='mt-[146px]'
                />
            </div>
                <Image 
                    src='/mymp3.svg'
                    width={380}
                    height={380}
                    alt='Custom Flow'
                    className='ml-[-85px]'
                />
            </div>
        </div>
        <div className='flex justify-center mt-[-46px] ml-[-40px]'>
            <Image 
                src='/arrowcurve.svg'
                width={645}
                height={180}
                alt='Arrow Curve'
                // className={styles.arrowcurveimg}
                className='z-10'
            />
        </div>
        <div className='flex justify-center mt-[-34px]'>
            <div>
                <Image 
                    src='/smartlight.svg'
                    alt='smart light'
                    width={284}
                    height={255}
                />
            </div>
            <div>
                <Image 
                    src='/smartbulb.svg'
                    alt='bulb'
                    width={416}
                    height={417}
                    className='ml-[-80px] mt-[-30px]'
                />
            </div>
            <div className='ml-[50px] mt-5'>
                <div>
                    <h1 className='font-bold text-[25px] tracking-widest mb-[20px]'>Complex Conditions</h1>
                </div>
                <div>
                    <p className='w-[400px] text-base tracking-wide'>Include conditionals (IF, AND, OR) for unique customizations. 
                    For instance, “If it’s past 10 PM and there’s movement detected, 
                    send an alert.
                    </p>
                </div>
                <div>
                <Link className='flex font-bold text-base text-[#5C755E]' href='#'>Get Started <GrFormNext className='mt-[5px]' /></Link>
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-[-52px]'>
            <Image 
                src='/arrowcurves2.svg'
                width={645}
                height={100}
                alt='Arrow Curve'
                className='z-10'
            />
        </div>
        <div className='flex justify-center'>
        <div className='ml-[-50px]'>
            <div>
                <h1 className='font-bold text-[25px] tracking-widest mb-[20px]'>Scenerio Creation</h1>
            </div>
            <div>
                <p className='w-[500px] text-base tracking-wide'>Offer pre-built flows for situations like Traveler 
                Mode (automatically lowers heating/cooling to save energy 
                while maintaining humidity levels)
                </p>
            </div>
            <div>
            <Link className='flex font-bold text-base text-[#5C755E]' href='#'>Get Started <GrFormNext className='mt-[5px]' /></Link>
            </div>
        </div>
        <div>
        <Image 
                src='/lightenergy.svg'
                alt='Advance Flow Image'
                width={302}
                height={380}
                className='ml-[150px] mt-[-68px]'
            />
        </div>
        </div>
    </div>
  )
}

export default AdvanceFlow