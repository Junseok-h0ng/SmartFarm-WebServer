import React from 'react';

import Head from 'next/head';
import {wrapper} from '../_redux/store'
import AppLayout from '../components/AppLayout/AppLayout';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ({ Component, pageProps })=>{


  return (
    <>
    <Head>
      <title>SmartFarm</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.0/antd.css"/>
    </Head>
      <AppLayout>
        <Component {...pageProps} />  
      </AppLayout>
    </>     
  )
 
}

export default wrapper.withRedux(root);
