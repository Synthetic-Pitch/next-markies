






import { configureStore } from "@reduxjs/toolkit";
import Slider from './Slider'
import Modal from './modal'
import ProductSlice from './product-create';
import Search from './search';
import OrderSlice from './order';
import UserSlice from './user';

const store = configureStore({
    reducer:{
        Slide:Slider,
        Modal:Modal,
        product:ProductSlice,
        search :Search,
        order:OrderSlice,
        User:UserSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export default store;