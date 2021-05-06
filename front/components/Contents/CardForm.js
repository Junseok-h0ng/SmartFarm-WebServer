import React from 'react';
import {Card,Avatar,Checkbox} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {  LikeOutlined, DislikeOutlined, MessageOutlined } from '@ant-design/icons';


function CardForm() {
    return (
        <div>
            <style jsx>{`    
                #line {
                    border: 1.5px solid #a0a0a0;
                    // border-radius: 1.1em;
                    // background-color: #59f80f;
                }
            `}</style>

            <div id='line'>
                <Card
                    actions={[
                        <LikeOutlined type="like" key="like" />,
                        <DislikeOutlined type="dislike" key="dislike" /> ,
                        <MessageOutlined  type="message" key="message"/>,
                    ]}
                >
                    <div>
                        <Avatar icon={<UserOutlined />}/>
                        <div>Jason</div>
                        <br/>
                        <div>
                            <div>
                                hello, this is my planet
                            </div>
                            <br/>
                            <div align='center'>
                                <img src="https://i.ibb.co/QXrwTWh/sample.jpg"  width='77%' height='180px' alt="sample"></img>
                            </div>      
                        </div> 
                    </div>
                </Card>
            </div>
            
        </div>
    )
}

export default CardForm
