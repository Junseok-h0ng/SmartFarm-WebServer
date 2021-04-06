import React from 'react';
import { Comment, Avatar } from 'antd';

function ReplyForm() {
    return (
        <div>
            <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
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
            12341245
            </Comment>
        </div>
    )
}

export default ReplyForm
