import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    search :"",
    sort:""
}

const Search = createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearch : (state,action) => {
            state.search = action.payload
        },
        setByPrice : (state) => {
            state.sort = "byPrice"
        },
        setAlphabetical : (state) => {
            state.sort = "alphabetical"
        }

}})

export const {setSearch,setByPrice,setAlphabetical} = Search.actions;
export default Search.reducer;