import { cookies } from 'next/headers';
import React from 'react';
import { VoucherGET } from '@/app/action/action';
import Image from 'next/image';



const VoucherMap = async () => {
    cookies();

    const data = await VoucherGET();
    
    return (
        <div>
            {
                data.map((item,index)=>(
                    <div key={index}>
                        <Image
                            src={item.url}
                            alt="" height={100} width={100}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default VoucherMap;