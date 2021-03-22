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
  }, []);

  const handleClick = () =>{
    const socketClient = io("http://localhost:3000");
    socketClient.on("hello",(res)=>{
      console.log(res);
    });
  }

  return(
    <div style={{border:'1px solid black'}}>
      여기에 메인 화면 출력<br/>
      상황에 따라
      sns 출력 / 스마트팜 출력 <br/>
      이부분만 바낌<br/>
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


