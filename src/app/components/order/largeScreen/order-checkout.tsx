'use client'
import React from 'react';

interface Props {
    className? :string
}
const OrderCheckout:React.FC<Props> = ({className=""}) => {
    
    return (
        <div 
            className={`${className}`}
        >
            Checkout
        </div>
    );
};

export default OrderCheckout;