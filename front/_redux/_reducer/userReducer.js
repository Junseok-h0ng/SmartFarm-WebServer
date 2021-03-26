import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

export const logIn = createAsyncThunk("LOG_IN",async(data)=>{
    const response = await axios.post(config.back_url+"/user/login",data);
    return response.data;
});

export const logOut = createAsyncThunk("LOG_OUT",async()=>{
    await axios.post(config.back_url+"/user/logout");
});

export const register = createAsyncThunk("REGISTER",async(data)=>{
    await axios.post(config.back_url+"/user/register",data);
});

export const userReducer = createSlice({
    name:'user',
    initialState: {
        isLogin: false
      },
      extraReducers:{
          [logIn.fulfilled]: (state,{payload}) => {
              state.isLogin = true;
              state.data = payload;
          },
          [logOut.fulfilled]: (state,{payload})=>{
              state.isLogin = false;
          },
          [register.fulfilled]: (state,{payload})=>{

          }
      },
})

export default userReducer.reducer;