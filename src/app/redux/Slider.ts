import { createSlice } from "@reduxjs/toolkit";

type SliderState = {
    slide:boolean;
    isAlreadyLogin:boolean;
    adminPanel:boolean;
    adminLogin:{
        username:string;
        password:string;
    }
}

export const initialState:SliderState = {
    slide:false,
    adminPanel:false,
    isAlreadyLogin:true,
    adminLogin:{
        username:'reymark',
        password:'arielyn'
    }
    
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
        setIsAlreadyLogin:(state)=>{
            state.isAlreadyLogin = true;
        },
        setAdminPanelOpen:(state) =>{
            state.adminPanel = true;
        },
        setAdminPanelClose:(state) =>{
            state.adminPanel = false;
        }
    }
});

export const {
    
    setforward,
    setbackward,
    setIsAlreadyLogin,
    setAdminPanelOpen,
    setAdminPanelClose

} = Slider.actions;

export default Slider.reducer;