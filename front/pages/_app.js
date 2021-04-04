import React from 'react';

import Head from 'next/head';
import {wrapper} from '../_redux/store'
import AppLayout from '../components/AppLayout/AppLayout';

const root = ({ Component, pageProps })=>{


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

export default wrapper.withRedux(root);
