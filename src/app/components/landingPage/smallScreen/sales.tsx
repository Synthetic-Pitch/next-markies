
'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Import images from the public directory
import Img1 from "../../../../../public/assets/landingPage/pic-1.jpg";
import Img2 from "../../../../../public/assets/landingPage/pic-2.jpg";
import DscImg1 from "../../../../../public/assets/landingPage/30-percent-removed.png";
import DscImg2 from "../../../../../public/assets/landingPage/20perfcentOff.png";
import DscImg3 from "../../../../../public/assets/landingPage/pic-3.jpg";

const Sales = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    return (
        <div className='bg-gradient-to-bl from-[teal] to-[#006464]'>
            <header className='relative'>
                <h1 className='text-center font-test text-8xl break-all text-[white]'>BIGGEST</h1>
                <h1 className='text-center font-test text-8xl break-all text-[white]'>SALE</h1>
            </header>

            <main className='relative'>
                <section className="flex flex-col items-center sxs:flex-row justify-center pb-4">
                    <figure className="relative w-full h-[15rem] sxs:w-[50%] sxs:h-[300px] flex justify-center items-center">
                        <Image
                            src={Img1}
                            alt="Sale image showcasing products"
                            fill
                            className='object-fill sxs:object-contain'
                            priority
                        />
                        <Image
                            src={DscImg1}
                            alt="Discount 1"
                            width={60}
                            height={70}
                            className='absolute -top-4 sxs:top-2 sxs:-right-2 right-0'
                        />
                    </figure>
                    <article className="w-full h-auto sxs:w-[50%] flex flex-col items-center">
                        <h1 className='text-center text-3xl font-test tracking-wider text-[#d87b7b] p-4 sxs:p-0'>
                            Gnar Steak
                        </h1>
                        <p className='text-center text-sm px-2'>
                            The native steak of the Gnar tribe, known for its rich flavor and tender texture.
                            Perfect for any occasion, from a casual dinner to a grand feast.
                        </p>
                        <button className='py-2 text-[white] text-xl'>
                            {isClient ? "Order Now" : ""}
                        </button>
                    </article>
                </section>

                <section className="flex flex-col items-center sxs:flex-row justify-center pb-4">
                    <figure className="relative w-full h-[15rem] sxs:w-[50%] sxs:h-[300px] flex justify-center items-center">
                        <Image
                            src={Img2}
                            alt="Sale image showcasing products"
                            fill
                            className='object-fill sxs:object-contain'
                            priority
                        />
                        <Image
                            src={DscImg2}
                            alt="Discount 2"
                            width={60}
                            height={70}
                            className='absolute -top-4 sxs:top-2 sxs:-right-2 right-0'
                        />
                    </figure>
                    <article className="w-full h-auto sxs:w-[50%] flex flex-col items-center sxs:order-first">
                        <h1 className='text-center text-3xl font-test tracking-wider text-[#7cac55] p-4 sxs:p-0'>
                            Fa-si Burito
                        </h1>
                        <p className='text-center text-sm px-2'>
                            The native steak of the Gnar tribe, known for its rich flavor and tender texture.
                            Perfect for any occasion, from a casual dinner to a grand feast.
                        </p>
                        <button className='py-2 text-[white] text-xl underline'>
                            {isClient ? "Order Now" : ""}
                        </button>
                    </article>
                </section>
            </main>

            <footer className='flex justify-center items-center pb-4'>
                <figure className='w-[100%] sxs:w-[90%] relative'>
                    <div className='h-[70%] w-full absolute top-0 bg-gradient-to-b from-[#242424] to-transparent'>
                        <h2 className='text-[white] font-tinapa pt-2 pl-2 tracking-wider text-2xl'>
                            PAM&apos;S STEAKY SHRIMP
                        </h2>
                    </div>
                    <Image
                        src={DscImg3}
                        alt="Featured Dish"
                        width={500}
                        height={300}
                        className='object-contain'
                    />
                </figure>
            </footer>
        </div>
    );
};

export default Sales;
