import React from 'react';
import { DatePicker, Space } from 'antd';
import { Line } from 'react-chartjs-2';

function onChange(date, dateString) {
    console.log(date, dateString);
}


const FarmData = () => {
    return (

        <div>
            <DatePicker onChange={onChange} />



            <div>
                <Line
                    data={{
                        labels: ['mm/dd', 'mm/dd','mm/dd','mm/dd','mm/dd','mm/dd'],
                        datasets: [
                            {
                                label: "농장온도",
                                data: [21,22,35,25,26,24],
                                fill: false,
                                borderColor: "rgba(255, 201, 14, 1)",
                                lineTension : 0,
                            },
                            {
                                label: "농장습도",
                                data: [35,32,33,35,36,34],
                                fill: false,
                                borderColor: "rgba(25, 201, 14, 13)",
                                lineTension : 0,
                            },
                            {
                                label: "토양온도",
                                data: [25,23,30,20,22,28],
                                fill: false,
                                borderColor: "rgba(255, 150, 14, 1)",
                                lineTension : 0,
                            },
                            {
                                label: "토양습도",
                                data: [41,42,45,45,46,44],
                                fill: false,
                                borderColor: "rgba(55, 111, 95, 13)",
                                lineTension : 0,
                            },
                            {
                                label: "물양",
                                data: [30,23,33,23,36,23],
                                fill: false,
                                borderColor: "rgba(75, 197, 220, 1",
                                lineTension : 0,
                            },
                            {
                                label: "CO2",
                                data: [50,50,54,56,54,51],
                                fill: false,
                                borderColor: "rgba(144, 144, 114, 1)",
                                lineTension : 0,
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
    )

}

export default FarmData