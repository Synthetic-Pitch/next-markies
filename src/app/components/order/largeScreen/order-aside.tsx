'use client'
import React, { useEffect, useState } from 'react';
import OrderCheckout from './order-checkout';
import { useDispatch, useSelector } from 'react-redux';
import {setVoucher,setPayment} from '@/app/redux/order'

type Data = {
    name:string,
    price:string,
    quantity:number
}
type Data2 = {
    id:string,
    discount:number,
    freeShipping:boolean
    
}
type State = {
    order:{
        order_Obj: Data[],
        voucher_Obj: Data2[],
        subTotal:{
            voucherID:string,
            isVoucher:boolean
        }
    }
}

const OrderAside = () => {
    const order = useSelector((state:State)=>state.order.order_Obj);
    const VoucherObj = useSelector((state:State)=>state.order.voucher_Obj);
    const subTotalRedux = useSelector((state:State)=>state.order.subTotal);
    const [shippingFee, setShippingFee] = useState<string>('50');
    const [total,setTotal] = useState<number>();
    const [subTotal,setSubTotal] = useState<number>();
    const dispatch = useDispatch();

    useEffect(()=>{
        let Caltotal = order.reduce((acc,order) => acc + parseFloat(order.price) * order.quantity,0)
        const findByID = VoucherObj.find(voucher => voucher.id === subTotalRedux.voucherID);

        setSubTotal(Caltotal)
        
        if(findByID){
            if(subTotalRedux.isVoucher){
                const discountAmount = (findByID.discount / 100) * Caltotal;
                const result =Caltotal -= discountAmount;
                Caltotal = Math.round(result);
                if(findByID.freeShipping) {
                    setTotal(Caltotal);
                    setShippingFee('0');
                    return
                }
            }  
        }
        setShippingFee('50')
        setTotal(Caltotal+50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[order,subTotalRedux.isVoucher,subTotalRedux.voucherID])
    
    return (
        <div
            className='w-[40%] h-full bg-[#cecece] max-w-[505px]'
        >
            <header className='w-full flex justify-evenly py-4 bg-[#b8b8b8]'>
                <li 
                    onClick={()=>{}}
                    className='list-none h-[50px] w-[27%] rounded-3xl bg-[#7c7c7c] text-white flex items-center justify-center font-poppins cursor-pointer hover:scale-[1.1] transition-all duration-2'>
                    MainDish
                </li>
                <li 
                    className='list-none h-[50px] w-[27%] rounded-3xl bg-[#7c7c7c] text-white flex items-center justify-center font-poppins cursor-pointer hover:scale-[1.1] transition-all duration-2'>
                    Desert
                </li>
                <li 
                    className='list-none h-[50px] w-[27%] rounded-3xl bg-[#7c7c7c] text-white flex items-center justify-center font-poppins cursor-pointer hover:scale-[1.1] transition-all duration-2'>
                    Beverage
                </li>
            </header>
            <div className='py-2 flex justify-evenly'>
                    
                <section 
                    onClick={()=>dispatch(setVoucher())}
                    className='text-[#505050] flex items-center gap-1 w-[50%] justify-center bg-[#a5a5a5] py-3 cursor-pointer font-roboto2 hover:text-[white]'
                >
                    Voucher 
                </section>
                <section 
                    onClick={()=>dispatch(setPayment())}
                    className='text-[#505050] flex items-center gap-1 w-[50%] justify-center bg-[#a5a5a5] py-3 cursor-pointer font-roboto2 hover:text-[white]'
                >
                    Payment 
                </section>
            </div>
            <main className=' font-poppins h-[150px] flex flex-col justify-center gap-2 '>
                {
                    subTotalRedux.isVoucher && (
                        <h2 className='pl-2 text-[13px] font-bold font-poppins text-[#7aa163]'>Voucher Applied</h2>
                    )
                }
                <h2 className='text-[#505050] pl-2'>Subtotal :&#x20B1; {subTotal}</h2>
                <h2 className='text-[#505050] pl-2'>ShippingFee :&#x20B1; {shippingFee}</h2>
                <h2 className='text-[#505050] pl-2 font-bold'>Total :{total}</h2>
            </main>

            <footer>
                
                <section className='w-full flex items-center justify-center py-4 font-roboto2 text-xl'>
                    <OrderCheckout className='p-4 px-6 hover:text-2xl cursor-pointer bg-[#adadad] rounded-2xl text-[gray]'/>
                    
                </section>
            </footer>

        </div>
    );
};

export default OrderAside;