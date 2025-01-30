'use client'

import React, { useState } from 'react';

type Product = {
    name:string;
    price:string;
    description:string;
}

const ProductInfo = () => {
    const [product,setProduct] = useState<Product>({
        name:'',
        price:'',
        description:''
    });

    
    return (
        <div>
            <section className='flex flex-col px-3'>
                <label htmlFor="product-name" className='font-poppins text-md py-1'>product name :</label>
                <input
                    id='product-name' 
                    type="text" value={product.name}
                    onChange={(e)=>{
                        const filter = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                        setProduct((prev)=>({...prev,name:filter}))
                    }}
                    className='outline-none border-2 border-[#a5a5a5] p-2'
                    placeholder='enter...'
                />
            </section>

            <section className='flex flex-col px-3'>
                <label htmlFor="product-name" className='font-poppins text-md py-1'>product price :</label>
                <input 
                    id='product-price'
                    type="text" value={product.price}
                    onChange={(e)=>{
                        const filter = e.target.value.replace(/[^0-9]/g,'');
                        
                        setProduct((prev)=>({...prev,price:filter}))
                    }}
                    className='outline-none border-2 border-[#a5a5a5] p-2'
                    placeholder='enter...'
                />
            </section>
            <section className='flex flex-col px-3'>
                <label 
                    htmlFor="product-description" 
                    className='font-poppins text-md py-1'>product price :</label>
                <textarea 
                    name="" id="product-description"
                    placeholder='enter description...'
                    rows={4}
                    className='border-2 border-[#a5a5a5] p-2 outline-none'
                ></textarea>
            </section>
            <hr className='h-[2px] bg-[black] my-2'/>
        </div>
    );
};

export default ProductInfo;