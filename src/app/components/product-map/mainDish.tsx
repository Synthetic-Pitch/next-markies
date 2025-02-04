'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Data = {
    
    name: string;
    price:string;
    description:string;
    url:string
    
}
const MainDish = () => {
    const [data,setData] = useState<Data[]>([]);
    
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('/api/get/mainDish');
                setData(response.data.data);
            }catch(err){
                console.error(err);
            }
        }
        fetchData();
    },[])

    return (
        <div className='grid grid-cols-2 px-1'>
            {
                data.map((product,index)=>(
                    <div key={index} className='h-[200px] flex items-center justify-center'>
                        <main className='h-[90%] w-[98%] bg-[gray]'>
                            <header>{product.name}</header>
                            <span>{product.price}</span>
                            <Image
                                src={`${product.url}`}
                                alt=''
                                height={100} width={100}
                                priority
                            />
                        </main>
                    </div>
                ))
            }
        </div>
    );
};

export default MainDish;