'use client'

import { useRef, useState } from "react";
import { VoucherAction } from "@/app/action/action";
import Image from "next/image";
import { Tooltip as ReactTooltip } from 'react-tooltip'



export default function AdminCreateSubmition() {
    const [imageSRC, setImageSRC] = useState<string>('');
    const [discount, setDiscount] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);
    const [tooltip, setTooltip] = useState(false);
    const [stocks, setStocks] = useState<string>('');
    const [loading,setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        
        if (loading) return; // Prevent multiple submissions
        
        if (imageSRC.length === 0) {
            setTooltip(true);
            setTimeout(() => {
                setTooltip(false);
            }, 800);
            return;
        }
        
        if (!formRef.current) return;
        
        try {
            setLoading(true);
            const formData = new FormData(formRef.current);
            const result = await VoucherAction(formData);
            if (result.success) {
                console.log(result);
                resetForm();
            } else {
                console.log('error');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const resetForm = () => {
        formRef.current?.reset();
        setImageSRC('');
        setDiscount('');
        setStocks('');
    }

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) {
            return console.log('selected file is invalid');
        }
        const url = URL.createObjectURL(selectedFile);
        setImageSRC(url);
    }
    
    return (
        <form suppressHydrationWarning onSubmit={handleSubmit} ref={formRef}>
            <div className="flex justify-center py-2">
                <ReactTooltip id="tooltip" isOpen={tooltip} style={{fontSize: '10px'}}/>
                <label
                    data-tooltip-content='image is required'
                    data-tooltip-id="tooltip"
                    htmlFor="image" 
                    className="text-md px-4 py-2 border-dotted border-2 border-[gray]"
                >voucher image</label>
                
                <input id="image" type="file" name="voucherImage" className="hidden" accept="image/*" onChange={handleImage} />
            </div>
            {
                imageSRC.length > 0 &&
                <div className="flex justify-center">
                    <Image
                        src={imageSRC || "/placeholder.svg"}
                        alt=''
                        height={50} width={100}
                    />
                </div>
            }
            <div className="flex justify-center gap-2 items-center mt-2">
                <label htmlFor="hasShipping" className="font-poppins">Free shipping</label>
                <div className="flex justify-evenly">
                    <input name="hasShipping" id="hasShipping" className="h-4 w-4" type="checkbox" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
                <label htmlFor="discount" className="font-poppins">Discount percentage choose 1 - 100 </label>
                <input 
                    className="border-[1px] border-[gray] outline-none p-2"
                    name="discount" type="text" id="discount" value={discount} required
                    onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        const parse = parseInt(val);
                        if (parse > 100) return;
                        setDiscount(val);
                    }}
                />
            </div>
            <div className="flex justify-center gap-2 text-md font-poppins mt-2">
                <div>
                    stocks :
                </div>
                <input 
                    required name="stocks" type="text" 
                    className=" outline-none border-[1px] min-[360px]:w-[100px] border-[gray] px-2"
                    value={stocks} 
                    onChange={(e)=>{
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        const parse = parseInt(val);
                        if(parse > 1000) return
                        setStocks(val);
                    }}
                    />
            </div>
            <div className="flex justify-center mt-4">
                <button 
                    disabled={loading}
                    type="submit" 
                    className="flex justify-center font-roboto2 bg-[#dadada] px-6 py-2"
                >Submit</button>
            </div>
        </form>
    )
}