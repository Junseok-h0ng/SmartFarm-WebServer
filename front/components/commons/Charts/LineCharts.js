import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'

function LineCharts(props) {

    const [farmData, setFarmData] = useState({});



    useEffect(() => {
        let data = {
            farmTemp: [],
            farmHumidity: [],
            soilTemp: [],
            soilHumidity: [],
            co2ppm: [],
            currentWater: []
        };

        for (let i = 0; i < 24; i++) {
            data.farmTemp.push(props.farmData.farmTemp[i]);
            data.farmHumidity.push(props.farmData.farmHumidity[i]);
            data.soilHumidity.push(props.farmData.soilHumidity[i]);
            data.co2ppm.push(props.farmData.co2ppm[i]);
            data.currentWater.push(props.farmData.currentWater[i]);
        }

        setFarmData(data);
    }, [])

    const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
    return (
        <div>
            {farmData &&
                <Line
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                label: "농장온도",
                                data: farmData.farmTemp,
                                borderColor: [
                                    "rgba(255, 201, 14, 1)",
                                ],
                                borderColor: "rgba(255, 201, 14, 1)",
                                backgroundColor: "rgba(255, 201, 14, 0.5)",
                            },
                            {
                                label: "농장습도",
                                data: farmData.farmHumidity,
                                borderColor: [
                                    "rgba(255, 22, 255, 255)",
                                ],
                                borderColor: "rgba(255, 22, 255, 1)",
                                backgroundColor: "rgba(255, 22, 255, 0.5)",
                            },
                            {
                                label: "토양습도",
                                data: farmData.soilHumidity,
                                borderColor: [
                                    "rgba(255, 201, 14, 1)",
                                ],
                                borderColor: "rgba(25, 201, 14, 13)",
                                backgroundColor: "rgba(25, 201, 14, 0.5)",
                            },
                            {
                                label: "co2농도",
                                data: farmData.co2ppm,
                                borderColor: [
                                    "rgba(255, 201, 14, 1)",
                                ],
                                borderColor: "rgba(25, 201, 14, 13)",
                                backgroundColor: "rgba(25, 201, 14, 0.5)",
                            },
                            {
                                label: "물양",
                                data: farmData.currentWater,
                                borderColor: [
                                    "rgba(255, 201, 14, 1)",
                                ],
                                borderColor: "rgba(25, 201, 14, 13)",
                                backgroundColor: "rgba(25, 201, 14, 0.5)",
                            },
                        ],
                    }}
                    width={300}
                    height={200}
                    style={{ height: '200px', objectFit: 'contain' }}
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
                                    labelString: '°C'
                                }
                            }]
                        }
                    }}
                />
            }

        </div>
    )
}

export default LineCharts
