import React from 'react';
import {Card,Avatar,Checkbox} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {  LikeOutlined, DislikeOutlined, MessageOutlined } from '@ant-design/icons';


function CardForm() {
    return (
        <div>
            <style jsx>{`    
        
        
            `}</style>

            <div>
                <Card
                    actions={[
                        <LikeOutlined type="like" key="like" />,
                        <DislikeOutlined type="dislike" key="dislike" /> ,
                        <MessageOutlined  type="message" key="message"/>,
                    ]}
                >
                    <div>
                        <Avatar icon={<UserOutlined />}/>&emsp;<a>Jason</a>
                        <div>
                            <br/>Hello, this is my planet               
                            <div align='center'>
                                <br/><img src="https://cdn.pixabay.com/photo/2019/04/20/10/56/lettuce-seedling-4141458_960_720.jpg"  width='99%' height='' alt="sample"></img>
                            </div>
                        </div> 

                        <LikeOutlined type="like" key="like" /> 7
                        &emsp;
                        <DislikeOutlined type="dislike" key="dislike" /> 2
                    </div>
                </Card>
            </div>
            
        </div>
    )
}

export default CardForm
