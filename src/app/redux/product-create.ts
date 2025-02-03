import { createSlice } from "@reduxjs/toolkit";



export const initialState = {
    product_obj: {
        name: '',
        price: '',
        description: '',
        prevURL:'',
        imgContent:{
            name:'',
            size:'',
            type:''
        },
        Upload:{
            load:0,
            isUpload:false
        }
    }
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // ✅ Update name
        setName: (state, action) => {
            state.product_obj.name = action.payload;
        },
        // ✅ Update price
        setPrice: (state, action) => {
            state.product_obj.price = action.payload;
        },
        // ✅ Update description
        setDescription: (state, action) => {
            state.product_obj.description = action.payload;
        },
        // ✅ Update formData
        setPrevURL : (state, action) => {
            state.product_obj.prevURL = action.payload
        },
        setContentName : (state,action) => {
            state.product_obj.imgContent.name = action.payload
        },
        setContentSize : (state,action) => {
            state.product_obj.imgContent.size = action.payload
        },
        setContentType : (state,action) => {
            state.product_obj.imgContent.type = action.payload
        },
        setIsUpload : (state) => {
            state.product_obj.Upload.isUpload = true;
        },
        setIsUploadNot : (state) => {
            state.product_obj.Upload.isUpload = false;
        },
        setLoad : (state,action) => {
            state.product_obj.Upload.load = action.payload
        },
        
        resetImg : (state) => {
            state.product_obj.imgContent = initialState.product_obj.imgContent;
            state.product_obj.prevURL = initialState.product_obj.prevURL
        },
        // ✅ Reset product state
        resetProduct: (state) => {
            state.product_obj = initialState.product_obj;
        }
    }
});

// Export actions
export const { 

    setName, setPrice,
    setDescription,setPrevURL,
    resetProduct,setContentName,
    setContentSize,setContentType,
    resetImg,setIsUpload,setIsUploadNot,
    setLoad,


} = ProductSlice.actions;

// Export reducer
export default ProductSlice.reducer;
