import React from 'react'
import { HorizontalBar } from 'react-chartjs-2';

const ControlForm = () => {
    return <div>
        <div>
    <style jsx>{`    
        div {
        column-count:2;
        }
    `}</style>
        <div>
        <HorizontalBar width='200' height ='150'
        data={{
            labels: ['온도'],
            datasets:[
                {
                    label : "현재온도",
                    data: [22],
                    fill: false,
                    borderColor: "rgba(255, 201, 14, 1)",
                backgroundColor: "rgba(255, 201, 14, 0.5)",
                },
                {
                    label : "목표온도",
                    data: [21],
                    fill: false,
                    borderColor: "rgba(255, 201, 14, 1)",
                backgroundColor: "rgba(2, 277, 14, 0.5)",
                },
            ], 
        }}

       
        options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                    },
                    scaleLabel: {
                        display: true,
                    }
                }],
                yAxes: [{
                    display: true,  
                    scaleLabel: {
                        display: true,
                    }
                }]  
            }
        }}
        />
        </div>
        <div align="center">추천온도</div>
        </div>

    <div>
    <div>
    <style jsx>{`    
        div {
        column-count:2;
        }
    `}</style>
        <div>
        <HorizontalBar width='200' height ='150'
        data={{
            labels: ['습도'],
            datasets:[
                {
                    label : "현재습도",
                    data: [24],
                    fill: false,
                    borderColor: "rgba(255, 201, 14, 1)",
                backgroundColor: "rgba(255, 201, 14, 0.5)",
                },
                {
                    label : "목표습도",
                    data: [20],
                    fill: false,
                    borderColor: "rgba(255, 201, 14, 1)",
                backgroundColor: "rgba(2, 277, 14, 0.5)",
                },
            ], 
        }}

       
        options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                    },
                    scaleLabel: {
                        display: true,
                    }
                }],
                yAxes: [{
                    display: true,  
                    scaleLabel: {
                        display: true,
                    }
                }]
            }
        }}
        />
        </div>
        <div align="center">추천습도</div>
        </div>
        
        </div>

        <div>
        <div>
    <style jsx>{`    
        div {
        column-count:2;
        }
    `}</style>
        <div>
        <HorizontalBar width='200' height ='150'
        data={{
            labels: ['밝기'],
            datasets:[
                {
                    label : "현재밝기",
                    data: [30],
                    fill: false,
                    borderColor: "rgba(255, 201, 14, 1)",
                backgroundColor: "rgba(255, 201, 14, 0.5)",
                },
                {
                    label : "목표밝기",
                    data: [31],
                    fill: false,
                    borderColor: "rgba(255, 201, 14, 1)",
                backgroundColor: "rgba(2, 277, 14, 0.5)",
                },
            ], 
        }}

        options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                    },
                    scaleLabel: {
                        display: true,
                    }
                }],
                yAxes: [{
                    display: true,  
                    scaleLabel: {
                        display: true,
                    }
                }]
            }
        }}
        />   
        </div>
            <div align="center">추천밝기</div>
        </div>
        
        </div>
    </div>

}

export default ControlForm
