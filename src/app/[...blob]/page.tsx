'use client'

import Link from 'next/link';
import React from 'react'

const Notfound = () => {
   
   return (
      <div>
         <h1 className='text-2xl p-2 font-bold'>Page notFound</h1>
         <Link href={'/'} className='font-semibold p-2 underline'>Go back home-&gt;</Link>
      </div>
   )
}

export default Notfound