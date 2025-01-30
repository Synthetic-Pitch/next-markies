import React from 'react';
import ProductInfo from './product-info';
import ProductImage from './product-image';

const AdminSmallScreen = () => {
    return (
        <div>
            <header>
                <h1 className='text-center font-roboto2 text-2xl py-10'>[ ADD NEW PRODUCT ]</h1>
            </header>
            <ProductInfo/>
            <ProductImage/>
        </div>
    );
};

export default AdminSmallScreen;