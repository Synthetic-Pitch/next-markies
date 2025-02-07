import { cookies } from "next/headers"
import { Suspense } from "react"
import MainDishProductLayout from "../product-layout/smallScreen/mainDish-product-layout"


  type Data = {
    name:string
    price:string
    description:string
    url:string
  }

  async function GetProducts() {
    const response = await fetch('http://localhost:3000/api/get/mainDish')
    const data = await response.json()
    console.log(data);
    
    return(
      <div className="grid grid-cols-1 sxs:grid-cols-2 xs:grid-cols-3 px-1 py-2 justify-center">
        {
          data.map((product: Data, index: number) => (
            <MainDishProductLayout key={index} name={product.name} price={product.price} description={product.description} url={product.url}/>
          ))
        }
      </div>
    )
  }
  
  export default function Desert() {
    cookies();
    return (
      <>
        <h2>Head</h2>
        <Suspense fallback={<>Loading...</>}>
          <GetProducts />
        </Suspense>
      </>
    );
  }