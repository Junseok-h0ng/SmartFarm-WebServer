import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Card,Avatar,Image} from 'antd';
import {  LikeOutlined, DislikeOutlined, MessageOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import { loadContents } from '../../_redux/_reducer/postReducer';

function CardForm() {

    const dispatch = useDispatch();
    const post = useSelector(state => state.post);



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
            {post.data && post.data.map((post,index)=>(
                <Card
                key={index}
                style={{marginTop:'10px'}}
                actions={[
                    <LikeOutlined type="like" key="like" />,
                    <DislikeOutlined type="dislike" key="dislike" /> ,
                    <MessageOutlined  type="message" key="message"/>,
                ]}
            >
                <Card.Meta
                    style={{paddingBottom:'20px'}}
                    avatar={<Avatar>{post.writer.name[0]}</Avatar>}
                    title={post.writer.name}
                    description={post.writer.email}
                />

                {post.contents}

                <Slider {...settings}>
                <div>
                <Image style={{height:'200px',objectFit:'contain'}} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                <div>
                    <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                </Slider>           
            </Card>
            ))}
            {/* <Card
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
                <Image style={{height:'200px',objectFit:'contain'}} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                <div>
                    <Image style={contentStyle} height={'100%'} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}  ></Image>
                </div>
                </Slider>           
            </Card> */}
        </div>
    )
}

export default CardForm
