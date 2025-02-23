'use client'
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCheckoutPanel,setPaymentMethod,resetOrder} from '@/app/redux/order'


type State={
    order:{
        checkoutPanel:boolean
    }
}

const CheckoutFinalize = () => {
    const CheckoutPanel = useSelector((state:State)=>state.order.checkoutPanel)
    const dispatch = useDispatch();
    const CheckoutModal = useRef<HTMLDialogElement>(null);

    useEffect(()=>{
        if(CheckoutPanel){
            CheckoutModal.current?.showModal();
        }else{
            CheckoutModal.current?.close();
        }
    },[CheckoutPanel])
    
    const handleConfirm = () => {
        dispatch(resetOrder());
        dispatch(setPaymentMethod(''));
        dispatch(setCheckoutPanel(false));
    }
    return (
        <dialog ref={CheckoutModal} className='outline-none'>
            <h2>Confirm your order?</h2>
            <button 
                onClick={handleConfirm}
                className='border-[1px] border-[gray] px-4 outline-none rounded-xl mt-2'
            >yes</button>
        </dialog>
    );
};

export default CheckoutFinalize;