import { createSlice } from "@reduxjs/toolkit";

type State = {
    order_Obj: {
        name: string;
        price: string;
        description: string;
        url: string;
        _id: string;
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
        }
    }
});

export const { setOrder } = OrderSlice.actions;
export default OrderSlice.reducer