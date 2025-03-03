'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Sales2 = () => {
    return (
        <div
            className='bg-[#9cb0be] flex items-center justify-center'
        >
            <main className='relative h-[430px] w-[1200px] flex items-center'>
                <section className='absolute h-full w-full ]'>
                    <Image 
                        src="/assets/landingPage/leaf-1.png" alt='' 
                        height={400} width={400}
                        className='absolute -top-20 left-0'
                    />
                    <Image 
                        src="/assets/landingPage/leaf-2.png" alt='' 
                        height={800} width={800}
                        className='absolute top-0 -right-40 -mt-80 rotate-90'
                    />
                </section>
                <motion.figure
                    initial={{
                        y:50
                    }}
                    whileInView={{
                        y:0
                    }}
                    viewport={{
                        margin:'-200px',
                    }}
                    transition={{ duration: 1 }}
                    className='w-[50%] h-[80%] relative flex items-end justify-center shadow-xl'
                >
                    <Image 
                      
                        src="/assets/landingPage/cocktail-1.png" alt='' 
                        height={420} width={300}
                        className='flex-shrink-0 -mr-16'
                    />
                    <Image 
                 
                        src="/assets/landingPage/cocktail-2.png" alt='' 
                        height={360} width={250}
                        className='flex-shrink-0 '
                    />
                </motion.figure>
                <aside
                    className='w-[50%] h-full flex items-center justify-center'
                >
                    <div className='w-full h-full overflow-hidden flex flex-col justify-center items-center relative'>
                        <Image 
                            src='/assets/landingPage/board.png' alt='' 
                            height={400} width={400}
                            className='-mt-36'
                        />
                        <div className='absolute text-6xl font-poppins text-[white] -mt-5'>&#x20B1; 82 only</div>
                        <h2 className='font-playwrite text-2xl'>-the cocktail in town</h2>
                    </div>
                    
                </aside>
            </main>
        </div>
    );
};

export default Sales2;