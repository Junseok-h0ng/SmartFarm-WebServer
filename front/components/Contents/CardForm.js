import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Card,Avatar,Image,Button, message} from 'antd';
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
            console.log(res);
            if(res.payload.success){
                props.deletePostCard();
            }
        })
    }

      
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
                    text-align: center;
                }
            
                #card_stats {
                display: grid;
                width:100%;
                height:100%;
                background: #5cb85c;
                } 
            `}</style>
        <div>
            <Card
            key={props.key}
            style={{marginTop:'10px',borderRadius:'18px'}}
        >
            <Card.Meta
                style={{paddingBottom:'20px',textAlign:'center'}}
                title={[
                        <Avatar style={{marginRight:'10px'}}>{post.writer.name[0]}</Avatar>,
                        post.writer.name,
                        <span style={{position: 'absolute', top: 20, right: 20 }}>
                            <LikeDislikeActions postId={post._id} userId={userId}/>
                        </span>
                        ]}
            />

            {post.images &&
            <div style={{textAlign:'center',marginBottom:'40px'}}>
                <Slider {...settings}>
                {post.images.map((image)=>(
                    <div>
                        <Image style={{height:'200px',objectFit:'contain'}} placeholder={image.name} src={"data:image/jpg;base64,"+image.src}></Image>
                    </div>
                ))}
                {post.charts &&
                    <div>
                        <LineCharts farmData={post.charts.data}/>
                    </div>
                }

                </Slider> 
            </div>
            }
            <div id='card_text'>
                {post.contents}
            </div>
            <br/>
            {props.deletePostCard &&
                <span><DeleteOutlined style={{float:'right',marginLeft:'10px'}} onClick={onClickDelete}/></span>
            }
            {<>

                <h4>
                    <Moment style={{float:'right'}} format="YYYY/MM/DD">{post.createdAt}</Moment>
                    <span style={{float:'center'}}>
                        <MessageOutlined onClick={onChangetoggleReply} type="message" key="message"/>  
                    </span>
                </h4>
                
            </>}
            
            {toggleReply &&
            <div>
                <CommentForm refereshFunction={refereshFunction} commentLists={comments} postId={post._id} userId={userId}/>
            </div>
            }
            </Card>
        </div>
        </div>
    )
}

export default CardForm