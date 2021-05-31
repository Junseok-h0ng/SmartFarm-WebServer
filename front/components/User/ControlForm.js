import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Progress, Slider, Tooltip, Switch, Row, Col, Button} from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

class App extends React.Component {
    state = {
      percent: 0,
    };

    increase = () => {
      let percent = this.state.percent + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.setState({ percent });
    };

    decline = () => {
      let percent = this.state.percent - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.setState({ percent });
    };

    render() {
      return (
        <>

          <Button.Group>
            <Button onClick={this.decline} icon={<MinusOutlined />} />
            <Button onClick={this.increase} icon={<PlusOutlined />} />
          </Button.Group>
          <Progress type="circle" percent={this.state.percent} />
        </>
      );
    }
  }

  function onChange(checked) {
    console.log(`switch to ${checked}`);
    }

function control(props) {

  const dispatch = useDispatch();
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);


  const onChangeTemperature = (temperature) => {
    setTemperature(temperature);
  }

  const onChangeHumidity = (humidity) => {
    setHumidity(humidity);
  }

  const onSubmitFarmInfo = () => {
    dispatch(setFarmInfo({
      temperature,
      humidity,
      ipAddress: props.farmInfo.ipAddress
    }))
  }

   function onChange(checked) {
     console.log(`switch to ${checked}`);
  }

  const tempMarks = {
    0: {
      style: {
        color: '#489CFF'
      },
      label: <strong>0°C</strong>
    },
    10: '10°C',
    20: '20°C',
    30: {
      style: {
        color: '#f50'
      },
      label: <strong>30°C</strong>
    }
  }

  const humiMarks = {
    0: {
      style: {
        color: '#489CFF'
      },
      label: <strong>0%</strong>
    },
    10: '10%',
    20: '20%',
    30: {
      style: {
        color: '#f50'
      },
      label: <strong>30%</strong>
    }
  }

  const style = {
    display: 'inline-block',
    height: 145,
    margin: 24,
    margintop: 20,
  };

  return (
    <div>
      <style jsx>{`    

    #reaction_table {column-count: 1; margin-top: 3%;}
                @media screen and (min-width:600px){
                #reaction_table {column-count: 2; }
        }
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
                  <Slider vertical marks={tempMarks} defaultValue={temperature} max='30' onChange={onChangeTemperature} />
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
                    <Tooltip placement="bottom" title="마지막 물준 시간 :">
                      <Progress type="dashboard" percent={humidity} width={150} />
                    </Tooltip>
                  </Tooltip>
                </td>
                <td>
                  <div style={style}>
                    <Slider vertical marks={humiMarks} defaultValue={humidity} max='30' onChange={onChangeHumidity} />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      <br />
      <div align='center'>
        <table>
          <tr>
            <td>
              <p><strong>Fan</strong></p>  
            </td>
            <td>
              <p><strong>Water</strong></p>
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://i.postimg.cc/SKLHkLzy/fan.png" width="69" alt="sample"></img>&emsp;
              <Switch defaultChecked onChange={onChange} />
            </td>
            <td>
              <img src="https://i.postimg.cc/GmphV2Bg/water.jpg" width="100" alt="sample"></img>
              <Switch defaultChecked onChange={onChange} />
            </td>
          </tr>
          <tr>
            <td colSpan='2'>
              <img src="https://i.postimg.cc/j5YTxd5b/light.jpg" width="80" alt="sample"></img>
              <App />
            </td>

          </tr>
        </table>       
      </div>
      <Button style={{
        width: '100%', borderRadius: '12px', backgroundColor: '#89c403',
        margin: '10px 0', textShadow: '0px 1px 0px #528009', color: '#ffffff'
      }}
        onClick={onSubmitFarmInfo}>설정</Button>
      <br />
    </div>

  )
}

export default control
