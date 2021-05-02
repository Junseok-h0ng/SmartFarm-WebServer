import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import CardForm from '../components/Contents/CardForm';
import {wrapper} from '../_redux/store';
import ProfileForm from '../components/User/ProfileForm';
import { loadContents } from '../_redux/slices/post';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoContents from '../components/commons/NoContents';

function Home(){
  
  const dispatch = useDispatch();
 
  const post = useSelector(state => state.post); 
  const user = useSelector(state => state.user);

  const [contents, setContents] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentLoad, setCurrentLoad] = useState(5);

  useEffect(() => {
    setContents(post.data);
  },[post.data === undefined],[post.data == 0],[]);

  const fetchMoreData = () =>{
    dispatch(loadContents({start:currentLoad,end:currentLoad+5}))
    .then((res=>{
        if(res.payload.length != 0){
            setCurrentLoad(currentLoad+5);
            setContents(contents.concat(res.payload));
        }else{
            setHasMore(false);
        }
    }));
  }

  const renderContents = ()=>(
    <InfiniteScroll 
        dataLength={contents.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p>end</p>
          }
        >
        {contents && contents.map((post,index)=>(
            <CardForm post={post} key={index}/>
        ))}
        </InfiniteScroll>
  )

  return(
    <div>
      {/* <SearchForm/> */}
      {user.isLogin &&
        <>
          <ProfileForm user={user}/>
        </>
      }

      {contents ?
        renderContents()
      :
        <NoContents/>
      }
        
      
     

    </div>
  )
        
}


// SSR은 프론트서버에서 진행되기 때문에 브라우저에서는 개입할 수 없다.
// SSR은 프론트서버에서 백엔드서버로 데이터를 요청하고, 받은 후 브라우저로 데이터와 렌더링을 한번에 보낸다.
// 서버에서 진행이 되기 떄문에 쿠키를 넣어서 직접 보내줘야한다.
export const getServerSideProps = wrapper.getServerSideProps(async context=>{
    await context.store.dispatch(loadContents({start:0,end:5}));
}); 



export default Home;
