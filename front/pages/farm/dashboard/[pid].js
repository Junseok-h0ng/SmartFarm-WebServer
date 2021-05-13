import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router,{useRouter} from 'next/router';
import {wrapper} from '../../../_redux/store'
import {Row,Col,message} from 'antd';
import DashBoard from '../../../components/Farm/DashBoard';
import ControlBoard from '../../../components/Farm/ControlBoard';
import { loadFarmData } from '../../../_redux/slices/farm';


function dashboard({farmData}) {
    
    const router = useRouter();
    const {pid} = router.query;
    const dispatch = useDispatch();

    useEffect(() => {
        if(farmData.payload === false){
            message.error('농장에 접속할수 없습니다.')
            Router.back();
        }
        console.log(farmData.payload);
    }, [])
   
    return (
        <div>
            {farmData.payload && 
                <div>
                    <DashBoard/><br/>
                    <ControlBoard/> 
                </div>  

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
