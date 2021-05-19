import React from 'react';
import {useDispatch} from 'react-redux';
import Link from 'next/link';
import {Input,Button,Card,message} from 'antd';
import {BarChartOutlined,InfoCircleOutlined,DeleteOutlined} from '@ant-design/icons'
import { deleteFarm } from '../../_redux/slices/farm';

function FarmCard(props) {

    const dispatch = useDispatch();

    const onClickDelete = ()=>{
        dispatch(deleteFarm({_id:props.farm._id}))
        .then(res=>{
            if(res.payload.success){
                message.success('농장정보를 삭제하는데 성공했습니다.')
                props.reloadFarmInfo();
            }
        })
    }

    return (
        <div>
            <Card>
                <Card.Meta
                    description={[props.farm.ipAddress,<DeleteOutlined onClick={onClickDelete} style={{float:'right',marginBottom:'20px'}}/>]}
                />
                {props.farm.crops.name}
                <Button style={{float:'right'}}><Link href={`/farm/dashboard/${props.farm._id}`}><a><BarChartOutlined /></a></Link></Button>
                <Button style={{float:'right'}}><Link href={`/farm/${props.farm._id}`}><a><InfoCircleOutlined /></a></Link></Button>
            </Card>
        </div>
    )
}

export default FarmCard
