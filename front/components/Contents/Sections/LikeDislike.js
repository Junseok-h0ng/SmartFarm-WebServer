import React,{useState,createElement} from 'react';
import {Tooltip } from 'antd';
import {LikeOutlined,LikeFilled,DislikeFilled,DislikeOutlined} from '@ant-design/icons'


function LikeDislike() {

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


    return [
            <Tooltip key="comment-basic-like" title="Like">
                <span style={{margin:'0 5px'}} onClick={onClickLike}>
                    {createElement(likeAction === 'liked' ? LikeFilled : LikeOutlined)}
                    <span style={{margin:'0 5px'}}>{likes}</span>
                </span>
            </Tooltip>,
            <Tooltip key="comment-basic-dislike" title="Dislike">
                    <span onClick={onClickDislike}>
                    {createElement(dislikeAction === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span style={{margin:'0 5px'}}>{dislikes}</span>
                </span>
            </Tooltip> 
        ]
}


export default LikeDislike
