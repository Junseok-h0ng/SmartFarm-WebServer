import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { Popover, Button } from 'antd'
import { Bar, Line } from 'react-chartjs-2'
import { getCropsTips } from '../../_redux/slices/farm';

function dashboard(props) {

    const router = useRouter();
    const { pid } = router.query;

    const dispatch = useDispatch();
    const farmData = useSelector(state => state.farm.data)
    const [cropsTips, setCropsTips] = useState({});

    useEffect(() => {
        // farmData.map((data)=>{
        //     if(data._id === pid && data.crops.id){              
        //         dispatch(getCropsTips({cropsId:data.crops.id}))
        //         .then((res=>{
        //             if(res.payload){
        //                 console.log(res.payload.data[0])
        //                 setCropsTips(res.payload);
        //             }
        //         }))
        //     }
        // })
        console.log(props);
        console.log(props.cropsTips);
        setCropsTips(props.cropsTips);
    }, [])


    const popupContent = () => {
        if (cropsTips.data) {
            const content = cropsTips.data.map((data) => (
                <p>{data}</p>
            ));
            return content;
        }

    }

    return <div>
        <style jsx>{` 

    @media screen and (min-width:600px){
        #dash_col {column-count: 2;}
    }
    #dash_card {
        width: 75%;
        border: 2.5px solid #a0a0a0;
        text-align: center;
    }
    #dash_card_th {
        border: 2.2px solid #a0a0a0;
        padding: 10px;
    }
    #dash_card_td {
        border: 2.2px solid #a0a0a0;
        padding: 10px;
        width:50%;
    }
    #now_condition {
        padding-top: 1%;
    }

  `}</style>

        <div>
            <div id='dash_col'>
                <div>

                    {props.farmData &&
                        <Bar
                            data={{
                                labels: ['현재 값'],
                                datasets: [
                                    {
                                        label: "농장온도",
                                        data: [props.farmData.farmTemp],
                                        borderColor: [
                                            "rgba(255, 201, 14, 1)",
                                        ],
                                        borderColor: "rgba(255, 201, 14, 1)",
                                        backgroundColor: "rgba(255, 201, 14, 0.5)",
                                    },
                                    {
                                        label: "농장습도",
                                        data: [props.farmData.farmHumidity],
                                        borderColor: [
                                            "rgba(255, 201, 14, 1)",
                                        ],
                                        borderColor: "rgba(25, 201, 14, 13)",
                                        backgroundColor: "rgba(25, 201, 14, 0.5)",
                                    },
                                    {
                                        label: "토양습도",
                                        data: [props.farmData.soilHumidity],
                                        borderColor: [
                                            "rgba(255, 201, 14, 1)",
                                        ],
                                        borderColor: "rgba(55, 111, 95, 13)",
                                        backgroundColor: "rgba(55, 111, 95, 0.5)",
                                    },
                                ],
                            }}
                            width={null}
                            height={385}

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
                                            labelString: ''
                                        }
                                    }]
                                }
                            }}
                        />
                    }


                </div>
                <div id='now_condition'>
                    <div><img width='97%' height={333} src={"data:image/jpg;base64," + props.farmData.src}></img></div>
                </div>
            </div>
            <br />
            <div align='center'>

                <table id='dash_card'>
                    {cropsTips.data &&
                        <tr>
                            <td colspan='4'>

                                <Popover title={props.cropsTips.title} content={popupContent} trigger="click">
                                    <Button>tip</Button>
                                </Popover>

                            </td>
                        </tr>
                    }
                    <tr id='dash_card_th'>
                        <td id='dash_card_td'>
                            <h4>농장온도</h4>
                            <h4>{props.farmData.farmTemp}℃</h4>
                        </td>
                        <td id='dash_card_td'>
                            <h4>농장습도</h4>
                            <h4>{props.farmData.farmHumidity}%</h4>
                        </td>
                    </tr>
                    <tr id='dash_card_th'>
                        <td id='dash_card_td'>
                            <h4>토양습도</h4>
                            <h4>{props.farmData.soilHumidity}%</h4>
                        </td>
                        <td id='dash_card_td'>
                            <h4>남은물양</h4>
                            <h4>{props.farmData.currentWater}</h4>
                        </td>
                    </tr>
                    <tr id='dash_card_th'>

                        <td id='dash_card_td'>
                            <h4>CO2</h4>
                            <h4>{props.farmData.co2ppm}</h4>
                        </td>
                        <td id='dash_card_td'>
                            <h4>마지막으로 물준 시간</h4>
                            <h4>{props.farmData.wateringTime}</h4>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
}

export default dashboard
