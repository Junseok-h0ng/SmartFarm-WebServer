import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import rootReducer from './slices/index';


const makeStore = (context) => configureStore({
  reducer:rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware()
});

export const wrapper = createWrapper(makeStore,{
  debug: process.env.NODE_ENV !== 'production'
})