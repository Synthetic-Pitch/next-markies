'use client'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';

const ProfileUser = () => {
    const { data: session, status } = useSession();
    
    // Handle loading and unauthenticated states
    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    
    if (status === 'unauthenticated') {
        return <div>Please log in</div>;
    }
    
    return (
        <div className='flex h-[calc(100dvh-64px)] w-full max-w-[1200px] bg-gray-500'>
            <section className='w-[40%] h-full bg-gray-300 flex justify-center pt-20'>
                <main className=''>

                </main>
                {/* {session?.user?.image && (
                    <figure 
                        className='h-[4rem] w-[4rem] relative'
                        style={{clipPath:'circle(50% at 50% 50%)'}}
                    >
                        <Image 
                            src={session.user.image.replace('=s96-c', '=s500')} 
                            alt={session.user.name || 'User profile'} 
                            fill
                            className='object-cover'
                            priority
                        />
                    </figure>
                )} */}
            </section>

            <section className='w-[60%] p-4'>
                {/* Add user details here */}
                <h1 className='text-2xl font-bold'>
                    {session?.user?.name ?? 'Guest'}
                </h1>
                <p className='text-gray-700'>
                    {session?.user?.email ?? 'No email provided'}
                </p>
            </section>
        </div>
    );
};

export default ProfileUser;