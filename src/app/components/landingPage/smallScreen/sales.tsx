import React from 'react'
import Image from 'next/image'

const Sales = () => {
  return (
    <div className=' bg-gradient-to-tl from-[#0f1b1b] to-[#2e5353] overflow-hidden'>
        <header className='relative'>
            <h1 
                className='text-8xl text-[#d1d1d1] font-test select-none'
            >BIGGEST SALE</h1>
                
                <span className='absolute bottom-0 right-0 hidden min-[300px]:block min-[470px]:hidden'>
                <Image
                    src="/assets/landingPage/discount.png"
                    alt=''
                    height={100} width={100}
                    className='h-[90%] w-[100%]'
                />
            </span>
        </header>
        
        <main className=''>
            <section className='flex flex-col min-[370px]:flex-row justify-center pb-4'>
                <aside className='w-[100%] flex justify-center relative min-[370px]:w-[50vw] min-[370px]:block '>
                    <div className='w-[90vw] min-[370px]:w-[50vw]'>
                        <Image
                            src="/assets/landingPage/pic-3.jpg"
                            alt=''
                            height={100} width={100}
                            className='h-[100%] w-[100%]'
                        />
                    </div>
                    <span className=' absolute -top-6 -right-0 min-[370px]:-right-4 '>
                        <Image
                            src="/assets/landingPage/30-percent-removed.png"
                            alt=''
                            height={100} width={100}
                            className='h-[70px] w-auto '
                        />
                    </span>
                </aside>
                <article className=' w-[100%] min-[370px]:w-[45%] flex flex-col items-center justify-center'>
                    
                    <h2 className='text-[black] font-test text-[22px] bg-[#5b8f8f] px-4 rounded-full text-center select-none'>Steak&apos;y Shrimp</h2>
                    <p className='w-[100%] text-center text-[white] p-2 text-[15px]'>Steak&apos;y Shrimp is a savory masterpiece, blending tender perfection with rich, mouthwatering flavors.</p>
                    <div className='underline text-4xl font-pandesal text-[#db8585] tracking-widest font-extrabold'>order now.</div>
                </article>
            </section>
                
            <section className='flex flex-col min-[370px]:flex-row justify-center'>
                <aside className='w-[100%] flex justify-center relative min-[370px]:w-[50vw] min-[370px]:block '>
                    <div className='w-[90vw] min-[370px]:w-[50vw]'>
                        <Image
                            src="/assets/landingPage/pic-4.jpg"
                            alt=''
                            height={100} width={100}
                            className='h-[100%] w-[100%]'
                      />
                    </div>
                    <span className=' absolute -top-6 -right-0 min-[370px]:-right-4 '>
                        <Image
                            src="/assets/landingPage/20perfcentOff.png"
                            alt=''
                            height={100} width={100}
                            className='h-[70px] w-auto'
                        />
                    </span>
                </aside>
                <article className=' w-[100%] min-[370px]:w-[45%] flex flex-col items-center justify-center'>
                    <h2 className='text-[black] font-test text-[25px] bg-[#5b8f8f] px-4 rounded-full text-center select-none '>Steak&apos;y Shrimp</h2>
                    <p className='w-[100%] text-center text-[white] p-2 text-[15px]'>Steak&apos;y Shrimp is a savory masterpiece, blending tender perfection with rich, mouthwatering flavors.</p>
                    <div className='underline text-4xl font-pandesal text-[#db8585] tracking-widest font-extrabold'>order now.</div>
                </article>
            </section>
            
            <section className='pb-4'>
                <article className='flex flex-col items-center justify-center py-2 my-2 bg-[#aa7441]'>
                    <h1 className='text-xl font-bold text-[#9be4ce] font-poppins'>Deluxed G2 Stalic Steak</h1>
                    <i className='text-center px-2'>mouthwatering fusion of premium, tender meat and bold, savory flavors that redefine indulgence.</i>
                </article>
                <figure className='flex flex-col items-center justify-center'>
                    <div className='relative flex justify-center w-[90vw] min-[370px]:h-[340px] min-[370px]:w-[400px] pb-4'>
                        <Image
                            src='/assets/landingPage/download.png'
                            alt=''
                            height={140} width={120}
                            className='h-[100%] w-[90%]'
                        />
                    </div>
                    <div className='w-full h-[2rem] flex justify-center items-center gap-3'>
                        <span className='text-[white] text-xl tracking-wide'>now for &#8369;679</span>
                        <span className='text-[#bebebe] line-through tracking-wider'>&#8369;926</span>
                    </div>
                    <button className='text-[#c77373] text-xl font-bold'>Order now..</button>
                </figure>
            </section>
        </main>
    </div>
  )
}

export default Sales