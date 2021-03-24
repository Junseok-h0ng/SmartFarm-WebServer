import React,{useEffect} from 'react';
import axios from 'axios';
import io from "socket.io-client";
import {Button} from 'antd';

import {useDispatch} from 'react-redux';
import { increment } from '../_redux/_reducer/test';
import CardForm from '../components/Contents/CardForm';

function Home({data}){
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increment());
  }, []);

  const handleClick = () =>{
    const socketClient = io("http://localhost:3000");
    socketClient.on("hello",(res)=>{
      socketClient.on('disconnect',()=>{
        
      })
      console.log(res);
    });
  }

  return(
    <div>
      <CardForm/>
    </div>
  )

}

export async function getServerSideProps() {
  // Fetch data from external API
 
  const {data} = await axios.get(`http://localhost:3000/rasp`);
  
  return { props: { data } };
}

export default Home;


