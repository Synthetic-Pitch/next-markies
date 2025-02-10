'use client'
import React, { useEffect, useRef } from 'react'
import { ImMenu } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import {setbackward, setforward} from '../../redux/Slider';
import { usePathname } from 'next/navigation';


type State = {
    Slide:{
      slide:boolean
    }
};

const MenuIcon = () => {
  const Slide = useSelector((state: State) => state.Slide.slide);
  const dispatch = useDispatch();
  const Ref = useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();

  const handleSlider = () => {
    if (Ref.current) {
      // ✅ Remove both scale classes before adding a new one
      Ref.current.classList.remove("scale-[80%]", "scale-[100%]");

      if (Slide) {
        Ref.current.classList.add("scale-[100%]");
        dispatch(setbackward());
        
      } else {
        Ref.current.classList.add("scale-[80%]");
        dispatch(setforward());
      }
    }
  };

  useEffect(()=>{
    if(Ref.current) Ref.current.classList.remove("scale-[80%]", "scale-[100%]");
    if(Slide){
      Ref.current?.classList.remove("scale-[80%]", "scale-[100%]");
      dispatch(setbackward());
    }

    
  },[pathName])

  return (
    <div className='w-[15%] h-full flex items-center justify-center cursor-pointer'>
      
      
      <div ref={Ref} className='transition-all duration-500 ease-in-out'>
        <ImMenu onClick={handleSlider} className='text-[40px]'/>
      </div>
      
    </div>
  )
}

export default MenuIcon