'use client'

import axios from 'axios';
import Info from './info';
import { useState } from 'react';


const Page = () => {
    const [file, setFile] = useState<File | null>(null);
    const[name,setName] = useState<string>('');
    const [price,setPrice] = useState<string>('');
    const [description,setDescription] = useState<string>('');

    const handleGETImage = async(e:React.ChangeEvent<HTMLInputElement>) =>{
        const selectedFile = e.target.files?.[0];
        if(selectedFile){
            setFile(selectedFile);
        }
    }
    
    const handleSubmit = async () => {
        if(!file){
            return alert('Please select an image');
        }

        const formData = new FormData();
        formData.append('file', file);

        if(name.length === 0 || price.length === 0){
            return alert('Please fill all the fields');
        }
        try{
            const response = await axios.post('/api/test', formData);
            console.log('succes uploaded', response.data);    
            return;
        }
        catch(error){
            console.error(error)
            return alert('Error uploading image');
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <input type="file" accept='image/*' onChange={handleGETImage}/>
            <button className='text-xl p-2 bg-[gray]' onClick={handleSubmit}>Submit</button>
            <Info 
                setName={setName} name={name} 
                setPrice={setPrice} price={price}
                description={description} setDescription={setDescription}
            />
        </div>
    );
};

export default Page;