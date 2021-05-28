import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router,{useRouter} from 'next/router';
import {wrapper} from '../../../_redux/store'
import {Row,Col,message} from 'antd';
import DashBoard from '../../../components/Farm/DashBoard';
import ControlBoard from '../../../components/Farm/ControlBoard';
import { loadFarmData, loadFarmInfo } from '../../../_redux/slices/farm';
import NoLogin from '../../../components/commons/NoLogin';
import ProfileForm from '../../../components/User/ProfileForm';


function dashboard({farmData}) {
    
    const router = useRouter();
    const {pid} = router.query;
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [farmInfo, setFarmInfo] = useState({});

    useEffect(() => {
        if(!user.isLogin){
            return Router.push('/');
        }
        dispatch(loadFarmInfo({userId:user.data._id}))
        .then(res=>{
            if(res.payload[0]){
                res.payload.map((payload)=>{
                    if(payload._id === pid){
                        setFarmInfo(payload);
                    }
                })
            }   
        })
        // if(farmData.payload === false){
        //     message.error('농장에 접속할수 없습니다.')
        //     Router.back();
        // }
    }, [user])
    return (
        <div>
            {user.isLogin ?
            <>
                {/* {farmData.payload &&  */}
                <div>
                    <ProfileForm user={user}/>
                    <h1 style={{textAlign:'center'}}>{farmInfo.crops ? farmInfo.crops.name : ''}</h1>
                    <DashBoard/><br/>
                    <ControlBoard farmInfo={farmInfo}/> 
                </div>  

                {/* }  */}
            </>
            :
                ''
            }


        </div>

    )
}

export const getServerSideProps = wrapper.getServerSideProps(async context=>{
    let farmData = await context.store.dispatch(loadFarmData({pid:context.params.pid}));

    if(farmData.payload === undefined){
        farmData.payload = false;
    }
    console.log('farm',farmData)

    return{
        props:{farmData}
    }
}); 

export default dashboard
