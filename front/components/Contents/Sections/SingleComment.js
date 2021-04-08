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
                    {props.comment.content}
                </p>
                }
            >
            </Comment>
            {openReply &&
                <ReplyComment user={props.user} refereshFunction={props.refereshFunction}/>
            }
        </div>
    )
}

export default SingleComment
