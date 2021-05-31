import React from 'react';
import Link from 'next/link';
import { DatePicker, Space,Button } from 'antd';
import { Line } from 'react-chartjs-2';

const { RangePicker } = DatePicker;


const PreviousFarmData = (props) => {
    return (
        <div>
            <style jsx>{`    
            #Farm_container {
                margin-top: 10px;
                justify-content: center;
                align-items: center;
            }
            
            // #card_container {
            //     border: 2px solid #6f4f28;
            //     border-radius: 30px;                
            // }
            #dash_card {
                width: 90%;
                color: #5cb85c;
                // border: 1px solid #6f4f28;
                text-align: center;
            }
    
            #dash_card_th {
                border: 1px solid #6f4f28;
                padding: 10px;
            }
    
            #dash_card_td {
                border: 1px solid #6f4f28;
                padding: 10px;
            }
            #tabmenu label {
                display: inline-block;
                padding: 2%;
                text-align: center;
                width: 33%;
                line-height: 20px;
                font-weight: bold;
                background-color: #eee;
                border: 1px solid #ccc;
                border-radius: 3px 3px 0 0;
                color: #777;
                cursor: pointer;
    
            }
    
            #tabmenu input:nth-of-type(1):checked~label:nth-of-type(1) {
                background-color: burlywood;
                color: #669999;
            }
    
            #tabmenu input:nth-of-type(2):checked~label:nth-of-type(2) {
                background-color: burlywood;
                color: #669999;
            }
    
            #tabmenu input:nth-of-type(3):checked~label:nth-of-type(3) {
                background-color: burlywood;
                color: #669999;
            }
    
            #tabmenu input:nth-of-type(4):checked~label:nth-of-type(4) {
                background-color: burlywood;
                color: #669999;
            }
    
            #tabmenu input:nth-of-type(5):checked~label:nth-of-type(5) {
                background-color: burlywood;
                color: #669999;
            }
    
            #tabmenu input:nth-of-type(6):checked~label:nth-of-type(6) {
                background-color: burlywood;
                color: #669999;
            }
    
            #tabmenu>* {
                display: none;
            }
    
            #tabmenu input:nth-child(1):checked~#tab1_content,
            #tabmenu input:nth-child(2):checked~#tab2_content,
            #tabmenu input:nth-child(3):checked~#tab3_content,
            #tabmenu input:nth-child(4):checked~#tab4_content,
            #tabmenu input:nth-child(5):checked~#tab5_content,
            #tabmenu input:nth-child(6):checked~#tab6_content {
                display: block;
            }
    
            #tabmenu #tab1_content,
            #tabmenu #tab2_content,
            #tabmenu #tab3_content,
            #tabmenu #tab4_content,
            #tabmenu #tab5_content,
            #tabmenu #tab6_content {
                padding: 32px;
                border: 1px solid #ddd;
                width: 100%;
                height: 100%;
            }
            `}</style>

        <div id='Farm_container'>
                <div>
                    <DatePicker onChange />
                    <Link href={`/farm/dashboard/${props.pid}`}>
                            <Button style={{position: 'absolute', right: 10,color:'#5cb85c',borderColor: "#5cb85c",borderRadius:'12px'}}>현재 정보</Button>
                    </Link>
                </div>
                <br />
                <div>
                    <Line
                        data={{
                            labels: ['0시', '3시', '6시', '9시', '12시', '15시', '18시', '21시'],
                            datasets: [
                                {
                                    label: "농장온도",
                                    data: [21, 22, 35, 25, 26, 24, 25, 30],
                                    fill: false,
                                    borderColor: "rgba(255, 201, 14, 1)",
                                    lineTension: 0,
                                },
                                {
                                    label: "농장습도",
                                    data: [35, 32, 33, 35, 36, 34, 33, 39],
                                    fill: false,
                                    borderColor: "rgba(25, 201, 14, 13)",
                                    lineTension: 0,
                                },
                                {
                                    label: "토양온도",
                                    data: [25, 23, 30, 20, 22, 28, 25, 24],
                                    fill: false,
                                    borderColor: "rgba(255, 150, 14, 1)",
                                    lineTension: 0,
                                },
                                {
                                    label: "토양습도",
                                    data: [41, 42, 45, 45, 46, 44, 50, 43],
                                    fill: false,
                                    borderColor: "rgba(55, 111, 95, 13)",
                                    lineTension: 0,
                                },
                                {
                                    label: "물양",
                                    data: [30, 23, 33, 23, 36, 23, 33, 30],
                                    fill: false,
                                    borderColor: "rgba(75, 197, 220, 1",
                                    lineTension: 0,
                                },
                                {
                                    label: "CO2",
                                    data: [50, 50, 54, 56, 54, 51, 51, 58],
                                    fill: false,
                                    borderColor: "rgba(144, 144, 114, 1)",
                                    lineTension: 0,
                                },
                            ],

                        }}
                        width={'50%'}
                        height={400}

                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [{
                                    display: true,
                                    scaleLabel: {
                                        display: false,
                                    }
                                }],
                                yAxes: [{
                                    display: true,
                                    ticks: {
                                        suggestedMin: 0,
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: ''
                                    }
                                }]
                            }
                        }}
                    />
                </div>
            </div>
            <br /><br />


            <div align='center' id='card_container'>
                <div id="tabmenu">
                    <input type="radio" name="tab" id="tab1"></input>
                    <input type="radio" name="tab" id="tab2"></input>
                    <input type="radio" name="tab" id="tab3"></input>
                    <input type="radio" name="tab" id="tab4"></input>
                    <input type="radio" name="tab" id="tab5"></input>
                    <input type="radio" name="tab" id="tab6"></input>
                    <label for="tab1">농장온도</label>
                    <label for="tab2">농장습도</label>
                    <label for="tab3">토양온도</label>
                    <label for="tab4">토양습도</label>
                    <label for="tab5">물양  </label>
                    <label for="tab6">CO2  </label>
                    <div id="tab1_content">
                        <table id='dash_card'>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>0시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>21℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>3시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>27℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>6시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>28℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>9시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>25℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>12시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>24℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>15시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>26℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>18시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>26℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>21시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>23℃</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="tab2_content">
                    <table id='dash_card'>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>0시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>27℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>3시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>25℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>6시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>23℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>9시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>27℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>12시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>24℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>15시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>25℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>18시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>27℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>21시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>23℃</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="tab3_content">
                    <table id='dash_card'>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>0시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>18℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>3시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>20℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>6시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>22℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>9시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>29℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>12시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>24℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>15시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>26℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>18시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>25℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>21시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>26℃</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="tab4_content">
                    <table id='dash_card'>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>0시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>30℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>3시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>40℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>6시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>35℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>9시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>45℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>12시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>29℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>15시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>25℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>18시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>56℃</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>21시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>45℃</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="tab5_content">
                    <table id='dash_card'>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>0시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>60</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>3시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>50</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>6시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>60</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>9시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>50</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>12시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>60</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>15시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>50</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>18시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>55</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>21시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>56</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="tab6_content">
                    <table id='dash_card'>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>0시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>50</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>3시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>54</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>6시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>56</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>9시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>55</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>12시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>56</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>15시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>45</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>18시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>55</h4>
                                </td>
                            </tr>
                            <tr id='dash_card_th'>
                                <td id='dash_card_td'>
                                    <h4>21시</h4>
                                </td>
                                <td id='dash_card_td'>
                                    <h4>50</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PreviousFarmData