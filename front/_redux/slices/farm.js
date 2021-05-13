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
});

export const getCrops = createAsyncThunk("GET_CROPS",async(data)=>{
    const response = await axios.post(config.back_url+"/api/farm/getCrops",(data));
    return response.data;
});

export const getCropsInfo = createAsyncThunk("GET_CROPS_INFO",async(data)=>{
    const response = await axios.post(config.back_url+"/api/farm/getCrops/info",(data));
    return response.data;
});

// 농작물 정보 DB FARM에 CROPS로 넣기
export const addCropsInfo = createAsyncThunk("ADD_CROPS_INFO",async(data)=>{
    const response = await axios.post(config.back_url+"/api/farm/addCropsInfo",(data));
    return response.data;
});

export const loadFarmData = createAsyncThunk("LOAD_FARM_DATA",async(data)=>{
    const response = await axios.post(config.back_url+"/api/farm/loadFarmData",(data));
    return response.data;
});

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
          },
          [getCrops.fulfilled]:(state,{payload})=>{
              state.crops = payload;
          },
          [getCropsInfo.fulfilled]:(state,{payload})=>{
              state.cropsInfo = payload;
          }
          
      },
})

export default farmReducer.reducer;