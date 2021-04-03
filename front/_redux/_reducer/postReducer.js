import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const postContents = createAsyncThunk("POST_CONTENTS",async(data)=>{
    await axios.post(config.back_url+"/post",data)
});

export const loadContents = createAsyncThunk("LOAD_CONTENTS",async(data)=>{
    const response = await axios.post(config.back_url+"/post/contents",data);
    return response.data;
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
      },
})

export default postReducer.reducer;