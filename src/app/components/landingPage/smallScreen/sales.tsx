import Image from 'next/image';
import React from 'react';
import Img1 from "../../../../../public/assets/landingPage/pic-1.jpg";
import Img2 from "../../../../../public/assets/landingPage/pic-2.jpg"
import DscImg1 from "../../../../../public/assets/landingPage/30-percent-removed.png"
import DscImg2 from "../../../../../public/assets/landingPage/20perfcentOff.png"
import DscImg3 from "../../../../../public/assets/landingPage/pic-3.jpg"

const Sales = () => {
    return (
        <div className='bg-[teal]'>
            <header className='relative'>
                <h1 className='text-center font-test text-8xl break-all'>BIGGEST </h1>
                <h1 className='text-center font-test text-8xl break-all'>SALE </h1>
            </header>
            <main className='relative'>
                <section className="flex flex-col items-center sxs:flex-row justify-center  pb-4">
                    <figure className="relative w-full h-[15rem] sxs:w-[50%] sxs:h-[300px] flex justify-center items-center">
                        <Image
                            src={Img1}
                            alt="Sale image showcasing products"
                            fill
                            className='object-fll sxs:object-contain'
                            priority
                        />
                        <Image
                            src={DscImg1}
                            alt=''
                            className='absolute -top-4 sxs:top-2 sxs:-right-2 right-0 h-[70px] w-auto'
                        />
                    </figure>
                    <article 
                        className="w-full h-auto sxs:w-[50%] flex flex-col items-center"
                    >
                        <h1 className='text-center text-3xl font-test tracking-wider inline-block mx-auto text-[#a31515] p-4 sxs:p-0'>Gnar Steak</h1>
                        <p className='text-center text-sm px-2'>The native steak of the Gnar tribe, known for its rich flavor and tender texture. Perfect for any occasion, from a casual dinner to a grand feast.</p>
                    </article>
                </section>
                
                <section className='flex flex-col justify-center sxs:flex-row items-center pb-4'>
                    <article className='h-40 w-full flex flex-col'>
                        <h1 className='text-3xl font-test text-center py-2 text-[#a31515] '>
                            Fa-Si Burito
                        </h1>
                        <p className='text-center px-2'>Cant escape the taste of the Fa-Si Burito, a delicious blend of spices and flavors that will leave you craving more</p>
                        <button className='text-[#f7f8fa] text-xl pt-4 underline'>order now</button>
                    </article>
                    <figure className='relative h-[20rem] w-full order-first sxs:order-last'>
                        <Image
                            src={Img2}
                            alt=''
                            fill
                            className='object-fill sxs:object-contain'
                        />
                        <Image
                            src={DscImg2}
                            alt='' height={100} width={100}
                            className='absolute -top-5 -left-1 h-[70px] w-[70px] sxs:top-2'
                        />
                    </figure>
                </section>

                <section>
                    <figure className='relative'>
                        <div className='absolute bg-gradient-to-b from-[black] to-[transparent] h-60 w-full'>
                            <h2 
                                className='text-[white] text-4xl pl-2 pt-2 font-tinapa tracking-wider'
                            >Pam&apos;s Steaky Shrimp</h2>
                        </div>
                        <Image
                            src={DscImg3} alt=''
                            className='max-h-[27rem]'
                        />
                    </figure>
                </section>
            </main>
        </div>
    );
};

export default Sales;