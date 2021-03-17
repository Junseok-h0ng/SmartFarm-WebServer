import React from 'react';
import {wrapper} from '../_redux/store'

const root = ({ Component, pageProps })=>{
  return (
    <>
      <Component {...pageProps} />  
    </>
        
  )
  
}

export default wrapper.withRedux(root);
