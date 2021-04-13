import React,{useEffect,useState} from 'react';
import Router from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import ProfileForm from '../../components/User/ProfileForm';
import PostForm from '../../components/Contents/PostForm';
import CardForm from '../../components/Contents/CardForm';
import InfiniteScroll from 'react-infinite-scroll-component';

import { loadUserContents } from '../../_redux/slices/post';
import {wrapper} from '../../_redux/store';

function index() {

    const dispatch = useDispatch();
    
    const post = useSelector(state=>state.post);
    const user = useSelector(state=>state.user);

    const [contents, setContents] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [currentLoad, setCurrentLoad] = useState(5);

    useEffect(() => {
        if(!user.isLogin){
            Router.push('/');
        }

        if(post.data != []){
            setHasMore(false);
        }else{
            setContents(post.data)
        }
    }, [contents])

    const refreshPostCard = (newContents) =>{
        setContents(contents.concat(newContents));
    }

    const fetchMoreData = () =>{
        dispatch(loadUserContents({userId:user.data._id,start:currentLoad,end:currentLoad+5}))
        .then((res=>{
            if(res.payload.length != 0){
                setCurrentLoad(currentLoad+5);
                setContents(contents.concat(res.payload));
            }else{
                setHasMore(false);
            }
        }));
      }


    return (
        <div>
            {user.data &&
                <div>
                    <ProfileForm user={user} postLength={post.Length}/>
                    <PostForm refreshPostCard={refreshPostCard}/>
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
                        <React.Fragment key={index}>
                        <CardForm post={post}/>
                        </React.Fragment>
                    ))}
                    </InfiniteScroll>                   
                </div>
            }

        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async context=>{
    const state = context.store.getState();
    const user = state.user;
    if(state.user.data){
        await context.store.dispatch(loadUserContents({userId:user.data._id,start:0,end:5}));
    }
}); 

export default index
