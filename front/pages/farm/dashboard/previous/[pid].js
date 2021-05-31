import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router,{useRouter} from 'next/router';
import Link from 'next/link';
import {Button} from 'antd';
import PreviousFarmData from '../../../../components/Farm/PreviousFarmData';
import ProfileForm from '../../../../components/User/ProfileForm';


function previous({farmData}) {
    
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
    }, [user.isLogin])

    return (
        <div>
            {user.isLogin &&
            <>
                {/* {farmData.payload ? */}
                <div>
                    <ProfileForm user={user}/>
                    <PreviousFarmData pid={pid}/>                   
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

// export const getServerSideProps = wrapper.getServerSideProps(async context=>{

//     let farmData = await context.store.dispatch(loadFarmData({pid:context.params.pid,options:'dashboard'}));

//     if(farmData.payload === undefined){
//         farmData.payload = false;
//     }

//     return{
//         props:{farmData}
//     }
// }); 

export default previous
