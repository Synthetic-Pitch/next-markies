import Image from "next/image"

type Data = {
    name:string;
    price:string;
    description:string
    url:string;
}
export default async function MainDish() {
    // vercel: https://next-markies.vercel.app/api/get/mainDish
    // local : http://localhost:3000/api/get/mainDish

    const vercelURL = 'https://next-markies.vercel.app/api/get/mainDish';
    const response = await fetch(vercelURL,{next:{revalidate:false}}); 
    const data = await response.json();
    
    return (
        <div className="grid grid-cols-1 sxs:grid-cols-2 xs:grid-cols-3">
            {
                data.map((product:Data,index:number) => (
                    <div key={index} className="h-40 bg-[gray]">
                        <div className="">
                            <h1>{product.name}</h1>
                            <h1>{product.price}</h1>
                            <h1>{product.description}</h1>
                            <Image src={product.url} alt="" width={100} height={100}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}