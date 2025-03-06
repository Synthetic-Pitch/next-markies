'use client'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';
import { signOut } from 'next-auth/react';
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
            <section className='w-[40%] h-full bg-gray-300 flex justify-center pt-4'>
                <figure
                    className='bg-[#e2e2e2] h-[400px] w-full flex flex-col items-center justify-center'
                   
                >
                    {session?.user?.image && (
                            <div 
                                className='relative w-[60%] h-[60%] overflow-hidden'
                                style={{clipPath:'circle(40% at 50% 50%)'}}
                            >
                                <Image 
                                    src={session.user.image.replace('=s96-c', '=s500')} 
                                    alt={session.user.name || 'User profile'} 
                                    fill
                                    className='object-contain'
                                    priority
                                />
                            </div>
                            
                       
                    )}
                    <button className='font-poppins text-md bg-[#c5c5c5] px-5 py-1 rounded-2xl shadow hover:scale-[1.1] transition-all' onClick={()=>signOut()}>log out</button>
                </figure>
                
            </section>

            <section className='w-[60%] p-4 pt-10'>
                {/* Add user details here */}
                <h1 className='text-2xl font-bold'>
                    {session?.user?.name ?? 'Guest'}
                </h1>
                <p className='text-gray-700'>
                    {session?.user?.email ?? 'No email provided'}
                </p>

                <section className='pt-20 flex flex-col gap-6'>
                    <input 
                        type="text" placeholder='enter name' 
                        className='w-[50%] px-6 py-2 bg-[#b3b3b3] placeholder:text-[#686868] placeholder:font-poppins rounded-full
                        outline-none'
                    
                    />
                    <input 
                        type="text" placeholder='enter address' 
                        className='w-[50%] px-6 py-2 bg-[#b3b3b3] placeholder:text-[#686868] placeholder:font-poppins rounded-full
                        outline-none'
                    
                    />
                    <input 
                        type="number" placeholder='enter mobile number' 
                        className='w-[50%] px-6 py-2 bg-[#b3b3b3] placeholder:text-[#686868] placeholder:font-poppins rounded-full
                        outline-none'
                    
                    />
                </section>
                <footer className='flex py-10 px-4'>
                    <button className='bg-[#b3b3b3] px-10 py-2 text-md text-[#686868] font-poppins hover:scale-[1.1] transition-all'>Save</button>
                </footer>
            </section>
        </div>
    );
};

export default ProfileUser;