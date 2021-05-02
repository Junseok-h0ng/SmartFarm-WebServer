import React,{useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { Comment, Avatar } from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import ReplyComment from './ReplyComment';
import LikeDislikeActions from './LikeDislike';
import { deleteComment } from '../../../_redux/slices/comment';


function SingleComment(props) {

    const dispatch = useDispatch();

    const [openReply, setOpenReply] = useState(false);
    //댓글의 작성자 여부
    const [commentWriter, setCommentWriter] = useState(false);

    const [comment, setComment] = useState({...props.comment})
    
    useEffect(() => {

        //댓글의 작성자가 맞는지 체크
        if(props.userId === props.comment.writer._id){
            setCommentWriter(true);
        }
    }, []);

    const onClickReply = () =>{
        setOpenReply(!openReply);
    }
    
    const onClickDelete = () =>{
        dispatch(deleteComment({commentId:props.comment._id}))
        .then(res=>{
            console.log(res);
            setComment(res.payload);
        });
    }

    console.log(comment);

    return (
        <div>
            <Comment
                actions={[
                <LikeDislikeActions commentId={comment._id} userId={props.userId}/>,
                <span key="comment-nested-reply-to" onClick={onClickReply}>답글</span>,
                <span>{commentWriter && <DeleteOutlined onClick={onClickDelete}/>}</span>
                ]}
                author={<a>{comment.writer.name}</a>}
                avatar={
                <Avatar>{comment.writer.name[0]}</Avatar>
                }
                content={
                
                <p>
                    {comment.responseTo &&
                        <a>@{props.parentAuthor} </a>
                    }
                    {comment.contents}
                </p>
                }
            >
            </Comment>
            {openReply &&
                <ReplyComment  postId={props.postId} user={props.user} refereshFunction={props.refereshFunction} parentCommentId={comment._id} refreshOpenReply={onClickReply}/>
            }
        </div>
    )
}

export default SingleComment
