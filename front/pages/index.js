import React,{useEffect} from 'react';
import axios from 'axios';
import io from "socket.io-client";
import {Button} from 'antd';

import {useDispatch} from 'react-redux';
import { increment } from '../_redux/_reducer/test';
import CardForm from '../components/Contents/CardForm';
import SearchForm from '../components/Contents/SearchForm';

function Home({data}){
  
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  return(
    <div>
      {/* <SearchForm/> */}
      <CardForm/>
    </div>
  )

}

// export async function getServerSideProps() {
//   // Fetch data from external API
 
//   const {data} = await axios.get(`http://localhost:3000/rasp`);
  
//   return { props: { data } };
// }

export default Home;


