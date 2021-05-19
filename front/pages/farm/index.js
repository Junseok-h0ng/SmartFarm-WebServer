import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router from 'next/router';
import ProfileForm from '../../components/User/ProfileForm';
import AddFarm from '../../components/Farm/AddFarm';
import { loadFarmInfo } from '../../_redux/slices/farm';
import FarmCard from '../../components/Farm/FarmCard';
import NoLogin from '../../components/commons/NoLogin';

function index() {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const [farmData, setFarmData] = useState([])

    useEffect(() => {
        // 로그인이 안되어있으면 메인화면으로 이동
        if(!user.isLogin){
            return 
        }else{
            dispatch(loadFarmInfo({userId:user.data._id}))
            .then(res=>{
                if(res.payload){
                    setFarmData(res.payload);
                }
            })
        }
    }, [user]);

    // 농장정보 추가시 갱신
    const refreshFarmData = (newData) =>{
        setFarmData(farmData.concat(newData));
    }

    // 삭제후 농장정보 다시 가져오기
    const reloadFarmInfo = () =>{
        dispatch(loadFarmInfo({userId:user.data._id}))
        .then(res=>{
            if(res.payload){
                setFarmData(res.payload);
            }
        });
    }

    return (
        <div>
            {user.isLogin ?
                <div>
                    <ProfileForm user={user}/>
                    <AddFarm userId={user.data._id} refreshFarmData={refreshFarmData}/>
                    {farmData &&
                        farmData.map((farm,index)=>(
                            <FarmCard farm={farm} userId={user.data._id} reloadFarmInfo={reloadFarmInfo}/>
                        ))
                    }
                </div>
            :
                <NoLogin/>
            }   
        </div>
    )
}


export default index