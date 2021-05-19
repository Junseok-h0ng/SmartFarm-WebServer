import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Router,{useRouter} from 'next/router';
import SelectCrops from '../../components/Farm/SelectCrops';
import { loadFarmInfo } from '../../_redux/slices/farm';
import NoLogin from '../../components/commons/NoLogin';

function settingFarm() {

    const router = useRouter();
    const {pid} = router.query;

    const dispatch = useDispatch();

    const user = useSelector(state => state.user)

    useEffect(() => {
        if(!user.isLogin){return}
    }, [user]);

    return (
        <div>
            {user.isLogin ?
                <div>
                    <SelectCrops pid={pid}/> 
                </div>
            :
                <NoLogin/>
            }
       
        </div>
    )
}

export default settingFarm
