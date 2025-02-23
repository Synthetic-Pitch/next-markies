'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdArrowBack } from "react-icons/md";

type Props = {
    product:{
        name:string,
        price:number,
        url:string,
        description:string,
        category:string
    }
}
const ProductInformation:React.FC<Props> = ({product}) => {
    const router = useRouter();

    return (
        <main className='relative h-[calc(100dvh-64px)] bg-[#d6d6d6] z-10'>
            <mark 
                onClick={()=>router.push('/order')}
                className='absolute top-2 left-2 p-2 bg-[#49a4aa] z-10 rounded-l-full'
            ><MdArrowBack size={26}/>
            </mark>
            <section className='h-[50%] w-full flex items-center justify-center '>
                <div className='relative w-[90%] h-[99%] bg-[#aaaaaa] rounded-t-[80px] overflow-hidden'>
                    <Image src={product.url} alt='' fill style={{objectFit:'contain'}}/>
                    <div className='absolute h-[50px] px-4 bottom-0 right-0  bg-[#aaaaaa] flex items-center gap-2 font-poppins rounded-tl-2xl'>
                        <span className='text-[#ffffff] text-xl tracking-wide'>&#x20B1;{product.price} </span>
                        <span className='text-md line-through text-[#ffffff]'>&#x20B1;{Number(product.price) + 42}</span>
                    </div>
                </div>
               
            </section>
           
            <section className='h-[50%] w-full p-2'>
                <h2 className='font-poppins text-3xl text-center font-extrabold text-[#5e5e56]'>{product.name}</h2>
                <p className='p-4 '> &nbsp;&nbsp;{product.description}</p>
            </section>
        </main>
    );
};

export default ProductInformation;