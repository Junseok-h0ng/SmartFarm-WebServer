import React,{useState} from 'react';
import Router from 'next/router';
import { Comment, Avatar,Form,Input,Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';

function ReplyComment(props) {

    const [value, setValue] = useState("");

    const onChangeEditor = (event) =>{
        setValue(event.target.value);
    }

    const onSubmitReply = () =>{
        console.log('submitReply');
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
                    <Input.TextArea style={{width:'100%'}} onClick={onClickReply} onChange={onChangeEditor} value={value}/>
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
