import React from 'react';
import ProductInfo from './product-info';
import ProductImage from './product-image';
import ProductSubmition from './product-submition';
import FormWrapper from './form-wrapper'
import Link from 'next/link';
const AdminSmallScreen = () => {

    return (
        <div>
            <header>
                <h1 className='text-center font-roboto2 text-2xl py-6'>[ ADD NEW PRODUCT ]</h1>
            </header>
            <div className='p-3'>
               <Link 
                    href={'/admin/voucher'} 
                    className='bg-[#dfdfdf] max-w-min p-2 font-roboto1'>Add&nbsp;Voucher</Link>
            </div>
            <ProductInfo/>
            
            <FormWrapper>
                <ProductImage/>
                <ProductSubmition/>
            </FormWrapper>
           
        </div>
    );
};

export default AdminSmallScreen;