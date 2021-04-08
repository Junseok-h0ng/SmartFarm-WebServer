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
            {openReply &&
                <ReplyComment user={props.user}/>
            }
        </div>
    )
}

export default SingleComment
