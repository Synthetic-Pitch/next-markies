'use client'

import { useDispatch, useSelector } from "react-redux";
import {setByPrice,setAlphabetical} from "@/app/redux/search"
import { useEffect, useState } from "react";
import MainDishProductLayout from "../product-layout/smallScreen/mainDish-product-layout";

type Data = {
    name: string;
    price: string;
    description: string;
    url: string;
    _id: string;
}

type SortData ={
    fetchData:Data[]
    
}
type Filter = {
    search : {
        search:string
        sort:string
    }
}

const Sort:React.FC<SortData> = ({fetchData}) => {
    const dispatch = useDispatch();
    const filter = useSelector((state:Filter)=> state.search);
    const [btn,setBtn] = useState<boolean>(false)
    const [data ,setData] = useState(fetchData);

    useEffect(()=>{
        let updatedData = [...fetchData]; // Start with the full product list

        // ✅ Apply sorting
        if (filter.sort === "byPrice") {
            updatedData = updatedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (filter.sort === "alphabetical") {
            updatedData = updatedData.sort((a, b) => a.name.localeCompare(b.name));
        }

        // ✅ Apply search filtering
        if (filter.search) {
            updatedData = updatedData.filter((item) =>
                item.name.toLowerCase().includes(filter.search.toLowerCase()) // Case-insensitive match
            );
        }

        setData(updatedData);
        
    },[filter,btn]);
    
    return (
        <div className="flex flex-col">
            <div className="flex">
                <h2 
                    className="tracking-wider font-roboto2 pl-2 relative " onClick={()=>setBtn(!btn)}
                >filter</h2>
                {
                    btn && 
                    <div 
                        className="w-[20px] relative ml-2 z-30">
                            <div className="bg-[#d4d4d4] absolute top-0 ">
                                <ul 
                                    className="h-full w-full p-2 flex flex-col ">
                                    <li 
                                        className="text-sm font-poppins p-2 cursor-pointer" 
                                        onClick={()=>{
                                            dispatch(setByPrice())
                                            console.log(filter);
                                        }}
                                    >byPrice</li>
                                    <li 
                                        className="text-sm font-poppins p-2 cursor-pointer" 
                                        onClick={()=>{
                                            dispatch(setAlphabetical())
                                            console.log(filter);
                                        }}
                                    >alphabetical</li>
                                    <li 
                                        className="text-sm font-poppins p-2 cursor-pointer" 
                                        onClick={()=>{
                                            dispatch(setByPrice())
                                            console.log(filter);
                                        }}
                                    >noFilter</li>
                                </ul>
                            </div>
                    </div>
                }
            </div>
           
            <MainDishProductLayout products={data}/>
           
           
        </div>
    );
};

export default Sort;