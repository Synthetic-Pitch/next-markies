






import { configureStore } from "@reduxjs/toolkit";
import Slider from './Slider'
import Modal from './modal'
import ProductSlice from './product-create';

const store = configureStore({
    reducer:{
        Slide:Slider,
        Modal:Modal,
        product:ProductSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export default store;