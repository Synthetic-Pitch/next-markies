
'use client'
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileContext } from './form-wrapper';
import axios from 'axios';
import {resetProduct} from '@/app/redux/product-create'



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
    const {fileData,setFileData} = useContext(FileContext);
    const dispatch = useDispatch();
    const Product = useSelector((state:State)=>state.product.product_obj);

    const HandleSubmition = async () => {

        const formData = new FormData();


        const Condition = Product.name.length > 0 && Product.price.length > 0 && Product.description.length > 0

        if(Condition){
            if(fileData === null){
                return console.log("Please add image!");
            }

            formData.append("name",Product.name);
            formData.append("price",Product.price);
            formData.append("description",Product.description);
            formData.append("image",fileData);
            
            
            try{
                await axios.post("/api/post",formData)
                console.log("posted succes!");
                dispatch(resetProduct());
                setFileData(null)
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