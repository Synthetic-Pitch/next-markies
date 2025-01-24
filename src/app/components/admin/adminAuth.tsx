'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setModalShow,setModalClose } from '@/app/redux/modal';
import {setAdminPanelClose,setbackward,setIsAlreadyLogin} from '@/app/redux/Slider';

type State = {
    Slide: {
        adminPanel: boolean;
        adminUsername: string;
        adminPassword: string;
    }
}


const AdminAuth: React.FC = () => {
    const AdminPanel = useSelector((state: State) => state.Slide.adminPanel);
    const Username = useSelector((state: State) => state.Slide.adminUsername);
    const Password = useSelector((state: State) => state.Slide.adminPassword);
    const dispatch = useDispatch();
    const modalRef = useRef<HTMLDialogElement>(null);
    const router = useRouter();
    const [passAttmp, setPassAttmp] = useState<string>('');
    const [userAttmp, setUserAttmp] = useState<string>('');
    const [warn, setwarn] = useState<boolean>(false);

    

    useEffect(()=>{
        if(AdminPanel){
            dispatch(setModalShow());
            modalRef.current?.showModal();
        }else {
            dispatch(setAdminPanelClose());
            dispatch(setModalClose());
            modalRef.current?.close();
        }
    },[AdminPanel, dispatch]);

    const handleAuth = () => {
       
        if( Username === userAttmp && Password === passAttmp){
            console.log('Admin Authenticated');
            dispatch(setAdminPanelClose());
            dispatch(setModalClose());
            dispatch(setIsAlreadyLogin());
            dispatch(setbackward());
            router.push('/admin');  
        }else{
            setwarn(true);
            console.log('Admin Not Authenticated');
        }

    }
    

    const CloseModal =()=>{
        dispatch(setAdminPanelClose());
    }

    return (
        <dialog  ref={modalRef} className='outline-none fixed inset-0 z-50 overflow-y-hidden w-[90vw] h-[300px] bg-[#9296aa] animate-pop'>
            <header className='font-roboto2'>
                For Admins Only
            </header>
            
            <main className=' relative h-[90%] w-full flex flex-col justify-evenly items-center'>
                {
                    warn && <div 
                    className='absolute top-0 text-[#aa4848]'>Incorrect Info</div>
                }
                <section className='flex justify-center items-center w-full h-12'>
                    <input 
                        id='admin-username' type="text"
                        value={userAttmp}
                        onChange={(e)=>setUserAttmp(e.target.value)}
                        placeholder='Username'
                        className='w-[100%] h-[100%] p-4 outline-none rounded-full'/>
                </section>
                <section className='flex justify-center items-center w-full h-12'>
                    <input 
                        id='admin-username' type="text"
                        value={passAttmp}
                        onChange={(e)=>setPassAttmp(e.target.value)}
                        placeholder='Password'
                        className='w-[100%] h-[100%] p-4 outline-none rounded-full'/>
                </section>
                <div className='flex justify-between w-full'>
                    <button 
                        onClick={handleAuth} 
                        className='border-2 px-4 rounded-full'>Enter</button>
                    <button 
                        onClick={CloseModal} 
                        className='border-2 px-4 rounded-full'>Close</button> 
                </div>
            </main>
          
        </dialog>
    );
};



export default AdminAuth;