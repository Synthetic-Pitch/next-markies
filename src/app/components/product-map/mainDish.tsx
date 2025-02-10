

import { cookies } from "next/headers";
import Sort from "./Sort";


type Data = {
    name:string;
    price:string;
    description:string
    url:string;
    _id:string;
}


async function GetProducts() {
    'use server'
    const response = await fetch('https://next-markies.vercel.app/api/get/mainDish')
    const data:Data[] = await response.json()
    return data
}

export default async function MainDish() {
    cookies();
    const data = await GetProducts();
    
    return (
      <div className="bg-[#ffffff]">
        <h2>filter</h2>
        <Sort fetchData={data}>
          
        </Sort>
      </div>
    )
}