import Column from 'antd/lib/table/Column';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import $ from "jquery";


// function reaction_col(){

//     // var windowWidth = width_col()
//     if (typeof window !== "undefined"){

//         if($(window).width() > 450) {
//             return 'col_2';

//         } else {
//             return null;
//         }
//     }
// }

const DashboardForm = () => {
    return <div>
        <style jsx>{`    

        #col_2 {
            column-count: 2;
        }
        
        // #flex-container { 
        //     position:absolute;
        //     top:0; left:0; bottom:0; right:0;
        //     height:11%;
        //     margin:17% auto;
        // }

        #col {column-count: 1;}
                @media screen and (min-width:600px){
                #col {column-count: 2;}
        }
    
      `}</style>
      <div id='flex-container'>
        <div id='col'>
        <div>
        <Bar   
            data={{
                labels: ['현재 값', '권장 값'],
                datasets:[
                    {
                        label : "온도",
                        data: [21,24],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(255, 201, 14, 1)",
	                backgroundColor: "rgba(255, 201, 14, 0.5)",

                    },
                    {
                        label : "습도",
                        data: [24, 26],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(25, 201, 14, 13)",
	                backgroundColor: "rgba(25, 201, 14, 0.5)",

                    },
                    {
                        label : "물양",
                        data: [20, 17],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(75, 197, 220, 1",
	                backgroundColor: "rgba(75, 197, 220, 1)",

                    },
                    {
                        label : "밝기",
                        data: [33, 40],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(144, 144, 114, 1)",
	                backgroundColor: "rgba(2144, 144, 114, 1)",

                    },
                    

                ],       
                
            }}
            width= {'50%'}
            height= {400}
           
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
        <div align="center">
            <div>현재상태</div>
            <img width={250} height={320} src= "https://i.ibb.co/QXrwTWh/sample.jpg"></img>
        </div>
        </div>
        <br/>
        <div align='center' class='container'>
        {/* <Line
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
        /> */}
        <table width='70%'>
            <tr>
                <td>
                    <Card  className='card border-success mb-3' style={{ color: "green" }}  align='center'>
                        <Card.Body>
                                <Card.Title>
                                    현재 온도
                                </Card.Title>  
                                <Card.Text>21 °C</Card.Text>
                        </Card.Body>
                    </Card>
                </td>
                <td>
                    <Card className='card border-success mb-3' style={{ color: "green" }} align='center'>
                        <Card.Body>
                            <Card.Title>
                                현재 습도
                            </Card.Title>  
                            <Card.Text>24 °C</Card.Text>
                        </Card.Body>
                    </Card>
                </td>
            </tr>
            <tr>
                <td>
                    <Card  className='card border-success mb-3' style={{ color: "green" }} align='center'>
                        <Card.Body>
                            <Card.Title>
                                현재 물량
                            </Card.Title>  
                            <Card.Text>20%</Card.Text>
                        </Card.Body>
                    </Card>
                </td>
                <td>
                    <Card  className='card border-success mb-3' style={{ color: "green" }} align='center'>
                        <Card.Body>
                            <Card.Title>현재 밝기</Card.Title>  
                            <Card.Text>
                                33
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </td>
            </tr>
            </table>
        </div>
    </div>
    </div>
}

export default DashboardForm
