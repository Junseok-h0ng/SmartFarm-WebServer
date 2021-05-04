import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const loadFarmImages = createAsyncThunk("LOAD_FARM_IMAGES",async(data)=>{
    const response = await axios.post(config.back_url+"/api/farm/images");
    return response.data;
});

export const addFarm = createAsyncThunk("ADD_FARM",async(data)=>{
    const response = await axios.post(config.back_url+"/api/farm",data);
    return response.data;
});

export const loadFarmInfo = createAsyncThunk("LOAD_FARM_INFO",async(data)=>{
    const response = await axios.post(config.back_url+"/api/farm/info",(data));
    return response.data;
});

export const deleteFarm = createAsyncThunk("DELETE_FARM",async(data)=>{
    const response = await axios.post(config.back_url+"/api/farm/delete",(data));
    return response.data;
})

export const farmReducer = createSlice({
    name:'farm',
    initialState: {
        isLoading: false
      },
      extraReducers:{
          [loadFarmImages.fulfilled]: (state,{payload}) =>{
              state.data = payload;
          },
          [addFarm.fulfilled]:(state,{payload}) =>{
              state.data = payload;
          },
          [addFarm.rejected]:(state,{payload})=>{
              state.error = payload;
          },
          [loadFarmInfo.fulfilled]: (state,{payload})=>{
              state.data = payload;
          }
      },
})

export default farmReducer.reducer;