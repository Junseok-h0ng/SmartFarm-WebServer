import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Head from 'next/head';
import {wrapper} from '../_redux/store'
import AppLayout from '../components/AppLayout/AppLayout';
import axios from 'axios';
import { loadUserData } from '../_redux/_reducer/userReducer';



const root = ({ Component, pageProps})=>{
    

  return (
    <>
    <Head>
      <title>SmartFarm</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.0/antd.css"/>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
      <AppLayout>
        <Component {...pageProps} />  
      </AppLayout>
    </>     
  )
}

root.getInitialProps = async (context) =>{
  const {ctx,Component} = context;
  let pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.req ? ctx.req.headers.cookie : '';
  
  if(ctx.req && cookie){
    axios.defaults.headers.Cookie = cookie;
  }

  if(!state.user.isLogin){
    await ctx.store.dispatch(loadUserData());
  }

  if (Component.getInitialProps) { 
    pageProps = (await Component.getInitialProps(ctx)) || {};
    }
  return { pageProps };
 
}

export default wrapper.withRedux(root);
