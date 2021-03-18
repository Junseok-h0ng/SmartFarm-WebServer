import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
//  import {reducer} from './_reducer/rootReducer';
import testReducer from './_reducer/test'

const makeStore = (context) => configureStore({
  reducer:{
    testReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware()
});

export const wrapper = createWrapper(makeStore,{
  debug: process.env.NODE_ENV !== 'production'
})