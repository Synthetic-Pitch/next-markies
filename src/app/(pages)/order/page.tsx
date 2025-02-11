
import OrderFooter from '@/app/components/order/smallScreen/order-footer';
import OrderMap from '@/app/components/order/smallScreen/order-map';
import OrderMore from '@/app/components/order/smallScreen/order-more';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-[#808080] h-[calc(100dvh-64px)] flex flex-col'>
            <OrderMore/>
            <div className='h-[80%] overflow-y-scroll py-2 no-scrollbar'>
                <OrderMap/>
            </div>
            <OrderFooter/>
        </div>
    );
};

export default Page;