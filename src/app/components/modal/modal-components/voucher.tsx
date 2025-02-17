'use client'
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setVoucher} from '@/app/redux/order'
import Image from 'next/image';

type Data = {
    url:string,
    discount:number
    freeShipping:boolean
}

type State = {
    order:{
        voucher:boolean,
        voucher_Obj:Data[]
    }
}

const Voucher = () => {
    const voucher = useSelector((state:State)=>state.order.voucher)
    const dispatch = useDispatch();
    const voucherRef = useRef<HTMLDialogElement>(null);
    const VoucherOBJ = useSelector((state:State)=> state.order.voucher_Obj)
    
    useEffect(()=>{
        if(voucher){
            voucherRef.current?.showModal();
        }else{
            voucherRef.current?.close();
        }
    },[voucher])

    const handleClose = () => dispatch(setVoucher());
    
    return (
        <dialog ref={voucherRef} className='w-[90%] h-[300px]'>
            <div className='w-full h-[90%] overflow-y-scroll flex flex-col p-2 gap-2'>
                {
                    VoucherOBJ.map((item,index)=>(
                        <main key={index} 
                            className='bg-[gray] w-full'
                        >
                            <div className=''>
                                <Image src={item.url} alt='' height={100} width={100} />
                            </div>
                            <div className=''>

                            </div>
                        </main>
                    ))
                }
            </div>
            <button onClick={handleClose}>close</button>
        </dialog>
    );
};

export default Voucher;