'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const SmallScreen = () => {
  const route = useRouter();
  
  return (
    <div 
      className='flex flex-col items-center justify-center gap-3 py-3 bg-gradient-to-r from-[#6c7e8d] to-[#579c9c]'
    >
      
      <section className='bg-gradient-to-r from-[#e7e7e7] to-[#69c4c4] w-[90%] h-[100px] flex rounded-r-full'>
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
            className='text-[min(10vw,8vw)] font-semibold cursor-pointer px-5 border-2 border-[#5c5c5c] rounded-full font-pandesal text-[#5c5c5c] select-none'>
            Main Dish
          </h1>
        </article>
      </section>
      
      <section className='bg-gradient-to-r from-[#e7e7e7] to-[#69c4c4] w-[90%] h-[100px] flex rounded-r-full'>
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
            className='text-[min(10vw,8vw)]  font-semibold cursor-pointer  px-5 border-2 border-[#5c5c5c] rounded-full font-pandesal text-[#5c5c5c] select-none'>
            Desert
          </h1>
        </article>
      </section>
      
      <section className='bg-gradient-to-r from-[#e7e7e7] to-[#69c4c4] w-[90%] h-[100px] flex rounded-r-full'>
        <aside className='w-[50%] h-full  flex items-center justify-center'>
          <Image
              src={'/assets/landingPage/download-removebg-preview.png'}
              alt='food' height={120} width={120}
              className='h-[120%] w-auto -mt-4'
            />
        </aside>
        <article className='flex justify-center items-center w-[50%]'>
          <h1
            onClick={() => route.push('/beverages')} 
            className='text-[min(10vw,8vw)]  font-semibold cursor-pointer px-5 border-2 border-[#5c5c5c] rounded-full font-pandesal text-[#5c5c5c] select-none'>
            Beverages
          </h1>
        </article>
      </section>

    </div>
  )
}

export default SmallScreen;