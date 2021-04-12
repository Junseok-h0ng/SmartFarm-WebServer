import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const upLike = createAsyncThunk("ACTION_UP_LIKE",async(data)=>{
    const response = await axios.post(config.back_url+"/action/upLike",data);
    return response.data;
});

export const unLike = createAsyncThunk("ACTION_UN_LIKE",async(data)=>{
    const response = await axios.post(config.back_url+"/action/unLike",data);
    return response.data;
});

export const upDislike = createAsyncThunk("ACTION_UP_DISLIKE",async(data)=>{
    const response = await axios.post(config.back_url+"/action/upDislike",data);
    return response.data;
});

export const unDislike = createAsyncThunk("ACTION_UN_DISLIKE",async(data)=>{
    const response = await axios.post(config.back_url+"/action/unDislike",data);
    return response.data;
});

export const getLikes = createAsyncThunk("ACTION_GET_LIKES",async(data)=>{
    const response = await axios.post(config.back_url+"/action/getLikes",data);
    return response.data;
});

export const getDislikes = createAsyncThunk("ACTION_GET_DISLIKES",async(data)=>{
    const response = await axios.post(config.back_url+"/action/getDislikes",data);
    return response.data;
})



export const actionReducer = createSlice({
    name:'action',
    initialState: {
        isLoading: false
      },
      extraReducers:{

      },
})

export default actionReducer.reducer;