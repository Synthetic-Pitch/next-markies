'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName,setPrice,setDescription,setCategory } from '@/app/redux/product-create'


type State = {
    product : {
        product_obj: {
            name:string;
            price:number;
            description:string;
            category:string
        }
    }
}

const ProductInfo = () => {
    const data = useSelector((state:State) => state.product.product_obj)
    const dispatch = useDispatch();
    
    const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCategory(event.target.value));
    };
    
    return (
        <div>
  
            <section className='flex flex-col px-3'>
                <label htmlFor="product-name" className='font-poppins text-md py-1'>product name :</label>
                <input
                    id='product-name' 
                    type="text" value={data.name}
                    onChange={(e)=>{
                        const filter = e.target.value
                            .replace(/[^a-zA-Z\s]/g, '')  // Remove non-letters
                            .replace(/^\s+/, '')          // Remove whitespace from start
                            .replace(/\s{2,}$/, ' ');     // Replace multiple spaces at end with single space
                        dispatch(setName(filter));
                    }}
                    className='outline-none border-2 border-[#a5a5a5] p-2'
                    placeholder='enter...'
                />
            </section>

            <section className='flex flex-col px-3'>
                <label htmlFor="product-price" className='font-poppins text-md py-1'>product price :</label>
                <input
                    id='product-price'
                    type="text" value={data.price}
                    onChange={(e)=>{
                        const filter = e.target.value.replace(/[^0-9]/g, ''); 
                        dispatch(setPrice((filter)));
                    }}
                    className='outline-none border-2 border-[#a5a5a5] p-2'
                    placeholder='enter...'
                />
            </section>

            <section className='flex flex-col px-3'>
                <label 
                    htmlFor="product-description" 
                    className='font-poppins text-md py-1'>product description :</label>
                <textarea 
                    name="" id="product-description"
                    value={data.description}
                    onChange={(e)=>{
                        const filter = e.target.value
                            .replace(/[^a-zA-Z\s]/g, '')  // Remove non-letters
                            .replace(/^\s+/, '')          // Remove whitespace from start
                            .replace(/\s{2,}$/, ' ');     // Replace multiple spaces at end with single space
                        dispatch(setDescription(filter))}
                    } 
                    placeholder='enter...'
                    rows={4}
                    className='border-2 border-[#a5a5a5] p-2 outline-none'
                ></textarea>
            </section>
                    
            <section className='flex flex-col pl-4 py-2 gap-4'>
                <h2 className='font-roboto1'>Choose category</h2>
                
                <div className='flex items-center gap-2 font-poppins text-xs'>
                    <input
                        className='cursor-pointer'
                        id='mainDish'
                        name="category"
                        value="mainDish"
                        type="radio" 
                        checked={data.category === "mainDish"}
                        onChange={handleCategory}
                    />
                    <label className='cursor-pointer' htmlFor="mainDish">Main Dish</label>
                </div>
                
                <div className='flex items-center gap-2 font-poppins text-xs'>
                    <input 
                        className='cursor-pointer'
                        id='desert'
                        name="category"
                        value="desert"
                        type="radio" 
                        checked={data.category === "desert"}
                        onChange={handleCategory}
                    />
                    <label className='cursor-pointer' htmlFor="desert">Desert</label>
                </div>
                
                <div className='flex items-center gap-2 font-poppins text-xs'>
                    <input 
                        className='cursor-pointer'
                        id='beverage'
                        name="category"
                        type="radio" 
                        value="beverage"
                        checked={data.category === "beverage"}
                        onChange={handleCategory}
                    />
                    <label className='cursor-pointer' htmlFor="beverage">Beverage</label>
                </div>
            </section>

            <hr className='h-[2px] bg-[black] my-2'/>
        </div>
    );
};

export default ProductInfo;