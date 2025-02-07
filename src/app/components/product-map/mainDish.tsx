import { cookies } from "next/headers";
import MainDishProductLayout from "../product-layout/smallScreen/mainDish-product-layout";

type Data = {
    name:string;
    price:string;
    description:string
    url:string;
}
export default async function MainDish() {
    // vercel: https://next-markies.vercel.app/api/get/mainDish
    // local : http://localhost:3000/api/get/mainDish
    
    cookies();
    const vercelURL = 'http://localhost:3000/api/get/mainDish';
    const response = await fetch(vercelURL);
    const data = await response.json();
    
    return (
        <div className="grid grid-cols-1 sxs:grid-cols-2 xs:grid-cols-3 px-1 py-2 justify-center">
            {
                data.map((product:Data,index:number) => (
                    <MainDishProductLayout key={index} name={product.name} price={product.price} description={product.description} url={product.url}/>
                ))
            }
        </div>
    )
}