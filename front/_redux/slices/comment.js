import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const postComment = createAsyncThunk("POST_COMMENTS",async(data)=>{
    const response = await axios.post(config.back_url+"/comment",data);
    return response.data;
});

export const getComment = createAsyncThunk("GET_COMMENTS",async(data)=>{
    const response = await axios.post(config.back_url+"/comment/getComment",data);
    return response.data;
});


export const commentReducer = createSlice({
    name:'comment',
    initialState: {
        isLoading: false
      },
      extraReducers:{
      },
})

export default commentReducer.reducer;