'use client'
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setModalShow,setModalClose} from '@/app/redux/modal'

type State = {
    product: {
        product_obj: {
            name: string;
            price: string;
            description: string;
            Upload:{
                isUpload:boolean,
                load:number
            }
        }
    }
}

const UploadProgress = () => {
    const isUpload = useSelector((state:State) => state.product.product_obj.Upload.isUpload);
    const Load = useSelector((state:State) => state.product.product_obj.Upload.load);
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
    },[isUpload,Load])

    const render = () =>{
        console.log(Load);
    }
    return (
        <dialog
            ref={Ref} 
            className='w-[80vw]'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2>Uploading</h2>
                    <div className="w-[50vw] bg-gray-200">
                    <div 
                        className="h-2 bg-gray-600 transition-all duration-100"
                        style={{ width: `${Load}%` }}
                    />
                    </div>
                    <button onClick={render}>Click</button>
                </div>
        </dialog>
    );
};

export default UploadProgress;