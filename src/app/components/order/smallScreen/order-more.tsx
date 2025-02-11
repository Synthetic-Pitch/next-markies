'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosBasket } from "react-icons/io";
import Link from 'next/link';

type State  = {
    order:{
        order_Obj: []
    }
}

const OrderMore = () => {
    const order = useSelector((state:State)=> state.order.order_Obj);
    if(order.length === 0) return (
        <div className='flex flex-col justify-center items-center'>
            <div 
                className='flex items-center justify-center gap-2 py-4'
            >
            <h2 className='font-poppins text-xs'>Your basket is empty</h2>
            <IoIosBasket />
            </div>
            <Link href={'/main-dish'} className='max-w-min px-3 py-1 bg-[#e0dede] font-popins rounded-full'>order&nbsp;now</Link>
        </div>
    )
};

export default OrderMore;