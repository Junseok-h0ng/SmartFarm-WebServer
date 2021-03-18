import React,{useEffect} from 'react';
import axios from 'axios';

import {useDispatch} from 'react-redux';
import { increment } from '../_redux/_reducer/test';

function Home({data}){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(increment());
  }, [])
  
  return(
    <div>
      id123
    </div>
  )

}

export async function getServerSideProps() {
  // Fetch data from external API
 
  const {data} = await axios.get(`http://localhost:3000/rasp`);
  
  return { props: { data } };
}

export default Home;


