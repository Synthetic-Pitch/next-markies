import { createSlice,PayloadAction } from "@reduxjs/toolkit";




type State = {
    order_Obj: {
        name: string;
        price: string;
        description: string;
        url: string;
        _id: string;
        quantity:number;
    }[];
    subTotal: {
        totalAmount:number,
        voucherID:string,
        isVoucher:boolean
    },
    isCurrentAt: 'default' | 'mainDish' | 'desert' | 'beverage'
    payment:boolean
    paymentMethod:string,
    voucher:boolean
    voucher_Obj:{
        url:string,
        discount:number
        freeShipping:boolean
        id:string
    }[];
    checkoutPanel:boolean;
};

export const initialState: State = {
    order_Obj: [], // ✅ Start with an empty array
    subTotal: {
        totalAmount:0,
        voucherID:'',
        isVoucher:false
    },
    isCurrentAt:'default',
    payment:false,
    paymentMethod:'',
    voucher:false,
    voucher_Obj:[],
    checkoutPanel:false,
    
};

const OrderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        setOrder : (state,order) => {
            state.order_Obj.push(order.payload);
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.order_Obj.find(order => order._id === action.payload);
            if (item && item.quantity < 20) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.order_Obj.find(order => order._id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeItem : (state,action:PayloadAction<string>) => {
            const item = state.order_Obj.find(order => order._id === action.payload); //Kapag may nahanap yung id na pinass sa parameter/payload then execute the if statement
            if(item){
                state.order_Obj  = state.order_Obj.filter(order => order._id !== action.payload);
            }
        },
        setCurrentAt : (state,action) => {
            state.isCurrentAt = action.payload
        },
        setPayment : (state)=>{
            state.payment = !state.payment
        },
        setVoucher : (state)=>{
            state.voucher = !state.voucher
        },
        setVoucherObj: (state,action) => {
            state.voucher_Obj.push(action.payload)
        },
        setDeleteIDVoucherObj : (state,action) =>{
            state.voucher_Obj = state.voucher_Obj.filter(order => order.id !== action.payload);
        },
        setVoucherID : (state,action:PayloadAction<string>)=>{
            state.subTotal.voucherID = action.payload
        },
        setisVoucher : (state) => {
            state.subTotal.isVoucher = true
        },
        setisVoucherFalse : (state) => {
            state.subTotal.isVoucher = false
        },
        setFreeShipping : (state) => {
            state.subTotal = state.subTotal
        }
        ,
        setPaymentMethod : (state,action) => {
            state.paymentMethod = action.payload
        },
        setCheckoutPanel : (state,action) => {
            state.checkoutPanel = action.payload
        },
        resetOrder : (state) => {
            state.voucher_Obj = [];
            state.order_Obj = [];
            state.subTotal = {
                totalAmount:0,
                voucherID:'',
                isVoucher:false
            }
        }
        
    }
});

export const { 
    setOrder,incrementQuantity,decrementQuantity,
    removeItem,setCurrentAt,setPayment,
    setVoucher,setVoucherObj,setDeleteIDVoucherObj,setVoucherID
    ,setisVoucher,setPaymentMethod,setisVoucherFalse,
    setCheckoutPanel,resetOrder
} = OrderSlice.actions;
export default OrderSlice.reducer