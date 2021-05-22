import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router from 'next/router';
import { Comment, Avatar,Form,Input,Button,message} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { postComment } from '../../../_redux/slices/comment';

function ReplyComment(props) {

    const dispatch = useDispatch();

    const [commentValue, setCommentValue] = useState("");

    const onChangeEditor = (event) =>{
        setCommentValue(event.target.value);
    }

    const onSubmitReply = () =>{
        setCommentValue('');
        
        const variable = {
            postId: props.postId,
            contents:commentValue,
            writer: props.user.data._id,
            responseTo: props.parentCommentId
        }

        dispatch(postComment(variable))
        .then(res=>{
            props.refereshFunction(res.payload);
            
            if(variable.responseTo){
                props.refreshOpenReply();
            }
        });
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
                    <Input.TextArea style={{width:'100%'}} onChange={onChangeEditor} value={commentValue}/>
                    <Button disabled={props.user.isLogin ? false : true} style={{widows:'20%',height:'52px',marginLeft:'5px'}} htmlType="submit" type="primary">
                        답글
                    </Button>
                </Form>
            }
            />
        </div>
    )
}

export default ReplyComment
