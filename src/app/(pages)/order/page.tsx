'use client'
import React from 'react';
import { useSelector } from 'react-redux';

type Data = {
    name:string
    price:string
    description:string
    url:string
    _id:string
}

type State = {
   order:{
    order_Obj: Data[]
   }
}

const Page = () => {
    const order = useSelector((state:State)=>state.order.order_Obj);
    console.log(order);
    
    return (
        <div className=''>
            asd
        </div>
    );
};

export default Page;