import React from 'react';
import {Card,Avatar,Image} from 'antd';
import {  LikeOutlined, DislikeOutlined, MessageOutlined } from '@ant-design/icons';
import Slider from 'react-slick';

function CardForm() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const contentStyle = {
        height:'200px',
        objectFit: 'contain'
      };
    
    return (
        <div>
            <Card
                style={{marginTop:'10px'}}
                actions={[
                    <LikeOutlined type="like" key="like" />,
                    <DislikeOutlined type="dislike" key="dislike" /> ,
                    <MessageOutlined  type="message" key="message"/>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>fasd</Avatar>}
                    title={'123'}
                    description={
                        'asdfas'
                    }
                />
                <Slider {...settings}>
                <div>
                <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                <div>
                    <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                </Slider>           
            </Card>
            <Card
                style={{marginTop:'10px'}}
                actions={[
                    <LikeOutlined type="like" key="like" />,
                    <DislikeOutlined type="dislike" key="dislike" /> ,
                    <MessageOutlined  type="message" key="message"/>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>fasd</Avatar>}
                    title={'123'}
                    description={
                        'asdfas'
                    }
                />
                <Slider {...settings}>
                <div>
                <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                <div>
                    <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                </Slider>           
            </Card>
            <Card
                style={{marginTop:'10px'}}
                actions={[
                    <LikeOutlined type="like" key="like" />,
                    <DislikeOutlined type="dislike" key="dislike" /> ,
                    <MessageOutlined  type="message" key="message"/>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>fasd</Avatar>}
                    title={'123'}
                    description={
                        'asdfas'
                    }
                />
                <Slider {...settings}>
                <div>
                <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                <div>
                    <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                </Slider>           
            </Card>
            <Card
                style={{marginTop:'10px'}}
                actions={[
                    <LikeOutlined type="like" key="like" />,
                    <DislikeOutlined type="dislike" key="dislike" /> ,
                    <MessageOutlined  type="message" key="message"/>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>fasd</Avatar>}
                    title={'123'}
                    description={
                        'asdfas'
                    }
                />
                <Slider {...settings}>
                <div>
                <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                <div>
                    <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                </Slider>           
            </Card>
        </div>
    )
}

export default CardForm
