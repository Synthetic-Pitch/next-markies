import React, { Suspense } from 'react';
import { VoucherGET } from '@/app/action/action';
import VoucherMapStructure from './voucher-map-structure';
import { cookies } from 'next/headers';
import Image from 'next/image';

type Data = {
    _id:string
    url:string
    discount:number
    freeShipping:boolean
    stocks?:number, //this is not required in database model so add optional question mark
}

const VoucherMap = async () => {
    const data= await VoucherGET() as Data[] ;
    cookies();
    return (
        <div className='flex items-center gap-2 h-[calc(100dvh-64px)] w-full'>
            
            <map className='flex flex-col items-center justify-start gap-2 w-[60%] h-full overflow-y-scroll py-2'>
                {   data.length > 0 ?
                    data.map((item,index)=>(
                        <Suspense key={index}>
                            <VoucherMapStructure key={index} url={item.url} discount={item.discount} freeShipping={item.freeShipping} stocks={item.stocks} id={item._id.toString()}/>
                        </Suspense>
                    )) : 
                    <div>No Vouchers</div>
                }
            </map> 
            <aside className='w-[40%] bg-[#f0f0f0] h-[100%]'>
                <header className='relative h-[300px] w-full flex items-center justify-center'>
                    <Image src="/assets/landingPage/sale-design.png" alt='' height={300} width={400} />
                </header>
                <main className='flex justify-center p-6'>
                    <p className='font-playwrite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus assumenda, debitis dolor nobis ratione in repellendus eligendi tenetur sapiente veniam doloribus accusamus enim illum ad blanditiis nesciunt! Magnam, et sunt.</p>
                </main>
                <footer className='relative w-full h-[200px]'>
                    <Image src="/assets/landingPage/qr-code-sheesh.png" alt=''
                        fill className='object-contain'
                    />
                   
                </footer>
                <h2 className='flex justify-center p-4'><span 
                    className=' px-2 border-[black] border-[1px] cursor-pointer hover:scale-[1.2]'
                >offfers limited sale</span></h2>
            </aside>
        </div>
    );
};

export default VoucherMap ;