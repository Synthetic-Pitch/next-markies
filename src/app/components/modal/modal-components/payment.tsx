'use client'
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setPayment,setPaymentMethod} from '@/app/redux/order'
import Image from 'next/image';

type State = {
    order:{
        payment:boolean
    }
}

const Payment = () => {
    const Ref = useRef<HTMLDialogElement>(null);
    const payment = useSelector((state:State)=>state.order.payment);
    const dispatch = useDispatch();

    
    useEffect(()=>{
        if(Ref.current && payment){
            return Ref.current.showModal();
        }
        else return Ref.current?.close();
    },[payment])
    
    const handleClose = ()=>{
        dispatch(setPayment())
    }
    const handlePaymentMethod = (method: string) => {
        dispatch(setPaymentMethod(method))
        handleClose()
    }

    return (
        <dialog ref={Ref} className='w-[80vw] sm:w-[400px]'>
            <h2 className='font-roboto2 text-md'>Select Payment Method</h2>
            <div className='grid grid-cols-3 items-center justify-items-center gap-y-2 mb-4'>
                <div
                    onClick={()=>handlePaymentMethod('paypal')} 
                    className='relative h-[4rem] w-[4rem]'>
                    <Image src="/assets/logo/paypal.png" alt='' fill/>
                </div>
                <div
                    onClick={()=>handlePaymentMethod('stripe')} 
                    className='relative h-[2.5rem] w-[4rem]'>
                    <Image src="/assets/logo/Stripe.png" alt='' fill/>
                </div>
                <div
                    onClick={()=>handlePaymentMethod('mastercard')} 
                    className='relative h-[3rem] w-[3rem]'>
                    <Image src="/assets/logo/master.png" alt='' fill/>
                </div>
                <div
                    onClick={()=>handlePaymentMethod('paymaya')} 
                    className='relative h-[3.5rem] w-[5rem]'>
                    <Image src="/assets/logo/maya.png" alt='' fill/>
                </div>
                <div
                    onClick={()=>handlePaymentMethod('visa')} 
                    className='relative h-[4rem] w-[4rem]'>
                    <Image src="/assets/logo/visa.png" alt='' fill/>
                </div>
                <div
                    onClick={()=>handlePaymentMethod('gcash')} 
                    className='relative h-[3rem] w-[4rem]'>
                    <Image src="/assets/logo/gcash.png" alt='' fill/>
                </div>
                <div
                    onClick={()=>handlePaymentMethod('cash on delievery')} 
                    className='relative h-[3rem] w-[4rem]'>
                    <Image src="/assets/logo/COD.PNG" alt='' fill/>
                </div>
                
            </div>
            <button className='bg-[#cacaca] px-4 py-1' onClick={handleClose}>Close</button>
        </dialog>
    );
};

export default Payment;