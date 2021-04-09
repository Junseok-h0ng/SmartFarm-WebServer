import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router from 'next/router';
import { Comment, Avatar,Form,Input,Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { postComment } from '../../../_redux/_reducer/commentReducer';

function ReplyComment(props) {
    console.log(props);
    
    const dispatch = useDispatch();

    const [commentValue, setcommentValue] = useState("");

    const onChangeEditor = (event) =>{
        setcommentValue(event.target.value);
    }

    const onSubmitReply = () =>{
        const variable = {
            postId: props.postId,
            contents:commentValue,
            author: props.user.data._id,
            responseTo: props.parentCommentId
        }
        console.log(variable)
        dispatch(postComment(variable));

    }

    const onClickReply = () =>{
        if(!props.user.isLogin){
            Router.push('/login');
        }
    }

    return (
        <div>
            <Comment
            author={<a>{props.user.isLogin ? props.user.data.name : '' }</a>}
            avatar={
            <Avatar>{props.user.isLogin ? props.user.data.name[0] : <UserOutlined /> }</Avatar>
            }
            content={
                <Form onFinish={onSubmitReply} style={{display:'flex'}}>
                    <Input.TextArea style={{width:'100%'}} onClick={onClickReply} onChange={onChangeEditor} value={commentValue}/>
                    <Button style={{widows:'20%',height:'52px',marginLeft:'5px'}} htmlType="submit" type="primary">
                        답글
                    </Button>
                </Form>
            }
            />
        </div>
    )
}

export default ReplyComment
