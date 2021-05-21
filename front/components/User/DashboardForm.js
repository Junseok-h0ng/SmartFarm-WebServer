import React from 'react';
import { Bar} from 'react-chartjs-2';
import PopUp from '../Modal_Popup/PopUp';
import PopUp2 from '../Modal_Popup/PopUp2';
import PopUp3 from '../Modal_Popup/PopUp3';
import PopUp4 from '../Modal_Popup/PopUp4';

const DashboardForm = () => {
    return <div>
        <style jsx>{`    

        #dash_col {column-count: 1;}
                @media screen and (min-width:600px){
                #dash_col {column-count: 2;}
        }

        #dash_card {
            width: 70%;
            border: 3px solid #a0a0a0;
            text-align: center;
        }

        #dash_card_th {
            border: 2.2px solid #a0a0a0;
            padding: 10px;
        }

        #dash_card_td {
            border: 2.2px solid #a0a0a0;
            padding: 10px;
        }
        
    
      `}</style>
      <div>
        <div id='dash_col'>
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
        <div align='center'>
            <table id= 'dash_card'>
                <tr id= 'dash_card_th'>
                    <td id= 'dash_card_td'>
                        <h4>온도</h4>
                        <h4>21℃</h4>
                        <PopUp/>
                    </td>
                    <td>
                        <h4>습도</h4>
                        <h4>24℃</h4>
                        <PopUp2/>
                    </td>
                </tr>
                <tr id= 'dash_card_th'>
                    <td id= 'dash_card_td'>
                        <h4>물양</h4>
                        <h4>20</h4>
                        <PopUp3/>
                    </td>
                    <td id= 'dash_card_td'>
                        <h4>밝기</h4>
                        <h4>33</h4>
                        <PopUp4/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </div>
}

export default DashboardForm
