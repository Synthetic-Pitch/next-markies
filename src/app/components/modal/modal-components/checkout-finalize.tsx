'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCheckoutPanel,setPaymentMethod,resetOrder,} from '@/app/redux/order'


type State={
    order:{
        checkoutPanel:boolean
        paymentMethod:string
    }
}

const CheckoutFinalize = () => {
    const CheckoutPanel = useSelector((state:State)=>state.order.checkoutPanel)
    const dispatch = useDispatch();
    const CheckoutModal = useRef<HTMLDialogElement>(null);
    const paymentMethod = useSelector((state:State)=>state.order.paymentMethod);
    const [paymentRequired, setPaymentRequired] = useState(false);


    useEffect(()=>{
        if(CheckoutPanel){

            CheckoutModal.current?.showModal();
            if(paymentMethod.length > 0) {
                setPaymentRequired(true);
                
            }else {
                const timer = setTimeout(()=>{
                    CheckoutModal.current?.close();
                    dispatch(setCheckoutPanel(false));
                },800)
                return () => clearTimeout(timer);
            }
            
            
        }else{
            CheckoutModal.current?.close();
        }
    },[CheckoutPanel])

    const handleConfirm = () => {
        dispatch(resetOrder());
        dispatch(setPaymentMethod(''));
        dispatch(setCheckoutPanel(false));
    };
    

    return (
        <dialog ref={CheckoutModal} className='outline-none'>
            {
                paymentRequired ? (
                    <>
                        <h2>Confirm your order?</h2>
                        <div className='flex justify-evenly'>
                            <button 
                                onClick={handleConfirm}
                                className='border-[1px] border-[gray] px-4 outline-none rounded-xl mt-2 text-sm'
                            >yes</button>
                            <button 
                                onClick={()=>dispatch(setCheckoutPanel(false))}
                                className='border-[1px] border-[gray] px-4 outline-none rounded-xl mt-2 text-sm'
                            >no</button>
                        </div>

                    </>
                ) : (
                    <h2>select payment</h2>
                )
            }
        </dialog>
    );
};

export default CheckoutFinalize;