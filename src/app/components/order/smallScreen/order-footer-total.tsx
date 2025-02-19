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

type Sub = {
    order:{
        subTotal:{
            totalAmount:number,
            voucherID:string,
            isVoucher:boolean
        }
    }
}

type VoucherType = {
    url:string,
    discount:number
    freeShipping:boolean
    id:string

}
type VoucherOBJ = {
    order:{
        voucher_Obj:VoucherType[]
    }
}
const OrderFooterTotal = () => {
    const order = useSelector((state:State) => state.order.order_Obj)
    const [total, setTotal] =useState<number>(0);
    const subTotal = useSelector((state:Sub)=>state.order.subTotal);
    const VoucherOBJ = useSelector((state:VoucherOBJ)=>state.order.voucher_Obj);
    const dispatch = useDispatch();

    const handlePayment = () => {
        dispatch(setPayment());
    }
    const handleVoucher = () => {
        dispatch(setVoucher())
    }
    
    const hanldeCheckout =()=>{

        const findByID = VoucherOBJ.find(voucher => voucher.id === subTotal.voucherID);
        if(findByID){
            console.log(findByID.discount);
        }
        
    }

    useEffect(()=>{
        let subtotal = order.reduce((acc, order) => acc + parseFloat(order.price) * order.quantity, 0);
        
        if(subTotal.isVoucher){
            const findByID = VoucherOBJ.find(voucher => voucher.id === subTotal.voucherID);
            if (findByID) {
                const discountAmount = (findByID.discount / 100) * subtotal;
                subtotal -= discountAmount; // Apply discount
            }
        }
        subtotal = Math.round(subtotal);
        setTotal(subtotal);

    },[order,subTotal.isVoucher])

   


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
            <button onClick={hanldeCheckout} className='w-full flex-grow bg-[black] text-white font-roboto2'>
                Checkout
            </button>

        </main>
    );
};

export default OrderFooterTotal;