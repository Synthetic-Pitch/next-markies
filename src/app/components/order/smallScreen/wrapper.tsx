'use client';

import { useSelector } from "react-redux";

type State = {
    order:{
        isCurrentAt:string
    }
}

export const BeverageWrapper = ({children}:{children:React.ReactNode}) => {
    const isSelected =  useSelector((state:State)=>state.order.isCurrentAt);
    
    if(isSelected === 'beverage'){
        return (
            <div className="pb-8">
                {children}
            </div>
        );
    }
};


export const DesertWrapper = ({children}:{children:React.ReactNode}) => {
    const isSelected =  useSelector((state:State)=>state.order.isCurrentAt);
    
    if(isSelected === 'desert'){
        return (
            <div className="pb-8">
                {children}
            </div>
        );
    }
};


export const MainDishWrapper = ({children}:{children:React.ReactNode}) => {
    const isSelected =  useSelector((state:State)=>state.order.isCurrentAt);

    if(isSelected === 'mainDish'){
        return (
            <div className="pb-8">
                {children}
            </div>
        );
    }
   
};

