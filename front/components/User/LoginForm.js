import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import Router from 'next/router';
import {Form,Input,Button, message} from 'antd';
import { logIn } from '../../_redux/_reducer/userReducer';

function LoginForm() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitLogin = () =>{
        const data = {
            email,
            password
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
        <Form style={{padding:'10px',margin:'0 autox'}} onFinish={onSubmitLogin}>
            <div>
                <label htmlFor="email">이메일</label>
                <br/>
                <Input name="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <br/>
            <div>
                <label htmlFor="password">비밀번호</label>
                <br/>
                <Input name="password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <br/>
            <br/>

            <div align = 'center'>
            <style jsx>{`    
                div {
                    width: 50%
                    border: 1px;
                    border-radius: 2em;
                }
                
                #naver {
                    background-color:#00bf18;
                }
                #kakao {
                    background-color:#fae301;
                }
                #google {
                    background-color:#f4f4f4;
                }
                #font_White {
                    color:white;
                }
                #font_Black {
                    color:black;
                }
            `}</style>
            <div id = 'naver'> 
                <a href="#" class="naver-login">
                    <img src="https://img2.quasarzone.com/homepage/real/themes/quasarzone/images/common/sns_login_icon1.gif" alt="네이버 로그인"></img>
                    <span id = 'font_White'>&emsp;네이버 로그인</span>
                </a>  
            </div>
            <br/>
            <div id = 'kakao'>
                <a href="#" class="kakao-login">
                        <img src="https://img2.quasarzone.com/homepage/real/themes/quasarzone/images/common/sns_login_icon2.gif" alt="카카오톡 로그인"></img>
                        <span id = 'font_Black'>&emsp;카카오톡 로그인</span>
                </a>
            </div>
            <br/>                 
            <div id = 'google'>
                <a href="#">
                        <img src="https://img2.quasarzone.com/homepage/real/themes/quasarzone/images/common/sns_login_icon4.gif" alt="구글 로그인"></img>
                        <span id = 'font_Black'>&emsp;구글 로그인</span>
                    </a>
            </div>
            </div>

            <div style={{marginTop:'10px'}} align = 'right'>
                <Button style={{marginRight:'10px'}} type="primary" htmlType="submit" loading={false}>로그인</Button>
            </div>
        </Form>

    )
}

export default LoginForm
