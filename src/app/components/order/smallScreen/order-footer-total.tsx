'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPayment,setVoucher } from '@/app/redux/order';
import OrderCheckoutBtn from './order-checkout-btn';

type Data = {
    price:string
    quantity:number
}

type State = {
    order:{
        order_Obj: Data[]
        payment:boolean
    }
}

type Sub = {
    order:{
        subTotal:{
            totalAmount:number,
            voucherID:string,
            isVoucher:boolean
        }
    }
}

type VoucherType = {
    url:string,
    discount:number
    freeShipping:boolean
    id:string

}
type VoucherOBJ = {
    order:{
        voucher_Obj:VoucherType[]
    }
}

type IPaymentMethod = {
    order:{
        paymentMethod:string
    }
}

const OrderFooterTotal = () => {
    const order = useSelector((state:State) => state.order.order_Obj)
    const [total, setTotal] =useState<number>(0);
    const subTotal = useSelector((state:Sub)=>state.order.subTotal);
    const VoucherOBJ = useSelector((state:VoucherOBJ)=>state.order.voucher_Obj);
    const dispatch = useDispatch();
    const paymentMethod = useSelector((state:IPaymentMethod)=>state.order.paymentMethod)
    const [discount, setDiscount] = useState<number>(0);


    const handlePayment = () => {
        dispatch(setPayment());
    }
    const handleVoucher = () => {
        dispatch(setVoucher())
    }
    
    useEffect(()=>{
        let calculatedTotal = order.reduce((acc, order) => acc + parseFloat(order.price) * order.quantity, 0) //calculate all price multiplied by quantity
        
        
        if(subTotal.isVoucher){
            const findByID = VoucherOBJ.find(voucher => voucher.id === subTotal.voucherID);

            
            if (findByID) {
                const discountAmount = (findByID.discount / 100) * calculatedTotal;
                calculatedTotal -= discountAmount; // Apply discount
                
                setDiscount(findByID.discount);
            }
        }
        
        calculatedTotal = Math.round(calculatedTotal) + 50;
       
        
        setTotal(calculatedTotal);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[order,subTotal.isVoucher])
    
    return (
        <main className='h-full flex flex-col'>
            <section className=' h-[30%] w-full flex justify-center items-center gap-2'>
                <h2 
                    className='font-poppins text-[#cecece]'
                >Subtotal:&nbsp;
                    <span className='text-[#cecece] tracking-wider text-xl'>&#x20B1;{total}</span>
                </h2>
                <span className='text-md text-[#b8b8b8]'>+50 shippingFee</span>
            </section>
            <main className='flex flex-col sxs:flex-row justify-evenly bg-[#636363]'>
                <button 
                    onClick={handlePayment} 
                    className='p-1 sxs:p-3 text-[#cecece] font-poppins '
                >{
                    paymentMethod === '' ? 'Payment' : paymentMethod
                }</button>
                <button 
                    onClick={handleVoucher} 
                    className='p-1 sxs:p-3 text-[#cecece] font-poppins'
                >{
                    discount <= 0 || !subTotal.isVoucher ? 'Voucher' : `${discount}% discount applied`
                }</button>  
            </main>
            <OrderCheckoutBtn/>
        </main>
    );
};

export default OrderFooterTotal;