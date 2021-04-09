import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Card,Avatar,Image} from 'antd';
import {MessageOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import CommentForm from './Sections/CommentForm';
import LikeDislikeActions from './Sections/LikeDislike';
import Moment from 'react-moment';
import { getComment } from '../../_redux/_reducer/commentReducer';


function CardForm(props) {

    const dispatch = useDispatch();

    const [comments, setComments] = useState([]);
    
    const [commentLists, setCommentLists] = useState([]);


    useEffect(() => {
      dispatch(getComment({postId:props.post._id}))
      .then((response)=>{
        console.log(response.payload);
        setComments(response.payload);
      })
  }, [])
    
    // const commentLists = [
    //     {
    //     _id: '605da419717879464cc9dc0012354',
    //     author: {
    //         id:'605da419717879464cc9dc00',
    //         name:'junseok'
    //     },
    //     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //       content: (
    //         <p>
    //           We supply a series of design principles, practical patterns and high quality design
    //           resources (Sketch and Axure), to help people create their product prototypes beautifully and
    //           efficiently.
    //         </p>
    //       ),
    //       datetime:(
    //         <Moment format="YYYY/MM/DD">
    //         "2021-04-05"
    //         </Moment>
    //       ),
    //     },
    //     {
    //       _id: '605da419717879464cc94',
    //       responseTo:'605da419717879464cc9dc0012354',
    //       author: {
    //           id:'605da419717879464cc9dc00',
    //           name:'junseok'
    //       },
    //       avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //         content: (
    //           <p>
    //             We supply a series of design principles, practical patterns and high quality design
    //             resources (Sketch and Axure), to help people create their product prototypes beautifully and
    //             efficiently.
    //           </p>
    //         ),
    //         datetime:(
    //           <Moment format="YYYY/MM/DD">
    //           "2021-04-05"
    //           </Moment>
    //         ),
    //       },
    //     {
    //       _id: '605da419717879464cc9dc',
    //       author: {
    //           id:'605da419717879464cc9dc00',
    //           name:'junseok'
    //       },
    //       avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //         content: (
    //           <p>
    //             We supply a series of design principles, practical patterns and high quality design
    //             resources (Sketch and Axure), to help people create their product prototypes beautifully and
    //             efficiently.
    //           </p>
    //         ),
    //         datetime:(
    //           <Moment format="YYYY/MM/DD">
    //           "2021-04-05"
    //           </Moment>
    //         ),
    //       },
    //   ]



    const refereshFunction = (newComment) =>{
        setComments(comments.concat(newComment));
      }

    const post = props.post;

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
            style={{marginTop:'10px'}}
            title={<Moment format="YYYY/MM/DD">{post.createdAt}</Moment>}
            extra={[     
                <LikeDislikeActions/>
                ]}
            actions={[
                <MessageOutlined onClick={onChangetoggleReply} type="message" key="message"/>,
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
                <CommentForm refereshFunction={refereshFunction} commentLists={comments} postId={post._id}/>
            </div>
            }
            </Card>
        </div>
    )
}

export default CardForm