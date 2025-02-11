import { cookies } from "next/headers";
import Sort from "./Sort";

export default async function Beverage() {
    cookies();
    const response = await fetch('https://next-markies.vercel.app/api/get/beverage');
    const data = await response.json();
    
    return (
        <div>
            <Sort fetchData={data}/>
        </div>
    )
}