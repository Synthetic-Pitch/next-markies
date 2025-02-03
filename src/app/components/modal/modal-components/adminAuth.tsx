'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminPanelClose,setbackward,setIsAlreadyLogin } from '../../../redux/Slider'
import { setModalClose } from '@/app/redux/modal'

import { useRouter } from 'next/navigation';

type State = {
    Slide: {
        adminPanel:boolean;
        adminLogin:{
            username:string;
            password:string;
        }
    }
}
type Login = {
    username:string;
    password:string;
}

const AdminAuth:React.FC= () => {
    const AdminPanel = useSelector((state:State)=> state.Slide.adminPanel);
    const Login = useSelector((state:State)=> state.Slide.adminLogin);
    const router = useRouter();
    const [isMatch, setIsMatch] = useState<Login>({
        username:'',
        password:''
    });
    const Ref = useRef<HTMLDialogElement>(null);
    const dispatch = useDispatch();
    
    useEffect(()=>{     
        if(AdminPanel){
            Ref.current?.showModal();
        }
        
    },[AdminPanel]);

    const handleClose = ()=>{
        Ref.current?.close();
        dispatch(setAdminPanelClose())
        dispatch(setModalClose());
    }
    
    const handleSubmit = () => {
        if(Login.password === isMatch.password && Login.username === isMatch.username){
            console.log('Login Succesfully!');
            dispatch(setAdminPanelClose())
            dispatch(setModalClose());
            dispatch(setbackward());
            dispatch(setIsAlreadyLogin());
            Ref.current?.close();
            router.push('/admin');
            
        }else console.log('Login unAuthorized');
    }
    return (
        <dialog
            ref={Ref}
            className='w-[90vw] max-w-[320px] h-[300px] rounded-[1rem]'
        >
            <div className='flex flex-col justify-between h-full'>
                <h2 className='font-roboto2'><span className=''>Admin Only</span></h2>
                <div className='h-[70%] w-full flex flex-col items-center justify-evenly -mt-4'>
                    <input 
                        type="text" 
                        value={isMatch.username}
                        onChange={(e)=>{
                            const filter = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                            setIsMatch((prev)=>({...prev, username:filter}))
                        }}
                        placeholder='enter username' 
                        className='w-full py-3 outline-none border-b-2'
                    />
                    
                    <input 
                        type="text" 
                        value={isMatch.password}
                        onChange={(e)=>{
                            const filter = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
                            setIsMatch((prev)=>({...prev,password:filter}))
                        }}
                        placeholder='enter password' 
                        className='w-full py-3 outline-none border-b-2'
                    />
                </div>
                <div className='flex justify-between'>
                    <button 
                        className='p-2'
                        onClick={handleSubmit}>submit</button>
                    <button 
                        className='p-2'
                        onClick={handleClose}>close</button>
                </div>
               
            </div>
        </dialog>
    );
};

export default AdminAuth;