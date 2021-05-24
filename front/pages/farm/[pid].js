import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Router,{useRouter} from 'next/router';
import SelectCrops from '../../components/Farm/SelectCrops';
import { loadFarmInfo } from '../../_redux/slices/farm';
import NoLogin from '../../components/commons/NoLogin';
import ProfileForm from '../../components/User/ProfileForm';

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
            {user.isLogin &&
                <div>
                    <ProfileForm user={user}/>
                    <SelectCrops pid={pid}/> 
                </div>
            
            }
       
        </div>
    )
}

export default settingFarm
