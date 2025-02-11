import MainDish from '@/app/components/product-map/mainDish'
import React from 'react'
import Image from 'next/image';


const page = () => {
    return (
        <div className=' min-h-[calc(100dvh-64px)] flex flex-col'>
            <MainDish/>
            <footer className='mt-auto bg-[#b1a9a4] grid grid-cols-2 py-6'>
                <section className='w-full'>
                    <h1 className='text-[#000000] font-roboto2 text-center'>Payment</h1>
                    <ul className='grid grid-cols-2 sxs:grid-cols-3 px-2 items-center justify-items-center'>
                        <li className='relative w-10 h-10'>
                            <Image
                                src="/assets/logo/visa.png" alt=""
                                fill
                            />
                        </li>
                        <li className='relative w-12 h-10'>
                            <Image
                                src="/assets/logo/maya.png" alt=""
                                fill
                            />
                        </li>
                        <li className='relative w-12 h-14'>
                            <Image
                                src="/assets/logo/paypal.png" alt=""
                                fill
                            />
                        </li>
                        <li className='relative w-10 h-8'>
                            <Image
                                src="/assets/logo/master.png" alt=""
                                fill
                            />
                        </li>
                        <li className='relative w-10 h-8'>
                            <Image
                                src="/assets/logo/gcash.png" alt=""
                                fill
                            />
                        </li>
                        <li className='relative w-10 h-8'>
                            <Image
                                src="/assets/logo/Stripe.png" alt=""
                                fill
                            />
                        </li>
                    </ul>
                </section>
                <section className='w-full h-full'>
                    <h2 className='text-[#000000] font-roboto2 text-center'>Partnership</h2>
                    <ul className='flex flex-col pl-10 pt-2 gap-1'>
                        <li className='list-disc list-inside text-xs'>
                            Jolibee
                        </li>
                        <li className='list-disc list-inside text-xs'>
                            GrabFood
                        </li>
                        <li className='list-disc list-inside text-xs'>
                            Chowking
                        </li>
                        <li className='list-disc list-inside text-xs'>
                            MangJuan
                        </li>
                    </ul>
                </section>
            </footer>
        </div>
    )
};

export default page