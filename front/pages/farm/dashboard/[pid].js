import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import {wrapper} from '../../../_redux/store'
import {Row,Col} from 'antd';
import DashBoard from '../../../components/Farm/DashBoard';
import ControlBoard from '../../../components/Farm/ControlBoard';
import { loadFarmData } from '../../../_redux/slices/farm';


function dashboard({farmData}) {
    
    const router = useRouter();
    const {pid} = router.query;
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(farmData.payload);
    }, [])
   
    return (
        <div>
            <DashBoard/>
            <ControlBoard/> 
        </div>

    )
}

export const getServerSideProps = wrapper.getServerSideProps(async context=>{

    const farmData = await context.store.dispatch(loadFarmData({pid:context.params.pid}));
    return{
        props:{farmData}
    }
}); 

export default dashboard
