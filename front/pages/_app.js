import React from 'react';
import {Provider} from 'react-redux';
import store from '../_redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store ={store}>
      <Component {...pageProps} />
    </Provider>
    
  )
  
}

export default MyApp
