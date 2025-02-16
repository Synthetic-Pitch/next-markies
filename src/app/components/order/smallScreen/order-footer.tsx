'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Desert from '../../../../../public/assets/logo/desert.png'
import Maindish from '../../../../../public/assets/logo/mainDish.png'
import Beverage from '../../../../../public/assets/logo/beverage.png'
import Basket from '../../../../../public/assets/logo/basket.png'
import {setCurrentAt} from '@/app/redux/order'
import './style.css'
import { FaAngleDoubleDown } from "react-icons/fa";
import OrderFooterTotal from './order-footer-total';


type Data = {
    name:string
    quantity:number
    price:string
}

type State  = {
    order:{
        order_Obj: Data[]
    }
}
type Iscurrent = {
    order:{
        isCurrentAt: 'default' | 'mainDish' | 'desert' | 'beverage'
    }
}

const OrderFooter = () => {
    
    const order = useSelector((state:State)=>state.order.order_Obj);
    const isCurrentAt = useSelector((state:Iscurrent) => state.order.isCurrentAt);
    const Ref = useRef<HTMLDivElement>(null);
    const RefArror = useRef<HTMLDivElement>(null);
    const [animaUp,setAnimaUp] = useState(false);
    const [isOnce,setIsOnce] = useState(false);
    const dispatch = useDispatch();
    
    const handleArrowDown = () => {
    
        
        if (Ref.current && RefArror.current) {
            // Apply animation trigger
            Ref.current.style.transform = 'translateY(110%)';
            Ref.current.style.transition = 'all 1s ease';
            // Toggle animation state
            setAnimaUp(!animaUp);
        }
    };
    
    useEffect(() => {
            if(Ref.current && RefArror.current) {
                setIsOnce(true);
            }
            if(isOnce){
                if (animaUp && RefArror.current) {        
                    RefArror.current.classList.add('order-footer-arrow-up');
                    RefArror.current.classList.remove('order-footer-arrow-down');
        
                }else if(!animaUp && RefArror.current && Ref.current) {
                    Ref.current.style.transform = 'translateY(0)';
                    Ref.current.style.transition = 'all 1s ease';
                    RefArror.current.classList.add('order-footer-arrow-down');
                    RefArror.current.classList.remove('order-footer-arrow-up');
                }
            }
    }, [animaUp,isOnce]);

    if(order.length > 0){
        return (
            <div className='h-[150px] w-full relative z-30'>
                <header ref={Ref} className='absolute bottom-[100%] w-full h-[35%] flex justify-between gap-4 '>

                    <div
                        onClick={()=>dispatch(setCurrentAt('default'))}
                        className=' w-20 h-full top-0 left-0 flex justify-center items-end bg-[rgba(190,190,190,0.7)] rounded-tr-2xl box-content pr-3'>
                        <figure className={`relative h-[80%] w-[58%] flex justify-center items-center rounded-t-xl ${isCurrentAt === 'default' && 'order-footer-isSelected'}`}>
                            <div className='relative h-[70%] w-[70%] flex items-center'>
                                <Image
                                    src={Basket} alt=''
                                    fill
                                />
                                <span className='absolute -top-3 -right-2 py-[1px] px-2 rounded-full bg-[#d38080] text-[white] text-[12px]'>{order.length}</span>
                            </div>
                        </figure>
                    </div>

                    <section 
                        ref={RefArror}
                        onClick={handleArrowDown}
                        className='relative bg-[rgba(190,190,190,0.9)] w-10 h-10 flex justify-center items-center p-2 '><FaAngleDoubleDown/>
                    </section>
                    
                    <ul className='hidden h-full w-[60%] sxs:flex justify-evenly items-end bg-[rgba(190,190,190,0.9)] rounded-tl-[25px] '>
                        <li 
                            onClick={()=>{dispatch(setCurrentAt('desert'))}}
                            className={`text-sm list-none  flex items-center cursor-pointer relative h-[80%] w-[18%] rounded-t-xl ${isCurrentAt === 'desert' && 'order-footer-isSelected'}`}
                        >
                            <div className='relative h-[70%] w-full'>
                                <Image
                                    src={Desert} alt=''
                                    fill
                                />
                            </div>
                        </li>
                        <li 
                            onClick={()=>{dispatch(setCurrentAt('mainDish'))}}
                            className={`text-sm list-none  flex items-center cursor-pointer relative h-[80%] w-[18%]  rounded-t-xl ${isCurrentAt === 'mainDish' && 'order-footer-isSelected'}`}
                        >
                            <div className='relative h-full w-full'>
                                <Image
                                    src={Maindish} alt=''
                                    fill
                                />
                            </div>
                        </li>
                        <li
                            onClick={()=>{dispatch(setCurrentAt('beverage'))}}
                            className={`text-sm list-none  flex items-center cursor-pointer relative h-[80%] w-[18%] rounded-t-xl ${isCurrentAt === 'beverage' && 'order-footer-isSelected'}`}
                        >
                            <div className='relative h-[70%] w-full'>
                                <Image
                                    src={Beverage} alt=''
                                    fill
                                />
                            </div>
                        </li>
                    </ul>
                </header>
                <main className='bg-[gray] w-full h-full relative'>
                    <OrderFooterTotal/>
                </main>
            </div>
        )
    }
    
};

export default OrderFooter;


