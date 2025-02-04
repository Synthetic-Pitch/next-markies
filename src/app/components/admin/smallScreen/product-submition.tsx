'use client'
import React, { useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileContext } from './form-wrapper';
import axios from 'axios';
import { resetProduct, setIsUpload, setIsUploadNot, setLoad, setSucces } from '@/app/redux/product-create';

type State = {
    product: {
        product_obj: {
            name: string;
            price: string;
            description: string;
            Upload:{
                isUpload:boolean,
                load:number,
            },
            category:string;
        }
    }
}

const ProductSubmition = () => {
    const { fileData, setFileData } = useContext(FileContext);
    const dispatch = useDispatch();
    const Product = useSelector((state: State) => state.product.product_obj);
    
    const HandleSubmition = async () => {
        const formData = new FormData();
        const Condition = Product.name.length > 0 && Product.price.length > 0 && Product.description.length > 0;

        if (Condition) {
            if (fileData === null) {
                console.log("Please add image!");
                return;
            }
            if(Product.category.length === 0){
                return console.log("Please add category!");
            }
            dispatch(setIsUpload());
            dispatch(setLoad(0));
            
            formData.append("name", Product.name);
            formData.append("price", Product.price);
            formData.append("description", Product.description);
            formData.append("category",Product.category);
            formData.append("image", fileData);

            try {
                await axios.post("/api/post", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.total) {
                            const percentCompleted = Math.round(
                                (progressEvent.loaded * 100) / progressEvent.total
                            );
                            dispatch(setLoad(percentCompleted));
                        }
                    }
                });

            } catch (err) {
                console.error("Upload error:", err);
            } finally {
                console.log("Posted successfully!");
                dispatch(resetProduct());
                setFileData(null);
                dispatch(setSucces());
                dispatch(setIsUploadNot());
                dispatch(setLoad(0))
            }
        } else {
            console.log("Please provide name, price and description to the product!");
        }
    }
    
    return (
        <div className='flex flex-col justify-center items-center gap-4 mt-3 pb-4'>
            <button
                onClick={HandleSubmition}
                className='bg-[#bebebe] w-[50vw] py-3 rounded-full font-poppins text-poppins font-bold tracking-[5px] shadow-xl text-[4vw]'>SUBMIT
            </button>

        </div>
    );
};

export default ProductSubmition;