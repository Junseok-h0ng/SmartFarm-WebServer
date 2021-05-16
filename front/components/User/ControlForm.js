import React from 'react'
import { Switch, Progress, Button, Slider } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const marks = {
    0: '0°C',
    10: '10°C',
    20: '20°C',
    30: {
        style: {
        color: '#f50',
        },
        label: <strong>30°C'</strong>,
    }, 
};


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

  class App1 extends React.Component {
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
          <Progress percent={this.state.percent} />
          <Button.Group>
            <Button onClick={this.decline} icon={<MinusOutlined />} />
            <Button onClick={this.increase} icon={<PlusOutlined />} />
          </Button.Group>
        </>
      );
    }
  }
  
function onChange(checked) {
    console.log(`switch to ${checked}`);
    }

const ControlForm = () => {
    return <div>

        <style jsx>{`    
        
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
    <div>
        <div align='center'>
            <table>
                <tr>
                    <td>온도 조절 :&emsp;</td>
                    <td><App /></td>       
                </tr>
                <tr>
                    <td>습도 조절 :&emsp;</td>
                    <td><App1/></td>
                </tr>
            </table>           
        </div>
        <br/>
        <div id='col'>
            <Slider range marks={marks} defaultValue={[17, 23]} max ='30' />
        </div>
        <br/>
        <div align='center'>
            <img src="https://i.postimg.cc/SKLHkLzy/fan.png" width="70" alt="sample"></img>&emsp;
            <Switch defaultChecked onChange={onChange} />

            <img src="https://i.postimg.cc/GmphV2Bg/water.jpg" width="90" alt="sample"></img> 
            <Switch defaultChecked onChange={onChange} />&emsp;
            <div>
                <img src="https://i.postimg.cc/j5YTxd5b/light.jpg" width="80" alt="sample"></img>
                <App />
            </div>            
        </div>
        </div>
    </div>
}

export default ControlForm
