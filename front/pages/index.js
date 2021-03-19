import React,{useEffect} from 'react';
import axios from 'axios';
import io from "socket.io-client";
import {Button} from 'antd';

import {useDispatch} from 'react-redux';
import { increment } from '../_redux/_reducer/test';

function Home({data}){
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increment());
  }, [])



  const handleClick = () =>{
    const socketClient = io("http://220.126.61.83:9001");
    socketClient.on("connect",(res)=>{
      console.log(res);
    });
  }

  return(
    <div>
      id123
      <Button onClick={handleClick}>연결</Button>
    </div>
  )

}

export async function getServerSideProps() {
  // Fetch data from external API
 
  const {data} = await axios.get(`http://localhost:3000/rasp`);
  
  return { props: { data } };
}

export default Home;


