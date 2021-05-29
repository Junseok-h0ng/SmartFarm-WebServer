import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Progress,Slider,Tooltip,Switch,Row,Col,Button, message} from 'antd';
import {setFarmTarget} from '../../_redux/slices/farm';

function control(props) {

    const dispatch = useDispatch();
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);

    useEffect(() => {
        setTemperature(props.farmTarget.targetTemp);
        setHumidity(props.farmTarget.targetHumidity);
        console.log(temperature);
    }, [props.farmTarget])

    const onChangeTemperature = (temperature) =>{
        setTemperature(temperature);
    }

    const onChangeHumidity = (humidity) =>{
        setHumidity(humidity);
    }

    const onSubmitFarmTarget = () =>{
        dispatch(setFarmTarget({
            temperature,
            humidity,
            pid:props.pid
        }))
        .then((res)=>{
            console.log(res)
            if(res.payload.success){
                message.success('설정을 완료했습니다.');
            }
        })
    }

    const tempMarks = {
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

    const humiMarks ={
        0: {
            style:{
                color: '#489CFF'
            },
            label: <strong>0%</strong>
        },
        10: '10%',
        20: '20%',
        30: {
            style:{
                color: '#f50'
            },
            label: <strong>30%</strong>
        }
    }

    return (
    <div>
    <style jsx>{`    
    #col_2 {
        column-count:2;
    }
    // #flex-container { 
    //     position:absolute;
    //     top:0; left:0; bottom:0; right:0;
    //     height:110%;
    //     margin:110% auto;
    // }
    #right {
        float: right;
        display: inline-block;
    }
    #col {
        margin-left: 15%;
        width: 70%;
    }
}
    
`}</style>

    <div align='center'>
        <Tooltip title="목표 농장 온도">
            <Progress type="dashboard" percent={temperature} format={percent => `${percent} °C`} />
        </Tooltip>
        &emsp;&emsp;
        <Tooltip title="목표 토양 습도">
            <Progress type="dashboard" percent={humidity} />
        </Tooltip>
    </div>
    <br/>
        <div id='col'>
            <Slider marks={tempMarks} value={temperature} max ='30' onChange={onChangeTemperature} />
        </div>
        <div id='col'>
            <Slider marks={humiMarks} value={humidity} max ='30' onChange={onChangeHumidity} />
        </div>
        <Button style={{width:'100%',borderRadius:'12px',backgroundColor:'#89c403',
                        margin:'10px 0',textShadow:'0px 1px 0px #528009',color:'#ffffff'}}
                onClick={onSubmitFarmTarget}>설정</Button>
    <br/>
    </div>
    )  
}

export default control
