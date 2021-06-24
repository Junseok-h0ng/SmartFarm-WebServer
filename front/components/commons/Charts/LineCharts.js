import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'

function LineCharts(props) {

    const [farmData, setFarmData] = useState({});



    useEffect(() => {

        console.log(props.farmData);

        let data = {
            farmTemp: [],
            farmHumidity: [],
            soilTemp: [],
            soilHumidity: [],
            co2ppm: [],
        };

        

        for (let i = 0; i < 24; i+=3) {
            data.farmTemp.push(props.farmData.farmTemp[i]);
            data.farmHumidity.push(props.farmData.farmHumidity[i]);
            data.soilHumidity.push(props.farmData.soilHumidity[i]);
        }

        setFarmData(data);
    }, [])

    const labels = ['0시', '3시', '6시', '9시', '12시', '15시', '18시', '21시']
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
