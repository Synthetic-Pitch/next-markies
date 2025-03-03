import React from 'react';
import Image from 'next/image';
import VoucherMapButton from './voucher-map-button';

type Voucher = {
    url:string
    discount:number
    freeShipping:boolean
    stocks?:number
    id: string
}

const VoucherMapStructure:React.FC<Voucher> = ({url,discount,freeShipping,stocks,id}) => {
   
    
    return (
        <main className='w-[90%] sxs:h-[120px] bg-[#cecece]'>
            <section className='flex items-center h-full w-full'>
                {
                    <div className='w-[50%] h-full relative flex items-center justify-center'>
                        <div className='relative w-full h-full max-h-[90%]'>
                            <Image src={url} alt='' fill className='object-contain'/>
                        </div>
                    </div>
                }
                <div className='flex flex-col py-2 pl-2 font-poppins text-[14px] text-[#494949]'>
                    <div className='text-inherit'>{discount + '% Off'}</div>
                    <div className='text-inherit'>{freeShipping && 'Freeshipping'}</div>
                    <div className='text-[12px] text-inherit'>{'stocks: '+ stocks}</div>
                    <VoucherMapButton id={id}/>
                </div>
            </section>
        </main>
    );
};

export default VoucherMapStructure;