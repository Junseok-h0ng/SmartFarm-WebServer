import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router,{useRouter} from 'next/router';
import Link from 'next/link';
import {wrapper} from '../../../_redux/store'
import {Row,Col,message,Button} from 'antd';
import DashBoard from '../../../components/Farm/DashBoard';
import ControlBoard from '../../../components/Farm/ControlBoard';
import farm, { authFarm, getFarmTarget, loadFarmData, loadFarmInfo,getCropsTips} from '../../../_redux/slices/farm';
import ProfileForm from '../../../components/User/ProfileForm';
import NoContents from '../../../components/commons/NoContents';


function dashboard({farmData,farmCrops,targetData,cropsTips,isConnected}) {
    
    const router = useRouter();
    const {pid} = router.query;
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [farmInfo, setFarmInfo] = useState({});
    const [farmTarget, setFarmTarget] = useState({});

    useEffect(() => {
        if(!isConnected){
            message.error('농장에 접속할수 없습니다.')
            return Router.back();
        }
        else if(!user.isLogin){
            return Router.push('/');
        }else{

        setFarmInfo(farmCrops);
        setFarmTarget(targetData);   

        }
    }, [user.isLogin])
    return (
        <div>
            {user.isLogin && isConnected ?
            <>
                {farmData.payload ?
                <div>
                    <ProfileForm user={user}/>
                    <h1 style={{textAlign:'center'}}>{farmInfo.crops ? farmInfo.crops.name : '농작물이 선택되지 않음'}
                        <Link href={`/farm/dashboard/previous/${pid}`}>
                            <Button style={{marginTop:'10px',position: 'absolute', right: 10,color:'#5cb85c',borderColor: "#5cb85c",borderRadius:'12px'}}>이전 정보</Button>
                        </Link>
                    </h1>
                    <DashBoard cropsTips={cropsTips.payload} farmData={farmData.payload} /><br/>
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

    const state = context.store.getState();
    const user = state.user;
    const pid = context.params.pid;
    let isConnected = false;



    // 농작물 정보
    let farmCrops;
    // 목표 온/습도
    let targetData;

    // 로그인이 안되어있으면 리턴
    if(!state.user.data){return}

    const auth = await context.store.dispatch(authFarm({pid}))
    // 농장 서버와 접속에 실패했을시 리턴
    if(auth.type != 'AUTH_FARM/fulfilled'){return {props:{isConnected}}}
    
    isConnected = true;
    // 농장 정보 불러오기(대시보드)
    const farmData = await context.store.dispatch(loadFarmData({pid,options:'dashboard'}))
    
    const cropsTips = await context.store.dispatch(getCropsTips({pid}));


    // 농작물 정보 불러오기 (농작물 이름)
    await context.store.dispatch(loadFarmInfo({userId:user.data._id}))
    .then((res)=>{
        if(res.payload[0]){
            res.payload.map((payload)=>{
                if(payload._id === pid){
                    return farmCrops = payload;
                }
            });
        }   
    });

    // 목표 온/습도 불러오기
    await context.store.dispatch(getFarmTarget({pid}))
    .then((res)=>{
        if(res.payload){
            return targetData = res.payload;
        }
    });

    return{
        props:{farmData,farmCrops,targetData,cropsTips,isConnected}
    }

}); 

export default dashboard
