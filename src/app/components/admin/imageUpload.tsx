'use client';

import axios, { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react';
import "./style.css";
import Image from 'next/image';


interface FileDetails {
    name: string;
    size: number;
    type: string;
}
type Data = {
   name:string;
   price:string;
   URL:string;
   description:string
}

const ImageUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>('upload image');
    const [progress, setProgress] = useState<number>(0);
    const [fileDetails, setFileDetails] = useState<FileDetails | null>(null);
    const [name,setName] = useState<string>('');
    const [price,setPrice] = useState<string>('');
    const [description,setDescription] =useState<string>('');
    const [fixed,setFixed] = useState<Data>({name:'', price:'', URL:'',description:''});


    // Allowed image MIME types
    const ALLOWED_IMAGE_TYPES = [
        'image/jpeg', 
        'image/png', 
        'image/gif', 
        'image/webp', 
        'image/svg+xml'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        
        if (!selectedFile) {
            setError('No file selected');
            return;
        }

        // Validate file type using MIME type
        if (!ALLOWED_IMAGE_TYPES.includes(selectedFile.type)) {
            setError('Only image files are allowed');
            e.target.value = ''; // Clear the file input
            return;
        }

        // Optional: Additional file size validation
        const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
        if (selectedFile.size > MAX_FILE_SIZE) {
            setError('File size exceeds 5MB limit');
            e.target.value = '';
            return;
        }
        
        // Store file details
        setFileDetails({
            name: selectedFile.name,
            size: selectedFile.size,
            type: selectedFile.type
        });
        const preview = URL.createObjectURL(selectedFile);
        setFixed({ ...fixed, URL: preview });
        setError('ready to post');
        setFile(selectedFile);
    }

    const uploadImage = async() => {
        console.log(file);
        
        if (!file) {
            setError('Please select an image first');
            return;
        }
        if(!name || !price){
            alert('please add name or price to a product');
            return;
        }
        
        const formData = new FormData();
        formData.append('image', file);
        console.log(formData);
        
        // Configuration for tracking upload progress
        const config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                    progressEvent.total ? (progressEvent.loaded * 100) / progressEvent.total : 0
                );
                setProgress(percentCompleted);
            }
        };
        
        try {
           // Reset progress before starting
           setProgress(0);
           setError('uploading...');
        
           await axios.post('/api/test', formData, config);
           
           
           setError('upload complete');
           // Reset file and progress after successful upload
           setName('')
           setDescription('')
           setPrice('')
           setFile(null);
           setFixed({...fixed,name:'',price:'',URL:'',description:''})
           setFileDetails(null);
           setProgress(0);
        } catch(err) {
            console.error('Error uploading file:', err);
            setError('Upload failed. Please try again.');
            setProgress(0);
        }
    }
    
    return (
        <div className=''>
           <div className='flex flex-col justify-center'>
                <div className='h-[10rem] bg-[#cccccc] w-full flex'>
                    <aside className='h-full w-[50%] flex justify-center items-center'>
                        <input 
                            type="file" 
                            className='hidden' 
                            id='file-image' 
                            onChange={handleChange}/>
                        <label 
                            htmlFor="file-image"
                            className='w-[90%] h-[90%] flex justify-center items-center border-[4px] border-dotted tracking-[1px] font-roboto2 text-md text-center'
                        >{error}</label>
                    </aside>
                    <article className='h-full w-[50%] flex flex-col justify-center gap-2 text-[.8em] overflow-hidden ]'>
                        <h2 className='text-[#5f5f5f]'>file name: {fileDetails?.name || '-'}</h2>
                        <h2 className='text-[#5f5f5f]'>file size: {fileDetails ? `${(fileDetails.size / 1024).toFixed(2)} KB` : '-'}</h2>
                        <h2 className='text-[#5f5f5f]'>file type: {fileDetails?.type || '-'}</h2>
                    </article>
                </div>

               <section className='py-4 pl-4 flex flex-col gap-4'>
                    <div>
                        <span >product&apos;s name:</span>
                        
                        <input 
                            title='letters only'
                            type="text"
                            placeholder='enter..'
                            value={name}
                            onChange={(e)=>{
                                // sort only letters allowed
                                const letterOnly = e.target.value.replace(/\d/g,'');
                                setName(letterOnly)
                                setFixed({...fixed,name:letterOnly});
                            }}
                            className='outline-none pl-2 border-b-[1]'
                        />
                    </div>
                    <div>
                        <span>product&apos;s price: &#x20B1;</span>
                        <input 
                            type="text"
                            value={price}
                            onChange={(e)=>{
                                const digitOnly =e.target.value.replace(/\D/g,'');
                                setPrice(digitOnly);
                                setFixed({...fixed,price:digitOnly});
                            }}
                            placeholder='enter..'
                            className='pl-1 outline-none' 
                        />
                    </div>
                    <div className='flex'>
                        <span className='pr-2'>description:</span>
                        <textarea
                            name="" id="" 
                            placeholder='enter...'
                            className='grow mr-4 border-2 px-2 text-[gray] border-[#c0c0c0] rounded-xl outline-none'
                            rows={4}
                            value={description}
                            onChange={(e)=>{
                                const currentValue = e.target.value;
                                setDescription(currentValue)
                                setFixed({...fixed,description:currentValue})
                            }}
                        />
                    </div>
                    
               </section>
           </div>

           { fixed.name.length !== 0 && fixed.price.length !== 0 && fixed.URL.length > 0 &&
             <div className='bg-[#eeeeee] py-2 mt-2 flex flex-col items-center'>
                <div className=''>
                    <Image
                        src={fixed.URL}
                        alt=''
                        height={100} width={100}
                        className='max-h-[200px] w-auto'
                    />
                </div>
                <div className='text-[1.2em] text-[gray]'>
                    <h2 className='font-test text-[1.5em] text-[gray]'> -{name}</h2>
                    <h2 className='font-bold text-[gray]'> &#x20B1; {price}</h2>
                </div>
             </div>
          }

           <div className='flex flex-col items-center gap-2'>
                <div className='w-full bg-gray-200 rounded-full h-1'>
                    <div 
                        className='bg-blue-600 h-1 rounded-full' 
                        style={{width: `${progress}%`}}
                    ></div>
                </div>
                <button
                    onClick={uploadImage} 
                    className='px-6 py-2 text-xl border-2 bg-[#cccccc] tracking-widest font-roboto2 rounded-xl w-[40%] '>
                    POST
                </button>
           </div>
                            
          <button className='text-7xl' onClick={()=>{console.log(fixed);
          }}>Render</button>
        </div>
    );
};

export default ImageUpload;