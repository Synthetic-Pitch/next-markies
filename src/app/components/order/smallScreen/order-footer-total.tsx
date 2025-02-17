'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPayment,setVoucher } from '@/app/redux/order';

type Data = {
    price:string
    quantity:number
}

type State = {
    order:{
        order_Obj: Data[]
        payment:boolean
    }
}

const OrderFooterTotal = () => {
    const order = useSelector((state:State) => state.order.order_Obj)
    const [total,setTotal] = useState<number>(0);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        
        let sub = 0
        for(let i = 0; i < order.length; i++){
            const parsePrice = parseFloat(order[i].price)
            const calculateTotal = parsePrice * order[i].quantity
            sub += calculateTotal
        }
       setTotal(sub)

       
      
    },[order,order.length])

    const handlePayment = () => {
        dispatch(setPayment());
    }
    const handleVoucher = () => {
        dispatch(setVoucher())
    }

    return (
        <main className='h-full flex flex-col'>
            <section className=' h-[30%] w-full flex justify-center items-center'>
                <h2 className='font-poppins'>Subtotal: <span>&#x20B1;{total}</span></h2>
            </section>
            <main className='flex flex-col sxs:flex-row justify-evenly bg-[#636363]'>
                <button 
                    onClick={handlePayment} 
                    className='p-1 sxs:p-3 text-[#cecece] font-poppins '
                >Payment</button>
                <button 
                    onClick={handleVoucher} 
                    className='p-1 sxs:p-3 text-[#cecece] font-poppins'
                >Voucher</button>  
            </main>
            <button  className='w-full flex-grow bg-[black] text-white font-roboto2'>
                Checkout
            </button>

        </main>
    );
};

export default OrderFooterTotal;