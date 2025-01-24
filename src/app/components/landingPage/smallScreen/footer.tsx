import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className='bg-[gray] h-[9rem] w-full flex'>
            <figure className='w-[50%] h-full flex flex-col'>
                <h1 className='text-center text-[#e0e0e0] font-bold pt-1'>branches</h1>
                <ul 
                    className='grid grid-cols-2 w-[100%] h-full text-center items-center text-[12px]
                 py-4 '>
                    <li>Sm Marikina</li>
                    <li>Ali Mall</li>
                    <li>Sm Farmers</li>
                    <li>Robinson Cavite</li>
                    <li>Casa De San Lorenzo</li>
                    <li>Sm Panagasinan</li>
                </ul>
            
            </figure>
            <aside className='w-[50%] flex items-center justify-center'>
                <ul className='flex flex-col justify-center items-center'>
                    <li>
                        <h1 className='text-center font-semibold'>contact us</h1>
                    </li>
                    <li className='flex flex-col text-[10px] tracking-widest font-semibold leading-[12px]'>
                        <span>231-2324-232</span>
                        <span>09707331334</span>
                    </li>
                    <li className='flex items-center justify-center gap-2 h-[22`````px]'>
                        <FaFacebookSquare className='h-[20px]'/>
                        <SiInstagram className='h-[40px] w-[17px]'/>
                        <FaSquareXTwitter className='h-[19px] w-[19px]'/>
                    </li>
                    <li className='h-[20px]'>
                        <span className='text-[12px]'>© allright reserved</span>
                    </li>
                </ul>
            </aside>
            
        </footer>
    );
};

export default Footer;