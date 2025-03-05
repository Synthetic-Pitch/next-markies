'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setOrder} from '@/app/redux/order'
import { IoIosAddCircleOutline } from "react-icons/io";
import { usePathname, useRouter } from 'next/navigation';
import './style.css'
type Data = {
    name:string
    price:string
    description:string
    url:string
    _id:string
}

type Prop = {
    products :Data[]
}

type State = {
    order:{
        order_Obj: Data[]
    }
}

const MainDishProductLayout:React.FC<Prop> = ({products}) => {
    const dispatch = useDispatch();
    const order = useSelector((state:State)=>state.order.order_Obj);
    const route = useRouter();
    const [isAdded,setAdd] = useState<Set<string>>(new Set());
    const pathname = usePathname();



    const handleDispatch = ({name,price,description,url,_id}:Data) =>{
        
        if(order.some((item:Data) => item._id === _id)){
            console.log('item already exist');
            return
        }
        dispatch(setOrder({
            name:name,
            price:price,
            description:description,
            url:url,
            _id:_id,
            quantity:1
        }))
    }
    
    const handleAdded = ({name,price,description,url,_id}:Data)=>{
        
        if(order.some((item:Data) => item._id === _id)){
            console.log('item already exist');
            setAdd(prev => new Set(prev).add(_id));
            setTimeout(() => {
                setAdd(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(_id);
                    return newSet;
                });
            }, 500);
            return
        }
        dispatch(setOrder({
            name:name,
            price:price,
            description:description,
            url:url,
            _id:_id,
            quantity:1
        }));
        setAdd(prev => new Set(prev).add(_id));
        setTimeout(() => {
            setAdd(prev => {
                const newSet = new Set(prev);
                newSet.delete(_id);
                return newSet;
            });
        }, 500);
    }
    
    return (
        <main 
            className={`grid px-auto mb-2 justify-items-center emd:px-[4vw]  lg:gap-y-4 ${pathname === '/order' ? 'grid-cols-3':'grid-cols-1 sxs:grid-cols-2 xs:grid-cols-3 lg:grid-cols-4' }`}>
            {
                products.map((item:Data,index:number)=>(
                    <div
                        className='h-[200px] w-full sm:max-w-[260px] sm:h-[220px] flex justify-center items-center'
                        onClick={() => handleDispatch({
                            name:item.name,
                            price:item.price,
                            description:item.description,
                            url:item.url,
                            _id:item._id
                        })}
                        key={index}
                    >
                        <div 

                            className='w-[97%] h-[97%] bg-[#cecece] rounded-tr-[20px] relative rounded-bl-[20px]'
                        >
                            <div >
                                <header 
                                    className='bg-[#d1e2df] rounded-l-full max-w-min px-2 -rotate-[20deg] relative font-poppins z-[5]'>&#x20B1;&nbsp;{item.price}
                                </header>
                                <main
                                    onClick={()=> route.push(`/order`)}
                                    className='w-full h-[80%] bg-[gray] absolute top-0 rounded-tr-[20px] overflow-hidden flex justify-center'
                                >
                                    <div className='w-[90%] h-full relative'>
                                        <Image
                                            src={item.url} alt='' fill className='absolute'
                                        />
                                    </div>
                                    
                                    <div
                                        className={`${isAdded.has(item._id) ? 'maindish-product-layout-added' : 'hidden'} absolute h-[20px] max-w-min  p-5 left-1/5 top-1/2 flex justify-center items-center rounded-l-full text-[17px] font-poppins font-bold text-[#444444]`}
                                    >added</div>
                                </main>
                            </div>
                            <footer className='h-[20%] w-full absolute bottom-0 rounded-bl-[20px] flex items-center'>
                                <div className='max-h-min w-[80%] px-2 font-poppins text-[13px] truncate'>
                                 <span>{item.name}</span>
                                </div>
                                <div className='w-[20%] h-[100%] relative flex items-center justify-center'>
                                    <IoIosAddCircleOutline 
                                        size={19}
                                        onClick={(e) => {
                                            e.stopPropagation(); //Prevent duping effect when the function fire twice only get one value
                                            handleAdded({
                                                name:item.name,
                                                price:item.price,
                                                description:item.description,
                                                url:item.url,
                                                _id:item._id
                                            })
                                    }}/>
                                </div>
                            </footer>
                            <div className='hidden'>{item.description}</div>
                        </div>
                        
                    </div>
                    
                ))
            }
        </main>
    );
};

export default MainDishProductLayout;