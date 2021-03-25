import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import testReducer from './_reducer/test'
import userReducer from './_reducer/userReducer'

const makeStore = (context) => configureStore({
  reducer:{
    testReducer,
    userReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware()
});

export const wrapper = createWrapper(makeStore,{
  debug: process.env.NODE_ENV !== 'production'
})