import React from 'react'
import { Bar } from 'react-chartjs-2'

const DashboardForm = () => {
    return <div>
        <Bar
        data= {{
            labels: ['3/19', '3/20', '3/21', '3/22', '3/23', '3/24', '3/25'],
            datasets: 
            [{
                label: '온도',
                data: [
                    20,
                    21,
                    24,
                    26,
                    23,
                    25,
                    21
                ],
                borderColor: "rgba(255, 201, 14, 1)",
            backgroundColor: "rgba(255, 201, 14, 0.5)",
            fill : false,
                lineTension: 0
            },
            {
            label: '습도',
            data: [
                    24,
                    20,
                    22,
                    21,
                    19,
                    18,
                    20
                ],
                borderColor: "rgba(25, 155, 14, 13)",
            backgroundColor: "rgba(5, 155, 14, 0.5)",
            fill : false,
            lineTension: 0
            },
            ]
            
        }}
        
        />
    </div>
}

export default DashboardForm
