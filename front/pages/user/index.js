import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Router from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import { loadUserData } from '../../_redux/_reducer/userReducer';
import ProfileForm from '../../components/User/ProfileForm';
import PostForm from '../../components/Contents/PostForm';
import CardForm from '../../components/Contents/CardForm';
import { loadUserContents } from '../../_redux/_reducer/postReducer';
import config from '../../config/config';

function index({user}) {

    const dispatch = useDispatch();
    // const user = useSelector(state => state.user);
    const post = useSelector(state=>state.post);
    const [contents, setContents] = useState([]);

    useEffect(() => {
        if(user.isLogin){
            dispatch(loadUserContents({userId:user.data._id}))
            .then((response)=>{
                setContents(response.payload);
            })
        }else{
            Router.push('/');
        }       
      
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
    return {user:state.user}
}

export default index
