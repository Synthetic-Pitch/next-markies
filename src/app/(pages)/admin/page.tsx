

import React from 'react';
import MiddlewareAuth from './middlewareAuth';
import AdminSmallScreen from '@/app/components/admin/smallScreen/admin-small-screen';

const Page = () => {
    
    return (
        <>
           <MiddlewareAuth>
            {/* SMALL SCREEN */}
                <div className=''>
                    <AdminSmallScreen/>
                </div>
           </MiddlewareAuth>
        </>
    );
};

export default Page;