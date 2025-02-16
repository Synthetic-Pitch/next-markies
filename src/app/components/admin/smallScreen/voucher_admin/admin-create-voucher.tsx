import React from 'react';
import Link from 'next/link';
import AdminCreateSubmition from './admin-create-submition';
const AdminCreateVoucher = () => {
    return (
        <div>
             <header>
                <h1 className='text-center font-roboto2 text-2xl py-6'>[ ADD NEW VOUCHER ]</h1>
            </header>
            <div className='p-3'>
                <Link 
                    href={'/admin'} 
                    className='bg-[#dfdfdf] max-w-min p-2 font-roboto1'>Add&nbsp;Product
                </Link>
            </div>
            <AdminCreateSubmition/>

        </div>
    );
};

export default AdminCreateVoucher;