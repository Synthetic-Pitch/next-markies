import React from 'react'
import MenuIcon from './menu-icon'
import Slide from '../slider/slide'


const Navbar = () => {
   return (
      <div className='fixed top-0 h-16 w-[100vw] bg-[#fff1cc] z-20'>
      
      {/* small screen */}
         <nav 
            className='absolute h-full w-full flex justify-between items-center sm:hidden '
         >
            <div className='text-3xl font-roboto2 pl-2 select-none'>markies</div>
            <MenuIcon/>
            <Slide/>
         </nav>
         
         
      </div>
   )
}

export default Navbar