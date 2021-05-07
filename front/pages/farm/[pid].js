import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Router,{useRouter} from 'next/router';
import SelectCrops from '../../components/Farm/SelectCrops';
import { loadFarmInfo } from '../../_redux/slices/farm';

function settingFarm() {

    const router = useRouter();
    const {pid} = router.query;

    const dispatch = useDispatch();

    const user = useSelector(state => state.user)

    useEffect(() => {
        if(!user.isLogin){
            return Router.push('/');
        }
    }, []);

    return (
        <div>
            <p>Post : {pid}</p>
            <SelectCrops pid={pid}/>        
        </div>
    )
}

export default settingFarm
