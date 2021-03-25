import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk("LOG_IN",async(data)=>{
    console.log(data);
    const response = await axios.post("http://localhost:3000/user/login",data);
    return response.data;
});

export const logOut = createAsyncThunk("LOG_OUT",async(data)=>{
    const response = await axios.post("http://locahlost:/3000/user/logout",data);
    return response.data;
});

export const register = createAsyncThunk("REGISTER",async(data)=>{
    await axios.post("http://localhost:3000/user/register",data);
})


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