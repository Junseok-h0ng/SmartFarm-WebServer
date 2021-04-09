import React,{useState} from 'react'
import { Comment, Avatar } from 'antd';
import ReplyComment from './ReplyComment';
import LikeDislikeActions from './LikeDislike';

function SingleComment(props) {
    const [openReply, setOpenReply] = useState(false)
    const onClickReply = () =>{
        setOpenReply(!openReply);
    }
    return (
        <div>
            <Comment
                actions={[<LikeDislikeActions/>,<span key="comment-nested-reply-to" onClick={onClickReply}>답글</span>]}
                author={<a>{props.comment.author.name}</a>}
                avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
                }
                content={
                
                <p>
                    {props.comment.responseTo &&
                        <a>@{props.parentAuthor} </a>
                    }
                    {props.comment.contents}
                </p>
                }
            >
            </Comment>
            {openReply &&
                <ReplyComment  postId={props.postId} user={props.user} refereshFunction={props.refereshFunction} parentCommentId={props.comment._id}/>
            }
        </div>
    )
}

export default SingleComment
