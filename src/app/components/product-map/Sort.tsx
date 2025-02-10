'use client'

import { useDispatch, useSelector } from "react-redux";
import {setByPrice} from '@/app/redux/search'
import { useEffect } from "react";

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
    }
}

const Sort:React.FC<SortData> = ({fetchData}) => {
    const dispatch = useDispatch();
    const filter = useSelector((state:Filter)=> state.search.search);
    

    useEffect(()=>{
       if(filter === 'byPrice'){
        const sortByPrice  = [...fetchData].sort((a,b)=> parseFloat(a.price) - parseFloat(b.price))
        console.log(sortByPrice);
       }
    },[filter]);
    
    return (
        <div>
           
        </div>
    );
};

export default Sort;