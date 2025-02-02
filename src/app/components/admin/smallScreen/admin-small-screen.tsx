import React from 'react';
import ProductInfo from './product-info';
import ProductImage from './product-image';
import ProductSubmition from './product-submition';
import FormWrapper from './form-wrapper'

const AdminSmallScreen = () => {

    return (
        <div>
            <header>
                <h1 className='text-center font-roboto2 text-2xl py-10'>[ ADD NEW PRODUCT ]</h1>
            </header>
            <ProductInfo/>
            
            <FormWrapper>
                <ProductImage/>
                <ProductSubmition/>
            </FormWrapper>
           
        </div>
    );
};

export default AdminSmallScreen;