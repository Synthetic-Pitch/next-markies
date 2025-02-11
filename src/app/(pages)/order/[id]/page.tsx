'use client'
import React from 'react';

const Page = ({params}:{params:{id:string}}) => {
    const id = params.id
    
    return (
        <div>
            {id}
        </div>
    );
};

export default Page;