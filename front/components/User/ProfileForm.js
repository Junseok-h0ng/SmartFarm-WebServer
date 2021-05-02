import React from 'react';
import {Avatar,Button,Card} from 'antd';
import {useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'


function ProfileForm() {
    const user = useSelector(state => state.user);
    return (
        <div>
            {/* <Card>
                <Button style={{float:'right'}}>제어창</Button>
                <Card.Meta
                    avatar={<Avatar>{user.data.name[0]}</Avatar>}        
                    title={user.data.name}
                    description={user.data.email}
                />
            </Card> */}
            <Card>
            <style jsx>{`    
                #right {
                    float: right;
                    margin-left: 10px;
                }

                table {
                    width: 97%;
                    text-align: center;
                    border-radius: 2em;
                    background-color: #F1F1F1;
                    margin-left: auto;
                    margin-right: auto;
                }
                th, td {
                    border: 4px solid #FFFFFF;
                }   
            `}</style>
            <div>
                <div id="right">
                <Button>
                    <span>유저 프로필</span>
                </Button>
                &ensp;
                <Button>
                    <a href="/user">제어창</a>
                </Button> 
                </div>
                <div>
                    <span>프로필 부분</span>
                </div>
            </div>
            <br/><br/>
            <div align='center'>             
                <table>
                <thead>
                <tr align='center' >
                    <th>작물 상태</th>
                    <th>현재온도</th>
                    <th>현재습도</th>
                    <th>현재밝기</th>
                </tr>
                </thead>
                <tbody>
                <tr align='center'>
                    <td><img src="https://i.ibb.co/QXrwTWh/sample.jpg" width="69" alt="sample"></img></td>
                    <td margin='0'>28°C</td>
                    <td>35°C</td>
                    <td>200</td>
                </tr>
                </tbody> 
                </table>        
            </div>

            </Card>
        </div>
    )
}

export default ProfileForm
