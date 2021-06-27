import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router,{useRouter} from 'next/router';
import {wrapper} from '../../../../_redux/store'
import Link from 'next/link';
import {Button} from 'antd';
import PreviousFarmData from '../../../../components/Farm/PreviousFarmData';
import ProfileForm from '../../../../components/User/ProfileForm';
import { authFarm, getPreviousFarmData } from '../../../../_redux/slices/farm';


function previous({previousFarmData}) {
    
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
        console.log(previousFarmData);
    }, [user.isLogin])

    return (
        <div>
            {user.isLogin &&
            <>
                {/* {farmData.payload ? */}
                <div>
                    <ProfileForm user={user}/>
                    <PreviousFarmData pid={pid} previousFarmData={previousFarmData.payload}/>                   
                </div>
                {/* <div style={{}}>
                    <NoContents/>
                </div> */}
                {/* }   */}
            </>
            } 


        </div>

    )
}

export const getServerSideProps = wrapper.getServerSideProps(async context=>{

    const state = context.store.getState();
    const user = state.user;
    const pid = context.params.pid;
    let isConnected = false;

    const today = new Date();   

    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1;  // 월
    const date = today.getDate() - 1;  // 날짜

    // 로그인이 안되어있으면 리턴
    if(!state.user.data){return}

    const auth = await context.store.dispatch(authFarm({pid}))
    // 농장 서버와 접속에 실패했을시 리턴
    if(auth.type != 'AUTH_FARM/fulfilled'){return {props:{isConnected}}}



    const dateString ={
        start_date: year + '-' + month + '-' + date + ' 00:00',
        end_date: year + '-' + month + '-' + date + ' 23:00'
    }

    const previousFarmData = await context.store.dispatch(getPreviousFarmData({pid,dateString}));

    return{
        props:{previousFarmData}
    }
}); 

export default previous
