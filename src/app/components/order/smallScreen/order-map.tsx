'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"
import { incrementQuantity,decrementQuantity,removeItem } from '@/app/redux/order'
import { useRouter } from 'next/navigation';

type Data = {
    name:string
    price:string
    description:string
    url:string
    _id:string
    quantity:number
}

type State = {
    order:{
        order_Obj: Data[]
        isCurrentAt:string
    }
}

const OrderMap = () => {
    const order = useSelector((state:State) => state.order.order_Obj);
    const dispatch = useDispatch();
    const [isAnimate,setAnimate] = useState<Set<string>>(new Set());
    const isSelected = useSelector((state:State) => state.order.isCurrentAt);
    const router = useRouter();
    const Increment = (id:string) => {
        dispatch(incrementQuantity(id));
    }
    const Decrement = (id:string) => {
        dispatch(decrementQuantity(id));
    }
    const removeItemHandler = (id:string) => {
        setAnimate(prev=> new Set(prev).add(id));
        
        setTimeout(() => {
            dispatch(removeItem(id));
            setAnimate(prev => {
                const newSet = new Set(prev);
                newSet.delete(id);
                return newSet;
            });
        }, 500);
    }
    
    return (
        <div className='w-full  flex flex-col items-center justify-center gap-2 '>
            {
                order.length > 0 && isSelected === 'default'  && 
                order.map((item,index)=>(
                    <main
                        key={index}
                        className={`min-h-[120px] w-[95%] bg-[#dbdbdb] flex flex-col sxs:flex-row ${isAnimate.has(item._id) ? 'order-map-remove-item' : ''}`}
                    >
                        <figure 
                            onClick={()=>router.push(`/order/${item._id}`)
                            }
                            className='w-full sxs:w-[40%] h-[120px] bg-[#b3b3b3] flex justify-center'
                        >
                            <div className='h-full w-[60%] sxs:w-full relative'>
                                <Image
                                    src={item.url} alt=''
                                    fill
                                />
                            </div>
                        </figure>
                        
                        <aside className='flex flex-col h-[120px] pl-4 py-2 w-full sxs:w-[60%] box-border overflow-x-hidden'>
                            <header
                                className='h-[25%] flex items-center font-roboto2 text-xl relative overlow-hidden'
                            >
                                <span className='w-[80%] truncate'>{item.name}</span>
                                <span className='absolute right-0 pr-2 w-[20%] text-sm text-[3vw] '>&#x20B1;{item.price}</span>
                            </header>
                            <article 
                                className='h-[50%] w-[100%] flex items-center text-[13px] font-poppins text-[#5e5e5e]'
                                >
                                    <h2 className='w-[80%] truncate'>
                                        {item.description}
                                    </h2>
                            </article>
                            <footer 
                                className='h-[25%] flex items-center'
                                >
                                <button
                                    onClick={()=>Increment(item._id)}
                                    className='h-[90%] w-[17%] bg-[#b3b2b2] '
                                >+</button>
                                <h3 className='font-roboto2 px-2 text-[#636363]'>{item.quantity}</h3>
                                <button 
                                    onClick={()=>Decrement(item._id)}
                                    className='h-[90%] w-[17%] bg-[#b3b2b2] '
                                >&#8722;</button>

                                <button 
                                    onClick={()=>removeItemHandler(item._id)}
                                    className=' ml-auto px-2 bg-[#f09c9c] font-serif text-sm py-1 text-gray-600'
                                >remove</button>
                            </footer>
                        </aside>
                    </main>
                ))
            }
        </div>
    );
};

export default OrderMap;