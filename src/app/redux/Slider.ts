import { createSlice } from "@reduxjs/toolkit";

type SliderState = {
    slide:boolean;
    adminPanel:boolean;
    adminUsername:string;
    adminPassword:string;
    isAlreadyLogin:boolean;
}

export const initialState:SliderState = {
    slide:false,
    adminPanel:false,
    adminUsername:'reymark',
    adminPassword:'dequito',
    isAlreadyLogin:false
}

const Slider = createSlice({
    name:'slider',
    initialState,
    reducers:{
        setforward:(state) =>{
            state.slide = true;
        },
        setbackward:(state) =>{
            state.slide = false;
        },
        setAdminPanelShow:(state)=>{
            state.adminPanel = true;
        },
        setAdminPanelClose:(state)=>{
            state.adminPanel = false;
        },
        setIsAlreadyLogin:(state)=>{
            state.isAlreadyLogin = true;
        }
    }
});

export const {setforward,setbackward,setAdminPanelShow,setAdminPanelClose,setIsAlreadyLogin} = Slider.actions;
export default Slider.reducer;