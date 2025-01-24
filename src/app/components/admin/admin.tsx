import React from 'react';
import AdminAuth from './adminAuth';

const Admin = () => {
    return (
        <div className=''>
            <header className='bg-[white] font-roboto2 text-2xl text-center py-2'>[ Add product to Database ]</header>
            <AdminAuth/>
        </div>
    );
};

export default Admin;