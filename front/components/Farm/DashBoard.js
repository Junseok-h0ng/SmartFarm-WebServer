import React from 'react'
import {useRouter} from 'next/router'
import { Bar, Line } from 'react-chartjs-2'
import { Card } from 'react-bootstrap'

function dashboard() {
    
    const router = useRouter();
    const {pid} = router.query;

    return <div>
    <style jsx>{`    
    #col_2 {
        column-count: 2;
    }
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
            labels: ['현재 값'],
            datasets:[
                {
                    label : "온도",
                    data: [21],
                    borderColor: [
                        "rgba(255, 201, 14, 1)",
                    ],
                    borderColor: "rgba(255, 201, 14, 1)",
                backgroundColor: "rgba(255, 201, 14, 0.5)",

                },
                {
                    label : "습도",
                    data: [24],
                    borderColor: [
                        "rgba(255, 201, 14, 1)",
                    ],
                    borderColor: "rgba(25, 201, 14, 13)",
                backgroundColor: "rgba(25, 201, 14, 0.5)",

                },
                {
                    label : "물양",
                    data: [20],
                    borderColor: [
                        "rgba(255, 201, 14, 1)",
                    ],
                    borderColor: "rgba(75, 197, 220, 1",
                backgroundColor: "rgba(75, 197, 220, 1)",

                },
                {
                    label : "밝기",
                    data: [33],
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

export default dashboard
