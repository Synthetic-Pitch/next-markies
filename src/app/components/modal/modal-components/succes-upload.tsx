'use client'
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSuccesNot} from '@/app/redux/product-create';
import { FaCheck } from "react-icons/fa";

type State = {
    product: {
        product_obj: {
            Upload:{
                succes:boolean;
            }
        }
    }
}

const SuccesUpload = () => {
    const succes = useSelector((state:State)=>state.product.product_obj.Upload.succes);
    const dispatch = useDispatch();
    const Ref = useRef<HTMLDialogElement>(null);
    
    useEffect(()=>{
        if (succes) {
            Ref.current?.showModal();
            const timeoutId = setTimeout(() => {
                dispatch(setSuccesNot());
                Ref.current?.close();
            }, 900);
            
            // Cleanup function to clear timeout if component unmounts
            return () => clearTimeout(timeoutId);
        }
    },[succes,dispatch]);
    
    return (
        <dialog
            className='bg-[#baecba]'
            ref={Ref}
        >
            <div className='flex justify-center items-center gap-2'>
                <h2 className='font-roboto2 tracking-wide'>uploaded</h2>
                <FaCheck style={{ color: "red", fill:'green'}} />
            </div>
           
        </dialog>
    );
};

export default SuccesUpload;