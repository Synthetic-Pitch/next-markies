'use client'
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setModalShow,setModalClose} from '@/app/redux/modal'
import { FaRotate } from "react-icons/fa6";

type State = {
    product: {
        product_obj: {
            name: string;
            price: string;
            description: string;
            Upload:{
                isUpload:boolean,
                load:number,
                succes:boolean
            }
        }
    }
}

const UploadProgress = () => {
    const isUpload = useSelector((state:State) => state.product.product_obj.Upload.isUpload);
    const Load = useSelector((state:State) => state.product.product_obj.Upload);
    const Ref = useRef<HTMLDialogElement>(null);
    const dispatch =useDispatch();

    useEffect(()=>{
        if(isUpload){
            Ref.current?.showModal();
            dispatch(setModalShow());
            
        }else{
            Ref.current?.close();
            dispatch(setModalClose());
        }
    },[isUpload,Load,dispatch])
    
    
    return (
        <dialog
            ref={Ref} 
            className='w-[80vw]'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <h2 className='font-roboto3'>Uploading</h2>
                        <div className='animate-spin'>
                            <FaRotate/>
                        </div>
                    </div>

                    <div className="w-[50vw] bg-gray-200">
                        <div 
                            className="h-2 bg-gray-600 transition-all duration-800"
                            style={{ width: `${Load.load}%` }}
                        />
                    </div>

                </div>
        </dialog>
    );
};

export default UploadProgress;