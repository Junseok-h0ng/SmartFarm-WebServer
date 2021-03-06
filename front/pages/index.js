import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import CardForm from '../components/Contents/CardForm';
import {wrapper} from '../_redux/store';
import ProfileForm from '../components/User/ProfileForm';
import { loadContents } from '../_redux/slices/post';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoContents from '../components/commons/NoContents';
import LoginForm from '../components/User/LoginForm';
import RegisterForm from '../components/User/RegisterForm';

function Home({data}){
  
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const [contents, setContents] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentLoad, setCurrentLoad] = useState(5);
  const [loginMode, setLoginMode] = useState(true);

  useEffect(() => {
    setContents(data.payload);
  },[]);

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
        >
        {contents && contents.map((post,index)=>(
            <CardForm post={post} key={index}/>
        ))}
        </InfiniteScroll>
  )

  const changeLoginMode = (mode) =>{
      setLoginMode(mode);
  }

  return(
    <div>
      {user.isLogin ?
        <>
          <ProfileForm user={user}/>
        </>
        :
        <>
          {loginMode ?
            <LoginForm changeLoginMode={(mode)=>changeLoginMode(mode)}/>
          :
            <RegisterForm changeLoginMode={(mode)=>changeLoginMode(mode)}/>
          }
          
          
        </>
      }

      {contents.length ?
        renderContents()
      :
        <NoContents message="작성된 포스트가 없습니다."/>
      }
    </div>
  )
        
}


// SSR은 프론트서버에서 진행되기 때문에 브라우저에서는 개입할 수 없다.
// SSR은 프론트서버에서 백엔드서버로 데이터를 요청하고, 받은 후 브라우저로 데이터와 렌더링을 한번에 보낸다.
// 서버에서 진행이 되기 떄문에 쿠키를 넣어서 직접 보내줘야한다.
export const getServerSideProps = wrapper.getServerSideProps(async context=>{
    const data = await context.store.dispatch(loadContents({start:0,end:5}));
    return {props:{data}}
}); 



export default Home;
