import React from 'react';
import { DatePicker, Space } from 'antd';
import { Line } from 'react-chartjs-2';

const { RangePicker } = DatePicker;


const FilterFarmData = () => {
    return (
        <div>
            <style jsx>{`    
            #Farm_container {
                padding-top: 10%;
                justify-content: center;
                align-items: center;
            }
            
            // #card_container {
            //     border: 2px solid #6f4f28;
            //     border-radius: 30px;                
            // }
            #dash_card {
                width: 75%;
                color: #5cb85c;
                // border: 2px solid #6f4f28;
                // text-align: center;
            }
    
            #dash_card_th {
                border: 2px solid #6f4f28;
                padding: 10px;
            }
    
            #dash_card_td {
                border: 2px solid #6f4f28;
                padding: 10px;
            }
            `}</style>

            <div id= 'Farm_container'>
                <div>
                    <Space direction="vertical">
                        <RangePicker />
                    </Space>
                </div>
                <br/>
                <div>
                    <Line
                        data={{
                            labels: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
                            datasets: [
                                {
                                    label: "농장온도",
                                    data: [21,24,31,40,32,23,30,21,24,31,40,32,23,30,21,24,31,40,32,23,30,21,24,31,40,32,23,30],
                                    fill: false,
                                    borderColor: "rgba(255, 201, 14, 1)",
                                    lineTension: 0,
                                },
                                {
                                    label: "농장습도",
                                    data: [21,22,31,40,32,23,32,21,24,31,42,32,23,30,21,24,31,40,22,23,30,2,24,31,40,2,2,30,12,53,23,34,56],
                                    fill: false,
                                    borderColor: "rgba(25, 201, 14, 13)",
                                    lineTension: 0,
                                },
                                {
                                    label: "토양온도",
                                    data: [24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24,26,28,34,32,21,30,20,21,32],
                                    fill: false,
                                    borderColor: "rgba(255, 150, 14, 1)",
                                    lineTension: 0,
                                },
                                {
                                    label: "토양습도",
                                    data: [41, 42, 45, 45, 46, 44,41, 42, 45, 45, 46, 44,41, 42, 45, 45, 46, 44,41, 42, 45, 45, 46, 44,30],
                                    fill: false,
                                    borderColor: "rgba(55, 111, 95, 13)",
                                    lineTension: 0,
                                },
                                {
                                    label: "물양",
                                    data: [30, 23, 33, 23, 36, 23,30, 23, 33, 23, 36, 23,30, 23, 33, 23, 36, 23,30, 23, 33, 23, 36, 23,20],
                                    fill: false,
                                    borderColor: "rgba(75, 197, 220, 1",
                                    lineTension: 0,
                                },
                                {
                                    label: "CO2",
                                    data: [50, 50, 54, 56, 54, 51,50, 50, 54, 56, 54, 51,50, 50, 54, 56, 54, 51,50, 50, 54, 56, 54, 51,20],
                                    fill: false,
                                    borderColor: "rgba(144, 144, 114, 1)",
                                    lineTension: 0,
                                },
                            ],

                        }}
                        width={'50%'}
                        height={400}

                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [{
                                    display: true,
                                    scaleLabel: {
                                        display: false,
                                    }
                                }],
                                yAxes: [{
                                    display: true,
                                    ticks: {
                                        suggestedMin: 0,
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: ''
                                    }
                                }]
                            }
                        }}
                    />
                </div>
            </div>
            <br/><br/>
            <div align='center' id= 'card_container'>
                <table id='dash_card'>
                    <tr id='dash_card_th'>
                        <td id='dash_card_td'>
                            <h4>농장평균온도</h4>
                            <h4>21℃</h4>
                        </td>
                        <td id='dash_card_td'>
                            <h4>농장평균습도</h4>
                            <h4>24℃</h4>
                        </td>                      
                    </tr>
                    <tr id='dash_card_th'>
                        <td id='dash_card_td'>
                            <h4>토양평균온도</h4>
                            <h4>27℃</h4>
                        </td>
                        <td id='dash_card_td'>
                            <h4>토양평균습도</h4>
                            <h4>29℃</h4>
                        </td>
                    </tr>
                    <tr id='dash_card_th'>
                        <td id='dash_card_td'>
                            <h4>평균물양</h4>
                            <h4>20</h4>
                        </td>
                        <td id='dash_card_td'>
                            <h4>평균 CO2</h4>
                            <h4>33</h4>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )

}

export default FilterFarmData