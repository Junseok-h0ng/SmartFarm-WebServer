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

    const style = {
        display: 'inline-block',
        height: 145,
        margin: 24,
        margintop: 20,
      };

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
        @media screen and (min-width:600px){
          #reaction_table {column-count: 2; }
          }
        
    
  `}</style>
        <div id='reaction_table'>
          <div>
            <table align='center'>
              <tr>
                <td>
                  <img src="https://i.postimg.cc/MTLYV8gP/20210529-192949.png" width="28" alt="sample"></img>
                  <Tooltip title="목표 농장 온도">
                    <Progress type="dashboard" percent={temperature} format={percent => `${percent} °C`} width={150} />
                  </Tooltip>
                </td>
                <td>
                  <div style={style}>
                    <Slider vertical marks={tempMarks} value={temperature} max='30' onChange={onChangeTemperature} />
                  </div>
                </td>
              </tr>
            </table>
            </div>
            <div>
              <table align='center'>
                <tr>
                  <td>
                    <img src="https://i.postimg.cc/yY2Y5rCM/blue.png" width="28" alt="sample"></img>
                    <Tooltip title="목표 토양 습도" >
                        <Progress type="dashboard" percent={humidity} width={150} />
                    </Tooltip>
                  </td>
                  <td>
                    <div style={style}>
                      <Slider vertical marks={humiMarks} value={humidity} max='30' onChange={onChangeHumidity} />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        <br />
        <Button style={{
          width: '100%', borderRadius: '12px', backgroundColor: '#89c403',
          margin: '10px 0', textShadow: '0px 1px 0px #528009', color: '#ffffff'
        }}
          onClick={onSubmitFarmTarget}>설정</Button>
        <br />
      </div>
    // <div align='center'>
    //     <Tooltip title="목표 농장 온도">
    //         <Progress type="dashboard" percent={temperature} format={percent => `${percent} °C`} />
    //     </Tooltip>
    //     &emsp;&emsp;
    //     <Tooltip title="목표 토양 습도">
    //         <Progress type="dashboard" percent={humidity} />
    //     </Tooltip>
    // </div>
    // <br/>
    //     <div id='col'>
    //         <Slider marks={tempMarks} value={temperature} max ='30' onChange={onChangeTemperature} />
    //     </div>
    //     <div id='col'>
    //         <Slider marks={humiMarks} value={humidity} max ='30' onChange={onChangeHumidity} />
    //     </div>
    //     <Button style={{width:'100%',borderRadius:'12px',backgroundColor:'#89c403',
    //                     margin:'10px 0',textShadow:'0px 1px 0px #528009',color:'#ffffff'}}
    //             onClick={onSubmitFarmTarget}>설정</Button>
    // <br/>
    // </div>
    )  
}

export default control
