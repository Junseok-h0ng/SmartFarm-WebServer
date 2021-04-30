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

import { Bar, Line } from 'react-chartjs-2'

function CardForm(props) {

    const post = props.post;

    const dispatch = useDispatch();

    const [comments, setComments] = useState([]);
    const [toggleReply, setToggleReply] = useState(false);

    const user = useSelector(state => state.user);
    const userId = user.data ? user.data._id : '';
    useEffect(() => {
      dispatch(getComment({postId:props.post._id}))
      .then((response)=>{
        setComments(response.payload);
      });
  }, []);

    const refereshFunction = (newComment) =>{
        setComments(comments.concat(newComment));
      }

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
                <div>
                <Line   
            data={{
                labels: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
                datasets:[
                    {
                        label : "온도",
                        data: [21,24,31,40,32,23,30,21,24,31,40,32,23,30,21,24,31,40,32,23,30,21,24,31,40,32,23,30],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(255, 201, 14, 1)",
	                backgroundColor: "rgba(255, 201, 14, 0.5)",
                    },
                    {
                        label : "습도",
                        data: [24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24, 26,28,34,32,21,30,24, 26,28,34,32,21,30],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(25, 201, 14, 13)",
	                backgroundColor: "rgba(25, 201, 14, 0.5)",
                    },
                    {
                        label : "물양",
                        data: [20, 17,30,20,10,5,20, 17,30,20,10,5,20, 17,30,20,10,5,20, 17,30,20,10,5,30], 
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(75, 197, 220, 1",
	                backgroundColor: "rgba(75, 197, 220, 1)",
                    },
                    {
                        label : "밝기",
                        data: [33,42,40,54,23,12,23,33,42,40,54,23,12,23,33,42,40,54,23,12,23,33,42,40,54,23,12,23],
                        borderColor: [
                            "rgba(255, 201, 14, 1)",
                        ],
                        borderColor: "rgba(144, 144, 114, 1)",
	                backgroundColor: "rgba(2144, 144, 114, 1)",
                    },
                ], 
            }}
            width={300}
            height={200}
            style={{height:'200px',objectFit:'contain'}}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '°C'
                        }
                    }]
                }            
            }}
        />
                </div>
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