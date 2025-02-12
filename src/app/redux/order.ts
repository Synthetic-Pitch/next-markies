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
    subTotal: number;
};

export const initialState: State = {
    order_Obj: [], // ✅ Start with an empty array
    subTotal: 0,
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
            const item = state.order_Obj.find(order => order._id === action.payload);
            if(item){
                state.order_Obj  = state.order_Obj.filter(order => order._id !== action.payload);
            }
        }
        
    }
});

export const { setOrder,incrementQuantity,decrementQuantity,removeItem } = OrderSlice.actions;
export default OrderSlice.reducer