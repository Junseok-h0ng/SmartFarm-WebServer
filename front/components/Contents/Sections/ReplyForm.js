import React,{useState,createElement} from 'react';
import { Comment, Avatar,Tooltip,Icon } from 'antd';
import {LikeOutlined,LikeFilled,DislikeFilled,DislikeOutlined} from '@ant-design/icons'
import LikeDislikeActions from './LikeDislike';


function ReplyForm() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDisLikes] = useState(0);
    const [likeAction, setLikeAction] = useState(null);
    const [dislikeAction, setDislikeAction] = useState(null);
    
    const onClickLike = () =>{
        if(likeAction === null){
            setLikes(likes + 1);
            setLikeAction('liked');
            if(dislikeAction != null){
                setDisLikes(dislikes - 1);
                setDislikeAction(null);
            }
        }else{
            setLikes(likes - 1);
            setLikeAction(null);
        }
    }
    const onClickDislike = () =>{
        if(dislikeAction === null){
            setDisLikes(dislikes + 1);
            setDislikeAction('disliked');
            if(likeAction != null){
                setLikes(likes - 1);
                setLikeAction(null);
            }
        }else{
            setDisLikes(dislikes - 1);
            setDislikeAction(null);
        }
    }

    const actions = 
            [<Tooltip key="comment-basic-like" title="Like">
                <span onClick={onClickLike}>
                {createElement(likeAction === 'liked' ? LikeFilled : LikeOutlined)}
                    <span style={{margin:'0 5px'}}>{likes}</span>
                </span>
            </Tooltip>,
            <Tooltip key="comment-basic-like" title="Like">
                <span onClick={onClickDislike}>
                {createElement(dislikeAction === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span style={{margin:'0 5px'}}>{dislikes}</span>
                </span>
            </Tooltip>    
        ]
    return (
        <div>
            <Comment
            actions={[
                <LikeDislikeActions/>,
                <span key="comment-nested-reply-to">Reply to</span>
                ]}
            author={<a>Han Solo</a>}
            avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
            }
            content={
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure).
            </p>
            }
            >
            </Comment>
        </div>
    )
}

export default ReplyForm
