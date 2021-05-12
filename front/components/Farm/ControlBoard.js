import React from 'react';
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

    return  <div>

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
    #red {
        color: red;
    }
}
    
`}</style>
<div>
    <div>
        <Progress type="dashboard" percent={20} format={percent => `${percent} °C`} />
        <div id='right'>
            <Progress type="dashboard" percent={40} />
        </div>    
    </div>
    <br/>
    <div>
        <Slider range marks={marks} defaultValue={[17, 23]} max ='30' />
    </div>
    <br/>
    <div align='center'>
        <img src="https://i.postimg.cc/SKLHkLzy/fan.png" width="70" alt="sample"></img>&emsp;
        <Switch defaultChecked  />

        <img src="https://i.postimg.cc/GmphV2Bg/water.jpg" width="90" alt="sample"></img> 
        <Switch defaultChecked />&emsp;
        <div>
            <img src="https://i.postimg.cc/j5YTxd5b/light.jpg" width="80" alt="sample"></img>
        </div>
        
    </div>


    

    {/*<div id='col_2'>
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
                <img src="https://i.postimg.cc/j5YTxd5b/light.jpg" width="80" alt="sample"></img>
                <div><App /></div>
            </div>
        </div>
        
        </div> */}


    </div>
</div>
}

export default control
