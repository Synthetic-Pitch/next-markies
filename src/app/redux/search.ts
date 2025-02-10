import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    search :""
}

const Search = createSlice({
    name:'search',
    initialState,
    reducers:{
        setByPrice : (state) => {
            state.search = 'byPrice'
        },
        setAlphabetical : (state) => {
            state.search = 'alphabetical'
        },

}})

export const {setByPrice,setAlphabetical} = Search.actions;
export default Search.reducer;