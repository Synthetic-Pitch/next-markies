import { cookies } from 'next/headers';

import Sort from './Sort';


type Data = {
  data:{
    name:string;
    price:string;
    description:string
    url:string;
    _id:string;
  }
}

async function GetProducts() {
  'use server'
  const response = await fetch('https://next-markies.vercel.app/api/get/desert')
  const data:Data[] = await response.json()
  return data.data
}

export default async function Desert ()  {
    cookies();
    const data = await GetProducts();
    console.log(data);
    
    return (
        <div>
           <Sort fetchData={data}/>
        </div>
    );
};

