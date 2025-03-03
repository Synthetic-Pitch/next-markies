
import OrderFooter from '@/app/components/order/smallScreen/order-footer';
import OrderMap from '@/app/components/order/smallScreen/order-map';
import OrderMap2 from '@/app/components/order/largeScreen/order-map';
import OrderMore from '@/app/components/order/smallScreen/order-more';
import React from 'react';
import { MainDishWrapper, DesertWrapper,BeverageWrapper } from '../../components/order/smallScreen/wrapper';
import MainDish from '@/app/components/product-map/mainDish';
import Desert from '@/app/components/product-map/desert';
import Beverage from '@/app/components/product-map/beverage';

const Page = () => {
    return (
        <div >
            <OrderMore/>
            
            {/* SMALL SCREEN */}
            <div className=' h-[calc(100dvh-64px)] flex flex-col overflow-hidden md:hidden'>

                <div className='w-full h-[calc(100%-150px)] py-2 overflow-y-scroll'>
                    <OrderMap/>
                    <MainDishWrapper>
                        <MainDish/>
                    </MainDishWrapper>
                    <DesertWrapper>
                        <Desert/>
                    </DesertWrapper>
                    <BeverageWrapper>
                       <Beverage/>
                    </BeverageWrapper>
                </div>      
                <OrderFooter/>
            </div>

            {/* MEDIUM SCREEN */}
            <div className='hidden h-[calc(100dvh-64px)] md:flex flex-col overflow-hidden'>
                <OrderMap2/>
            </div>
        </div>
    );
};

export default Page;