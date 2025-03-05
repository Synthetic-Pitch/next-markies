'use client'

import { useSelector } from 'react-redux';


type State = {
    order:{
        isCurrentAt:string
    }
}

export function MainDishWrapperOrder({children}:{children:React.ReactNode}){
    const isSelected = useSelector((state:State)=>state.order.isCurrentAt);
    if(isSelected === 'mainDish'){
        return (
            <div className='w-full'>
                {children}
            </div>
        )
    }
}
export function DesertWrapperOrder({children}:{children:React.ReactNode}){
    const isSelected = useSelector((state:State)=>state.order.isCurrentAt);
    if(isSelected === 'desert'){
        return (
            <div className='w-full'>
                {children}
            </div>
        )
    }
}
export function BeverageWrapperOrder({children}:{children:React.ReactNode}){
    const isSelected = useSelector((state:State)=>state.order.isCurrentAt);
    if(isSelected === 'beverage'){
        return (
            <div className='w-full'>
                {children}
            </div>
        )
    }
}
 
