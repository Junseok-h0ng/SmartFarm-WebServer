import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

function LineCharts() {
    const data = {
        "외부온도":[21,24,31,40,32,23,30,21,24,31,40,32,23,30,21,24,31,40,32,23,30,21,24,31,40,32,23,30],
        "내부온도":[21,22,31,40,32,23,32,21,24,31,42,32,23,30,21,24,31,40,22,23,30,2,24,31,40,2,2,30],
        "외부습도":[24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24,26,28,34,32,21,30],
        "내부습도":[24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24,26,28,34,32,21,30],
        "c02농도" : [24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24,26,28,34,32,21,30]
    }
    
    const labels = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
    return (
        <div>
            <Line   
            data={{
                labels: labels,
                datasets:[
                    {
                        label : "외부온도",
                        data: data.외부온도,
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(255, 201, 14, 1)",
	                backgroundColor: "rgba(255, 201, 14, 0.5)",
                    },
                    {
                        label : "내부온도",
                        data: data.내부온도,
                        borderColor: [
                            "rgba(255, 22, 255, 255)",
                        ],
                        borderColor: "rgba(255, 22, 255, 1)",
	                backgroundColor: "rgba(255, 22, 255, 0.5)",
                    },
                    {
                        label : "외부습도",
                        data: data.외부습도,
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(25, 201, 14, 13)",
	                backgroundColor: "rgba(25, 201, 14, 0.5)",
                    },
                    {
                        label : "내부습도",
                        data: data.내부습도,
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
