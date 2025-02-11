'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setOrder} from '@/app/redux/order'

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
    
    return (
        <main className='grid grid-cols-1 sxs:grid-cols-2 xs:grid-cols-3 px-1 mb-2'>
            {
                products.map((item:Data,index:number)=>(
                    
                    <Link
                        href={`/order`}
                        className='h-[200px] w-full flex justify-center items-center'
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
                            <header 
                                className='bg-[#d1e2df] rounded-l-full max-w-min px-2 -rotate-[20deg] relative font-poppins z-20'>&#x20B1;&nbsp;{item.price}
                            </header>
                            <main
                                className='w-full h-[80%] bg-[gray] absolute top-0 rounded-tr-[20px] overflow-hidden flex justify-center'
                            >
                                <div className='w-[90%] h-full relative'>
                                    <Image
                                        src={item.url} alt='' fill className='absolute'
                                    />
                                </div>
                            </main>
                            <footer className='h-[20%] w-full absolute bottom-0 rounded-bl-[20px]'>
                                <div className='h-full w-full flex items-center px-2 font-poppins text-[13px]'>
                                 {item.name}
                                </div>
                            </footer>
                            <div className='hidden'>{item.description}</div>
                        </div>
                        
                    </Link>
                    
                ))
            }
        </main>
    );
};

export default MainDishProductLayout;