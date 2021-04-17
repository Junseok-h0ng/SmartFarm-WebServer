import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import Router from 'next/router';
import {Form,Input,Button, message} from 'antd';
import { googleAuth, logIn } from '../../_redux/slices/user';
import Link from 'next/link';
import config from '../../config/config';


function LoginForm() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitLogin = () =>{
        const data = {
            email,
            password,
            usertype:'db'
        }
       dispatch(logIn(data))
       .then(res=>{
           if(res.type === 'LOG_IN/fulfilled'){
               Router.push('/');
           }else{
               message.error('로그인에 실패했습니다.')
           }
       });
    }
    const onChangeEmail = (event) =>{
        setEmail(event.target.value);
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    return (
        <>
            <Form style={{padding:'10px',margin:'0 autox'}} onFinish={onSubmitLogin}>
                <div>
                    <label htmlFor="email">이메일</label>
                    <br/>
                    <Input name="email" value={email} onChange={onChangeEmail} required/>
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <br/>
                    <Input name="password" type="password" value={password} onChange={onChangePassword} required/>
                </div>
                <div style={{marginTop:'10px'}}>
                    <Button style={{marginRight:'10px'}} type="primary" htmlType="submit" loading={false}>로그인</Button>
                </div>
            </Form>
            <Button><Link href={"http://api.eouleuda.kro.kr/api/auth/google"}><a>Google</a></Link></Button>
            <Button><Link href={"http://localhost:3000/api/auth/naver"}><a>Naver</a></Link></Button>
            <Button><Link href={"http://localhost:3000/api/auth/kakao"}><a>Kakao</a></Link></Button>
        </>
            
        
    )
}

export default LoginForm
