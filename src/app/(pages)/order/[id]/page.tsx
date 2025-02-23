
import React from 'react';
import { Suspense } from 'react';
import MongoDbConnect from '../../../../../lib/mongoDb';
import FoodsModel from '@/app/model/foods';
import ProductInformation from './product-information';

type IProduct = {
    name:string,
    price:number,
    url:string,
    description:string,
    category:string
} | null

const Page = async ({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id
    
    async function GetProductByID (){
        'use server'
        await MongoDbConnect();
        const product = await FoodsModel.findById(id)
        return product ? product.toObject() as IProduct : null
    }
    
    const products = await GetProductByID();    
    
    return (
        <div suppressHydrationWarning>
            <Suspense fallback={<div>Loading...</div>}>
                {products && <ProductInformation product={products}/>}
            </Suspense>
        </div>
    );
};

export default Page;