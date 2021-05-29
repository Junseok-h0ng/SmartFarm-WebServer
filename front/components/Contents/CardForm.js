import React from 'react';
import { Card, Avatar, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LikeOutlined, DislikeOutlined, MessageOutlined } from '@ant-design/icons';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

function CardForm() {
    return (
        <div>
            <style jsx>{`    

                // #card_line {
                //     border: 2px solid #a0a0a0;
                //     border-radius: 10px;
                // }

                #card_pic {
                    width: 60%;
                    height: 220px;
                    background-image: url("image-url");
                    background-repeat: no-repeat // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
                    background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
                    background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다. 
                }
                
                #card {
                    border-radius: 18px;
                    background: white;
                    box-shadow: 5px 5px 15px rgba(0.1,0.1,0.1,0.1);
                    font-family: roboto;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    width: 99%;
                }
            
                #card_image {
                    border-top-left-radius: 15px;
                    border-top-right-radius: 15px;
                    background-size: cover;
                    padding-bottom: 2%;
                }
            
                #card_avatar {
                    padding-top: 4%;
                    padding-bottom: 2%;
                }
            
                #card_date {
                    padding-top: 1%;
                    padding-bottom: 2%;
                }
            
                #card_text {
                    padding-top: 1%;
                    padding-bottom: 2%;
                }
            
                #card_stats {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 3%;
                min-height: 28px;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                background: #5cb85c;
                }
            
                #card_stats #stat {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: white;
                padding:2%;
                }

            `}</style>


            <div id='card_line'>
                <Card style={{ marginTop: '5%' }}
                    actions={[
                        <LikeOutlined type="like" key="like" />,
                        <DislikeOutlined type="dislike" key="dislike" />,
                        <MessageOutlined type="message" key="message" />,
                    ]}
                >
                    <div>
                        <Avatar icon={<UserOutlined />} />&emsp;Jason<br />2000 / 10 / 10
                        <div>
                            <br />Hello, this is my planet
                            <Slider {...settings}>
                                <div align='center'>
                                    <br /><img src="https://cdn.pixabay.com/photo/2019/04/20/10/56/lettuce-seedling-4141458_960_720.jpg" id='card_pic' alt="sample"></img>
                                </div>
                                <div align='center'>
                                    <br /><img src="https://i.ibb.co/QXrwTWh/sample.jpg" id='card_pic' alt="sample"></img>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </Card>
            </div>

            <div id='card'>
                <div id='card_image'>
                    <Slider {...settings}>
                        <div align='center'>
                            <br /><img src="https://cdn.pixabay.com/photo/2019/04/20/10/56/lettuce-seedling-4141458_960_720.jpg" id='card_pic' alt="sample"></img>
                        </div>
                        <div align='center'>
                            <br /><img src="https://i.ibb.co/QXrwTWh/sample.jpg" id='card_pic' alt="sample"></img>
                        </div>
                    </Slider>
                </div>
                <div id='card_avatar'>
                    <Avatar icon={<UserOutlined />} /> Jason <br /> 2000 / 2 / 2
                </div>
                <div id='card_text'>
                    <p>This is my lover</p>
                </div>
                <div id='card_stats'>
                    <div>
                        <LikeOutlined type="like" key="like" />
                    </div>
                    <div>
                        <DislikeOutlined type="dislike" key="dislike" />
                    </div>
                    <div>
                        <MessageOutlined type="message" key="message" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardForm
