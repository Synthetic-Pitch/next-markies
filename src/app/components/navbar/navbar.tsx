

import React from 'react'
import MenuIcon from './menu-icon'
import Slide from '../slider/slide'
import SearchBar from './searchBar'
import OrderProfile from './order-profile'



const Navbar = () => {
   
   return (

         <div className='fixed top-0 h-16 w-[100vw] bg-[#fff1cc] z-50'>
         
            {/* small screen */}
            <nav 
               suppressHydrationWarning
               className='absolute h-full w-full flex justify-between items-center sm:hidden '
            >
               <div className='text-3xl font-roboto2 pl-2 select-none'>markies</div>
               <SearchBar/>
               <MenuIcon/>
               <Slide/>
            </nav> 

            {/* medium screen */}
            <nav 
               suppressHydrationWarning
               className='hidden sm:flex absolute h-full w-full justify-between items-center px-2 '
            >
               <div className='text-3xl font-roboto2 pl-2 select-none'>markies</div>
               <SearchBar/>
               <OrderProfile/>
               <MenuIcon/>
               
               <Slide/>
            </nav> 
         </div>
   
      
   )
}

export default Navbar