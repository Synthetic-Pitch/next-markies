import { createSlice} from "@reduxjs/toolkit";

type State = {
    User:{
        username:string;
        userAddress:string;
        userNumber:string
    }
}
export const initialState:State = {
    User : {
        username:'',
        userAddress:'',
        userNumber:''
    }
    
}
const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserName : (state, action) => {
            state.User.username = action.payload
        },
        setAddress : (state, action) => {
            state.User.userAddress = action.payload
        },
        setNumber : (state, action) => {
            state.User.userNumber = action.payload
        }
    }
});

export const {
    setUserName,setAddress,setNumber
} = UserSlice.actions;
export default UserSlice.reducer