import React from 'react'
import { HorizontalBar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Progress, Button  } from 'antd';
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
          <Progress type="circle" percent={this.state.percent} />
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
        #col_2 {
            column-count:2;
        }

        #flex-container { 
            position:absolute;
            top:0; left:0; bottom:0; right:0;
            height:10%;
            margin:20% auto;
        }
        
    `}</style>
    <div id='flex-container' >
        <div id='col_2'>
            <div>
            <HorizontalBar width='200' height ='150'
            data={{
                labels: ['온도'],
                datasets:[
                    {
                        label : "현재온도",
                        data: [22],
                        fill: false,
                        borderColor: "rgba(255, 201, 14, 1)",
                    backgroundColor: "rgba(255, 201, 14, 0.5)",
                    },
                    {
                        label : "목표온도",
                        data: [21],
                        fill: false,
                        borderColor: "rgba(255, 201, 14, 1)",
                    backgroundColor: "rgba(2, 277, 14, 0.5)",
                    },
                ], 
            }}

        
            options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }],
                    yAxes: [{
                        display: true,  
                        scaleLabel: {
                            display: true,
                        }
                    }]  
                }
            }}
            />
            </div>
            <div align="center">
                <img src="https://i.postimg.cc/SKLHkLzy/fan.png" width="80" alt="sample"></img>
                <br/>
                <div>
                    <Switch defaultChecked onChange={onChange} />
                </div>
            </div>
            
        </div>

        <div>
        <div id='col_2'>
        
            <div>
            <HorizontalBar width='200' height ='150'
            data={{
                labels: ['습도'],
                datasets:[
                    {
                        label : "현재습도",
                        data: [24],
                        fill: false,
                        borderColor: "rgba(255, 201, 14, 1)",
                    backgroundColor: "rgba(255, 201, 14, 0.5)",
                    },
                    {
                        label : "목표습도",
                        data: [20],
                        fill: false,
                        borderColor: "rgba(255, 201, 14, 1)",
                    backgroundColor: "rgba(2, 277, 14, 0.5)",
                    },
                ], 
            }}

        
            options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }],
                    yAxes: [{
                        display: true,  
                        scaleLabel: {
                            display: true,
                        }
                    }]
                }
            }}
            />
            </div>
            <div align="center">
                <img src="https://i.postimg.cc/GmphV2Bg/water.jpg" width="100" alt="sample"></img> 
                <div>
                    <Switch defaultChecked onChange={onChange} />
                </div>   
            </div>
            </div>
            
            </div>

            <div>
            <div id='col_2'>
        
            <div>
            <HorizontalBar width='200' height ='150'
            data={{
                labels: ['밝기'],
                datasets:[
                    {
                        label : "현재밝기",
                        data: [30],
                        fill: false,
                        borderColor: "rgba(255, 201, 14, 1)",
                    backgroundColor: "rgba(255, 201, 14, 0.5)",
                    },
                    {
                        label : "목표밝기",
                        data: [31],
                        fill: false,
                        borderColor: "rgba(255, 201, 14, 1)",
                    backgroundColor: "rgba(2, 277, 14, 0.5)",
                    },
                ], 
            }}

            options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }],
                    yAxes: [{
                        display: true,  
                        scaleLabel: {
                            display: true,
                        }
                    }]
                }
            }}
            />   
            </div>
                <div align="center">
                    <img src="https://i.postimg.cc/j5YTxd5b/light.jpg" width="85" alt="sample"></img>
                    <div><App /></div>
                </div>
            </div>
            
            </div>
        </div>
    </div>
}

export default ControlForm
