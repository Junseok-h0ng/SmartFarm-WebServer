import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Card,Avatar,Image} from 'antd';
import {  LikeOutlined, DislikeOutlined, MessageOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import { loadContents } from '../../_redux/_reducer/postReducer';
import ReplyForm from './Sections/ReplyForm';

function CardForm(props) {

    const dispatch = useDispatch();
    // const post = useSelector(state => state.post);
    const post = props.post;

    // useEffect(() => {
    //     dispatch(loadContents());
    // }, []);

    const [toggleReply, setToggleReply] = useState(false);

    const onChangetoggleReply = () =>{
        setToggleReply(!toggleReply)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div>
            <Card
            key={props.index}
            style={{marginTop:'10px'}}
            actions={[
                <LikeOutlined type="like" key="like" />,
                <DislikeOutlined type="dislike" key="dislike" /> ,
                <MessageOutlined onClick={onChangetoggleReply} type="message" key="message"/>
            ]}
        >
            <Card.Meta
                style={{paddingBottom:'20px'}}
                avatar={<Avatar>{post.writer.name[0]}</Avatar>}
                title={post.writer.name}
                description={post.writer.email}
            />
            {post.contents}
            {post.images &&
            <div style={{textAlign:'center'}}>
                <Slider {...settings}>
                {post.images.map((image)=>(
                    <div>
                    <Image style={{height:'200px',objectFit:'contain'}} height={'100%'} placeholder={image.name} src={"data:image/jpg;base64,"+image.src}></Image>
                    </div>
                ))}
            </Slider> 
            </div>
            }
            <br/>
            {toggleReply &&
            <div>
                <ReplyForm/>
            </div>
            }
            </Card>
        </div>
    )
}

export default CardForm