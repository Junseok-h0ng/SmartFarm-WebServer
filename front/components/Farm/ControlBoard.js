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

    return <div>

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
<div>
    <div align='center'>
        <Progress type="dashboard" percent={20} format={percent => `${percent} °C`} />
        &emsp;&emsp;
        <Progress type="dashboard" percent={40} />
           
    </div>
    <br/>
    <div id='col'>
        <Slider range marks={marks} defaultValue={[17, 23]} max ='30' />
    </div>
    <br/>
    <div align='center'>
        <img src="https://i.postimg.cc/SKLHkLzy/fan.png" width="70" alt="sample"></img>&emsp;
        <Switch />

        <img src="https://i.postimg.cc/GmphV2Bg/water.jpg" width="90" alt="sample"></img> 
        <Switch />&emsp;
        <div>
            <img src="https://i.postimg.cc/j5YTxd5b/light.jpg" width="80" alt="sample"></img>
        </div>
        
    </div>

    </div>
</div>
}

export default control
