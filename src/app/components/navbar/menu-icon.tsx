'use client'
import React from 'react'
import { ImMenu } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import {setbackward, setforward} from '../../redux/Slider';


type State = {
    Slide:{
      slide:boolean
    }
};

const MenuIcon = () => {
  const Slide = useSelector((state:State) => state.Slide.slide);
  const dispatch = useDispatch();
  
  const handleSlider = () => {
    if(Slide){
      dispatch(setbackward());
    } else dispatch(setforward());
  };

  return (
    <div className='w-[15%] h-full flex items-center justify-center cursor-pointer'>
      
      <div>
        <ImMenu onClick={handleSlider} className='text-[40px]'/>
      </div>
      
    </div>
  )
}

export default MenuIcon