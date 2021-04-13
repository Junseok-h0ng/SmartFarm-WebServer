import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import CardForm from '../components/Contents/CardForm';
import PostForm from '../components/Contents/PostForm';
import axios from 'axios';
import ProfileForm from '../components/User/ProfileForm';

function Home({data}){
  
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.user);

  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents(data);
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

export async function getServerSideProps(context) {
//   // Fetch data from external API
  console.log(context.req);
  const {data} = await axios.post(`http://localhost:3000/post/contents`);
  // console.log(data);
  return { props: { data } };
}

export default Home;