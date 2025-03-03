'use client'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const OrderProfile = () => {
    const pathname = usePathname();
    const router = useRouter();
    const pathCondition = (pathname === '/main-dish' || pathname === '/desert' || pathname === '/beverage' ? 'gap-3' : 'ml-[45%] gap-[35%]');


    return (
        <div className={`${pathCondition} font-poppins h-full flex`}>
            <h1 
                className='h-full flex items-center cursor-pointer' 
                onClick={()=>router.push('/order')}
            >Order</h1>
            
            <h1 
                className='h-full flex items-center cursor-pointer'
                onClick={()=>router.push('/profile')}
            >Profile</h1>
            <h1 
                className='hidden h-full lg:flex items-center cursor-pointer'
                onClick={()=>router.push('/voucher')}
            >Voucher</h1>
        </div>
    );
};

export default OrderProfile;