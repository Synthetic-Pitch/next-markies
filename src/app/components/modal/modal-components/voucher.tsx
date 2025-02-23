'use client'
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setVoucher,setVoucherID,setisVoucher,setisVoucherFalse} from '@/app/redux/order'
import Image from 'next/image';

type Data = {
    url:string,
    discount:number
    freeShipping:boolean
    id:string
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
    
    const handleUseVoucher = (id: string) => {
        dispatch(setVoucherID(id));
        dispatch(setisVoucher());
        handleClose()
    }
    const handleRemoveVoucher = () => {
        dispatch(setisVoucherFalse());
    }
    return (
        <dialog ref={voucherRef} className='w-[90%] p-2 h-[40vh] '>
           <div className='h-full w-full flex flex-col'>
               <div className='h-[80%] w-full overflow-y-scroll'>
                    {
                        VoucherOBJ.length > 0 ? (
                            VoucherOBJ.map((item,index)=>(
                                <main key={index} className='relative h-[90px] w-full flex bg-[#cacaca] mb-2'>
                                    <div 
                                        className='relative w-[70%] h-full flex items-center justify-center'
                                    >   
                                        <div className='absolute w-[20%] top-0 left-0 bg-[#aaaaaa] p-2 font-roboto2'>{item.discount+'%'}</div>
                                        <Image src={item.url} alt='' height={80} width={130}/>
                                    </div>
                                    <div 
                                        className='w-[30%] h-full flex justify-center items-center bg-[#b1b0b0]'
                                    >
                                        <button onClick={()=>handleUseVoucher(item.id)} className='p-2 font-roboto2'>use</button>
                                    </div>
                                </main>
                            ))
                        ): <div>No Vouchers yet</div>
                    }
               </div>
               <div className='h-[20%] flex items-center justify-between'>
                    <button 
                        onClick={handleClose} 
                        className='bg-[#bebebe] h-[60%] w-[40%] font-roboto2'
                    >Close</button>
                    <button
                        onClick={handleRemoveVoucher}
                        className='bg-[#bebebe] min-h-[60%] w-[40%] font-roboto2 text-center'
                    >remove voucher</button>
               </div>
           </div>
        </dialog>
    );
};

export default Voucher;