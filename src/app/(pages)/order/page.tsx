
import OrderFooter from '@/app/components/order/smallScreen/order-footer';
import OrderMap from '@/app/components/order/smallScreen/order-map';
import OrderMore from '@/app/components/order/smallScreen/order-more';
import React from 'react';
import "./stle.css"

const Page = () => {
    return (
        <div className=' h-[calc(100dvh-64px)] flex flex-col'>
            <OrderMore/>
            
            <div className='css_backgroundImage'>
                <div 
                    className='h-[80%] overflow-y-scroll py-2 no-scrollbar'>
                    <OrderMap/>
                </div>
                <OrderFooter/>
            </div>
        </div>
    );
};

export default Page;