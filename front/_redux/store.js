import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import testReducer from './_reducer/test';
import user from './_reducer/userReducer';
import farm from './_reducer/farmReducer';

const makeStore = (context) => configureStore({
  reducer:{
    testReducer,
    user,
    farm
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware()
});

export const wrapper = createWrapper(makeStore,{
  debug: process.env.NODE_ENV !== 'production'
})