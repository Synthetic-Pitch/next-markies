'use client';

import axios, { AxiosRequestConfig } from 'axios';
import React, {  useState } from 'react';
import "./style.css";
import { Tooltip } from 'react-tooltip'


interface FileDetails {
    name: string;
    size: number;
    type: string;
}

const ImageUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>('upload image');
    const [progress, setProgress] = useState<number>(0);
    const [fileDetails, setFileDetails] = useState<FileDetails | null>(null);
    const [name,setName] = useState<string>('');
    const [price,setPrice] = useState<string>('');
    
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
        
        setError('ready to upload')
        setFile(selectedFile);
    }

    const uploadImage = async() => {
        if (!file) {
            setError('Please select an image first');
            return;
        }
        
        const formData = new FormData();
        formData.append('image', file);
        
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

           const res = await axios.post('/api/test/test', formData, config);
           console.log(res);
           
           setError('upload complete');
           // Reset file and progress after successful upload
           setFile(null);
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
                    <article className='h-full w-[50%] flex flex-col justify-center gap-2'>
                        <h2>file name: {fileDetails?.name || '-'}</h2>
                        <h2>file size: {fileDetails ? `${(fileDetails.size / 1024).toFixed(2)} KB` : '-'}</h2>
                        <h2>file type: {fileDetails?.type || '-'}</h2>
                        {file && (
                            <div className='w-full bg-gray-200 rounded-full h-2.5'>
                                <div 
                                    className='bg-blue-600 h-2.5 rounded-full' 
                                    style={{width: `${progress}%`}}
                                ></div>
                            </div>
                        )}
                        {file && (
                            <button 
                                onClick={uploadImage}
                                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                            >
                                Upload
                            </button>
                        )}
                    </article>
                </div>


               <section className='pt-4 pl-4 flex flex-col gap-4'>
                    <div>
                        <span >foods&apos;name:</span>
                        
                        <input 
                            title='letters only'
                            type="text"
                            placeholder='enter..'
                            value={name}
                            onChange={(e)=>{
                                // sort only letters allowed
                                const letterOnly = e.target.value.replace(/\d/g,'');
                                setName(letterOnly)
                            }}
                            className='outline-none pl-2 border-b-[1]'
                        />
                    </div>
                    <div>
                        <span>foods&apos;price: &#x20B1;</span>
                        <input 
                            type="text"
                            value={price}
                            onChange={(e)=>{
                                const digitOnly =e.target.value.replace(/\D/g,'');
                                setPrice(digitOnly);
                            }}
                            placeholder='enter..'
                            className='pl-1 outline-none'    
                        />
                    </div>
                    <hr />
               </section>
           </div>
            
           <div className='flex justify-center pt-2'>
                <button className='px-6 py-2 text-xl border-2 bg-[#cccccc] tracking-widest font-roboto2 rounded-xl '>
                    POST
                </button>
           </div>
        </div>
    );
};

export default ImageUpload;