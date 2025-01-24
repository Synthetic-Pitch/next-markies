
import { createSlice } from "@reduxjs/toolkit"


type State = {
    modal:boolean;
}

const initialState:State = {
    modal:false
}

const Modal = createSlice({
    name:'modal',
    initialState,
    reducers:{
        setModalShow:(state) =>{
            state.modal = true;
        },
        setModalClose:(state) =>{
            state.modal = false;
        }
    }
}) 

export const {setModalShow,setModalClose} = Modal.actions;
export default Modal.reducer;