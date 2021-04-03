import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const postContents = createAsyncThunk("POST_CONTENTS",async(data)=>{
    await axios.post(config.back_url+"/post",data)
});

export const postReducer = createSlice({
    name:'post',
    initialState: {
        isLoading: false
      },
      extraReducers:{
      },
})

export default postReducer.reducer;