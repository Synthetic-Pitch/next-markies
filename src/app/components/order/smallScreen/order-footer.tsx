'use client'
import React from 'react';
import { useSelector } from 'react-redux';

type Data = {
    name:string
}

type State  = {
    order:{
        order_Obj: Data[]
    }
}
const OrderFooter = () => {
    const order = useSelector((state:State)=>state.order.order_Obj);
    
    if(order.length > 0){
        return (
            <div className='h-[150px] w-full bg-[#fff1ccaf]'>
                footer
            </div>
        )
    }
    
};

export default OrderFooter;