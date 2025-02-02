
'use client'
import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FileContext } from './form-wrapper';
import axios from 'axios';

type State = {
    product: {
        product_obj:{
            name:string;
            price:string;
            description:string;
        }
    }
}

const ProductSubmition = () => {
    const {fileData} = useContext(FileContext)

    const Product = useSelector((state:State)=>state.product.product_obj);

    useEffect(()=>{
        console.log(fileData);
        
    },[fileData])


    const HandleSubmition = async () => {
        
        const PendingData = {
            name: Product.name,
            price:Product.price,
            description:Product.description,
            srcImg:fileData
        }
        const Condition = PendingData.name.length > 0 && PendingData.price.length > 0 && PendingData.description.length > 0

        if(Condition){
            if(fileData === null){
                return console.log("Please add image!");
                
            }

            try{
                await axios.post("/api/post",PendingData)
                console.log("posted succes!");
            }
            catch(err){
                console.error(err)
                
            }

        }else{
            console.log("Please provide name,price and description to the product!");
            
        }        
    }

    return (
        <div className='flex justify-center items-center mt-3'>
            <button 
                onClick={HandleSubmition}
                className='bg-[#bebebe] w-[50vw] py-3 rounded-full font-poppins text-poppins font-bold tracking-[5px] shadow-xl text-[4vw]'>SUBMIT</button>
        </div>
    );
};

export default ProductSubmition;