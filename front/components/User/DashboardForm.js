import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Popover } from 'antd'
import { BulbOutlined } from '@ant-design/icons';
import PopUp from '../Modal_Popup/PopUp';

const DashboardForm = () => {
    return <div>
        <style jsx>{`    

        #dash_col {column-count: 1;}
                @media screen and (min-width:600px){
                #dash_col {column-count: 2;}
        }

        #dash_card {
            width: 75%;
            border: 2.5px solid #a0a0a0;
            text-align: center;
        }

        #dash_card_th {
            border: 2.2px solid #a0a0a0;
            padding: 10px;
        }

        #dash_card_td {
            border: 2.2px solid #a0a0a0;
            padding: 10px;
        }

        #now_condition {
            width: 100%;
            padding-top: 3%;
            justify-content: center;
            align-items: center;
        }
        
      `}</style>

        <div>
            <div id='dash_col'>
                <div>
                    <Bar
                        data={{
                            labels: ['현재 값'],
                            datasets: [
                                {
                                    label: "농장온도",
                                    data: [21],
                                    borderColor: [
                                        "rgba(255, 201, 14, 1)",
                                    ],
                                    borderColor: "rgba(255, 201, 14, 1)",
                                    backgroundColor: "rgba(255, 201, 14, 0.5)",
                                },
                                {
                                    label: "농장습도",
                                    data: [24],
                                    borderColor: [
                                        "rgba(255, 201, 14, 1)",
                                    ],
                                    borderColor: "rgba(25, 201, 14, 13)",
                                    backgroundColor: "rgba(25, 201, 14, 0.5)",
                                },
                                {
                                    label: "토양온도",
                                    data: [27],
                                    borderColor: [
                                        "rgba(255, 201, 14, 1)",
                                    ],
                                    borderColor: "rgba(255, 150, 14, 1)",
                                    backgroundColor: "rgba(255, 151, 14, 0.5)",
                                },
                                {
                                    label: "토양습도",
                                    data: [29],
                                    borderColor: [
                                        "rgba(255, 201, 14, 1)",
                                    ],
                                    borderColor: "rgba(55, 111, 95, 13)",
                                    backgroundColor: "rgba(55, 111, 95, 0.5)",
                                },
                                {
                                    label: "물양",
                                    data: [25],
                                    borderColor: [
                                        "rgba(255, 201, 14, 1)",
                                    ],
                                    borderColor: "rgba(75, 197, 220, 1",
                                    backgroundColor: "rgba(75, 197, 220, 1)",
                                },
                                {
                                    label: "CO2",
                                    data: [33],
                                    borderColor: [
                                        "rgba(255, 201, 14, 1)",
                                    ],
                                    borderColor: "rgba(144, 144, 114, 1)",
                                    backgroundColor: "rgba(2144, 144, 114, 1)",
                                },
                            ],

                        }}
                        width={'50%'}
                        height={370}

                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [{
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                    }
                                }],
                                yAxes: [{
                                    display: true,
                                    ticks: {
                                        suggestedMin: 0,
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString:''
                                    }
                                }]
                            }
                        }}
                    />

                </div>
                <div id='now_condition' align="center">
                    <div>
                        <div><img width='100%' src="https://i.ibb.co/QXrwTWh/sample.jpg"></img></div>
                    </div>
                </div>
            </div>
            <br />
            <div align='center'>

                <table id='dash_card'>
                    <tr>
                        <td colspan='4'>
                            <Popover trigger="click">
                                <button><BulbOutlined />TIP!</button>
                            </Popover>
                        </td>
                    </tr>
                    <tr id='dash_card_th'>
                        <td id='dash_card_td'>
                            <h4>농장온도</h4>
                            <h4>21℃</h4>
                        </td>
                        <td id='dash_card_td'>
                            <h4>농장습도</h4>
                            <h4>24℃</h4>
                        </td>                      
                    </tr>
                    <tr id='dash_card_th'>
                        <td id='dash_card_td'>
                            <h4>토양온도</h4>
                            <h4>27℃</h4>
                        </td>
                        <td id='dash_card_td'>
                            <h4>토양습도</h4>
                            <h4>29℃</h4>
                        </td>
                    </tr>
                    <tr id='dash_card_th'>
                        <td id='dash_card_td'>
                            <h4>물양</h4>
                            <h4>20</h4>
                        </td>
                           <td id='dash_card_td'>
                            <h4>CO2</h4>
                            <h4>33</h4>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
}

export default DashboardForm
