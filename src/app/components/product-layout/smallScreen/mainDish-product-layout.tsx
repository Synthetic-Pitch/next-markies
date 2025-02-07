import React from 'react';
import Image from 'next/image';
import { MdAddComment } from "react-icons/md";

type Data = {
    name: string;
    price: string;
    description: string;
    url: string;
}

const MainDishProductLayout: React.FC<Data> = ({name,price,url}) => {
    return (
        <div 
            className='h-[190px] w-[100%] flex justify-center items-center rounded-tr-[20px] rounded-bl-[20px] overflow-hidden'
        >
            <div className='bg-[#cacaca] h-[97%] w-[97%] relative flex flex-col justify-between'>
                <h2 
                    className='relative font-poppins bg-[#000000] max-w-min px-2 text-white z-10'
                >{price}</h2>
                <div className='absolute top-0 h-[80%] w-[100%] z-1 flex justify-center'>
                    <div className='relative h-full w-[90%]'>
                        <Image
                            src={url} alt="" 
                            fill
                            className='object-fill'
                        />
                    </div>
                </div>
                <div className='flex justify-between items-center px-2 h-[20%] bg-[#979797]'>
                    <h2 className='font-poppins text-white'>{name}</h2>
                    <MdAddComment />
                </div>
            </div>
        </div>
    );
};

export default MainDishProductLayout;