import React from 'react'
import styles from './AdvanceFlow.module.css'
import { GrFormNext } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';

function AdvanceFlow() {
  return (
    <div className={styles.main}>
        <div className='flex justify-center'>
            <h1 className={styles.htext}>Advance Flow</h1>
        </div>
        <div 
            className='
                flex 
                justify-center 
                items-center 
                mt-[-50px] 
                space-y-0
                mobile-320-400:flex-col
                mobile-401-480:flex-col
                mobile-481-600:flex-col
                mobile-601-768:flex-col
                mobile-769-900:flex-col
                mobile-901-1200:flex-col
            '>
            <div>
                <div className='
                    mobile-320-400:flex
                    mobile-320-400:text-center
                    mobile-320-400:justify-center

                    mobile-401-480:flex
                    mobile-401-480:text-center
                    mobile-401-480:justify-center

                    mobile-481-600:flex
                    mobile-481-600:text-center
                    mobile-481-600:justify-center

                    mobile-601-768:flex
                    mobile-601-768:text-center
                    mobile-601-768:justify-center

                    mobile-769-900:flex
                    mobile-769-900:text-center
                    mobile-769-900:justify-center

                    mobile-901-1200:flex
                    mobile-901-1200:text-center
                    mobile-901-1200:justify-center
                '>
                    <h1 
                        className='
                            font-bold 
                            font-custom 
                            text-[25px] 
                            tracking-widest 
                            mb-[20px]
                            mobile-320-400:w-[400px]
                            mobile-320-400:text-[20px]

                            mobile-401-480:w-[400px]
                            mobile-401-480:text-[20px]

                            mobile-481-600:w-[400px]
                            mobile-481-600:text-[20px]

                            mobile-601-768:w-[400px]
                            mobile-601-768:text-[20px]

                            mobile-769-900:w-[400px]
                            mobile-769-900:text-[20px]

                            mobile-901-1200:w-[400px]
                            mobile-901-1200:text-[20px]
                        '>
                            Custom Flow Suggestions
                    </h1>
                </div>
                <div className='
                    mobile-320-400:flex
                    mobile-320-400:text-center
                    mobile-320-400:justify-center

                    mobile-401-480:flex
                    mobile-401-480:text-center
                    mobile-401-480:justify-center

                    mobile-481-600:flex
                    mobile-481-600:text-center
                    mobile-481-600:justify-center

                    mobile-601-768:flex
                    mobile-601-768:text-center
                    mobile-601-768:justify-center

                    mobile-769-900:flex
                    mobile-769-900:text-center
                    mobile-769-900:justify-center

                    mobile-901-1200:flex
                    mobile-901-1200:text-center
                    mobile-901-1200:justify-center
                '>
                    <p 
                        className='
                            w-[500px]  
                            text-base 
                            tracking-wide
                            mobile-320-400:w-[300px]
                            mobile-320-400:text-[16px]
                            mobile-320-400:text-center

                            mobile-401-480:w-[300px]
                            mobile-401-480:text-[16px]
                            mobile-401-480:text-center

                            mobile-481-600:w-[300px]
                            mobile-481-600:text-[16px]
                            mobile-481-600:text-center

                            mobile-601-768:w-[300px]
                            mobile-601-768:text-[16px]
                            mobile-601-768:text-center

                            mobile-769-900:w-[300px]
                            mobile-769-900:text-[16px]
                            mobile-769-900:text-center

                            mobile-901-1200:w-[300px]
                            mobile-901-1200:text-[16px]
                            mobile-901-1200:text-center

                        '>continuously learns from user behavior, suggesting tailored routines for times of day or specific activities.</p>
                </div>
                <div>
                    <Link 
                        className='
                            flex 
                            font-bold 
                            text-base 
                            text-[#5C755E]
                            mobile-320-400:w-[300px]
                            mobile-320-400:text-[20px]
                            mobile-320-400:flex
                            mobile-320-400:text-center
                            mobile-320-400:justify-center
                            mobile-320-400:mx-auto

                            mobile-401-480:w-[300px]
                            mobile-401-480:text-[20px]
                            mobile-401-480:flex
                            mobile-401-480:text-center
                            mobile-401-480:justify-center
                            mobile-401-480:mx-auto

                            mobile-481-600:w-[300px]
                            mobile-481-600:text-[20px]
                            mobile-481-600:flex
                            mobile-481-600:text-center
                            mobile-481-600:justify-center
                            mobile-481-600:mx-auto

                            mobile-601-768:w-[300px]
                            mobile-601-768:text-[20px]
                            mobile-601-768:flex
                            mobile-601-768:text-center
                            mobile-601-768:justify-center
                            mobile-601-768:mx-auto

                            mobile-769-900:w-[300px]
                            mobile-769-900:text-[20px]
                            mobile-769-900:flex
                            mobile-769-900:text-center
                            mobile-769-900:justify-center
                            mobile-769-900:mx-auto

                            mobile-901-1200:w-[300px]
                            mobile-901-1200:text-[20px]
                            mobile-901-1200:flex
                            mobile-901-1200:text-center
                            mobile-901-1200:justify-center
                            mobile-901-1200:mx-auto
                            ' 
                        href='#'>Get Started <GrFormNext className='mt-[5px]' /></Link>
                </div>
            </div>
            
            <div className='flex ml-[-107px] '>
            <div className='z-10'>
                <Image 
                    src='/arrowstraight.svg'
                    alt='arrow straight'
                    width={350}
                    height={87}
                    className='
                        mt-[146px]
                        mobile-320-400:hidden
                        mobile-401-480:hidden
                        mobile-481-600:hidden
                        mobile-601-768:hidden
                        mobile-769-900:hidden
                        mobile-901-1200:hidden
                        '
                />
            </div>
                <Image 
                    src='/mymp3.svg'
                    width={380}
                    height={380}
                    alt='Custom Flow'
                    className='ml-[-85px]
                        mobile-320-400:w-[300px]
                        mobile-320-400:text-[20px]
                        mobile-320-400:flex
                        mobile-320-400:text-center
                        mobile-320-400:justify-center
                        mobile-320-400:items-center
                        mobile-320-400:mx-auto
                        mobile-320-400:ml-[0]

                        mobile-401-480:w-[300px]
                        mobile-401-480:text-[20px]
                        mobile-401-480:flex
                        mobile-401-480:text-center
                        mobile-401-480:justify-center
                        mobile-401-480:items-center
                        mobile-401-480:mx-auto
                        mobile-401-480:ml-[0]

                        mobile-481-600:w-[300px]
                        mobile-481-600:text-[20px]
                        mobile-481-600:flex
                        mobile-481-600:text-center
                        mobile-481-600:justify-center
                        mobile-481-600:items-center
                        mobile-481-600:mx-auto
                        mobile-481-600:ml-[0]

                        mobile-601-768:w-[300px]
                        mobile-601-768:text-[20px]
                        mobile-601-768:flex
                        mobile-601-768:text-center
                        mobile-601-768:justify-center
                        mobile-601-768:items-center
                        mobile-601-768:mx-auto
                        mobile-601-768:ml-[0]

                        mobile-769-900:w-[300px]
                        mobile-769-900:text-[20px]
                        mobile-769-900:flex
                        mobile-769-900:text-center
                        mobile-769-900:justify-center
                        mobile-769-900:items-center
                        mobile-769-900:mx-auto
                        mobile-769-900:ml-[0]

                        mobile-901-1200:w-[300px]
                        mobile-901-1200:text-[20px]
                        mobile-901-1200:flex
                        mobile-901-1200:text-center
                        mobile-901-1200:justify-center
                        mobile-901-1200:items-center
                        mobile-901-1200:mx-auto
                        mobile-901-1200:ml-[0]
                    '
                />
            </div>
        </div>
        <div 
            className='
                flex 
                justify-center 
                mt-[-46px] 
                ml-[-40px]
            '>
            <Image 
                src='/arrowcurve.svg'
                width={645}
                height={180}
                alt='Arrow Curve'
                // className={styles.arrowcurveimg}
                className='
                    z-10 
                    mobile-320-400:hidden
                    mobile-401-480:hidden
                    mobile-401-480:hidden
                    mobile-481-600:hidden
                    mobile-601-768:hidden
                    mobile-769-900:hidden
                    mobile-901-1200:hidden
                    '
            />
        </div>
        <div 
            className='
                flex 
                justify-center 
                mt-[-34px]
                mobile-320-400:flex-col
                mobile-320-400:justify-center
                mobile-320-400:items-center

                mobile-401-480:flex-col
                mobile-401-480:justify-center
                mobile-401-480:items-center

                mobile-481-600:flex-col
                mobile-481-600:justify-center
                mobile-481-600:items-center

                mobile-601-768:flex-col
                mobile-601-768:justify-center
                mobile-601-768:items-center

                mobile-769-900:flex-col
                mobile-769-900:justify-center
                mobile-769-900:items-center

                mobile-901-1200:flex-col
                mobile-901-1200:justify-center
                mobile-901-1200:items-center
            '>
            <div>
                <Image 
                    src='/smartlight.svg'
                    alt='smart light'
                    width={284}
                    height={255}
                    className='
                    mobile-320-400:hidden
                    mobile-401-480:hidden
                    mobile-481-600:hidden
                    mobile-601-768:hidden
                    mobile-769-900:hidden
                    mobile-901-1200:hidden
                    '
                />
            </div>
            <div>
                <Image 
                    src='/smartbulb.svg'
                    alt='bulb'
                    width={416}
                    height={417}
                    className='
                    ml-[-80px] mt-[-30px] 
                    mobile-320-400:hidden
                    mobile-401-480:hidden
                    mobile-481-600:hidden
                    mobile-601-768:hidden
                    mobile-769-900:hidden
                    mobile-901-1200:hidden
                    '
                />
            </div>
            <div className='
                ml-[50px] 
                mt-5 
                mobile-320-400:ml-0
                mobile-401-480:ml-0
                mobile-481-600:ml-0
                mobile-601-768:ml-0
                mobile-769-900:ml-0
                mobile-901-1200:ml-0
                '>
                <div className='
                    mobile-320-400:flex
                    mobile-320-400:text-center
                    mobile-320-400:justify-center

                    mobile-401-480:flex
                    mobile-401-480:text-center
                    mobile-401-480:justify-center

                    mobile-481-600:flex
                    mobile-481-600:text-center
                    mobile-481-600:justify-center

                    mobile-601-768:flex
                    mobile-601-768:text-center
                    mobile-601-768:justify-center

                    mobile-769-900:flex
                    mobile-769-900:text-center
                    mobile-769-900:justify-center

                    mobile-901-1200:flex
                    mobile-901-1200:text-center
                    mobile-901-1200:justify-center
                '>
                    <h1 
                        className='
                            font-bold 
                            font-custom 
                            text-[25px] 
                            tracking-widest 
                            mb-[20px]
                            mobile-320-400:mt-[50px]
                            mobile-320-400:w-[400px]
                            mobile-320-400:text-[20px]

                            mobile-401-480:mt-[50px]
                            mobile-401-480:w-[400px]
                            mobile-401-480:text-[20px]

                            mobile-481-600:mt-[50px]
                            mobile-481-600:w-[400px]
                            mobile-481-600:text-[20px]

                            mobile-601-768:mt-[50px]
                            mobile-601-768:w-[400px]
                            mobile-601-768:text-[20px]

                            mobile-769-900:mt-[50px]
                            mobile-769-900:w-[400px]
                            mobile-769-900:text-[20px]

                            mobile-901-1200:mt-[50px]
                            mobile-901-1200:w-[400px]
                            mobile-901-1200:text-[20px]
                            
                        '>
                            Complex Conditions
                        </h1>
                </div>
                <div 
                    className='
                        mobile-320-400:flex
                        mobile-320-400:text-center
                        mobile-320-400:justify-center

                        mobile-401-480:flex
                        mobile-401-480:text-center
                        mobile-401-480:justify-center

                        mobile-481-600:flex
                        mobile-481-600:text-center
                        mobile-481-600:justify-center

                        mobile-601-768:flex
                        mobile-601-768:text-center
                        mobile-601-768:justify-center

                        mobile-769-900:flex
                        mobile-769-900:text-center
                        mobile-769-900:justify-center

                        mobile-901-1200:flex
                        mobile-901-1200:text-center
                        mobile-901-1200:justify-center
                    '>
                    <p 
                        className='
                            w-[400px] 
                            text-base 
                            tracking-wide
                            mobile-320-400:w-[300px]
                            mobile-320-400:text-[16px]
                            mobile-320-400:items-center
                            mobile-320-400:ml-[0]

                            mobile-401-480:w-[300px]
                            mobile-401-480:text-[16px]
                            mobile-401-480:items-center
                            mobile-401-480:ml-[0]
                        '>Include conditionals (IF, AND, OR) for unique customizations. 
                    For instance, “If it’s past 10 PM and there’s movement detected, 
                    send an alert.
                    </p>
                </div>
                <div>
                <Link 
                    className='
                        flex 
                        font-bold 
                        text-base 
                        text-[#5C755E]
                        mobile-320-400:w-[300px]
                        mobile-320-400:text-[20px]
                        mobile-320-400:flex
                        mobile-320-400:text-center
                        mobile-320-400:justify-center
                        mobile-320-400:mx-auto


                        mobile-401-480:w-[300px]
                        mobile-401-480:text-[20px]
                        mobile-401-480:flex
                        mobile-401-480:text-center
                        mobile-401-480:justify-center
                        mobile-401-480:mx-auto

                        mobile-481-600:w-[300px]
                        mobile-481-600:text-[20px]
                        mobile-481-600:flex
                        mobile-481-600:text-center
                        mobile-481-600:justify-center
                        mobile-481-600:mx-auto

                        mobile-601-768:w-[300px]
                        mobile-601-768:text-[20px]
                        mobile-601-768:flex
                        mobile-601-768:text-center
                        mobile-601-768:justify-center
                        mobile-601-768:mx-auto

                        mobile-769-900:w-[300px]
                        mobile-769-900:text-[20px]
                        mobile-769-900:flex
                        mobile-769-900:text-center
                        mobile-769-900:justify-center
                        mobile-769-900:mx-auto

                        mobile-901-1200:w-[300px]
                        mobile-901-1200:text-[20px]
                        mobile-901-1200:flex
                        mobile-901-1200:text-center
                        mobile-901-1200:justify-center
                        mobile-901-1200:mx-auto
                        ' 
                    href='#'>Get Started <GrFormNext className='mt-[5px]' /></Link>
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-[-52px]'>
            <Image 
                src='/arrowcurves2.svg'
                width={645}
                height={100}
                alt='Arrow Curve'
                className='
                    z-10 
                    mobile-320-400:hidden
                    mobile-401-480:hidden
                    mobile-481-600:hidden
                    mobile-601-768:hidden
                    mobile-769-900:hidden
                    mobile-901-1200:hidden
                    '
            />
        </div>
        <div 
            className='
                flex 
                justify-center
                mobile-320-400:flex-col
                mobile-320-400:mt-[100px]

                mobile-401-480:flex-col
                mobile-401-480:mt-[100px]

                mobile-481-600:flex-col
                mobile-481-600:mt-[100px]

                mobile-601-768:flex-col
                mobile-601-768:mt-[100px]

                mobile-769-900:flex-col
                mobile-769-900:mt-[100px]

                mobile-901-1200:flex-col
                mobile-901-1200:mt-[100px]
            '>
        <div className='
            ml-[-50px] 
            mobile-320-400:ml-[0]
            mobile-401-480:ml-[0]
            mobile-481-600:ml-[0]
            mobile-601-768:ml-[0]
            mobile-769-900:ml-[0]
            mobile-901-1200:ml-[0]
            '>
            <div className='
                mobile-320-400:flex
                mobile-320-400:text-center
                mobile-320-400:justify-center

                mobile-401-480:flex
                mobile-401-480:text-center
                mobile-401-480:justify-center

                mobile-481-600:flex
                mobile-481-600:text-center
                mobile-481-600:justify-center

                mobile-601-768:flex
                mobile-601-768:text-center
                mobile-601-768:justify-center

                mobile-769-900:flex
                mobile-769-900:text-center
                mobile-769-900:justify-center

                mobile-901-1200:flex
                mobile-901-1200:text-center
                mobile-901-1200:justify-center
            '>
                <h1 
                    className='
                        font-bold 
                        font-custom 
                        text-[25px] 
                        tracking-widest 
                        mb-[20px]
                        mobile-320-400:w-[400px]
                        mobile-320-400:text-[20px]

                        mobile-401-480:w-[400px]
                        mobile-401-480:text-[20px]

                        mobile-481-600:w-[400px]
                        mobile-481-600:text-[20px]

                        mobile-601-768:w-[400px]
                        mobile-601-768:text-[20px]

                        mobile-769-900:w-[400px]
                        mobile-769-900:text-[20px]

                        mobile-901-1200:w-[400px]
                        mobile-901-1200:text-[20px]
                        '
                    >Scenerio Creation</h1>
            </div>
            <div className='
                mobile-320-400:flex
                mobile-320-400:text-center
                mobile-320-400:justify-center

                mobile-401-480:flex
                mobile-401-480:text-center
                mobile-401-480:justify-center

                mobile-481-600:flex
                mobile-481-600:text-center
                mobile-481-600:justify-center

                mobile-601-768:flex
                mobile-601-768:text-center
                mobile-601-768:justify-center

                mobile-769-900:flex
                mobile-769-900:text-center
                mobile-769-900:justify-center

                mobile-901-1200:flex
                mobile-901-1200:text-center
                mobile-901-1200:justify-center
            '>
                <p 
                    className='
                        w-[400px] 
                        text-base 
                        tracking-wide
                        mobile-320-400:w-[300px]
                        mobile-320-400:text-[16px]
                        mobile-320-400:items-center
                        mobile-320-400:ml-[0]

                        mobile-401-480:w-[300px]
                        mobile-401-480:text-[16px]
                        mobile-401-480:items-center
                        mobile-401-480:ml-[0]

                        mobile-481-600:w-[300px]
                        mobile-481-600:text-[16px]
                        mobile-481-600:items-center
                        mobile-481-600:ml-[0]

                        mobile-601-768:w-[300px]
                        mobile-601-768:text-[16px]
                        mobile-601-768:items-center
                        mobile-601-768:ml-[0]

                        mobile-769-900:w-[300px]
                        mobile-769-900:text-[16px]
                        mobile-769-900:items-center
                        mobile-769-900:ml-[0]

                        mobile-901-1200:w-[300px]
                        mobile-901-1200:text-[16px]
                        mobile-901-1200:items-center
                        mobile-901-1200:ml-[0]
                    '>
                Offer pre-built flows for situations like Traveler 
                Mode (automatically lowers heating/cooling to save energy 
                while maintaining humidity levels)
                </p>
            </div>
            <div>
            <Link 
                className='
                    flex 
                    font-bold 
                    text-base 
                    text-[#5C755E]
                    mobile-320-400:w-[300px]
                    mobile-320-400:text-[20px]
                    mobile-320-400:flex
                    mobile-320-400:text-center
                    mobile-320-400:justify-center
                    mobile-320-400:mx-auto

                    mobile-401-480:w-[300px]
                    mobile-401-480:text-[20px]
                    mobile-401-480:flex
                    mobile-401-480:text-center
                    mobile-401-480:justify-center
                    mobile-401-480:mx-auto

                    mobile-481-600:w-[300px]
                    mobile-481-600:text-[20px]
                    mobile-481-600:flex
                    mobile-481-600:text-center
                    mobile-481-600:justify-center
                    mobile-481-600:mx-auto

                    mobile-601-768:w-[300px]
                    mobile-601-768:text-[20px]
                    mobile-601-768:flex
                    mobile-601-768:text-center
                    mobile-601-768:justify-center
                    mobile-601-768:mx-auto

                    mobile-769-900:w-[300px]
                    mobile-769-900:text-[20px]
                    mobile-769-900:flex
                    mobile-769-900:text-center
                    mobile-769-900:justify-center
                    mobile-769-900:mx-auto

                    mobile-901-1200:w-[300px]
                    mobile-901-1200:text-[20px]
                    mobile-901-1200:flex
                    mobile-901-1200:text-center
                    mobile-901-1200:justify-center
                    mobile-901-1200:mx-auto
                    ' 
                    href='#'>Get Started <GrFormNext className='mt-[5px]' /></Link>
            </div>
        </div>
        <div>
        <Image 
                src='/lightenergy.svg'
                alt='Advance Flow Image'
                width={302}
                height={380}
                className='
                    ml-[150px] 
                    mt-[-68px]
                    mobile-320-400:w-[300px]
                    mobile-320-400:text-[20px]
                    mobile-320-400:flex
                    mobile-320-400:text-center
                    mobile-320-400:justify-center
                    mobile-320-400:items-center
                    mobile-320-400:mx-auto
                    mobile-320-400:ml-[0]
                    mobile-320-400:mt-[50px]


                    mobile-401-480:w-[300px]
                    mobile-401-480:text-[20px]
                    mobile-401-480:flex
                    mobile-401-480:text-center
                    mobile-401-480:justify-center
                    mobile-401-480:items-center
                    mobile-401-480:mx-auto
                    mobile-401-480:ml-[0]
                    mobile-401-480:mt-[50px]

                    mobile-481-600:w-[300px]
                    mobile-481-600:text-[20px]
                    mobile-481-600:flex
                    mobile-481-600:text-center
                    mobile-481-600:justify-center
                    mobile-481-600:items-center
                    mobile-481-600:mx-auto
                    mobile-481-600:ml-[0]
                    mobile-481-600:mt-[50px]

                    mobile-601-768:w-[300px]
                    mobile-601-768:text-[20px]
                    mobile-601-768:flex
                    mobile-601-768:text-center
                    mobile-601-768:justify-center
                    mobile-601-768:items-center
                    mobile-601-768:mx-auto
                    mobile-601-768:ml-[0]
                    mobile-601-768:mt-[50px]

                    mobile-769-900:w-[300px]
                    mobile-769-900:text-[20px]
                    mobile-769-900:flex
                    mobile-769-900:text-center
                    mobile-769-900:justify-center
                    mobile-769-900:items-center
                    mobile-769-900:mx-auto
                    mobile-769-900:ml-[0]
                    mobile-769-900:mt-[50px]

                    mobile-901-1200:w-[300px]
                    mobile-901-1200:text-[20px]
                    mobile-901-1200:flex
                    mobile-901-1200:text-center
                    mobile-901-1200:justify-center
                    mobile-901-1200:items-center
                    mobile-901-1200:mx-auto
                    mobile-901-1200:ml-[0]
                    mobile-901-1200:mt-[50px]
                    '
            />
        </div>
        </div>
    </div>
  )
}

export default AdvanceFlow