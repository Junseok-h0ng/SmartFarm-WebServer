import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {Image} from 'antd';

import CardForm from '../components/Contents/CardForm';
import SearchForm from '../components/Contents/SearchForm';
import PostForm from '../components/Contents/PostForm';
import ProfileForm from '../components/User/ProfileForm';
import { loadContents } from '../_redux/_reducer/postReducer';

function Home({data}){
  
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(loadContents());
}, [])

  return(
    <div>
      {/* <SearchForm/> */}
      {isLogin &&
        <>
          <ProfileForm/>
          <PostForm/>
          
        </>
      }


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




