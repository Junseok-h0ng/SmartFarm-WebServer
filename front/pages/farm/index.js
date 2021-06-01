import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {wrapper} from '../../_redux/store';
import ProfileForm from '../../components/User/ProfileForm';
import AddFarm from '../../components/Farm/AddFarm';
import { loadFarmInfo } from '../../_redux/slices/farm';
import FarmCard from '../../components/Farm/FarmCard';
import NoLogin from '../../components/commons/NoLogin';
import Router from 'next/router';

function index({data}) {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const [farmData, setFarmData] = useState([])

    useEffect(() => {
        // 로그인이 안되어있으면 메인화면으로 이동
        console.log(data);
        if(!user.isLogin || !data.payload){
            return Router.push('/');
        }
        setFarmData(data.payload)
    }, [user]);

    // 농장정보 추가시 갱신
    const refreshFarmData = (newData) =>{
        setFarmData(farmData.concat(newData));
    }

    // 삭제후 농장정보 다시 가져오기
    const reloadFarmInfo = () =>{
        dispatch(loadFarmInfo({userId:user.data._id}))
        .then(res=>{
            if(res.payload){
                setFarmData(res.payload);
            }
        });
    }

    return (
        <div>
            {user.isLogin &&
                <div>
                    <ProfileForm user={user}/>
                    <AddFarm userId={user.data._id} refreshFarmData={refreshFarmData}/>
                    {farmData &&
                        farmData.map((farm,index)=>(
                            <FarmCard farm={farm} userId={user.data._id} reloadFarmInfo={reloadFarmInfo}/>
                        ))
                    }
                </div>
            }   
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async context=>{
    const state = context.store.getState();
    const user = state.user;
    if(!state.user.data){return}
    const data = await context.store.dispatch(loadFarmInfo({userId:user.data._id}));
    return {props:{data}}
}); 

export default index
