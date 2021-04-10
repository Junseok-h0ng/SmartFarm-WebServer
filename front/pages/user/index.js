import React,{useEffect} from 'react';
import Router from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import { loadUserData } from '../../_redux/_reducer/userReducer';
import ProfileForm from '../../components/User/ProfileForm';
import PostForm from '../../components/Contents/PostForm';

function index() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if(!user.data){
            dispatch(loadUserData())
            .then((response)=>{
                if(!response.payload){
                    Router.push('/');
                }
            });
        }
    }, [])

    // const refreshPostCard = (newContents) =>{
    //     setContents(contents.concat(newContents));
    //   }

    return (
        <div>
            {user.data &&
                <div>
                    <ProfileForm/>
                    <PostForm/>
                </div>
            }

        </div>
    )
}

export default index
