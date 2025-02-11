import Desert from '@/app/components/product-map/desert';
import React from 'react';
import Image from 'next/image';
const Page = () => {
    return (
        <div className='min-h-[calc(100dvh-64px)] flex flex-col'>
            <Desert/>
            <footer className='mt-auto bg-[#b1a9a4] grid grid-cols-2 py-6'>
                <section className='w-full flex flex-col items-center'>
                    <h1 className='text-[#000000] font-roboto2 text-center'>Logistics</h1>
                    <ul className='grid grid-cols-2 sxs:grid-cols-3 px-2 items-center justify-items-center gap-y-2 pt-1 max-w-[200px] gap-x-2'>
                        <li className='relative w-10 h-6'>
                            <Image
                                src="/assets/logo/2GO.png" alt=""
                                fill
                            />
                        </li>
                        <li className='relative w-10 h-6'>
                            <Image
                                src="/assets/logo/JT.png" alt=""
                                fill
                            />
                        </li>
                        <li className='relative w-10 h-6'>
                            <Image
                                src="/assets/logo/flash-.png" alt=""
                                fill
                            />
                        </li>
                        <li className='relative w-10 h-6 bg-[white] flex items-center'>
                            <Image
                                src="/assets/logo/transpotifY.png" alt=""
                                height={100} width={100}
                            />
                        </li>
                        
                    </ul>
                </section>
                <section className='w-full h-full'>
                    <h2 className='text-[#000000] font-tinapa text-center'>Application</h2>
                    <div className='flex justify-center pt-2'>
                        <div className='w-[30%] text-[10px] flex justify-center items-center text-center'>
                            download our app
                        </div>
                        <Image
                            src="/assets/logo/QRGoogle.png" alt=""
                            height={70} width={70 }
                        />
                        
                    </div>
                </section>
            </footer>
        </div>

        
    );
};

export default Page;