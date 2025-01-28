import React from 'react';
import Image from 'next/image';


const Scroller = () => {
  return (
    <div className="h-[180px] w-full bg-[#808080] overflow-x-scroll">
      <div className="min-w-max h-full bg-[#413838] flex gap-2 p-2">
        <div className='h-full w-[240px] bg-[cyan]'>
          <Image 
            src="/assets/landingPage/scroll-1.jpg"
            alt=""
            height={100} width={120}
            className='w-full h-full '
          />
        </div>
        <div className='h-full w-[240px] bg-[cyan]'>
          <Image 
            src="/assets/landingPage/scroll-2.jpg"
            alt=""
           height={100} width={120}
             className='w-full h-full'
          />
        </div>
        <div className='h-full w-[240px] bg-[cyan]'>
          <Image 
            src="/assets/landingPage/scroll-3.jpg"
            alt=""
           height={100} width={140}
             className='w-full h-full '
          />
        </div>
        <div className='h-full w-[240px] bg-[cyan]'>
          <Image
            src="/assets/landingPage/scroll-4.jpg"
            alt=""
           height={100} width={120}
            className='w-full h-full'
          />
        </div>
        <div className='h-full w-[240px] bg-[cyan]'>
          <Image 
            src="/assets/landingPage/scroll-5.jpg"
            alt=""
            height={100} width={120}
            className='w-full h-full'
          />
        </div>
        <div className='h-full w-[240px] bg-[cyan]'>
          <Image 
            src="/assets/landingPage/scroll-6.jpg"
            alt=""
            height={100} width={120}
            className='w-full h-full'
          />
        </div>
        <div className='h-full w-[240px] bg-[cyan]'>
          <Image 
            src="/assets/landingPage/scroll-7.jpg"
            alt=""
            height={100} width={120}
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Scroller;
