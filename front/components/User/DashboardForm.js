import Column from 'antd/lib/table/Column';
import React from 'react'
import { Bar, Line } from 'react-chartjs-2'



const DashboardForm = () => {
    return <div>
        <div>
        <style jsx>{`    
        div {
          column-count:2;
        }
      `}</style>
        <div>
        <Bar   
            data={{
                labels: ['4/5', '4/6', '4/7', '4/8', '4/9'],
                datasets:[
                    {
                        label : "온도",
                        data: [21, 22, 27, 24, 27],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(255, 201, 14, 1)",
	                backgroundColor: "rgba(255, 201, 14, 0.5)",

                    },
                    {
                        label : "습도",
                        data: [24, 27, 21, 26, 28],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(25, 201, 14, 13)",
	                backgroundColor: "rgba(25, 201, 14, 0.5)",

                    },
                    

                ],

                
                
            }}
            width={300}
            height={400}
           
            options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: '날짜'
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
        <div align="right">현재상태</div>
        </div>

        
            
        <div>
        <Line
            data={{
                labels: ['4/5', '4/6', '4/7', '4/8'],
                datasets:[
                    {
                        label : "토양습도",
                        data: [300, 454, 700, 654],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(5, 1, 14, 1)",
	                backgroundColor: "rgba(5, 1, 14, 0.5)",
                    },
                ]      
            }}
            width={250}
            height={220}
            options={{
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: '날짜'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            
            }}

        />
        </div>
    </div>
}

export default DashboardForm
