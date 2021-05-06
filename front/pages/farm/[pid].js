import React from 'react'
import {useRouter} from 'next/router'
import SelectFarm from '../../components/Farm/SelectFarm';

function settingFarm() {
    const router = useRouter();
    const {pid} = router.query;

    return (
        <div>
            <p>Post : {pid}</p>
            <SelectFarm/>        
        </div>
    )
}

export default settingFarm
