import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Card,Avatar,Image,Button} from 'antd';
import {MessageOutlined,DeleteOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import CommentForm from './Sections/CommentForm';
import LikeDislikeActions from './Sections/LikeDislike';
import Moment from 'react-moment';
import { getComment } from '../../_redux/slices/comment';
import { deleteUserContent } from '../../_redux/slices/post';
import LineCharts from '../commons/Charts/LineCharts';



function CardForm(props) {

    const post = props.post;

    const dispatch = useDispatch();

    const [comments, setComments] = useState([]);
    const [toggleReply, setToggleReply] = useState(false);

    const user = useSelector(state => state.user);
    const userId = user.data ? user.data._id : '';
    useEffect(() => {
      loadComment();
  }, []);

    const refereshFunction = (newComment) =>{
        setComments(comments.concat(newComment));
    }

    const loadComment = () =>{
        dispatch(getComment({postId:props.post._id}))
        .then((response)=>{
        setComments(response.payload);
      });
    }

    const onChangetoggleReply = () =>{
        setToggleReply(!toggleReply)
        loadComment();
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const onClickDelete = () =>{
        dispatch(deleteUserContent({postId:props.post._id}))
        .then((res)=>{
            if(res){
                props.delete();
            }
        })
    }

      
    return (
        <div>
            <Card
            key={props.key}
            style={{marginTop:'10px'}}
            title={[<Moment format="YYYY/MM/DD">{post.createdAt}</Moment>]}
            extra={<LikeDislikeActions postId={post._id} userId={userId}/>}
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
                {post.charts &&
                    <div>
                        <LineCharts/>
                    </div>
                }

                </Slider> 
            </div>
            }
            <br/>
            {props.delete &&
                <DeleteOutlined style={{float:'right'}} onClick={onClickDelete}/>
            }
            {toggleReply &&
            <div>
                <CommentForm refereshFunction={refereshFunction} commentLists={comments} postId={post._id} userId={userId}/>
            </div>
            }
            </Card>
        </div>
    )
}

export default CardForm