import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCheckoutPanel} from '@/app/redux/order'

type IPaymentMethod = {
    order:{
        paymentMethod:string
    }
}

const OrderCheckoutBtn = () => {
    const paymentMethod = useSelector((state:IPaymentMethod)=>state.order.paymentMethod)
    const dispatch = useDispatch();
    
    const handleCheckout = () => {
        console.log(paymentMethod);
        dispatch(setCheckoutPanel(true));
    }
    return (
        <button
            onClick={handleCheckout} 
            className='w-full flex-grow bg-[#252525] text-white font-roboto2 text-xl tracking-widest outline-none border-[2px] border-[#8f7e1d]'>
            Checkout
        </button>
    );
};

export default OrderCheckoutBtn;