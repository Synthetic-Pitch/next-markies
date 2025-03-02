
'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
// Import images from the public directory
import Img1 from "../../../../../public/assets/landingPage/pic-1.jpg";
import Img2 from "../../../../../public/assets/landingPage/pic-2.jpg";

const SalesMedium = () => {


    return (
        <div className='bg-gradient-to-bl from-[teal] to-[#006464] pb-8'>
            <header className='relative'>
                <h1 
                    className='text-center font-tinapa text-[9rem] break-all text-[white] tracking-wider'
                >
                    BIGGEST SALE!
                </h1>
            </header>
            
            <main className='relative flex flex-col items-center '>
                <section
                    className='h-[900px] w-[1120px] bg-[#ceb79e] py-3 rounded-2xl flex flex-col justify-center'
                >
                    <div className='w-full h-[400px] flex flex-shrink-0 mb-4'>
                        <motion.figure
                            className='w-[50%] h-full relative'
                            initial={{ opacity: 0,x:-100 }}
                            whileInView={{ opacity: 1,x:0 }}
                            viewport={{
                                margin:'-200px',
                            }}
                            transition={{ duration: 1 }}
                        >
                            <Image 
                                className=''
                                src={Img1} alt='' fill 
                                style={{ objectFit: 'contain' }}
                            />
                        </motion.figure>
                        <article className='w-[50%] h-full flex flex-col items-center justify-center'>
                            <h2 className='font-poppins border-2 p-2 border-[#777777] font-bold'>Gnar Steak</h2>
                            <p 
                                className='px-20 text-center pt-3 font-poppins text-[14px] text-[#616161]'
                            >The native steak of the Gnar tribe, known for its rich flavor and tender texture. Perfect for any occasion, from a casual dinner to a grand feast.
                            </p>
                            <Image src="/assets/background/barcode-2.png" alt='' height={60} width={100}/>
                        </article>
                    </div>

                    <div className='w-full h-[400px] flex flex-shrink-0'>
                        <article className='w-[50%] h-full flex flex-col items-center justify-center'>
                            <h2 className='font-poppins border-2 p-2 border-[#777777] font-bold'>Gnar Steak</h2>
                            <p 
                                className='px-20 text-center pt-3 font-poppins text-[14px] text-[#616161]'
                            >The native steak of the Gnar tribe, known for its rich flavor and tender texture. Perfect for any occasion, from a casual dinner to a grand feast.
                            </p>
                            <Image src="/assets/background/barcode-2.png" alt='' height={60} width={100}/>
                        </article>
                        <motion.figure
                            className='w-[50%] h-full relative'
                            initial={{ x:100, opacity: 0 }}
                            whileInView={{ opacity: 1,x:0 }}
                            viewport={{
                                margin:'-100px',
                            }}
                            transition={{ duration: 1 }}
                        >
                            <Image src={Img2} alt='' fill style={{ objectFit: 'contain' }}/>
                        </motion.figure>
                        
                    </div>
                </section>
                
            </main>

            
        </div>
    );
};

export default SalesMedium;
