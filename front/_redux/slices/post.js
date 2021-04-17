import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const postContents = createAsyncThunk("POST_CONTENTS",async(data)=>{
    const response = await axios.post(config.back_url+"/api/post",data);
    return response.data;
});

export const loadContents = createAsyncThunk("LOAD_CONTENTS",async(data)=>{
    const response = await axios.post(config.back_url+"/api/post/contents",data);
    return response.data;
});

export const loadUserContents = createAsyncThunk("LOAD_USER_CONTENTS",async(data)=>{
    try{
        const response = await axios.post(config.back_url+"/api/post/user/contents",(data));
        return response.data;
    }catch(err){
        throw err;
    }

})

export const postReducer = createSlice({
    name:'post',
    initialState: {
        isLoading: false
      },
      extraReducers:{
        [loadContents.pending]: (state) => {
            state.isLoading = true;
        },
        [loadContents.fulfilled]: (state,{payload}) => {
            state.isLoading = false;
            state.data = payload;
        },
        [loadUserContents.fulfilled]: (state,{payload}) => {
            state.isLoading = false;
            state.data = payload;
        }
      },
})

export default postReducer.reducer;