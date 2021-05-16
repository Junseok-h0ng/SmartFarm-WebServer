import React from 'react';
import {Card,Avatar,Checkbox} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {  LikeOutlined, DislikeOutlined, MessageOutlined } from '@ant-design/icons';


function CardForm() {
    return (
        <div>
            <style jsx>{`    

                #line {
                    border: 2.2px solid #a0a0a0;
                    // background-color: #59f80f;
                }

                #card_pic {
                    width: 88%;
                    height: auto;
                    background-image: url("image-url");
                    background-repeat: no-repeat // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
                    background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
                    background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다. 
                }
                
            `}</style>

            <div id= 'line'>
                <Card
                    actions={[
                        <LikeOutlined type="like" key="like" />,
                        <DislikeOutlined type="dislike" key="dislike" /> ,
                        <MessageOutlined  type="message" key="message"/>,
                    ]}
                >
                    <div>
                        <Avatar icon={<UserOutlined />}/>&emsp;Jason<br/>2000 / 10 / 10 
                        <div>
                            <br/>Hello, this is my planet               
                            <div align='center'>
                                <br/><img src="https://cdn.pixabay.com/photo/2019/04/20/10/56/lettuce-seedling-4141458_960_720.jpg" id='card_pic' alt="sample"></img>
                            </div>
                        </div> 
                    </div>
                </Card>
            </div>

            <div id= 'line'>
                <Card
                    actions={[
                        <LikeOutlined type="like" key="like" />,
                        <DislikeOutlined type="dislike" key="dislike" /> ,
                        <MessageOutlined  type="message" key="message"/>,
                    ]}
                >
                    <div>
                        <Avatar icon={<UserOutlined />}/>&emsp;Jason<br/>2000 / 10 / 10 
                        <div>
                            <br/>Hello, this is my planet               
                            <div align='center'>
                                <br/><img src="https://i.postimg.cc/rm8xvKy9/Kakao-Talk-20210516-144549737.jpg" id='card_pic' alt="sample"></img>
                            </div>
                        </div> 
                    </div>
                </Card>
            </div>
            
        </div>
    )
}

export default CardForm
