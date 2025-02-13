
import OrderFooter from '@/app/components/order/smallScreen/order-footer';
import OrderMap from '@/app/components/order/smallScreen/order-map';
import OrderMore from '@/app/components/order/smallScreen/order-more';
import React from 'react';
import { MainDishWrapper, DesertWrapper,BeverageWrapper } from '../../components/order/smallScreen/wrapper';
import MainDish from '@/app/components/product-map/mainDish';
import Desert from '@/app/components/product-map/desert';
import Beverage from '@/app/components/product-map/beverage';

const Page = () => {
    return (
        <div >
            
            {/* SMALL SCREEN */}
            <div className=' h-[calc(100dvh-64px)] flex flex-col overflow-hidden'>
                <OrderMore/>
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
        </div>
    );
};

export default Page;