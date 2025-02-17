'use client'
import React from 'react';
import {VoucherClaim} from '@/app/action/action'


type Props = {
    id:string
}


const VoucherMapButton:React.FC<Props> = ({id}) => {
    
    const handleClaim = async (id:string) => {
        const result =await VoucherClaim(id)   
        if(!result.success){
            alert('Voucher out of stock')
        }
        
    }
    return (
        <button
            onClick={()=>handleClaim(id)} 
            suppressHydrationWarning
            className='bg-[#aaaaaa] font-roboto2'>
            claim
        </button>
    );
};

export default VoucherMapButton;