import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const postComment = createAsyncThunk("POST_COMMENTS",async(data)=>{
    const response = await axios.post(config.back_url+"/api/comment",data);
    return response.data;
});

export const getComment = createAsyncThunk("GET_COMMENTS",async(data)=>{
    const response = await axios.post(config.back_url+"/api/comment/getComment",data);
    return response.data;
});

export const deleteComment = createAsyncThunk("DELETE_COMMENT",async(data)=>{
    const response = await axios.post(config.back_url+"/api/comment/delete",(data));
    console.log(response);
    return response.data;
})


export const commentReducer = createSlice({
    name:'comment',
    initialState: {
        isLoading: false
      },
      extraReducers:{
      },
})

export default commentReducer.reducer;