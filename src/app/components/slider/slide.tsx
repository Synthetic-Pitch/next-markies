'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { setbackward,setforward,setAdminPanelOpen} from '@/app/redux/Slider';
import { useRouter } from 'next/navigation';
import {setModalShow} from '@/app/redux/modal';


type State = {
  Slide:{
    slide:boolean;
    isAlreadyLogin:boolean;
  }
};

const Slide:React.FC = () => {
    const Slide = useSelector((state:State) => state.Slide.slide);
    const IsAlreadyLog = useSelector((state:State) => state.Slide.isAlreadyLogin);
    const dispatch = useDispatch();
    const router = useRouter();

  
    const handleDispatch = () =>{
        if(Slide){
        dispatch(setbackward());
        } else dispatch(setforward());
    };
    
    const handleAdmin = () => {
        if(IsAlreadyLog){
            dispatch(setbackward());
            return router.push('/admin')
        }
        dispatch(setModalShow());
        dispatch(setAdminPanelOpen());
    };
    
    
  
    return (
      <div 
        className={`absolute top-[100%] z-30 bg-gradient-to-b from-[#a8a8a8] to-[#3d3d3d] w-[50vw] h-[100dvh] transition-[left] duration-500 ease-in-out ${Slide ? '-left-[0%]': '-left-[100%]'} `}
      >
        <ul className='flex flex-col items-center pt-4 font-poppins select-none'>
          
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
            className='py-4 px-8' href={"/beverage"}
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
    
      </div>
    )
};

export default Slide