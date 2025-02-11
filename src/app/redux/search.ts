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
        setNoFilter : (state) => {
            state.sort = "noFilter"
        },
        setAlphabetical : (state) => {
            state.sort = "alphabetical"
        }

}})

export const {setSearch,setByPrice,setAlphabetical,setNoFilter} = Search.actions;
export default Search.reducer;