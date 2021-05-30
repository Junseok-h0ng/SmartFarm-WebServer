import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import NoContents from '../../../../components/commons/NoContents';
import FilterFarmData from '../../../../components/Farm/FilterFarmData';


function dashboard({farmData}) {
    
    const router = useRouter();
    const {pid} = router.query;
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [farmInfo, setFarmInfo] = useState({});
    const [farmTarget, setFarmTarget] = useState({});

    useEffect(() => {
        // if(!user.isLogin){
        //     return Router.push('/');
        // }

        // })

    }, [user.isLogin])
    return (
        <div>
            {/* {user.isLogin ? */}
            <>
                {/* {farmData.payload ? */}
                <div>
                    {/* <ProfileForm user={user}/> */}
                    <FilterFarmData/>
                    
                </div>
                :
                <div>
                    <NoContents/>
                </div>
                {/* }   */}
            </>
            :
                ''
            {/* } */}


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

export default dashboard
