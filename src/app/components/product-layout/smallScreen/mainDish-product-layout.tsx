import React from 'react';

type Data = {
    name:string
}

const MainDishProductLayout:React.FC<{ products: Data[] }> = ({products}) => {

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default MainDishProductLayout;