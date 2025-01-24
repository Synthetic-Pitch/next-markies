






import { configureStore } from "@reduxjs/toolkit";
import Slider from './Slider'
import Modal from './modal'

const store = configureStore({
    reducer:{
        Slide:Slider,
        Modal:Modal
    }
})


export type RootState = ReturnType<typeof store.getState>;
export default store;