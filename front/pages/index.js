import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import CardForm from '../components/Contents/CardForm';
import PostForm from '../components/Contents/PostForm';
import ProfileForm from '../components/User/ProfileForm';
import { loadContents } from '../_redux/_reducer/postReducer';
import axios from 'axios';

function Home({data}){
  
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.user);

  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents(data);
      // dispatch(loadContents())
      // .then((response)=>{
      //   setContents(response.payload);
      // });
  }, []);



  return(
    <div>
      {/* <SearchForm/> */}
      {user.isLogin &&
        <>
          <ProfileForm user={user}/>
        </>
      }
      {contents && contents.map((post,index)=>(
          <React.Fragment key={index}>
            <CardForm post={post}/>
          </React.Fragment>
          
        ))}

    </div>
  )
        
}

export async function getServerSideProps() {
//   // Fetch data from external API
 
  const {data} = await axios.post(`http://localhost:3000/post/contents`);
  // console.log(data);
  return { props: { data } };
}

export default Home;