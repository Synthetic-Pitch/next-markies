'use client'

import { usePathname } from 'next/navigation';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import {setSearch} from '@/app/redux/search'

type Data = {
    search:{
        search:string
    }
}

const SearchBar = () => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const filter =useSelector((state:Data)=>state.search.search);
    
    if(pathname === '/main-dish' || pathname === '/desert' || pathname === '/beverage'){
        return (
            <div className='w-[40%] h-[50%] flex items-center justify-center bg-[white] px-2 rounded-full gap-1'>
                
                <label htmlFor="search"><CiSearch/></label>
                <input 
                    id='search'
                    className='outline-none px-2 w-full'
                    type="text"
                    placeholder='search...'
                    value={filter}
                    onChange={(e)=>{
                        const val = e.target.value
                        dispatch(setSearch(val))
                        
                    }}
                />
            </div>
        )
    }
};

export default SearchBar;