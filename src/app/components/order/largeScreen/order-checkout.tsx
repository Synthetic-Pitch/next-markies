'use client'
import React from 'react';
import { useDispatch} from 'react-redux';
import {setCheckoutPanel} from '@/app/redux/order'


interface Props {
    className? :string
}

const OrderCheckout:React.FC<Props> = ({className=""}) => {

    const dispatch = useDispatch();
    
    const handleCheckout = () => {
        
        dispatch(setCheckoutPanel(true));

        
    }
    return (
        <button 
            onClick={handleCheckout}
            className={`${className}`}
        >
            Checkout
        </button>
    );
};

export default OrderCheckout;