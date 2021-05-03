import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router from 'next/router';
import ProfileForm from '../../components/User/ProfileForm';
import AddFarm from '../../components/Farm/AddFarm';

function index() {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    useEffect(() => {
        if(!user.isLogin){
            return Router.push('/');
        }
    }, []);

    return (
        <div>
            {user.data &&
                <div>
                    <ProfileForm user={user}/>
                    <AddFarm userId={user.data._id}/>
                </div>
            }   
        </div>
    )
}


export default index
