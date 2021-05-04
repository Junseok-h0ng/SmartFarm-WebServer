import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const loadUserData = createAsyncThunk("LOAD_USER_DATA",async()=>{
    const response = await axios.get(config.back_url+"/api/user",{
        withCredentials:true
    });
    return response.data;
});

export const logIn = createAsyncThunk("LOG_IN",async(data)=>{
    const response = await axios.post(config.back_url+"/api/user/login",data);
    return response.data;
});

export const logOut = createAsyncThunk("LOG_OUT",async()=>{
    const response = await axios.post(config.back_url+"/api/user/logout");
    return response.data;
});

export const register = createAsyncThunk("REGISTER",async(data)=>{
    await axios.post(config.back_url+"/api/user/register",data);
});



export const userReducer = createSlice({
    name:'user',
    initialState: {
        isLogin: false,
        isLoading: false
      },
      extraReducers:{
          [logIn.fulfilled]: (state,{payload}) => {
              state.isLogin = true;
              state.data = payload;
          },
          [logOut.fulfilled]: (state,{payload})=>{
              state.isLogin = false;
              state.data = payload;
          },
          [loadUserData.pending]: (state) =>{
              state.isLoading = true;
          },
          [loadUserData.fulfilled]: (state,{payload}) =>{
              state.isLoading = false;
              state.isLogin = true;
              state.data = payload;
          },
          [loadUserData.rejected]: (state)=>{
              state.isLoading = false;
          },
          [loadUserData]: (state,{payload})=>{
            state.isLoading = false;
            state.isLogin = true;
            state.data = payload;
          }
      },
});

export default userReducer.reducer;