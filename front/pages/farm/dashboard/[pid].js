import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router,{useRouter} from 'next/router';
import {wrapper} from '../../../_redux/store'
import {Row,Col,message} from 'antd';
import DashBoard from '../../../components/Farm/DashBoard';
import ControlBoard from '../../../components/Farm/ControlBoard';
import { getFarmTarget, loadFarmData, loadFarmInfo } from '../../../_redux/slices/farm';
import ProfileForm from '../../../components/User/ProfileForm';
import NoContents from '../../../components/commons/NoContents';


function dashboard({farmData}) {
    
    const router = useRouter();
    const {pid} = router.query;
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [farmInfo, setFarmInfo] = useState({});
    const [farmTarget, setFarmTarget] = useState({});

    useEffect(() => {
        if(!user.isLogin){
            return Router.push('/');
        }
        if(farmData.payload === false){
            message.error('농장에 접속할수 없습니다.')
            Router.back();
        }
        dispatch(loadFarmInfo({userId:user.data._id,pid}))
        .then(res=>{
            if(res.payload[0]){
                res.payload.map((payload)=>{
                    if(payload._id === pid){
                        setFarmInfo(payload);
                    }
                })
            }   
        });
        dispatch(getFarmTarget({pid}))
        .then(res=>{
            if(res.payload){
                setFarmTarget(res.payload);
                
            }
        })

    }, [user.isLogin])
    return (
        <div>
            {user.isLogin ?
            <>
                {farmData.payload ?
                <div>
                    <ProfileForm user={user}/>
                    <h1 style={{textAlign:'center'}}>{farmInfo.crops ? farmInfo.crops.name : ''}</h1>
                    <DashBoard farmData={farmData.payload} /><br/>
                    <ControlBoard farmInfo={farmInfo} pid={pid} farmTarget={farmTarget}/> 
                </div>
                :
                <div>
                    <NoContents/>
                </div>
                }  
            </>
            :
                ''
            }


        </div>

    )
}

export const getServerSideProps = wrapper.getServerSideProps(async context=>{

    let farmData = await context.store.dispatch(loadFarmData({pid:context.params.pid,options:'dashboard'}));

    if(farmData.payload === undefined){
        farmData.payload = false;
    }

    return{
        props:{farmData}
    }
}); 

export default dashboard
