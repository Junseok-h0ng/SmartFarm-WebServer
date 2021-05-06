import React from 'react'
import {useRouter} from 'next/router'
import SelectCrops from '../../components/Farm/SelectCrops';

function settingFarm() {
    const router = useRouter();
    const {pid} = router.query;

    return (
        <div>
            <p>Post : {pid}</p>
            <SelectCrops/>        
        </div>
    )
}

export default settingFarm
