'use client'

import Image from 'next/image';
import React, { useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setPrevURL, setContentSize,setContentType,setContentName,resetImg} from '@/app/redux/product-create'
import { FileContext } from './form-wrapper';


type State = {
    product: {
        product_obj: {
            name:string;
            price:number;
            description:string;
            prevURL:string;
            imgContent:{
                name:string;
                size:string;
                type:string;
            }
        }
    }
}

const ProductImage = () => {


    const Product = useSelector((state:State) => state.product.product_obj);
    const dispatch = useDispatch();
    const {setFileData} = useContext(FileContext);

   

    const handleUpload = (e:React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        
        const formatFileSize = (bytes: number): string => {
            if (bytes < 1024) return bytes + ' bytes';
            if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
            return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
        };
        
        if(selectedFile){
            const Url = URL.createObjectURL(selectedFile);
            dispatch(setPrevURL(Url));

            setFileData(selectedFile);
            // setting Image Contents
            dispatch(setContentName(selectedFile.name))
            dispatch(setContentSize(formatFileSize(selectedFile.size)))
            dispatch(setContentType(selectedFile.type))
        }else{
            console.log("selected file is invalid"); 
        }
    }

    const Reset = () => {
        dispatch(resetImg());
        setFileData(null);
    }


    return (
        <div className='flex justify-center'>
            <main className='w-[90%] min-h-[170px] bg-[#bebebe] flex'>
                <aside className='w-[50%] flex items-center justify-center'>
                   {Product.prevURL.length > 0 ? 
                   (
                    <div>
                        <Image
                            src={Product.prevURL} alt=''
                            height={100} width={130}
                        />
                    </div>
                   ):(
                   
                    <div className='w-full h-full flex items-center justify-center'>
                        <label 
                            className='w-[80%] h-[80%] border-2 border-dotted flex justify-center items-center font-poppins text-sm text-center'
                            htmlFor="image-file"
                        >upload image</label>
                        <input 
                            onChange={handleUpload}
                            accept='image/*'
                            className='hidden'
                            id='image-file'
                            type="file" />
                    </div>
                   )}
                </aside>
                <article className='relative w-[50%] flex flex-col justify-center gap-2'>
                    <button
                        onClick={Reset}
                        className='absolute top-0 right-0 mr-2 font-bold'>X</button>
                    <h1
                        className='w-full break-words font-roboto2 text-[15px]'
                    >name: {Product.imgContent.name}</h1>
                    <h1
                        className='w-full break-words font-roboto2 text-[15px]'
                    >size: {Product.imgContent.size}</h1>
                    <h1
                        className='w-full break-words font-roboto2 text-[15px]'
                    >type: {Product.imgContent.type}</h1>
                </article>
            </main>
        </div>
    );
};

export default ProductImage;