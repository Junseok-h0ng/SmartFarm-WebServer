import axios from 'axios';
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from '../../config/config'

axios.defaults.withCredentials = true;

export const loadFarmImages = createAsyncThunk("LOAD_FARM_IMAGES",async()=>{
    const response = await axios.post(config.back_url+"/rasp/images");
    return response.data;
});

export const farmReducer = createSlice({
    name:'farm',
    initialState: {
        isLoading: false
      },
      extraReducers:{
        
      },
})

export default farmReducer.reducer;