import { cookies } from 'next/headers';

import Sort from './Sort';




async function GetProducts() {
  'use server'
  const response = await fetch('https://next-markies.vercel.app/api/get/desert')
  const data= await response.json()
  return data
}

export default async function Desert ()  {
    cookies();
    const data = await GetProducts();
    
    return (
        <div>
           <Sort fetchData={data}/>
        </div>
    );
};

