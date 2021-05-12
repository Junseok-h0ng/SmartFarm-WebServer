import React,{useEffect} from 'react';

import {Progress,Slider,Tooltip,Switch,Row,Col,Button} from 'antd';
import {FaFan} from 'react-icons/fa';
import {GiPlantWatering} from 'react-icons/gi';

function control() {



    const marks = {
        0: {
            style:{
                color: '#489CFF'
            },
            label: <strong>0°C</strong>
        },
        10: '10°C',
        20: '20°C',
        30: {
            style:{
                color: '#f50'
            },
            label: <strong>30°C</strong>
        }
    }

    return (
        <div style={{padding:'10px'}}>
            <Row>
                <Col span={12}>
                    <Tooltip title='현재 온도' >
                            <Progress type="circle" percent={20} type="dashboard"  format={percent => `${percent} °C`} />
                    </Tooltip>
                    <Slider max={30} marks={marks} included={true} defaultValue={37} />
                </Col>
                   
                <Col span={12}>
                    <Tooltip title='현재 습도'>
                        <Progress type="circle" percent={40} type="dashboard"/>
                    </Tooltip>
                </Col>
                

            </Row>

            <FaFan style={{width:'75px',height:'50px'}}/>
            <Switch/>
            <GiPlantWatering style={{width:'75px',height:'50px'}} />
            
        </div>
    )
}

export default control
