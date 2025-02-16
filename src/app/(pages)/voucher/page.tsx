import VoucherMap from '@/app/components/vouchers/voucher-map';
import React from 'react';
import { Suspense } from 'react';

const Voucher = () => {
    
    
    return (
        <div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <VoucherMap/>
                </Suspense>
            </div>
        </div>
    )
};
export default Voucher;
