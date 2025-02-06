import Image from "next/image";

type Data = {
    name:string;
    price:string;
    description:string;
    url:string
}
export default async function Desert () {
    
    const data = await fetch('https://next-markies.vercel.app/api/get/mainDish')
    const parse = await data.json();
    console.log(parse);
    
    return (
        <div className="grid grid-cols-2">
            {parse.map((product:Data,index:number) => (
                <div key={index} className="h-40 bg-[gray] w-[90%]">
                    <Image src={product.url} alt="" width={100} height={100}/>
                </div>
            ))}
        </div>
    )
}