
import OrderFooter from '@/app/components/order/smallScreen/order-footer';
import OrderMap from '@/app/components/order/smallScreen/order-map';
import OrderMap2 from '@/app/components/order/largeScreen/order-map';
import OrderMore from '@/app/components/order/smallScreen/order-more';
import React from 'react';
import { MainDishWrapper, DesertWrapper,BeverageWrapper } from '../../components/order/smallScreen/wrapper';
import {MainDishWrapperOrder,DesertWrapperOrder,BeverageWrapperOrder} from '../../components/order/largeScreen/wrapper'
import MainDish from '@/app/components/product-map/mainDish';
import Desert from '@/app/components/product-map/desert';
import Beverage from '@/app/components/product-map/beverage';
import OrderAside from '@/app/components/order/largeScreen/order-aside';


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
            <div className='hidden h-[calc(100dvh-64px)] md:flex justify-center overflow-hidden'>
                <div className='w-full max-w-[1220px] flex'>
                    <div className='w-[60%] flex'>
                        <OrderMap2/>
                        <MainDishWrapperOrder>
                            <MainDish/>
                        </MainDishWrapperOrder>
                        <DesertWrapperOrder>
                            <Desert/>
                        </DesertWrapperOrder>
                        <BeverageWrapperOrder>
                            <Beverage/>
                        </BeverageWrapperOrder>
                    </div>
                    <OrderAside/>
                </div>
            </div>
        </div>
    );
};

export default Page;