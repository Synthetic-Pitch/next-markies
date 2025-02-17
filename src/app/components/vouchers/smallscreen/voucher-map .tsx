import React, { Suspense } from 'react';
import { VoucherGET } from '@/app/action/action';
import VoucherMapStructure from './voucher-map-structure';
import { cookies } from 'next/headers';

type Data = {
    _id:string
    url:string
    discount:number
    freeShipping:boolean
    stocks?:number, //this is not required in database model so add optional question mark
}

const VoucherMap = async () => {
    const data= await VoucherGET() as Data[] ;
    cookies();
    return (
        <div className='flex flex-col items-center gap-2 pt-2'>
            {   data.length > 0 ?
                data.map((item,index)=>(
                    <Suspense key={index}>
                        <VoucherMapStructure key={index} url={item.url} discount={item.discount} freeShipping={item.freeShipping} stocks={item.stocks} id={item._id.toString()}/>

                    </Suspense>
                )) : 
                <div>No Vouchers</div>
            }
            
        </div>
    );
};

export default VoucherMap ;