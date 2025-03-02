'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Img1 from '../../../../../public/assets/landingPage/icon-degala.png'

const MediumScreenScroller = () => {
    const route = useRouter();

    return (
        <div className='flex items-center justify-center py-3 bg-gradient-to-r from-[#6c7e8d] to-[#579c9c] h-full w-full relative '>
            <main className='w-[50%] lg:w-[30%] max-w-[375px]'>
                <section className='bg-gradient-to-r from-[#e7e7e7] to-[#69c4c4] w-full h-[100px] flex '>
                    <aside className='w-[50%] h-full  flex items-center justify-center'>
                        <Image
                            src={'/assets/landingPage/maindish-selection.png'}
                            alt='food' height={100} width={100}
                            className='h-[100%] w-auto'
                        />
                    </aside>
                    <article className='flex justify-center items-center w-[50%]'>
                        <h1
                            onClick={() => route.push('/main-dish')}   
                            className='text-[2rem] font-semibold cursor-pointer px-2 border-2 border-[#5c5c5c] rounded-full font-pandesal text-[#5c5c5c] select-none w-[70%] lg:max-w-[150px] text-center'
                        >
                        Main Dish
                        </h1>
                    </article>
                </section>
                
                <section className='bg-gradient-to-r from-[#e7e7e7] to-[#69c4c4] w-full h-[100px] flex '>
                    <aside className='w-[50%] h-full  flex items-center justify-center'>
                        <Image
                            src={'/assets/landingPage/donut.png'}
                            alt='food' height={120} width={120}
                            className='h-[100%] w-auto'
                        />
                    </aside>
                    <article className='flex justify-center items-center w-[50%]'>
                        <h1
                            onClick={() => route.push('/desert')} 
                            className='text-[2rem] w-[70%] lg:max-w-[150px] text-center font-semibold cursor-pointer  px-2 border-2 border-[#5c5c5c] rounded-full font-pandesal text-[#5c5c5c] select-none'
                        >
                        Desert
                        </h1>
                    </article>
                </section>
                    
                <section className='bg-gradient-to-r from-[#e7e7e7] to-[#69c4c4] w-full h-[100px] flex '>
                    <aside className='w-[50%] h-full  flex items-center justify-center'>
                        <Image
                            src={'/assets/landingPage/download-removebg-preview.png'}
                            alt='food' height={120} width={120}
                            className='h-[120%] w-auto -mt-4'
                        />
                    </aside>
                    <article className='flex justify-center items-center w-[50%]'>
                        <h1
                            onClick={() => route.push('/beverage')} 
                            className='text-[2rem]  font-semibold cursor-pointer px-2 border-2 border-[#5c5c5c] rounded-full font-pandesal text-[#5c5c5c] select-none w-[70%] lg:max-w-[150px] text-center'
                        >
                        Beverages
                        </h1>
                    </article>
                </section>
            </main>

            <article 
                className='hidden bg-[#69c4c4] h-[300px] w-[25%] lg:flex justify-center items-center max-w-[312px]'
            >
                <div
                    className='w-[90%] h-[250px] shadow-lg flex items-center justify-center'
                >
                    <p className='text-center font-poppins text-[1.6rem] px-6'>The best food at the best price where you can get it all at once</p>
                </div>
            </article>

            <aside
                className='w-[40%] h-[300px] bg-[#69c4c4] max-w-[500px]'
            >
                <div className='relative h-full w-full flex justify-center items-center'>
                    <Image src={Img1} alt='' fill className='object-cover max-w-[90%]'/>
                </div>
            </aside>
        </div>
    );
};

export default MediumScreenScroller;