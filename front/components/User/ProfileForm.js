import React from 'react';
import {Avatar,Button,Card} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';

function ProfileForm() {
    const user = useSelector(state => state.user);
    return (
        <div>
            <style jsx>{`    
                #right {
                    float: right;
                    margin-right: 20px;
                }

                #left {
                    margin-left: 15px;
                }

                th, td {
                    text-align: center;
                    vertical-align: top
                }

                #flex-container { 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 18vh;
                }

                #line {
                    border: 2.2px solid #a0a0a0;
                    border-radius: 1.2em;
                    // background-color: #59f80f;
                }

                #profile_btn {
                    color: #a0a0a0;
                    padding: 5px;
                    border: 2px solid #a0a0a7;
                    background-color: rgba(0,0,0,0); 
                    border-radius: 4px;
                }

            `}</style>
            {/* <Card>
                <Button style={{float:'right'}}>제어창</Button>
                <Card.Meta
                    avatar={<Avatar>{user.data.name[0]}</Avatar>}        
                    title={user.data.name}
                    description={user.data.email}
                />
            </Card> */}
            <div id='line'>
            <br/>    
                <div>                 
                    <div id='flex-container'>
                        <table>
                            <tr>
                                <th><Avatar size={99} icon={<UserOutlined />} /></th>
                            </tr>
                            <tr>
                                <td><h4>Jason</h4></td>
                            </tr>
                            <tr>
                                <td><h5>Jason123@naver.com</h5></td>
                            </tr>
                            <br/>
                            <tr>
                                <button id='profile_btn'>
                                    <span>유저 프로필</span>
                                </button>
                                &ensp;
                                <button id='profile_btn'>
                                    <span href="/user">제어창</span>
                                </button> 
                            </tr>
                        </table>        
                </div>
                <br/>
            </div>

        </div>
        </div>
    )
}

export default ProfileForm
