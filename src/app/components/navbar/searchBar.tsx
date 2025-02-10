'use client'

import { usePathname } from 'next/navigation';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    
    
    if(pathname === '/main-dish' || pathname === 'desert'){
        return (
            <div className='w-[40%] h-[50%] flex items-center justify-center bg-[white] px-2 rounded-full gap-1'>

                <label htmlFor="search"><CiSearch/></label>
                <input 
                    id='search'
                    className='outline-none px-2 w-full'
                    type="text"
                    placeholder='search...'
                    
                />
            </div>
        )
    }else <></>
};

export default SearchBar;