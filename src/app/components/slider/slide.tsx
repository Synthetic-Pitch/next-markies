'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { setbackward,setforward,setAdminPanelShow,setAdminPanelClose } from '@/app/redux/Slider';
import AdminAuth from '../admin/adminAuth';
import { useRouter } from 'next/navigation';

type State = {
  Slide:{
    slide:boolean;
    adminPanel:boolean;
    isAlreadyLogin:boolean;
  }
};

const Slide:React.FC = () => {
  const Slide = useSelector((state:State) => state.Slide.slide);
  const AdminPanel = useSelector((state:State) => state.Slide.adminPanel);
  const IsAlreadyLog = useSelector((state:State) => state.Slide.isAlreadyLogin);
  const dispatch = useDispatch();
  const router =useRouter();

  const handleDispatch = () =>{
    if(Slide){
      dispatch(setbackward());
    } else dispatch(setforward());
  };
  
  
  const handleAdmin = () => {
    if(IsAlreadyLog){
      dispatch(setbackward());
      router.push('/admin');
      return;
    }
    if(AdminPanel){
      dispatch(setAdminPanelClose());
    }else dispatch(setAdminPanelShow());
  };
  
  return (
    <div 
      className={`absolute top-[100%] z-30 bg-gradient-to-b from-[#a8a8a8] to-[#3d3d3d] w-[50vw] h-[100dvh] transition-[left] duration-500 ease-in-out ${Slide ? '-left-[0%]': '-left-[100%]'} `}
    >
      <ul className='flex flex-col items-center pt-4 font-roboto1 select-none'>
        
        <Link 
          onClick={handleDispatch}
          className='py-4 px-8 ' href={"/"}
        >Home</Link>
        
        <Link
          onClick={handleDispatch}
          className='py-4 px-8' href={"/main-dish"}
        >MainDish</Link>

        <Link
          onClick={handleDispatch} 
          className='py-4 px-8' href={"/desert"}
        >Desert</Link>

        <Link 
          onClick={handleDispatch} 
          className='py-4 px-8' href={"/beverages"}
        >Beverages</Link>

        <Link 
          onClick={handleDispatch} 
          className='py-4 px-8' href={"/cart"}
        >Cart</Link>

        <div
          onClick={handleAdmin}
          className='py-4 px-8'>
          Admin
        </div>

      </ul>

      <AdminAuth/>
      
    </div>
  )
};

export default Slide