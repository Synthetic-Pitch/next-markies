'use client'
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setPayment} from '@/app/redux/order'

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

    return (
        <dialog ref={Ref} className='w-[80vw] sm:w-[400px]'>
            <h2 className='font-roboto2 text-xl'>Payment</h2>
            <button onClick={handleClose}>Close</button>
        </dialog>
    );
};

export default Payment;