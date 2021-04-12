import React,{useState,createElement,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Tooltip,message } from 'antd';
import {LikeOutlined,LikeFilled,DislikeFilled,DislikeOutlined} from '@ant-design/icons'
import { upLike,unLike,upDislike,unDislike, getLikes, getDislikes } from '../../../_redux/_reducer/actionReducer';


function LikeDislike(props) {

    const dispatch = useDispatch();

    const [likes, setLikes] = useState(0);
    const [dislikes, setDisLikes] = useState(0);
    const [likeAction, setLikeAction] = useState(null);
    const [dislikeAction, setDislikeAction] = useState(null);
    
    let variable = {};
    if(props.postId){
        variable = {
            postId:props.postId,
            userId:props.userId
        }
    }else{
        variable={
            commentId:props.commentId,
            userId:props.userId
        }
    }
    
    useEffect(() => {
        dispatch(getLikes(variable))
        .then(res=>{
            if(res.payload.success){
                setLikes(res.payload.likes.length);
                res.payload.likes.map(like=>{
                    if(like.userId === props.userId){
                        setLikeAction('liked');
                    }
                })
            }
        });
        dispatch(getDislikes(variable))
        .then(res=>{
            if(res.payload.success){
                setDisLikes(res.payload.dislikes.length);
                res.payload.dislikes.map(dislike=>{
                    if(dislike.userId === props.userId){
                        setDislikeAction('disliked');
                    }
                })
            }
        })

    }, [])

    

    const onClickLike = () =>{
        if(!props.userId){
            return message.error('로그인을 해주세요.');
        }else{
            if(likeAction === null){
                dispatch(upLike(variable))
                .then(res=>{
                    if(res.payload.success){
                        setLikes(likes + 1);
                        setLikeAction('liked');
                        if(dislikeAction != null){
                            setDisLikes(dislikes - 1);
                            setDislikeAction(null);
                        }
                    }else{
                        message.error('좋아요를 실패했습니다.');
                    }
                });
            }else{
                dispatch(unLike(variable))
                .then(res=>{
                  if(res.payload.success){
                    setLikes(likes - 1);
                    setLikeAction(null);
                  }else{
                      message.error('좋아요를 해제하지 못했습니다.');
                  }
                });
            }
        }
    }
    const onClickDislike = () =>{
        if(!props.userId){
            message.error('로그인을 해주세요.');
        }else{
            if(dislikeAction === null){
                dispatch(upDislike(variable))
                .then(res=>{
                    if(res.payload.success){
                        setDisLikes(dislikes + 1);
                        setDislikeAction('disliked');
                        if(likeAction != null){
                            setLikes(likes - 1);
                            setLikeAction(null);
                        }
                    }
                });
            }else{
                dispatch(unDislike(variable))
                .then(res=>{
                    if(res.payload.success){
                        setDisLikes(dislikes - 1);
                        setDislikeAction(null);
                    }
                });
            }
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
