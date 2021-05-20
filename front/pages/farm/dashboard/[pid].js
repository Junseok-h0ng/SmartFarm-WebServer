import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router,{useRouter} from 'next/router';
import {wrapper} from '../../../_redux/store'
import {Row,Col,message} from 'antd';
import DashBoard from '../../../components/Farm/DashBoard';
import ControlBoard from '../../../components/Farm/ControlBoard';
import { loadFarmData, loadFarmInfo } from '../../../_redux/slices/farm';
import NoLogin from '../../../components/commons/NoLogin';


function dashboard({farmData}) {
    
    const router = useRouter();
    const {pid} = router.query;
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [cropsInfo, setCropsInfo] = useState({});

    useEffect(() => {
        if(!user.isLogin){
            return
        }
        dispatch(loadFarmInfo({userId:user.data._id}))
        .then(res=>{
            if(res.payload[0]){
                let crops;
                res.payload.map((payload)=>{
                    if(payload._id === pid){
                        crops = payload.crops;
                    }
                })
                console.log(crops);
                setCropsInfo(crops);
            }
    
           
        })
        // if(farmData.payload === false){
        //     message.error('농장에 접속할수 없습니다.')
        //     Router.back();
        // }
        console.log(farmData.payload);
    }, [user])
   
    return (
        <div>
            {user.isLogin ?
            <>
                {/* {farmData.payload &&  */}
                <div>
                    <h1 style={{textAlign:'center'}}>{cropsInfo ? cropsInfo.name : ''}</h1>
                    <DashBoard/><br/>
                    <ControlBoard/> 
                </div>  

                {/* }  */}
            </>
            :
                <NoLogin/>
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
