
import VoucherMap from '@/app/components/vouchers/smallscreen/voucher-map ';
import React from 'react';
import VoucherMap2 from '@/app/components/vouchers/largescreen/voucher-map ';

const Voucher = () => {
    
    return (
        <div>
            
            <div className='md:hidden'>
                
                <VoucherMap/>
                
            </div>
            <div className='hidden md:block'>
                <VoucherMap2/>
            </div>
        </div>
    )
};
export default Voucher;
