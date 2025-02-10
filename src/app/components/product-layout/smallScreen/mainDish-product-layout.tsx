import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


type Data = {
    name:string
    price:string
    description:string
    url:string
    _id:string
}

type Prop ={
    products :Data[]
}
const MainDishProductLayout:React.FC<Prop> = ({products}) => {
    
    return (
        <main className='grid grid-cols-1 sxs:grid-cols-2 xs:grid-cols-3 px-1 z-10 mb-2'>
            {
                products.map((item:Data,index:number)=>(
                   
                    <Link 
                        href={`/order/${item._id}`}
                        className='h-[200px] w-full flex justify-center items-center'
                        key={index}
                    >
                        <div 
                            className='w-[97%] h-[97%] bg-[#cecece] rounded-tr-[20px] relative rounded-bl-[20px]'
                        >
                            <header 
                                className='bg-[#d1e2df] rounded-l-full max-w-min px-2 -rotate-[20deg] z-10 relative font-poppins'>&#x20B1;&nbsp;{item.price}
                            </header>
                            <main
                                className='w-full h-[80%] bg-[gray] absolute top-0 rounded-tr-[20px] overflow-hidden flex justify-center'
                            >
                                <div className='w-[90%] h-full relative'>
                                    <Image
                                        src={item.url} alt='' fill className='absolute'
                                    />
                                </div>
                            </main>
                            <footer className='h-[20%] w-full absolute bottom-0 rounded-bl-[20px]'>
                                <div className='h-full w-full flex items-center px-2 font-poppins text-[13px]'>
                                 {item.name}
                                </div>
                            </footer>
                        </div>
                        
                    </Link>
                    
                ))
            }
        </main>
    );
};

export default MainDishProductLayout;