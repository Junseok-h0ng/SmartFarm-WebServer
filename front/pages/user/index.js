import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Router from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import ProfileForm from '../../components/User/ProfileForm';
import PostForm from '../../components/Contents/PostForm';
import CardForm from '../../components/Contents/CardForm';
import { loadUserContents } from '../../_redux/slices/post';
import user from '../../_redux/slices/user';

function index({user}) {

    const post = useSelector(state=>state.post);
    const [contents, setContents] = useState([]);

    useEffect(() => {
        if(!user.isLogin){
            Router.push('/');
        }
        setContents(post.data);
    }, [])

    const refreshPostCard = (newContents) =>{
        setContents(contents.concat(newContents));
    }

    return (
        <div>
            {user.data &&
                <div>
                    <ProfileForm user={user} postLength={post.Length}/>
                    <PostForm refreshPostCard={refreshPostCard}/>
                    
                    {contents && contents.map((post,index)=>(
                        <React.Fragment key={index}> 
                            <CardForm post={post}/>
                        </React.Fragment>
                    ))}
                </div>
            }

        </div>
    )
}

index.getInitialProps = async (context) =>{
    const state = context.store.getState();
    const user = state.user;
    if(state.user.data){
        await context.store.dispatch(loadUserContents({userId:user.data._id}));
    }
    return {
        user
    }
}

export default index
