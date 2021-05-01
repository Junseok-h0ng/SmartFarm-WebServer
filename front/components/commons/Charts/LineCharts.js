import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

function LineCharts() {
    return (
        <div>
            <Line   
            data={{
                labels: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
                datasets:[
                    {
                        label : "온도",
                        data: [21,24,31,40,32,23,30,21,24,31,40,32,23,30,21,24,31,40,32,23,30,21,24,31,40,32,23,30],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(255, 201, 14, 1)",
	                backgroundColor: "rgba(255, 201, 14, 0.5)",
                    },
                    {
                        label : "습도",
                        data: [24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24, 26,28,34,32,21,30],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(25, 201, 14, 13)",
	                backgroundColor: "rgba(25, 201, 14, 0.5)",
                    },
                    {
                        label : "물양",
                        data: [20, 17,30,20,10,5,20, 17,30,20,10,5,20, 17,30,20,10,5,20, 17,30,20,10,5,30], 
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(75, 197, 220, 1",
	                backgroundColor: "rgba(75, 197, 220, 1)",
                    },
                    {
                        label : "밝기",
                        data: [33,42,40,54,23,12,23,33,42,40,54,23,12,23,33,42,40,54,23,12,23,33,42,40,54,23,12,23],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(144, 144, 114, 1)",
	                backgroundColor: "rgba(2144, 144, 114, 1)",
                    },
                ], 
            }}
            width={300}
            height={200}
            style={{height:'200px',objectFit:'contain'}}
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
        </div>
    )
}

export default LineCharts
