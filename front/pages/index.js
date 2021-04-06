import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import CardForm from '../components/Contents/CardForm';
import PostForm from '../components/Contents/PostForm';
import ProfileForm from '../components/User/ProfileForm';
import { loadContents } from '../_redux/_reducer/postReducer';

function Home({data}){
  
  const dispatch = useDispatch();
  
  const {isLogin} = useSelector(state => state.user);
  const post = useSelector(state => state.post);

  useEffect(() => {
      dispatch(loadContents());
  }, []);



  return(
    <div>
      {/* <SearchForm/> */}
      {isLogin &&
        <>
          <ProfileForm/>
          <PostForm/>
          
        </>
      }
      {post.data && post.data.map((post,index)=>(
        <CardForm key={index} post={post}/>
      ))}
    </div>
  )

}

// export async function getServerSideProps() {
//   // Fetch data from external API
 
//   const {data} = await axios.get(`http://localhost:3000/rasp`);
  
//   return { props: { data } };
// }

export default Home;