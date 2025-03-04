'use client'

import { VoucherClaim } from '@/app/action/action'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setVoucherObj} from '@/app/redux/order'

type Props = {
    id: string
}

type DATA = {
    url:string,
    discount:number
    freeShipping:boolean
    id:string
}

type State = {
    order:{
        voucher_Obj:DATA[]
    }
}

const VoucherMapButton: React.FC<Props> = ({ id }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const dispatch = useDispatch();
    const Obj = useSelector((state:State) =>state.order.voucher_Obj)

    const handleClaim = async (id: string) => {
        
        const voucherExist = Obj.some((item)=> item.id === id);

        if(voucherExist){
            return alert('You can only claim one!')
            
        }
        
        
        
        if (btnRef.current) {
            btnRef.current.style.background = '#9b9b9b';
            setTimeout(() => {
                if (btnRef.current) {
                    btnRef.current.style.background = '';
                }
            }, 500); // Change the background color for 700ms
        }
        
        
        const result = await VoucherClaim(id);

        if(result.success){
            dispatch(setVoucherObj(
                {
                    url:result.toPlain?.url as string,
                    discount:result.toPlain?.disount as number,
                    freeShipping:result.toPlain?.freeShipping as boolean,
                    id:id
                }
            ))
        }
    }
    
    return (
        <button
            ref={btnRef}
            onClick={() => handleClaim(id)}
            suppressHydrationWarning
            className='font-poppins text-md w-[100px] bg-[#bbbbbb] mt-1'
        >
           Claim
        </button>
    );
};

export default VoucherMapButton;